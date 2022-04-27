import React,{useState} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'
import Homeheader from '../../user/components/homeheader/Homeheader';
import Footer from '../../user/components/footer/Footer';
import './Login.css';
import { styled } from '@mui/system';
import TabsUnstyled from '@mui/base/TabsUnstyled';
import TabsListUnstyled from '@mui/base/TabsListUnstyled';
import TabPanelUnstyled from '@mui/base/TabPanelUnstyled';
import { buttonUnstyledClasses } from '@mui/base/ButtonUnstyled';
import TabUnstyled, { tabUnstyledClasses } from '@mui/base/TabUnstyled';

import { useForm } from 'react-hook-form';
  
// material ui tab styling 

const blue = {
  50: '##6BDCFC',
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
  &:focus {
    color: #fff;
    border-radius: 1px;
    outline: 2px solid ${blue[200]}
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
  min-width: 200px;
  background-color: ${blue[500]};
  border-radius: 1px;
  margin-bottom: 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  align-content: space-between;
`;




    const Login=() =>{

        //org side validation

        const [org, setOrg] = useState({
          emailorg:"",
          role:"Organiser",
          passwordorg:"",
        });
        const navigate = useNavigate();
        const [errField, setErrField] = useState({
                emailErr: "",
                passwordErr: "",
        })
        const handleOrgChange = (event) => {
            const { name, value } = event.target;
            setOrg({
                ...org,
                [name]: value
            })
        }
        const handleOrgLogin = async (event) => {
          event.preventDefault();
          if (validForm()) {
              let url = 'https://gm4-server.herokuapp.com/api/signin';
              let options = {
                  method: 'POST',
                  url: url,
                  headers: { "Content-type": "application/json" 
                  },
                  data:{
                    email:org.emailorg,
                    password:org.passwordorg, 
                    role:"Organiser"
                  }
              }
              try {
                  let response = await axios(options)
                  console.log(response)
                  if(response.statusText =="OK") {
                    // console.log("hai")
                    localStorage.setItem('token',response.data.token)
                    localStorage.setItem('id',response.data.user.user._id)
                    localStorage.setItem('username',response.data.user.user.firstName)
                    localStorage.setItem('userlname',response.data.user.user.lastName)
                    localStorage.setItem('email',response.data.user.user.email)
                    localStorage.setItem('mobile',response.data.user.user.mobile)

                    setTimeout(() => {
                      navigate('/orghome')
                    },200)
                    alert("login successfully")
                  }
                  else{
                    console.log(response.data.message)
                  }
              } catch (error) {
                  console.log(error)
                  
              }
          } else {
              console.log("invalid form")
              
          }
      }
      const validForm = () => {
          var formIsValid = true
         
          setErrField({
              emailErr: "",
              passwordErr: "",
          })
          
          if (org.emailorg == "") {
              formIsValid = false;
              setErrField(pre => ({
                  ...pre, emailErr: "Please enter email **"
              }))
          }
         
          if (org.passwordorg == "") {
              formIsValid = false;
              setErrField(pre => ({
                  ...pre, passwordErr: "Please enter password **"
              }))
          }
          

          return formIsValid;
      }
      console.log(errField)

      //user side validation

      const [user, setUser] = useState({
        emailuser:"",
        role:"User",
        passworduser:"",
      });
      const [usererrField, setUserErrField] = useState({
              emailErr: "",
              passwordErr: "",
      })
      const handleUserChange = (e) => {
          const { name, value } = e.target;
          setUser({
              ...user,
              [name]: value
          })
      }
      const handleUserLogin = async (e) => {
        e.preventDefault();
        if (validUserForm()) {
            let url = 'https://gm4-server.herokuapp.com/api/signin';
            let options = {
                method: 'POST',
                url: url,
                headers: { "Content-type": "application/json" 
                },
                data:{
                  email:user.emailuser,
                  password:user.passworduser, 
                  role:"User"
                }
            }
            try {
                let response = await axios(options)
                console.log(response)
                if(response.statusText =="OK") {
                  // console.log("hai")
                  localStorage.setItem('token',response.data.token)
                  localStorage.setItem('id',response.data.user.user._id)
                  localStorage.setItem('username',response.data.user.user.firstName)
                  localStorage.setItem('userlname',response.data.user.user.lastName)
                  localStorage.setItem('email',response.data.user.user.email)
                  localStorage.setItem('mobile',response.data.user.user.mobile)
                  localStorage.setItem('photo',response.data.user.user.photo)

                setTimeout(() => {
                    navigate('/userhome')
                  },200)
                  alert("Login Successfully")
                }
                else{
                  console.log(response.data.message)
                  // alert(response.data.error.message)
                }

            } catch (error) {
                console.log(error)
                alert(error)
                
            }
        } else {
            console.log("invalid form")
            
        }
    }
    const validUserForm = () => {
        var userformIsValid = true
        
        setUserErrField({
            emailErr: "",
            passwordErr: "",
        })
        
        if (user.emailuser == "") {
            userformIsValid = false;
            setErrField(pre => ({
                ...pre, emailErr: "Please enter email **"
            }))
        }
        if (user.passworduser == "") {
            userformIsValid = false;
            setUserErrField(pre => ({
                ...pre, passwordErr: "Please enter password **"
            }))
        }
        

        return userformIsValid;
    }
    console.log(usererrField)


      return (
        <div  style={{ backgroundImage: `url(${require("../../user/assets/bgtt.png")})` }}>
        <Homeheader/>
        {/* tab section */}
        <TabsUnstyled className='login-field' defaultValue={0}>
          <TabsList className='container-login'>
          <Tab>Organiser</Tab>
          <Tab>User</Tab>
          </TabsList>

          {/* organiser tab */}
          <TabPanel value={0}> 
            <div className="container-login">

              {/* organiser form   */}
              <form id="contact" onSubmit={handleOrgLogin}>
          
                <fieldset id='field-style'>
                  <input placeholder="Your Email Address" type="email" tabindex="1" name='emailorg' 
                 value={org.emailorg} onChange={handleOrgChange} maxLength={30} autoComplete='off'/>   
                 {errField.emailErr.length > 0 && <span className='errormsgleft1'>{errField.emailErr}</span>}
                </fieldset>
          
                <fieldset id='field-style'>
                  <input placeholder="Password" type="password" tabindex="2" name='passwordorg' 
                  value={org.passwordorg} onChange={handleOrgChange} maxLength={30} autoComplete='off'/>   
                  {errField.passwordErr.length > 0 && <span className='errormsgleft2'>{errField.passwordErr}</span>}
                </fieldset>

                <fieldset id='field-style'>
                  <button name="submit" type="submit" id="contact-submit" data-submit="...Sending"
                  onClick={handleOrgLogin}>LOGIN</button>
                </fieldset>
          
                <p  className="copyright">    <a href="/forgotpassword" > Forgot Password</a> 
                <a href="/signup" title="Colorlib"> <span className='user-signup'>New user? Sign Up</span> </a></p>
              </form>
            </div>
          </TabPanel>

            {/* user tab */}
          <TabPanel value={1}>
            <div className="container-login">  
              {/* user form section */}
              <form id="contact" onSubmit={handleUserLogin}>
   
                <fieldset id='field-style'>
                  <input  placeholder="Your Email Address" type="email" tabindex="1"  name='emailuser' 
                  value={user.emailuser} onChange={handleUserChange} maxLength={30} autoComplete='off'/>   
                  {usererrField.emailErr.length > 0 && <span className='errormsgleft1'>{usererrField.emailErr}</span>}
                </fieldset>

                <fieldset id='field-style' >
                  <input placeholder="Password" type="password" tabindex="2" name='passworduser'  
                  value={user.passworduser} onChange={handleUserChange} maxLength={30} autoComplete='off'/>   
                  {usererrField.passwordErr.length > 0 && <span className='errormsgleft2'>{usererrField.passwordErr}</span>}
                </fieldset>

                <fieldset id='field-style'>
                  <button  name="submit" type="submit" id="contact-submit" data-submit="...Sending"
                  onClick={handleUserLogin}>LOGIN</button>
                </fieldset  >
    
    
                <p  className="copyright">    <a href="/forgotpassword" > Forgot Password</a> 
                <a href="/signup"  > <span className='user-signup'>New user? Sign Up</span> </a></p>

              </form>
            </div>
          </TabPanel>
     
        </TabsUnstyled>
      <Footer />
    </div>
  )
}

export default Login