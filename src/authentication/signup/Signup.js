import React,{useState} from 'react';
import axios from 'axios';
import Homeheader from '../../user/components/homeheader/Homeheader';
import Footer from '../../user/components/footer/Footer';
import './Signup.css';
import { styled } from '@mui/system';
import TabsUnstyled from '@mui/base/TabsUnstyled';
import TabsListUnstyled from '@mui/base/TabsListUnstyled';
import TabPanelUnstyled from '@mui/base/TabPanelUnstyled';
import { buttonUnstyledClasses } from '@mui/base/ButtonUnstyled';
import TabUnstyled, { tabUnstyledClasses } from '@mui/base/TabUnstyled';
import { useForm } from 'react-hook-form';



// material ui tab styling

const blue = {
  50: '#F0F7FF',
  100: '#C2E0FF',
  200: '#80BFFF',
  300: '#66B2FF',
  400: '#3399FF',
  500: '#6BDCFC;',
  600: '#6BDCFC;',
  700: '#0059B2',
  800: '#004C99',
  900: '#003A75',
};

const Tab = styled(TabUnstyled)`
  font-family: IBM Plex Sans, sans-serif;
  color: black;
  cursor: pointer;
  font-size: 0.875rem;
  font-weight: 500;
  background: white;
  width: 100%;
  padding: 16px 16px;
  margin: 0px 0px 0 0;
  border: none;
  border-radius: 0px;
  display: flex;
  justify-content: center;
  border: 1px solid #6BDCFC;
  height:55px;

  // &:hover {
  //   background-color: ${blue[400]};
  // }

  &:focus {
    color: #fff;
    border-radius: 1px;
    outline: 2px solid ${blue[200]};
    outline-offset: 2px;
  }

  &.${tabUnstyledClasses.selected} {
    background-color: #6BDCFC;
    color: white;
  }

  &.${buttonUnstyledClasses.disabled} {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const TabPanel = styled(TabPanelUnstyled)`
  width: 100%;
  font-family: IBM Plex Sans, sans-serif;
  font-size: 0.875rem;
`;

const TabsList = styled(TabsListUnstyled)`
  min-width: 300px;
  background-color: ${blue[500]};
  border-radius: 1px;
  margin-bottom: 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  align-content: space-between;
