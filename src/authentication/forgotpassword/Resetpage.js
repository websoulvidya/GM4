import React from 'react';
import Homeheader from '../../user/components/homeheader/Homeheader';
import Footer from '../../user/components/footer/Footer';
import './Resetpage.css'
import { useForm } from 'react-hook-form';



function Resetpage() {
  const { register, handleSubmit, watch, formState: { errors }, reset} = useForm();
  const onSubmit = (data) =>{
    console.log(data);
    reset();
  };
  console.log(errors);

  return <div className='reset-page'>

<Homeheader/>
<div class="container-reset">  
  <form id="contact"onSubmit={handleSubmit(onSubmit)}>
    
    <fieldset id='field-style'>
      <input placeholder="New Password" type="password" tabindex="1"  name='password'  {...register("password", { required: "** Password is Required" })}  autoComplete='off'/>  {errors.password && (<span className='errormsgleft4'>{errors.password.message}</span>)}
    </fieldset>
    <fieldset id='field-style'>
      <input placeholder="Confirm Password" type="password" tabindex="1"  name='password'  {...register("password", { required: "** Password is Required" })}  autoComplete='off'/>  {errors.password && (<span className='errormsgleft5'>{errors.password.message}</span>)}
    </fieldset>
    
    <fieldset id='field-style'>
      <button name="submit" type="submit" id="contact-submit" data-submit="...Sending">Reset Password</button>
    </fieldset>
  </form>
</div>
<Footer />
  </div>;
}

export default Resetpage;
