import React, { useLayoutEffect } from 'react';

import Dashboard from '../../components/header/Dashboard';
import Footer from '../../components/footer/Footer';



//form validation imports
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { date, string } from 'yup/lib/locale';



//yup
let schema = yup.object().shape({
  RoomId: yup.string().required("Room Id is requried"),
  password: yup.string().required("password is required")
})



// check validity
schema
  .isValid({
    name: 'jimmy',
    age: 24,
  })
  .then(function (valid) {
    valid = true; // => true
  });





function Idp_page() {
  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  });


  //form validation
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)

  });
  const sendIdp = (data) => {
    console.log(data);
  }




  return (
    <div className='idp_page_main' >
      <div>
        <Dashboard />
      </div>
      {/* start header portion */}
      <div className='idp_header'>
        <h1>idp</h1>
      </div>
      {/* end header  */}


      <div class="idp_page">
        <div class="idp_form">
          {/* send idp  form */}
          <form class="login-form" onSubmit={handleSubmit(sendIdp)}>
            <input type="text" placeholder="Room ID" name='RoomId' {...register('RoomId')} />
            <p className='error'>{errors['RoomId']?.message}</p>
            <input type="text" placeholder="password" name='password' {...register('password')} />
            <p className='error'>{errors['password']?.message}</p>
            <button type='submit'>Send IDP</button>

          </form>
          {/* end send idp page */}
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  )
}

export default Idp_page;