import React from 'react';
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




function Login() {
  const { register, handleSubmit, watch, formState: { errors }, reset} = useForm();
  const onSubmit = (data) =>{
    console.log(data);
    reset();
  };
  console.log(errors);
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
      <TabPanel value={0}> <div className="container-login">

        {/* organiser form   */}
  <form id="contact" onSubmit={handleSubmit(onSubmit)} >
    
    <fieldset id='field-style'>
      <input placeholder="Your Email Address" type="email" tabindex="1" name='email' {...register("email", { required: "** Email is Required" })}  autoComplete='off'/>   {errors.email && (<span className='errormsgleft1'>{errors.email.message}</span>)}
    </fieldset>
    
    <fieldset id='field-style'>
      <input placeholder="Password" type="password" tabindex="2" name='password'  {...register("password", { required: "** Password is Required" })}  autoComplete='off'/>  {errors.password && (<span className='errormsgleft2'>{errors.password.message}</span>)}
      
    </fieldset>
    <fieldset id='field-style'>
      <button name="submit" type="submit" id="contact-submit" data-submit="...Sending">LOGIN</button>
    </fieldset>
    
  <p  className="copyright">    <a href="/forgotpassword" > Forgot Password</a> <a href="/signup" title="Colorlib"> <span className='user-signup'>New user? Sign Up</span> </a></p>
  </form>
</div></TabPanel>

        {/* user tab */}
      <TabPanel value={1}>
      <div className="container-login">  
      {/* user form section */}
  <form id="contact" onSubmit={handleSubmit(onSubmit)}>
   
    
    <fieldset id='field-style'>
    
      <input  placeholder="Your Email Address" type="email" tabindex="1" r name='email' {...register("email", { required: "** Email is Required" })}  autoComplete='off'/>   {errors.email && (<span className='errormsgleft1'>{errors.email.message}</span>)}
    </fieldset>
    <fieldset id='field-style' >
      <input placeholder="Password" type="password" tabindex="2" name='password'  {...register("password", { required: "** Password is Required" })}  autoComplete='off'/>  {errors.password && (<span className='errormsgleft2'>{errors.password.message}</span>)}
    </fieldset>
    <fieldset id='field-style'>
      <button  name="submit" type="submit" id="contact-submit" data-submit="...Sending">LOGIN</button>
    </fieldset  >
    
    
    <p  className="copyright">    <a href="/forgotpassword" > Forgot Password</a> <a href="/signup"  > <span className='user-signup'>New user? Sign Up</span> </a></p>

  </form>
</div>
      </TabPanel>
     
    </TabsUnstyled>
      <Footer />
    </div>
  )
}

export default Login