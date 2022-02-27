import React from 'react';
import Userheader from '../../../components/userheader/Userheader';
import Footer from '../../../components/footer/Footer';
import { Card, List, listItemTextClasses } from '@mui/material';
import './Profile.css';
import { Button } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EditProfile from './EditProfile';

import { Grid } from '@mui/material';
import { Link, Route, Router} from 'react-router-dom';

import Profilepic1 from './../../../assets/Profilepic1.jpeg';
import Userprofilebanner from './../../../assets/Userprofilebanner.jpg';





function Profile() {
 
  return (
    <div>
      <Userheader/>
      
      <div className='container'>

        {/* Profile page header */}
       
        <div className='user-profile-header'>
        <h1>Profile</h1>
        </div>

         {/* Profile page grid section */}
      
        <div className='container user-profile'>
          <Grid container>
           
             <Card variant='outlined' className=' user-profile-card  ' >
            
              <div >
                <div className='banner'>
                <img alt='' src={Userprofilebanner}></img>
                
                </div>
                <img alt='' className='user-profile-card-img'
                src={Profilepic1}>
  </img>

                    
                <div className='profile-card-text'>

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
