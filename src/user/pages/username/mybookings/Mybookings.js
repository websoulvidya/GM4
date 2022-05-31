import React, { useLayoutEffect, useState, useEffect } from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import Userheader from '../../../components/userheader/Userheader';
import Footer from '../../../components/footer/Footer';
import './Mybookings.css'
import my_img from '../../../assets/myBookings_Assets/262886-pubg-game-wallpaper (1).jpg';
import MyBookingInfo from './MyBookingInfo';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Moment from "react-moment";
import Modal from '@mui/material/Modal';
import { Container } from '@mui/material';
import axios from "axios"
import { date } from 'yup';
//Routing to MyBookings Info page

<BrowserRouter>
  <Link to="/MyBookingInfo" >MyBookingInfo</Link>
  <Routes>
    <Route exact path="/MyBookingInfo" component={MyBookingInfo}></Route>
  </Routes>
</BrowserRouter>

//Style for modal

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



function Mybookings() {

  //Use State for rendering modal on click the rules icon


const userid = localStorage.getItem('id')
const token = localStorage.getItem("token")
const [tournamentList, setTournamentlist] = useState([])
const [scrimsList,setScrimsList] = useState([])
const [dailtmatchList, setDailymatchList] = useState([])
//tournament
useEffect(() => {

  axios.get(`http://localhost:8000/api/user/list/booked/tournaments/${localStorage.getItem('id')}`, { headers: { "Authorization": `Bearer ${token}` } }).then((response) => {

    setTournamentlist(response.data)
    
  }).catch(() => {
    console.log("Error")
  })
}, [])



//dailymatch
useEffect(() => {
  axios.get(`http://localhost:8000/api/user/booked/matches/${localStorage.getItem('id')}`, { headers: { "Authorization": `Bearer ${token}` } }).then((response) => {

    setDailymatchList(response.data)
   
  }).catch(() => {
    console.log("Error")
  })
}, [])

//scrims

useEffect(()=>{
  axios.get(`http://localhost:8000/api/user/view/booked/scrims/${localStorage.getItem('id')}`,{ headers: {"Authorization" : `Bearer ${token}`} }).then((response)=>{
         setScrimsList(response.data)
         console.log(response.data)
      }).catch(()=>{
    console.log("Error")
  })
}, [])


//progressbar
const Progress = ({ value }) => {
  const [style, setStyle] = React.useState({});

  setTimeout(() => {
    const newStyle = {
      opacity: 1,
      width: `${value}%`
    }

    setStyle(newStyle);
  }, 200);
}


  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div>
      <Userheader />

      {/* This div is for the heading */}

      <div className='matches_header'>
        <div></div>
        <h1>My Bookings</h1>
      </div>
      {/* This div is for wrapping all the cards */}
      <div className='scrims-card-list'>

        <div class="uk-child-width-1-4@l uk-child-width-1-3@m uk-grid uk-text-center main-card" uk-grid>

{/* Tournamnet details */}
{tournamentList.map((val)=>{
  return(


   <div className='scrims-carditems'>
    <div class="scrims-card">
      <div className='scrims-main-titile'>
        <h3>{val.tournamentId.tournamentName}</h3>
      </div>
      <div className='scrims-team-img'>
        <img src={my_img} />
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
            <Typography id="modal-modal-description" className='scrimsrules_modal' sx={{ mt: 2 }} style={{ height: '30rem', overflow: 'scroll' }} >

              <ul>
                <li>The room ID and password for the game will be provided 15 mins before the start time of the contest</li>
                <li>If you are unable to join the custom tournament created on the Call of Duty platform by the start time, the joining fee will not be refunded</li>
                <li>If you join the tournament on the Call of Duty platform without joining the contest on Gamerji, you will be kicked out of the tournament by our moderator and your account will be banned from Gamerji</li>
                <li> Make sure not to share the room ID and password with anyone who has not joined the contest on Gamerji. This will result in your account being banned and your winnings being frozen</li>
                <li>After completion of COD match Screenshot of your rank is compulsory.</li>
                <li>Upload your Rank screenshot in the GamerJi App within 30 mins after completion of the game to get winnings.</li>
                <li>Once you join the custom room on the Call of Duty platform, position your player in the column given to you. If you are found in any other column, you might get kicked out</li>
                <li>Teaming and/or griefing can get you kicked out of the tournament. Admin's decision will be final in such cases and no refunds will be given  </li>
              </ul>
              <br />
            </Typography>
            <button onClick={handleClose} className='scrimsmodal_close'>ok</button>
          </Box>
        </Modal>

      </div>

      <div className='scrims-time-section'>
        <h6>match time</h6>
        <p className='match-time'><Moment format='LT'>{val.tournamentId.matchTime}</Moment></p>
        <span>Entry Fee</span>
        <p className='idp-time'>{val.tournamentId.entryFee}</p>
      </div>
      <div className='scrims-date'>
        <p className='scrims-matchtitle'>Match date</p>
        <span classname="scrims-matchdate"><Moment format="DD/MM/YYYY">{val.tournamentId.matchDate}</Moment></span>
      </div>
      <div className='scrims-progress-bar'>
        <progress value={val.tournamentId.numberOfRegs} max="100" className='scrimsprogress'>

        </progress>

        <p className='progressbar-left-text'>{val.tournamentId.numberOfRegs} Joined</p>
        <p className='progressbar-right-text'>{(val.tournamentId.teamLimit) - (val.tournamentId.numberOfRegs)}  Spot left</p>
      </div>
      <div className='scrims-reg-section'>
        <h6>Hosted By</h6>
        <p>{val.tournamentId.organiserName}</p>

        <Link to={`/MyBookingInfo/${userid}/${val._id}`}>VIEW INFO</Link>
      </div>
    </div>
  </div>
  )

})}

{/* scrims */}
{scrimsList.map((scrm)=>{
  return(


<div className='scrims-carditems'>
    <div class="scrims-card">
      <div className='scrims-main-titile'>
        <h3>{scrm.scrimId.matchType} </h3>
        
      </div>
      <div className='scrims-team-img'>
        <img src={my_img} />
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
            <Typography id="modal-modal-description" className='scrimsrules_modal' sx={{ mt: 2 }} style={{ height: '30rem', overflow: 'scroll' }} >

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
        <p className='match-time'><Moment format='LT'>{scrm.scrimId.matchTime}</Moment></p>
        <span>idp time</span>
        <p className='idp-time'><Moment format='LT'>{scrm.scrimId.idpTime}</Moment></p>
      </div>
      <div className='scrims-date'>
        <p className='scrims-matchtitle'>Match date</p>
        <span classname="scrims-matchdate"><Moment format="DD/MM/YYYY">{scrm.scrimId.matchDate}</Moment></span>
      </div>
      <div className='scrims-progress-bar'>
        <progress value={scrm.scrimId.numberOfRegs} max="100" className='scrimsprogress'>

        </progress>

        <p className='progressbar-left-text'>{scrm.scrimId.numberOfRegs} Joined</p>
        <p className='progressbar-right-text'>{50 -scrm.scrimId.numberOfRegs} Spot left</p>
      </div>
      <div className='scrims-reg-section'>
        <h6>Hosted By</h6>
        <p>{scrm.scrimId.organizationName}</p>

        <Link to={`/MyBookingInfo/${userid}/${scrm._id}`}>VIEW INFO</Link>
      </div>
    </div>
  </div>

)
})}


{/* dailymatch */}


{dailtmatchList.map((mtch)=>{
  return(


  <div className='scrims-carditems'>
    <div class="scrims-card">
      <div className='scrims-main-titile'>
        <h3>{mtch.dailyMatchId.matchType}</h3>
     
      </div>
      <div className='scrims-team-img'>
        <img src={my_img} />
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
            <Typography id="modal-modal-description" className='scrimsrules_modal' sx={{ mt: 2 }} style={{ height: '30rem', overflow: 'scroll' }} >

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
        <p className='match-time'><Moment format='LT'>{mtch.dailyMatchId.matchTime}</Moment></p>
        <span>idp time</span>
        <p className='idp-time'><Moment format='LT'>{mtch.dailyMatchId.idpTime}</Moment></p>
      </div>
      <div className='scrims-date'>
        <p className='scrims-matchtitle'>Match date</p>
        <span classname="scrims-matchdate"><Moment format="DD/MM/YYYY">{mtch.dailyMatchId.matchDate}</Moment></span>
      </div>
      <div className='scrims-progress-bar'>
        <progress value={mtch.dailyMatchId.numberOfRegs} max="100" className='scrimsprogress'>

        </progress>

        <p className='progressbar-left-text'>{mtch.dailyMatchId.numberOfRegs} Joined</p>
        <p className='progressbar-right-text'>{50 -mtch.dailyMatchId.numberOfRegs} Spot left</p>
      </div>
      <div className='scrims-reg-section'>
        <h6>Hosted By</h6>
        <p>{mtch.dailyMatchId.organizationName}</p>

        <Link to={`/MyBookingInfo/${userid}/${mtch._id}`}>VIEW INFO</Link>
      </div>
    </div>
  </div>
  )
})}
        </div>
        {/* Modal for rules dialouge box for rules*/}
      </div>
      <Footer />
    </div>
  )
}
export default Mybookings
