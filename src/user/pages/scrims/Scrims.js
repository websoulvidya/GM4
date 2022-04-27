import React,{useLayoutEffect, useState,useEffect} from 'react';
import Userheader from '../../components/userheader/Userheader';
import Footer from '../../components/footer/Footer';
import ScrimImg from "../../assets/Scrims/scrims.jpeg";
import "../../pages/scrims/Scims.css"
import axios  from "axios"
import Moment from 'moment';
import {BrowserRouter as Router,  Routes,Link,  Route} from "react-router-dom";
import ScrimsReg from './ScrimsReg';

import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '1px solid ',
  boxShadow: 24,
  p: 4,
};

function Scrims() {

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

const [scrimsList,setScrimsList] = useState([])
const token1 = localStorage.getItem("token")

useEffect(()=>{
  axios.get(`https://gm4-server.herokuapp.com/api/user/read/all/scrims/${localStorage.getItem('id')}`,{ headers: {"Authorization" : `Bearer ${token1}`} }).then((response)=>{
          
    setScrimsList(response.data)

  }).catch(()=>{
    console.log("Error")
  })
},[scrimsList])

  useLayoutEffect(() => {
    window.scrollTo(0, 0)
});
 

  <Router >
    <Link to="/scrims/scrimsreg" ></Link>
      <Routes>
            <Route exact path="/scrims" component={Scrims}></Route>
            <Route  path="/scrims/scrimsreg" component={ScrimsReg}></Route>
      </Routes>
  </Router>
 
  return(

    <div>
      <Userheader/>
      <div className='scrims-main-wrapper'>
      <div className='scrims_headerclip'>
        <h1>Scrims</h1>
      </div>
         <div className='scrims-card-list'>
          <div class="uk-child-width-1-4@l uk-child-width-1-3@m uk-grid uk-text-center main-card" uk-grid>


{scrimsList.map(val=>{
  let date = new Date(val.matchDate);
  let dateMDY = `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`;

  let time1 = new Date(val.matchTime);
  let matchTime1 = new Intl.DateTimeFormat('en-US', { hour: '2-digit', minute: '2-digit'}).format(time1)

  let time2 = new Date(val.idpTime);
  let idpTime1 = new Intl.DateTimeFormat('en-US', { hour: '2-digit', minute: '2-digit'}).format(time2)
  return(
    <div className='scrims-carditems'>
    <div class="scrims-card">
      <div className='scrims-main-titile'>
        <h3>Scrims name</h3>
      </div>
      <div className='scrims-team-img'>
        <img src={ScrimImg} />
      </div>
      <div className='scrims-rule'>
        <i class="fa fa-gavel scrims-icon" onClick={handleOpen} aria-hidden="true"></i>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        
        >
          <Box sx={style} className='scrimsmodal_box' >
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Rules
            </Typography>
            <Typography id="modal-modal-description" className='scrimsrules_modal' sx={{ mt: 2 }} style={{height:'30rem',overflow:'scroll'}} >
              
              <ul>
                <li>The room ID and password for the game will be provided 15 mins before the start time of the contest</li>
                <li>If you are unable to join the custom tournament created on the Call of Duty platform by the start time, the joining fee will not be refunded</li>
                <li>If you join the tournament on the Call of Duty platform without joining the contest on Gamerji, you will be kicked out of the tournament by our moderator and your account will be banned from Gamerji</li>
                <li> Make sure not to share the room ID and password with anyone who has not joined the contest on Gamerji. This will result in your account being banned and your winnings being frozen</li>
                <li>After completion of COD match Screenshot of your rank is compulsory.</li>
                <li>Upload your Rank screenshot in the GamerJi App within 30 mins after completion of the game to get winnings.</li>
                <li>Once you join the custom room on the Call of Duty platform, position your player in the column given to you. If you are found in any other column, you might get kicked out</li>
                <li>Teaming and/or griefing can get you kicked out of the tournament. Admin’s decision will be final in such cases and no refunds will be given  </li>
              </ul>
              <br />
            </Typography>
            <button onClick={handleClose} className='scrimsmodal_close'>ok</button>
          </Box>
        </Modal>

      </div>
     
      <div className='scrims-time-section'>
        <h6>match time</h6>
        <p className='match-time'>{matchTime1}</p>
        <span>idp time</span>
        <p className='idp-time'>{idpTime1}</p>
      </div>
      <div className='scrims-date'>
        <p className='scrims-matchtitle'>Match date</p>
        <span classname="scrims-matchdate">{dateMDY}</span>
      </div>
      <div className='scrims-progress-bar'>

        <progress value="100" max="400" className='scrimsprogress'>

        </progress>

        <p className='progressbar-left-text'>100 Joined</p>
        <p className='progressbar-right-text'>400 Spot left</p>
      </div>
      <div className='scrims-reg-section'>
        <h6>Hosted By</h6>
        <p>{val.organizationName}</p>
        <Link to={`/scrims/scrimsreg/${val._id}`}>Reg Now</Link>
       {/* <a href={`/scrims/scrimsreg/${val._id}`} >Reg Now </a> */}
      </div>
    </div>
  </div>

 )
})}
          
           

            </div>
        </div>

      </div>
      
      <Footer />
  </div>
  
  );

}

export default Scrims