`;

  const Signup = () => {

    const { register, handleSubmit, watch, formState: { errors },trigger, reset} = useForm();

    //org side validation

    const [org, setOrg] = useState({
      textorg:"",
      text:"",
      phone:"",
      email:"",
      role:"Organiser",
      passwordorg:"",
      password:""
    });
    const [errField, setErrField] = useState({
            fnameErr: "",
            lnameErr:"",
            emailErr: "",
            phoneErr: "",
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
                firstName:org.textorg,
                lastName:org.text,
                email:org.email,
                mobile:org.phone,
                password:org.passwordorg,
                role:"Organiser" 
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
      const validEmailRegex = RegExp(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
      const validNameRegex = RegExp(/^[a-zA-Z ]{2,30}$/);
      const mobileRegex = RegExp(/^(?:(?:\+|0{0,2})91(\s*[\-]\s*)?|[0]?)?[789]\d{9}$/);
      const passwordRegex = RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
      setErrField({
          fnameErr: "",
          lnameErr:"",
          emailErr: "",
          phoneErr: "",
          passwordErr: "",
          confirmErr: ""
      })
      if (org.textorg === "")
      {
          formIsValid = false;
          setErrField(pre => ({
              ...pre, fnameErr: "Please enter First name **"
          }))
      }
      if (org.textorg !== "" && !validNameRegex.test(org.textorg))
      {
          formIsValid = false;
          setErrField(pre => ({
              ...pre, fnameErr: "Please enter First name in correct format **"
          }))
      }

      if (org.text == "") {
        formIsValid = false;
        setErrField(pre => ({
            ...pre, lnameErr: "Please enter last name **"
        }))
    }
    if (org.text !== "" && !validNameRegex.test(org.text))
      {
          formIsValid = false;
          setErrField(pre => ({
              ...pre, lnameErr: "Please enter Last name in correct format **"
          }))
      }
      if (org.email == "") {
          formIsValid = false;
          setErrField(pre => ({
              ...pre, emailErr: "Please enter email **"
          }))
      }
      if (org.email !== "" && !validEmailRegex.test(org.email))
      {
          formIsValid = false;
          setErrField(pre => ({
              ...pre, emailErr: "Please enter Email in correct format **"
          }))
      }
      if (org.phone == "") {
          formIsValid = false;
          setErrField(pre => ({
              ...pre, phoneErr: "Please enter phone **"
          }))
      }
      if (org.phone !== "" && !mobileRegex.test(org.phone))
      {
          formIsValid = false;
          setErrField(pre => ({
              ...pre, phoneErr: "Please enter valid phone number **"
          }))
      }
      if (org.passwordorg == "") {
          formIsValid = false;
          setErrField(pre => ({
              ...pre, passwordErr: "Please enter password **"
          }))
      }
      if (org.passwordorg !== "" && !passwordRegex.test(org.passwordorg))
      {
          formIsValid = false;
          setErrField(pre => ({
              ...pre, passwordErr: "Please enter Password in correct format **"
          }))
      }

      if (org.password == "") {
          formIsValid = false;
          setErrField(pre => ({
              ...pre, confirmErr: "Please enter con-password **"
          }))
      }
      if(org.password!=='' &&  org.passwordorg !== org.password){
        formIsValid = false;
        setErrField(pre => ({
          ...pre, confirmErr: "Password doesn't matches **"
      }))
      }
      return formIsValid;
  }
  console.log(errField)

//user side validation
        const [user, setUser] = useState({
          textuser:"",
          textuser1:"",
          phoneuser:"",
          emailuser:"",
          role:"User",
          passworduser:"",
          passworduser1:""
        });
        const [userErrField, setUserErrField] = useState({
                fnameErr: "",
                lnameErr:"",
                emailErr: "",
                phoneErr: "",
                passwordErr: "",
                confirmErr: ""
        })
        const handleUserChange = (event) => {
            const { name, value } = event.target;
            setUser({
                ...user,
                [name]: value
            })
        }
        const handleUserRegister = async (e) => {
          e.preventDefault();
          if (validUserForm()) {
              let url = 'https://gm4-server.herokuapp.com/api/signup';
              let options = {
                  method: 'POST',
                  url: url,
                  headers: {
                  },
                  data:{
                    firstName:user.textuser,
                    lastName:user.textuser1,
                    email:user.emailuser,
                    mobile:user.phoneuser,
                    password:user.passworduser,
                    role:"User" 
                  }
              }
              try {
                  let response = await axios(options)
                  console.log(response.data)
                  alert("User sign up successfully")
              } catch (error) {
                let res = await axios(options)

                  console.log(res.response.data.error)
                  alert("Please enter correct values")
              }
          } else {
              console.log("invalid form")
              alert("Please enter correct values")
          }
      }
      const validUserForm = () => {
          var userformIsValid = true
          const validEmailRegex = RegExp(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
          const validNameRegex = RegExp(/^[a-zA-Z ]{2,30}$/);
          const mobileRegex = RegExp(/^(?:(?:\+|0{0,2})91(\s*[\-]\s*)?|[0]?)?[789]\d{9}$/);
          const passwordRegex = RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
          setUserErrField({
              fnameErr: "",
              lnameErr:"",
              emailErr: "",
              phoneErr: "",
              passwordErr: "",
              confirmErr: ""
          })
          if (user.textuser == "") {
              userformIsValid = false;
              setUserErrField(pre => ({
                  ...pre, fnameErr: "Please enter First name **"
              }))
          }
          if (user.textuser !== "" && !validNameRegex.test(user.textuser))
            {
                userformIsValid = false;
                setUserErrField(pre => ({
                    ...pre, fnameErr: "Please enter First name in correct format **"
                }))
            }

          if (user.textuser1 == "") {
            userformIsValid = false;
            setUserErrField(pre => ({
                ...pre, lnameErr: "Please enter last name **"
            }))
          }
        if (user.textuser1 !== "" && !validNameRegex.test(user.textuser1))
          {
              userformIsValid = false;
              setUserErrField(pre => ({
                  ...pre, lnameErr: "Please enter Last name in correct format **"
              }))
          }

          if (user.emailuser == "") {
              userformIsValid = false;
              setUserErrField(pre => ({
                  ...pre, emailErr: "Please enter email **"
              }))
          }
          if (user.emailuser !== "" && !validEmailRegex.test(user.emailuser))
            {
                userformIsValid = false;
                setUserErrField(pre => ({
                    ...pre, emailErr: "Please enter Email in correct format **"
                }))
            }

          if (user.phoneuser == "") {
              userformIsValid = false;
              setUserErrField(pre => ({
                  ...pre, phoneErr: "Please enter phone **"
              }))
          }
          if (user.phoneuser !== "" && !mobileRegex.test(user.phoneuser))
            {
                userformIsValid = false;
                setUserErrField(pre => ({
                    ...pre, phoneErr: "Please enter valid phone number **"
                }))
            }

          if (user.passworduser == "") {
              userformIsValid = false;
              setUserErrField(pre => ({
                  ...pre, passwordErr: "Please enter password **"
              }))
          }
          if (user.passworduser !== "" && !passwordRegex.test(user.passworduser))
            {
                userformIsValid = false;
                setUserErrField(pre => ({
                    ...pre, passwordErr: "Please enter Password in correct format(Aa1@) **"
                }))
            }

          if (user.passworduser1 == "") {
              userformIsValid = false;
              setUserErrField(pre => ({
                  ...pre, confirmErr: "Please enter con-password **"
              }))
              // alert("Please enter confirm password")
          }
          if(user.passworduser1!=='' &&  user.passworduser !== user.passworduser1){
            userformIsValid = false;
            setUserErrField(pre => ({
              ...pre, confirmErr: "Password doesn't matches **"
          }))
          }
          return userformIsValid;
      }
      console.log(userErrField)

  return (
    <div style={{ backgroundImage: `url(${require("../../user/assets/bgtt.png")})` }} >
        <Homeheader/>

         {/* material ui tab */}
        <TabsUnstyled  className='login-field' defaultValue={0} >
          <TabsList className='container-signup'>
            <Tab>Organiser</Tab>
            <Tab>User</Tab>
          </TabsList>

          {/* organiser tab */}
          <TabPanel value={0}> 
          <div className="container-signup"> 

          {/* organiser form  */}
          <form id="contact" onSubmit={handleRegister}>
            <fieldset id='field-style'>
              <div>
                <input className='signup-data' placeholder="Full name" type="text" tabindex="1" name='textorg'
                value={org.textorg} onChange={handleChange} maxLength={30} autoComplete='off'/>   
                {errField.fnameErr.length > 0 && <span className='errormsgleft1-1'>{errField.fnameErr}</span>}

                <input className='signup-data' placeholder="Last name" type="text" tabindex="1" name='text' 
                value={org.text} onChange={handleChange} autoComplete='off'/>   
                {errField.lnameErr.length > 0 && <span className='errormsgleft1-1'>{errField.lnameErr}</span>}

              </div>
              <div>

                <input className='signup-data' placeholder="Email Address" type="email" tabindex="1" name='email' 
                value={org.email} 
                onChange={handleChange}
                  autoComplete='off'/>   
                {errField.emailErr.length > 0 && <span  className='errormsgleft1-1'>{errField.emailErr}</span>}


                <input className='signup-data' placeholder="Phone number" type="text" tabindex="1"name='phone'
                value={org.phone}
                onChange={handleChange}
                autoComplete='off'/>   
                {errField.phoneErr.length > 0 && <span  className='errormsgleft1-1'>{errField.phoneErr}</span>}


              </div>
              <div>

                <input className='signup-data' placeholder="Password" type="password" tabindex="1"  name='passwordorg' 
                value={org.passwordorg} 
                onChange={handleChange}
                  autoComplete='off'/>  
                {errField.passwordErr.length > 0 && <span className='errormsgleft1-1'>{errField.passwordErr}</span>}

                <input className='signup-data' placeholder="Confirm Password" type="password" tabindex="1"  
                name='password' 
                value={org.password} 
                onChange={handleChange}
                  autoComplete='off'/>  
                {errField.confirmErr.length > 0 && <span  className='errormsgleft1-2'>{errField.confirmErr}</span>}

                
              </div>
            </fieldset>
    
            <fieldset id='field-style'>
              <button className='signup-button' name="submit" type="submit" id="contact-submit" 
              data-submit="...Sending" >Sign up</button>
            </fieldset>
          </form>
        </div>
        </TabPanel>
      
        {/* user tab */}
        <TabPanel value={1}>
        <div className="container-signup"> 
        {/* user form  */}
          <form id="contact" onSubmit={handleUserRegister}>

            <fieldset id='field-style'>
              <div>

                <input className='signup-data' placeholder="Full name" type="text" tabindex="1" name='textuser' 
               value={user.textuser} onChange={handleUserChange} maxLength={30} autoComplete='off'/>   
               {userErrField.fnameErr.length > 0 && <span className='errormsgleft1-1'>{userErrField.fnameErr}</span>}

                <input className='signup-data' placeholder="Last name" type="text" tabindex="1"  name='textuser1' 
                value={user.textuser1} onChange={handleUserChange} autoComplete='off'/>   
                {userErrField.lnameErr.length > 0 && <span className='errormsgleft1-1'>{userErrField.lnameErr}</span>}
              </div>
              <div>

                <input className='signup-data' placeholder="Email Address" type="email" tabindex="1" name='emailuser' 
                value={user.emailuser} 
                onChange={handleUserChange}
                  autoComplete='off'/>   
                {userErrField.emailErr.length > 0 && <span  className='errormsgleft1-1'>{userErrField.emailErr}</span>}

                <input className='signup-data' placeholder="Phone number" type="text" tabindex="1" name='phoneuser' 
                 value={user.phoneuser}
                 onChange={handleUserChange}
                 autoComplete='off'/>   
                 {userErrField.phoneErr.length > 0 && <span  className='errormsgleft1-1'>{userErrField.phoneErr}</span>}

              </div>
              <div>

                <input className='signup-data' placeholder="Password" type="password" tabindex="1" name='passworduser'  
                value={user.passworduser} 
                onChange={handleUserChange}
                  autoComplete='off'/>  
                {userErrField.passwordErr.length > 0 && <span className='errormsgleft1-1'>{userErrField.passwordErr}</span>}

                <input className='signup-data' placeholder="Confirm Password" type="password" tabindex="1" 
                name='passworduser1'  
                value={user.passworduser1} 
                onChange={handleUserChange}
                  autoComplete='off'/>  
                {userErrField.confirmErr.length > 0 && <span  className='errormsgleft1-2'>{userErrField.confirmErr}</span>}
                
              </div>

              
            </fieldset>
      
            <fieldset id='field-style'>
              <button  className='signup-button' name="submit" type="submit" id="contact-submit" 
              data-submit="...Sending">Sign up</button>
            </fieldset>

          </form>
        </div>

    </TabPanel>
    </TabsUnstyled>
    <Footer />
    </div>
  )
}

export default Signup
