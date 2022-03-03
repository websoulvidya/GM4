import React from 'react';
import Homeheader from '../../user/components/homeheader/Homeheader';
import Footer from '../../user/components/footer/Footer';
import './Frgotpassword.css'
import { useForm } from 'react-hook-form';



function Forgotpassword() {
  const { register, handleSubmit, watch, formState: { errors }, reset} = useForm();
  const onSubmit = (data) =>{
    console.log(data);
    reset();
  };
  console.log(errors);
  return (
    <div className='forgot-pass'>
        <Homeheader/>
        
        <div class="container-frgt"> 

        {/* form section  */}
  <form id="contact" onSubmit={handleSubmit(onSubmit)}>
    
    <fieldset id='field-style'>
      <input placeholder=" Enter Your Registered Email Address" type="email" tabindex="1" name='email' {...register("email", { required: "** Email is Required" })}  autoComplete='off'/>   {errors.email && (<span className='errormsgleft3'>{errors.email.message}</span>)}
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

export default Forgotpassword