import React from 'react';
import Dashboard from '../../components/header/Dashboard';
import Footer from '../../components/footer/Footer'
import { Card } from '@mui/material';
import './OrgProfile.css';
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import { Grid } from '@mui/material';
import { Link} from 'react-router-dom';
import Profilepic1 from './../../assets/Profile/Profilepic1.jpeg';
import Orgprofilebanner from './../../assets/Profile/Orgprofilebanner.jpg';

import {useLayoutEffect} from 'react';


function OrgProfile() {
 
  useLayoutEffect(() => {
    window.scrollTo(0, 0)
});

  return (


 

    <div>
      <Dashboard/>
      
      <div className='org-profile-container'>

        {/* Profile page header */}
       
        <div className='org-profile-header'>
        <h1>Profile</h1>
        </div>

         {/* Profile page grid section */}
      
        <div className='org-profile'>
          <Grid container>
           
             <Card variant='outlined' className=' org-profile-card  ' >
            
              <div >
                <div >
                <img alt='' src={Orgprofilebanner} className='orgprofile-banner'></img>
                
                </div>
                <img alt='' className='org-profile-card-img'
                src={Profilepic1}>
                </img>

                    
                <div className='orgprofile-card-text'>

                     <h3><b>AngelChris</b></h3> 
                     <p><EmailIcon fontSize='small'/>
                     {''}{''} angelchris458@gmail.com</p>
                     <p><LocalPhoneIcon fontSize='small'/>
                     {''} {''}9876543210 </p>
                     </div>
                     <Link to={'/orgeditprofile'}>
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

export default OrgProfile
