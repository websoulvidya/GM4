import React from 'react'
import Dashboard from '../../components/header/Dashboard';
import Footer from '../../components/footer/Footer';
import Grid from '@mui/material/Grid';
import { Card, List, listItemTextClasses } from '@mui/material';
import './Notification.css';
import moment from 'moment';
import { Route, Router} from 'react-router-dom';
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';

function Notification() {
  return (
    <div>
      <Dashboard/>

      <div className='container org-not-header'>
            <h1>NOTIFICATIONS</h1>
        </div>
        
      {/*user notification page grid section*/}

     <div className='orgnot-container'>
     
      
       <div className='org-not-grid'>
      <Grid container wrapper> 
      
        <Card variant='outlined' className='org-not-cards' >
        
            
              <div className='org-not-cardtext'>
                <div className='icon'>
               <NotificationsActiveOutlinedIcon fontSize='large' color='action'/>
              </div>
                   <h5><b>Organisation name</b></h5> 
                    <span>
                    
                      <h6>Tournament is scheduled on 04/02/2022, 10.00 am..So ,
                       your IDP is available here click here to get it</h6>
                    </span>
                    
              </div>
            
            <div className='org-not-date'>
                { moment.utc("2022-02-04 03:10:24").local().startOf('seconds').fromNow()}
            </div>
           
         </Card>
         
       
        
         
         <Card variant='outlined' className='org-not-cards' >
        
              <div className='org-not-cardtext'>
              <div className='icon'>
              <NotificationsActiveOutlinedIcon fontSize='large' color='action'/>
              </div>
                   <h5><b>Organisation name</b></h5> 
                    <span>
                      <h6>Tournament is scheduled on 04/02/2022, 10.00 am..So ,
                       your IDP is available here click here to get it</h6>
                    </span>
              </div>
            
            <div className='org-not-date'>
                { moment.utc("2022-02-04 03:10:24").local().startOf('seconds').fromNow()}
            </div>
           
         </Card>

         <Card variant='outlined' className='org-not-cards' >
        
              <div className='org-not-cardtext'>
              <div className='icon'>
              <NotificationsActiveOutlinedIcon fontSize='large' color='action'/>
              </div>
                   <h5><b>Organisation name</b></h5> 
                    <span>
                      <h6>Tournament is scheduled on 04/02/2022, 10.00 am..So ,
                       your IDP is available here click here to get it</h6>
                    </span>
              </div>
            
            <div className='org-not-date'>
                { moment.utc("2022-02-04 03:10:24").local().startOf('seconds').fromNow()}
            </div>
           
         </Card>

         <Card variant='outlined' className='org-not-cards' >
        
              
              <div className='org-not-cardtext'>
              <div className='icon'>
              <NotificationsActiveOutlinedIcon fontSize='large' color='action'/>
              </div>
                   <h5><b>Organisation name</b></h5> 
                    <span>
                      <h6>Tournament is scheduled on 04/02/2022, 10.00 am..So ,
                       your IDP is available here click here to get it</h6>
                    </span>
              </div>
            
            <div className='org-not-date'>
                { moment.utc("2022-02-04 03:10:24").local().startOf('seconds').fromNow()}
            </div>
            
         </Card>
         <Card variant='outlined' className='org-not-cards' >
        
              
              <div className='org-not-cardtext'>
              <div className='icon'>
              <NotificationsActiveOutlinedIcon fontSize='large' color='action'/>
              </div>
                   <h5><b>Organisation name</b></h5> 
                    <span>
                      <h6>Tournament is scheduled on 04/02/2022, 10.00 am..So ,
                       your IDP is available here click here to get it</h6>
                    </span>
              </div>
            
            <div className='org-not-date'>
                { moment.utc("2022-02-04 03:10:24").local().startOf('seconds').fromNow()}
            </div>
           
      
         </Card>
         </Grid>
         
        
  
        
         </div>
        
      <Footer />
    </div>
    </div>
   
  )
}

export default Notification
