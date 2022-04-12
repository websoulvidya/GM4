import React,{useEffect,useLayoutEffect,useState} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'
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



function OrgProfile() {
 
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
                src={userProfile && userProfile} >
                </img>

                    
                <div className='orgprofile-card-text'>

                     <h3 style={{textTransform:"uppercase"}}><b>{userInfo && userInfo.firstName} {userInfo && userInfo.lastName}</b></h3> 
                     <p><EmailIcon fontSize='small'/>
                     {''}{''} {userInfo && userInfo.email}</p>
                     <p><LocalPhoneIcon fontSize='small'/>
                     {''} {''} {userInfo && userInfo.mobile} </p>
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
