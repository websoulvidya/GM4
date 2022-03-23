import React from 'react';
import Userheader from '../../../components/userheader/Userheader';
import Footer from '../../../components/footer/Footer';
import { Card } from '@mui/material';
import './Profile.css';
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import { Grid } from '@mui/material';
import { Link} from 'react-router-dom';
import Profilepic1 from './../../../assets/user-profile/Profilepic1.jpeg';
import Userprofilebanner from './../../../assets/user-profile/Userprofilebanner.jpg';

import {useLayoutEffect} from 'react';


function Profile() {
 
  useLayoutEffect(() => {
    window.scrollTo(0, 0)
});

  return (


 

    <div>
      <Userheader/>
      
      <div className='user-profile-container'>

        {/* Profile page header */}
       
        <div className='user-profile-header'>
        <h1>Profile</h1>
        </div>

         {/* Profile page grid section */}
      
        <div className='user-profile'>
          <Grid container>
           
             <Card variant='outlined' className=' user-profile-card  ' >
            
              <div >
                <div >
                <img alt='' src={Userprofilebanner} className='userprofile-banner'></img>
                
                </div>
                <img alt='' className='user-profile-card-img'
                src={Profilepic1}>
                </img>

                    
                <div className='userprofile-card-text'>

                     <h3><b>AngelChris</b></h3> 
                     <p><EmailIcon fontSize='small'/>
                     {''}{''} angelchris458@gmail.com</p>
                     <p><LocalPhoneIcon fontSize='small'/>
                     {''} {''}9876543210 </p>
                     </div>
                     <Link to={'/editprofile'}>
                     <button class="EditprofileButton" >Edit</button>
                     </Link>
                       
               </div>
            
           </Card>
           </Grid>
         


      </div>
      </div>
     
      <Footer />
    </div>
  )
}

export default Profile
