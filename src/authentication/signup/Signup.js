import React from 'react'
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



function Signup() {

  const { register, handleSubmit, watch, formState: { errors }, reset} = useForm();
  const onSubmit = (data) =>{
    console.log(data);
    reset();
  };
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
      <TabPanel value={0}> <div className="container-signup"> 
      {/* organiser form  */}
      <form id="contact" onSubmit={handleSubmit(onSubmit)}>
   
    <fieldset id='field-style'>
      <div>

      <input className='signup-data' placeholder="Full name" type="text" tabindex="1" name='text' {...register("text", { required: "** Name is Required" })}  autoComplete='off'/>   {errors.text && (<span className='errormsgleft1-1'>{errors.text.message}</span>)}
      <input className='signup-data' placeholder="Last name" type="text" tabindex="1" name='text' {...register("text", { required: "** Name is Required" })}  autoComplete='off'/>   {errors.text && (<span className='errormsgleft1-1'>{errors.text.message}</span>)}

      </div>
      <div>

<input className='signup-data' placeholder="Email Address" type="email" tabindex="1" name='email' {...register("email", { required: "** Email is Required" })}  autoComplete='off'/>   {errors.email && (<span className='errormsgleft1-1'>{errors.email.message}</span>)}
<input className='signup-data' placeholder="Phone number" type="text" tabindex="1"name='phone' {...register("phone", { required: "** Phone is Required" })}  autoComplete='off'/>   {errors.phone && (<span className='errormsgleft1-1'>{errors.phone.message}</span>)}

</div>
<div>

<input className='signup-data' placeholder="Password" type="password" tabindex="1"  {...register("password", { required: "** Password is Required" })}  autoComplete='off'/>  {errors.password && (<span className='errormsgleft1-1'>{errors.password.message}</span>)}
<input className='signup-data' placeholder="Confirm Password" type="password" tabindex="1"  {...register("password", { required: "** Password is Required" })}  autoComplete='off'/>  {errors.password && (<span className='errormsgleft1-2'>{errors.password.message}</span>)}

</div>
    </fieldset>
    
    <fieldset id='field-style'>
      <button className='signup-button' name="submit" type="submit" id="contact-submit" data-submit="...Sending">Sign up</button>
    </fieldset>
  </form>
</div></TabPanel>
      
      {/* user tab */}
      <TabPanel value={1}>
      <div className="container-signup"> 
      {/* user form  */}
      <form id="contact" onSubmit={handleSubmit(onSubmit)}>
    
    <fieldset id='field-style'>
      <div>

      <input className='signup-data' placeholder="Full name" type="text" tabindex="1" name='text' {...register("text", { required: "** Name is Required" })}  autoComplete='off'/>   {errors.text && (<span className='errormsgleft1-1'>{errors.text.message}</span>)}
      <input className='signup-data' placeholder="Last name" type="text" tabindex="1"  name='text' {...register("text", { required: "** Name is Required" })}  autoComplete='off'/>   {errors.text && (<span className='errormsgleft1-1'>{errors.text.message}</span>)}

      </div>
      <div>

<input className='signup-data' placeholder="Email Address" type="email" tabindex="1" name='email' {...register("email", { required: "** Email is Required" })}  autoComplete='off'/>   {errors.email && (<span className='errormsgleft1-1'>{errors.email.message}</span>)}
<input className='signup-data' placeholder="Phone number" type="text" tabindex="1" name='phone' {...register("phone", { required: "** Phone is Required" })}  autoComplete='off'/>   {errors.phone && (<span className='errormsgleft1-1'>{errors.phone.message}</span>)}

</div>
<div>

<input className='signup-data' placeholder="Password" type="password" tabindex="1" name='password'  {...register("password", { required: "** Password is Required" })}  autoComplete='off'/>  {errors.password && (<span className='errormsgleft1-1'>{errors.password.message}</span>)}
<input className='signup-data' placeholder="Confirm Password" type="password" tabindex="1" name='password'  {...register("password", { required: "** Password is Required" })}  autoComplete='off'/>  {errors.password && (<span className='errormsgleft1-2'>{errors.password.message}</span>)}
</div>
    </fieldset>
    
    <fieldset id='field-style'>
      <button  className='signup-button' name="submit" type="submit" id="contact-submit" data-submit="...Sending">Sign up</button>
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
