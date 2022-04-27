import React,{useLayoutEffect, useState,useEffect} from 'react';
import Userheader from '../../components/userheader/Userheader';
import Footer from '../../components/footer/Footer';
import "../../pages/dailymatch/Dailymatch.css"
import DailyImg from "../../assets/DailyMatch/dailymatch.jpeg"


import DailymatchReg from '../dailymatch/DailymatchReg';
import {BrowserRouter as Router,  Routes,Link,  Route} from "react-router-dom";

import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import axios from "axios"

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


function Dailymatch() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
 const [dailtmatchList,setDailymatchList] = useState([])
 const token = localStorage.getItem("token")
 useEffect(()=>{
  axios.get(`https://gm4-server.herokuapp.com/api/organizer/dailymatch/read/all/${localStorage.getItem('id')}`,{ headers: {"Authorization" : `Bearer ${token}`} }).then((response)=>{
          
    setDailymatchList(response.data)

  }).catch(()=>{
    console.log("Error")
  })
},[dailtmatchList])

  useLayoutEffect(() => {
    window.scrollTo(0, 0)
});
 // const location = useLocation();

  <Router >
    <Link to="/Dailymatch/DailymatchReg" ></Link>
      <Routes>
            <Route exact path="/dailymatch" component={Dailymatch}></Route>
            <Route  path="/dailymatch/dailymatchreg" component={DailymatchReg}></Route>
      </Routes>
  </Router>
  

  return(
  
    <div>
      <Userheader/>
      <div className='dailymatch-main-wrapper' style={{overflowX:"hidden"}}>
      <div className='dailymatch_headerclip'>
        <h1>Daily Match </h1>
      </div>
         <div className='dailymatch-card-list'>
          <div class="uk-child-width-1-4@l uk-child-width-1-3@m uk-grid uk-text-center main-card" uk-grid>

            {dailtmatchList.map(val =>{
              return(
<div className='dailymatch-carditems'>
              <div class="dailymatch-card">
                <div className='dailymatch-main-titile'>
                  <h3>Daily Match </h3>
                </div>
                <div className='dailymatch-team-img'>
                  <img src={DailyImg} />
                </div>
                <div className='dailymatch-rule'>
                  <i class="fa fa-gavel dailymatch-icon" aria-hidden="true" onClick={handleOpen}></i>
                  <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                  
                  >
                    <Box sx={style} className='modal_box' >
                      <Typography id="modal-modal-title" variant="h6" component="h2">
                        Rules
                      </Typography>
                      <Typography id="modal-modal-description" className='dailymatch_rules_modal' sx={{ mt: 2 }} style={{height:'30rem',overflow:'scroll'}} >
                        
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
                      <button onClick={handleClose} className='modal_close'>ok</button>
                    </Box>
                  </Modal>
    
                </div>
               
                <div className='dailymatch-time-section'>
                  <h6>match time</h6>
                  <p className='match-time'>3:00</p>
                  <span>idp time</span>
                  <p className='idp-time'>2:45</p>
                </div>
                <div className='dailymatch-date'>
                  <p className='dailymatch-matchtitle'>Match date</p>
                  <span classname="dailymatch-matchdate">16-01-2022</span>
                </div>
                <div className='dailymatch-progress-bar'>
                  <progress value="3333" max="10000" className='dailyprogress'>

                  </progress>

                  <p className='progressbar-left-text'>100 Joined</p>
                  <p className='progressbar-right-text'>400 Spot left</p>
                </div>
                <div className='dailymatch-reg-section'>
                  <h6>Hosted By</h6>
                  <p>E-Sports Team</p>

                  <a href='/dailymatch/dailymatchreg'>Reg Now </a>
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

export default Dailymatch;


