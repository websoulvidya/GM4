import React,{useState} from 'react';
import axios from 'axios';
import Homeheader from '../../user/components/homeheader/Homeheader';
import Footer from '../../user/components/footer/Footer';
import './Resetpage.css'
import { useForm } from 'react-hook-form';



function Resetpage() {
  const { register, handleSubmit, watch, formState: { errors }, reset} = useForm();


  
    //change password form validation

    const [org, setOrg] = useState({
      password:"",
      cpassword:""
    });
    const [errField, setErrField] = useState({
            passwordErr: "",
            confirmErr: ""
    })
    const handleChange = (event) => {
        const { name, value } = event.target;
        setOrg({
            ...org,
            [name]: value
        })
    }
    const handleRegister = async (event) => {
      event.preventDefault();
      if (validForm()) {
          let url = 'https://gm4-server.herokuapp.com/api/signup';
          let options = {
              method: 'POST',
              url: url,
              headers: {
              },
              data:{
                password:org.password,
                newPassword:org.cpassword
                
              }
          }
          try {
              let response = await axios(options)
              console.log(response.data)
              alert("User sign up successfully")

          } catch (error) {
              console.log(error)
              alert("Please enter correct values")
          }
      } else {
          console.log("invalid form")
          alert("Please enter correct values")
      }
  }
  const validForm = () => {
      var formIsValid = true
      const passwordRegex = RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
      setErrField({
          passwordErr: "",
          confirmErr: ""
      })
      
      
      if (org.password == "") {
          formIsValid = false;
          setErrField(pre => ({
              ...pre, passwordErr: "Please enter password **"
          }))
      }
      if (org.password !== "" && !passwordRegex.test(org.password))
      {
          formIsValid = false;
          setErrField(pre => ({
              ...pre, passwordErr: "Please enter Password in correct format **"
          }))
      }

      if (org.cpassword == "") {
          formIsValid = false;
          setErrField(pre => ({
              ...pre, confirmErr: "Please enter con-password **"
          }))
      }
      if(org.cpassword!=='' &&  org.password !== org.cpassword){
        formIsValid = false;
        setErrField(pre => ({
          ...pre, confirmErr: "Password doesn't matches **"
      }))
      }
      return formIsValid;
  }
  console.log(errField)
  

  return (
      <div className='reset-page'>

        <Homeheader/>
          <div class="container-reset"> 

          {/* form section  */}
              <form id="contact"onSubmit={handleRegister}>
                
                <fieldset id='field-style'>
                  <input placeholder="New Password" type="password" tabindex="1"  name='password'  
                  value={org.password} 
                  onChange={handleChange}
                   autoComplete='off'/>  
                 {errField.passwordErr.length > 0 && <span className='errormsgleft4'>{errField.passwordErr}</span>} 
                  {/* {errors.password && (<span className='errormsgleft4'>{errors.password.message}</span>)} */}
                </fieldset>
                <fieldset id='field-style'>
                  <input placeholder="Confirm Password" type="password" tabindex="1"  name='cpassword'  
                  value={org.cpassword} 
                  onChange={handleChange}
                  autoComplete='off'/>  
                  {errField.confirmErr.length > 0 && <span className='errormsgleft5'>{errField.confirmErr}</span>} 
                  {/* {errors.password && (<span className='errormsgleft5'>{errors.password.message}</span>)} */}
                </fieldset>
                
                <fieldset id='field-style'>
                  <button name="submit" type="submit" id="contact-submit" data-submit="...Sending">Reset Password</button>
                </fieldset>
              </form>
          </div>
        <Footer />
      </div>
  )
  
}

export default Resetpage;
