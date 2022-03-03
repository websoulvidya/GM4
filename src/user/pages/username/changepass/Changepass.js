import React from 'react';
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

{/*Change password form validation function */}

function Changepass() {


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

  const formSchema = Yup.object({

    oldpass:Yup.string()
    .required('**Old password required')
    .min(8, 'Password must have atleast 8 characters'),

   
    password: Yup
      .string()
      .required('**New Password is required')
      .min(8, 'Password must have atleast 8 characters'),

    passwordConfirm: Yup
      .string()
      .required('**Confirm password required')
      .oneOf([Yup.ref('password'),null], '**Password mismatch' ),
  })

  const validationOpt = { resolver: yupResolver(formSchema) }

  const { register, handleSubmit, formState } = useForm(validationOpt)

  const { errors } = formState

  function onFormSubmit(data) {
    console.log(JSON.stringify(data, null, 8))
    handleOpen();
    return false
  }

  return (
    <div className='Changepass' >
      <Userheader/>

    {/*User change password header */}

      <div className='user-changepass-header '>
        <h1>Change Password</h1>
      </div>

    {/*User change password form */}

      <form className='ChangepassForm' onSubmit={handleSubmit(onFormSubmit)}>
      <fieldset class="uk-fieldset">
        
       
      <div class="uk-margin">
            <input class="uk-input {`form-control ${
                  errors.password ? 'is-invalid' : ''}`} "  name='oldpass'  type="password" placeholder="Old Password" required="" minLength={8}
             {...register('oldpass')}/>
            </div>

            <div className="invalid-feedback" >
              {errors.oldpass?.message} 
               
            </div>

            <div class="uk-margin">

            <input class="uk-input  {`form-control ${
                  errors.password ? 'is-invalid' : ''}`} "
              id='password' name="password" type="password" placeholder="New Password" required="" 
  
            {...register('password') } 
         
            />

            </div>

            <div className="invalid-feedback" >
              {errors.password?.message} 
               
            </div>

            <div class="uk-margin">
            <input class="uk-input  {`form-control ${
                  errors.passwordConfirm ? 'is-invalid' : ''
                }`} " id='passwordConfirm' name="passwordConfirm" type="password" placeholder="Confirm password" required=""
                 {...register('passwordConfirm')}
                
            />


          <div className="invalid-feedback" >
              {errors.passwordConfirm?.message} 
               
            </div>

            </div>
          
        <div>
          <button class="ChangepassButton" onClick={onFormSubmit}>Save</button> 
        </div>
      </fieldset>

      <Modal
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
              </Modal>

      
      </form>

  

      

      <Footer />
    </div>
  )
}

export default Changepass
