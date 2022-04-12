import React,{useEffect,useLayoutEffect,useState} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'

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



function Profile() {
 
//   useLayoutEffect(() => {
//     window.scrollTo(0, 0)
// });

const navigate = useNavigate();
const [userInfo, setUserInfo] = useState()


const getUserInfo= async()=>{
  const id = localStorage.getItem("id");
  let url = `https://gm4-server.herokuapp.com/api/user/profile/${id}`;
  let options = {
      method: 'GET',
      url: url,
      headers: {
        'Content-Type':"Application/json",
        'Authorization':"Bearer "+localStorage.getItem("token")
      },
    
  }
    
  try {
      let response = await axios(options);
  setUserInfo(response.data);
  } catch (error) {
     console.log(error)
  }
}

//API for user profile picture
const [userProfile, setUserProfile] = useState()

    const getUserProfile= async()=>{
      const id = localStorage.getItem("id");
      let url = `https://gm4-server.herokuapp.com/api/user/profile/photo/${id}`;
      let options = {
          method: 'GET',
          url: url,
          headers: {
          },
        
      }
        
      try {
          let response = await axios(options);
          setUserProfile(response.data);
      } 
      catch (error) {
        console.log(error)
      }
    }

useEffect(() => {
 getUserInfo();
 
}, [userInfo])


useEffect(()=>{
  getUserProfile();
},[userProfile])


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
                src={userProfile && userProfile}>
                </img>

                    
                <div className='userprofile-card-text'>

                     <h3 style={{textTransform:"uppercase"}}><b>{userInfo && userInfo.firstName} {userInfo && userInfo.lastName}</b></h3> 
                     <p><EmailIcon fontSize='small'/>
                     {''}{''}{userInfo && userInfo.email}</p>
                     <p><LocalPhoneIcon fontSize='small'/>
                     {''} {''}{userInfo && userInfo.mobile}</p>
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
