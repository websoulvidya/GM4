import React,{useRef,useState} from 'react';
import {ToastContainer, toast} from 'react-toastify';
import Homeheader from '../../user/components/homeheader/Homeheader';
import Footer from '../../user/components/footer/Footer';
import './Frgotpassword.css'
import { useForm } from 'react-hook-form';
import axios from 'axios' ;



function Forgotpassword() {
  const emailRef=useRef();

  const sendOtp= async(e)=>{
    // console.log("Hello world")
    e.preventDefault();

    let url = "https://gm4-server.herokuapp.com/api/user/password/change/send/mail";
    let options={
      method:"POST",
      url:url,
      data:{email:emailRef.current.value}
    }
    try{
      const response =await axios(options);
      console.log(response)
      // let record=response.data;
      // if(record.statusText === 'success'){
      //   toast.success(record.error)
      //   console.log(record.error)
      //   console.log("abc") 
  
      //   localStorage.setItem('token',response.data.token);
      // }
      // else{
      //   console.log("abcdd")
      //   toast.error(record.error)
      //   console.log(record.error)
      // }
    }
      catch(error){
        // toast.error("Something went wrong!");
        console.log(error.message)
        alert(error)
      }
    }
  
    // const url = "https://gm4-server.herokuapp.com/api/user/password/change/send/mail";
    // const options={
    //   method:"POST",
    //   url:url,
    //   data:email
    // }

  
  // const [email, setEmail] = useState("");

  // const { register, handleSubmit, watch, formState: { errors }, reset} = useForm();
  
  // const handleForgot=(e)=>{
  //   e.preventDefault();
  //   const url = "https://gm4-server.herokuapp.com/api/user/password/change/send/mail";
  //   const options={
  //     method:"POST",
  //     url:url,
  //     data:email
  //   }
  //   try {
  //     const response = axios(options);
  //     console.log(response)
  //   } catch (error) {
  //   console.log(error.message)
  //   }

  // }

  // console.log(errors);
  return (
    <div className='forgot-pass'>
        <Homeheader/>
        <div class="container" style={{width:"20px"}}>
        {/* <ToastContainer/> */}

        </div>

        <div class="container-frgt"> 


        {/* form section  */}
      <form id="contact">
        <fieldset id='field-style'>
          <input placeholder=" Enter Your Registered Email Address" type="email" tabindex="1" name='email'  
          ref={emailRef} 
          // value={email} 
          // onChange={(event)=> setEmail(event.target.value)}
          autoComplete='off'/>  
          {/* {errors.email && (<span className='errormsgleft3'>{errors.email.message}</span>)} */}
        </fieldset>
        
        <fieldset id='field-style'>
          <button name="submit" type="submit" id="contact-submit" data-submit="...Sending" 
          onClick={sendOtp}>Reset Password</button>
        </fieldset>
      </form>
    </div>

      <Footer />
    </div>
  )
}

export default Forgotpassword