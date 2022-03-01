import React from 'react';
import Userheader from '../../components/userheader/Userheader';
import Footer from '../../components/footer/Footer';
import Grid from '@mui/material/Grid';
import { Card, List, listItemTextClasses } from '@mui/material';
import './Notification.css';
import moment from 'moment';
import { Route, Router} from 'react-router-dom';
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';
import { Link } from 'react-router-dom';





function Notification() {
  return(
    <div>
       <Userheader/>

       {/*organisation notification header*/}

        <div className='user-not-header'>
            <h1>NOTIFICATIONS</h1>
        </div>
        
      {/*organisatiom notification page grid section*/}

     <div className='usernot-container ' style={{overflowX:'hidden'}}>
     
      
       <div className='user-not-grid'>
      <Grid container> 
      
        <Card variant='outlined' className='user-not-cards' >
        <Link to={'/useridp'} style={{textDecoration:'none'}}>
            
              <div className='user-not-cardtext'>
                <div className='icon'>
               <NotificationsActiveOutlinedIcon fontSize='large' color='action'/>
              </div>
                   <h5><b>Organisation name</b></h5> 
                    <span>
                    
                      <h6>Tournament is scheduled on 04/02/2022, 10.00 am..So ,
                       your IDP is available here click here to get it</h6>
                    </span>
                    
              </div>
            
            <div className='user-not-date'>
                { moment.utc("2022-02-04 03:10:24").local().startOf('seconds').fromNow()}
            </div>
            </Link>
         </Card>
         
       
        
         
         <Card variant='outlined' className='user-not-cards' >
         <Link to={'/useridp'}  style={{textDecoration:'none'}}>
              
              <div className='user-not-cardtext'>
              <div className='icon'>
              <NotificationsActiveOutlinedIcon fontSize='large' color='action'/>
              </div>
                   <h5><b>Organisation name</b></h5> 
                    <span>
                      <h6>Tournament is scheduled on 04/02/2022, 10.00 am..So ,
                       your IDP is available here click here to get it</h6>
                    </span>
              </div>
            
            <div className='user-not-date'>
                { moment.utc("2022-02-04 03:10:24").local().startOf('seconds').fromNow()}
            </div>
            </Link>
         </Card>

         <Card variant='outlined' className='user-not-cards' >
         <Link to={'/useridp'}  style={{textDecoration:'none'}}>
              
              <div className='user-not-cardtext'>
              <div className='icon'>
              <NotificationsActiveOutlinedIcon fontSize='large' color='action'/>
              </div>
                   <h5><b>Organisation name</b></h5> 
                    <span>
                      <h6>Tournament is scheduled on 04/02/2022, 10.00 am..So ,
                       your IDP is available here click here to get it</h6>
                    </span>
              </div>
            
            <div className='user-not-date'>
                { moment.utc("2022-02-04 03:10:24").local().startOf('seconds').fromNow()}
            </div>
            </Link>
         </Card>

         <Card variant='outlined' className='user-not-cards' >
         <Link to={'/useridp'}  style={{textDecoration:'none'}}>
              
              <div className='user-not-cardtext'>
              <div className='icon'>
              <NotificationsActiveOutlinedIcon fontSize='large' color='action'/>
              </div>
                   <h5><b>Organisation name</b></h5> 
                    <span>
                      <h6>Tournament is scheduled on 04/02/2022, 10.00 am..So ,
                       your IDP is available here click here to get it</h6>
                    </span>
              </div>
            
            <div className='user-not-date'>
                { moment.utc("2022-02-04 03:10:24").local().startOf('seconds').fromNow()}
            </div>
            </Link>
         </Card>
         <Card variant='outlined' className='user-not-cards' >
         <Link to={'/useridp'}  style={{textDecoration:'none'}}>
              
              <div className='user-not-cardtext'>
              <div className='icon'>
              <NotificationsActiveOutlinedIcon fontSize='large' color='action'/>
              </div>
                   <h5><b>Organisation name</b></h5> 
                    <span>
                      <h6>Tournament is scheduled on 04/02/2022, 10.00 am..So ,
                       your IDP is available here click here to get it</h6>
                    </span>
              </div>
            
            <div className='user-not-date'>
                { moment.utc("2022-02-04 03:10:24").local().startOf('seconds').fromNow()}
            </div>
           
           </Link>
         </Card>
         </Grid>
         
        
         </div>
        


      <Footer />
  </div>
  </div>
  );



}

export default Notification;
