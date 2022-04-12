import React,{useState} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'
import Userheader from '../../../components/userheader/Userheader';
import Footer from '../../../components/footer/Footer';
import './Changepass.css'
import { TextField } from '@mui/material';
import { Button } from '@mui/material';
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'
import { color, style } from '@mui/system';
import { red } from '@mui/material/colors';
import { Message } from '@mui/icons-material';
import { Modal } from '@mui/material';

import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';

import {useLayoutEffect} from 'react';

{/*Change password form validation function */}

function Changepass() {

  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  
});

const navigate = useNavigate();

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


  const style = {
    position: 'relative',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    height:150,
    bgcolor: 'background.paper',

    boxShadow: 24,
    p:5,
    
  
  };

  // const formSchema = Yup.object({

  //   oldpass:Yup.string()
  //   .required('**Old password required')
  //   .min(8, 'Password must have atleast 8 characters'),

   
  //   password: Yup
  //     .string()
  //     .required('**New Password is required')
  //     .min(8, 'Password must have atleast 8 characters'),

  //   passwordConfirm: Yup
  //     .string()
  //     .required('**Confirm password required')
  //     .oneOf([Yup.ref('password'),null], '**Password mismatch' ),
  // })

  // const validationOpt = { resolver: yupResolver(formSchema) }

  // const { register, handleSubmit, formState } = useForm(validationOpt)

  // const { errors } = formState

  // function onFormSubmit(data) {
  //   console.log(JSON.stringify(data, null, 8))
  //   handleOpen();
  //   return false
  // }

  //API integration code
  const [pass, setPass] = useState({
    email:"",
    oldPassword:"",
    newPassword:"",
  });
  // console.log(pass)
  const [passErrField, setPassErrField] = useState({
          emailErr:"",
          oldpasswordErr: "",
          newpasswordErr:"",
  })
  const handlePassChange = (event) => {
      const { name, value } = event.target;
      setPass({
          ...pass,
          [name]: value
      })
  }

  const handleChangepass = async (e) => {
    e.preventDefault();
    let id= await localStorage.getItem('id')
    let emailid= await localStorage.getItem('email')

    if (validPassForm()) {
// const userId = localStorage.getItem("id");
// console.log(userId)
        let url = `https://gm4-server.herokuapp.com/api/user/password/change/${id}`;
        let options = {
            method: 'POST',
            url: url,
            headers: {
              'Content-Type':"Application/json",
              'Authorization':"Bearer "+localStorage.getItem("token")
            },
            data:{
              email:pass.email,
              password:pass.oldPassword,
              newPassword:pass.newPassword
            }
            
        }
          
        try {
            let response = await axios(options)
            alert(response.data.message)
            setTimeout(() => {
              navigate('/userhome')
            },200)
        } catch (error) {

            // let res = await axios(options)
            // console.log(error)
            // console.log(error.message)
            // alert("Please enter correct values")
            alert(error.message)
        }
      
    } 
    else {
        console.log("invalid form")
    }
    }


    const validPassForm = () => {
      var formIsValid = true
      const validEmailRegex = RegExp(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
      const passwordRegex = RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
      setPassErrField({
          emailErr:"",
          oldpasswordErr: "",
          newpasswordErr: ""
      })

      if (pass.email == "") {
          formIsValid = false;
          setPassErrField(pre => ({
              ...pre, emailErr: "Please enter email **"
          }))
      }
      if (pass.email !== "" && !validEmailRegex.test(pass.email))
        {
            formIsValid = false;
            setPassErrField(pre => ({
                ...pre, emailErr: "Please enter Email in correct format **"
            }))
        }

      if (pass.oldPassword == "") {
          formIsValid = false;
          setPassErrField(pre => ({
              ...pre, oldpasswordErr: "Please enter password **"
          }))
      }
      if (pass.oldPassword !== "" && !passwordRegex.test(pass.oldPassword))
        {
            formIsValid = false;
            setPassErrField(pre => ({
                ...pre, oldpasswordErr: "Please enter Password in correct format **"
            }))
        }

      if (pass.newPassword == "") {
          formIsValid = false;
          setPassErrField(pre => ({
              ...pre, newpasswordErr: "Please enter new password **"
          }))
          
      }
      if (pass.newPassword !== "" && !passwordRegex.test(pass.newPassword))
        {
            formIsValid = false;
            setPassErrField(pre => ({
                ...pre, newpasswordErr: "Please enter Password in correct format **"
            }))
        }
      
      return formIsValid;
    }
    console.log(passErrField)



  return (
    <div className='Changepass' >
      <Userheader/>

    {/*User change password header */}

      <div className='user-changepass-header '>
        <h1>Change Password</h1>
      </div>

    {/*User change password form */}

      <form className='ChangepassForm' onSubmit={handleChangepass}>
          <fieldset class="uk-fieldset">

          <div class="uk-margin">
          <input class="uk-input" placeholder="Email Address" type="email" tabindex="1" name='email' 
                value={pass.email} 
                onChange={handlePassChange}
                  autoComplete='off'/>   
                {passErrField.emailErr.length > 0 && <span style={{color:'red' ,float:'left', fontSize:'12px',fontWeight:'700'}}>
                  {passErrField.emailErr}</span>}
          </div>
          
        
            <div class="uk-margin">
              {/* <input class="uk-input {`form-control ${
                    errors.password ? 'is-invalid' : ''}`} "  name='oldPassword' value={changePassword.oldPassword} onchange={handleChange} type="password" placeholder="Old Password" required="" minLength={8}
              {...register('oldpass')} /> */}

              {/* <input class="uk-input 
              name='oldPassword' value={changePassword.oldPassword} onchange={handleChange} 
              type="password" placeholder="Old Password" /> */}

              <input class="uk-input" placeholder="Current Password" type="password" tabindex="1"  
              name='oldPassword' 
                value={pass.oldPassword} 
                onChange={handlePassChange}
                  autoComplete='off'/>  
                {passErrField.oldpasswordErr.length > 0 && <span style={{color:'red' ,float:'left', fontSize:'12px',fontWeight:'700'}}>
                  {passErrField.oldpasswordErr}</span>}
            </div>

            {/* <div className="invalid-feedback" >
                {errors.oldpass?.message} 
                
            </div> */}

            {/* <div class="uk-margin">

                <input class="uk-input  {`form-control ${
                      errors.password ? 'is-invalid' : ''}`} "
                    name="newPassword" type="password" value={changePassword.newPassword} onChange={handleChange} 
                    placeholder="New Password"  />
            </div> */}

            {/* <div className="invalid-feedback" >
                  {errors.password?.message} 
            </div> */}

            <div class="uk-margin">
                {/* <input class="uk-input  {`form-control ${
                      errors.passwordConfirm ? 'is-invalid' : ''
                    }`} "   name="confirmPassword" type="password" value={changePassword.confirmPassword} 
                    onchange={handleChange} placeholder="Confirm password"  />
                <div className="invalid-feedback" >
                    {errors.passwordConfirm?.message} 
                      
                </div> */}
                <input class="uk-input" placeholder="New Password" type="password" tabindex="1"  
                name='newPassword' 
                value={pass.newPassword} 
                onChange={handlePassChange}
                  autoComplete='off'/>  
                {passErrField.newpasswordErr.length > 0 && <span style={{color:'red' ,float:'left', fontSize:'12px',fontWeight:'700'}}>
                  {passErrField.newpasswordErr}</span>}

            </div>
            
              <div class="uk-margin">
                <button class="ChangepassButton" >Save</button> 
              </div>
          </fieldset>

      {/* <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="usercp-modal-title"
                aria-describedby="usercp-modal-description">
                <Box sx={style} className='usercp-modal_box'>
                 
                  <Typography id="usercp-modal-description" className='rules_modal'  >
​
                    <h3>Password changed</h3>
                   
                    <span>Your password changed Successfully!</span>
                    <br/>
                    
                  </Typography>
                  <div className='user-changepass-button_area'>
                  <button onClick={handleClose} className='usercp-modal_close'>Ok</button>
                  
                  </div>
                  
                </Box>
              </Modal> */}

      
      </form>

  

      

      <Footer />
    </div>
  )
}

export default Changepass
