import React from 'react';
import Userheader from '../../../components/userheader/Userheader';
import Footer from '../../../components/footer/Footer';
import './EditProfile.css';
import {  Badge, Button} from '@mui/material';
import { Avatar } from '@mui/material';
import { IconButton } from '@mui/material';
import { useState } from 'react';
import CameraAltTwoToneIcon from '@mui/icons-material/CameraAltTwoTone';


import {useFormik} from 'formik';
import { Modal } from '@mui/material';


import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import {useLayoutEffect} from 'react';



import * as yup from 'yup';





function EditProfile() {

   {/*Modal functions */}

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useLayoutEffect(() => {
    window.scrollTo(0, 0)
});
  {/*Modal style */}

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    height:150,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

   {/*File upload event */}

  const [file, setFile] = useState(null);

    const handleChange = function loadFile(event) {
        if (event.target.files.length > 0) {
            const file = URL.createObjectURL(event.target.files[0]);
            setFile(file);
        }
    };


    {/*Form Validation section*/}

 
    const formik=useFormik({

      initialValues:{

        Username:'AngelChris',
  
        EmailId:'angelchris458@gmail.com',

        Phonenumber:'9876543210'
  
      },
  
      validationSchema: yup.object({
  
        Photoupload:yup.mixed()
        
          .required('**Profile Photo required..'),
          
        Username: yup.string()
  
          .max(20, '**Username should not exceed 20 Characters')
          
          .required(' **User Name required')

          .matches('^[A-Za-z_-]*$' ,'**Invalid Username')

         
         ,
  
       
        EmailId: yup.string()
  
          .email('Invalid email address')
  
          .required('**Email Id required'),

        Phonenumber: yup.string()
          
        .max(10, '**Phone number must not exceed 10 numbers')
        
        .required('**Phone number required')

        .matches('[789]' , '**Invalid phone number')
        
        .min(10,'**Phone number should contain 10 numbers')
        ,
       
    
  
      }),

      onSubmit:values =>{
  
        console.log(JSON.stringify(values));
        handleOpen();
        
         
   
      }
  
    });  
    
  return (
  
  <div className='user-editprofile'>
    <Userheader/>
    

      {/* Edit Profile page header */}
     
      <div className='user-profile-header'>
      <h1>Profile</h1>
      </div>

       {/*Edit Profile page form  */}
    
      <div>
      <form className='Editprofile-Form' onSubmit={formik.handleSubmit} >
     
     <h2 class="editprofile-head">Edit profile</h2>
     <fieldset className="uk-fieldset">
      <hr/>
      <div className="uk-margin">
        
         {/*Edit Profile Photo upload*/}
      
          <p className='user-editprofile-upload'> 

          <center>  

              <input type="file" onChange={handleChange} id="upload" accept="image/*" name="Photoupload"
                    style={{display: "none"}} {...formik.getFieldProps("Photoupload")} required="" />
                    
      
              <label htmlFor="upload" className='user-profilephoto'>

                <IconButton color="primary" aria-label="upload picture" component="span" >

                <Badge  badgeContent={<CameraAltTwoToneIcon/>} 
                          anchorOrigin={{
                            
                            horizontal:'right',
                            vertical:'bottom'
                        
                           }} >
                 
                <Avatar id="avatar" src={file}
                            
                            style={{

                                width: "80px",
                                height: "80px",
                            }}  />
                   
                </Badge>
               </IconButton>
            </label>
            <label htmlFor="avatar"/>

           

            {/*Photo upload validation */}

            {formik.errors.Photoupload ? 
                     
                     <span 
                     style={{
                       color:'red', 
                       fontSize:'12px',
                       fontWeight:'700' ,
                      
                       }}>
                     {formik.errors.Photoupload}</span> : null}
                     </center>
            </p>
            

             {/*Edit Profile input field */}

          <input class="uk-input"   type="text" name='Username' placeholder='Enter username'
            {...formik.getFieldProps("Username")} required=""/>
            {formik.errors.Username ? <span style={{color:'red' ,float:'left', fontSize:'12px',fontWeight:'700'}}>
            {formik.errors.Username}</span> : null } 

          </div>
          <div class="uk-margin">
          <input class="uk-input" type="email" name='EmailId' placeholder='Enter email id' 
          {...formik.getFieldProps("EmailId")} required=""/>
          { formik.errors.EmailId ? 
          <span style={{color:'red', fontSize:'12px',fontWeight:'700',float:'left'}}>
            {formik.errors.EmailId}</span> : null}
          </div>

          <div class="uk-margin">
          <input class="uk-input"  type="text" name= 'Phonenumber' placeholder='Enter phone number'   
                 {...formik.getFieldProps("Phonenumber")} 
          required=""/>
          {formik.errors.Phonenumber? 
          <span style={{color:'red' , fontSize:'12px' ,fontWeight:'700',float:'left'}}>
          {formik.errors.Phonenumber} </span> : null}

          </div>
         
      <div>
     
     

        <Button  type='submit' id="but1">Save</Button>

      </div>
    </fieldset>

 {/*Modal */}

 
        <Modal   
                open={open}
                onClose={handleClose}
                aria-labelledby="userep-modal-title"
                aria-describedby="userep-modal-description" >
                <Box sx={style} className='userep-modal_box' >
                 
                <Typography id="userep-modal-description" className='rules_modal'   >
​
                    <h3>Profile updated</h3>
                   
                    <span>Your profile is updated Successfully!</span>
                    <br/>

                  <div className='userep-button_area'>
                  <button onClick={handleClose} className='userep-modal_close'>Ok</button>
                  
                  </div>
                </Typography>
                 
                  
                </Box>
              </Modal>

              


    </form>

   

  {/*<div id="modal-close-react" data-uk-modal>
    <div className="uk-modal-dialog uk-modal-body uk-margin-auto-vertical">
       
        <button className="uk-modal-close-default" type="button" data-uk-close></button>
        <p style={{ fontSize:'15px'}}> Successfully updated your profile</p>

    </div>
          </div>   */}   




  
</div>
<Footer />
</div>
 
)
}

export default EditProfile
  