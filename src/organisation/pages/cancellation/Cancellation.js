
import Dashboard from '../../components/header/Dashboard';
import Footer from '../../components/footer/Footer';

import './Cancellation.css'
import matchImg2 from '../../assets/myMatches/pubg2.webp'
import matchImg3 from '../../assets/myMatches/cod.jpg'
import matchImg4 from '../../assets/myMatches/img3.jpeg'
import matchImg5 from '../../assets/myMatches/img4.jpg'
import matchImg6 from '../../assets/myMatches/img5.jpg'


import matchImg1 from '../../assets/myMatches/pubg1.png'

import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';



import {
  Link,
} from 'react-router-dom';
import axios from "axios";
import { useLayoutEffect, useEffect, useState } from "react";


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






function Cancellation() {


  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  });
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

const [cancell, setcancell] = useState([])
  const token = localStorage.getItem("token");

  useEffect(() => {
    axios.get(`http://localhost:8000/api/organiser/cancellation/request/listall/${localStorage.getItem('id')}`, { headers: { "Authorization": `Bearer ${token}` } }).then((response) => {
  
      setcancell(response.data)
      console.log(response.data);
     
    }).catch(() => {
      console.log("Error")
    })
  }, [])


  return (
    <div className='cancellation_page'>

      <Dashboard />
      {/*start  header */}
      <div className='cancel_headerclip'>
        <h1>Cancellation</h1>
      </div>
      {/* end header */}

      {/* start cancel card portions */}

      {/* 2 */}
      <div className='cancel-card-list'>
        <div class="uk-child-width-1-4@l uk-child-width-1-3@m uk-grid uk-text-center main-card" uk-grid>
          {cancell.map((val) => {
            return(

           
          <div className='cancel-carditems'>
            <div class="cancel-card">
              <div className='cancel-main-titile'>
                <h3>{val.teamName}</h3>
              </div>
              <div className='cancel-team-img'>
                <img src={matchImg6} />
              </div>
              <div className='cancel-rule' >
                <i class="fa fa-gavel rule-icon" aria-hidden="true" onClick={handleOpen}></i>
                <Modal
                  open={open}
                  onClose={handleClose}
                  aria-labelledby="modal-modal-title"
                  aria-describedby="modal-modal-description"

                >
                  <Box sx={style} className='cancellPage-modal_box' >
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                      Rules
                    </Typography>
                    <Typography id="CancellPage-modal-modal-description" className='cancellPage-rules_modal' sx={{ mt: 2 }} style={{ height: '30rem', overflow: 'scroll' }} >

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

              <div className='cancel-time-section'>
                <h6>match time</h6>
                <p className='cancellPage-match-time'>3:00</p>
                <span>idp time</span>
                <p className='cancellPage-idp-time'>2:45</p>
              </div>
              <div className='cancel-date'>
                <p className='cancel-matchtitle'>Match date</p>
                <span classname="cancel-matchdate">16-01-2022</span>
              </div>
              <div className='cancel-progress-bar'>
                <progress value="3333" max="10000">

                </progress>

                <p className='cancellPage-progressbar-left-text'>100 Joined</p>
                <p className='cancellPage-progressbar-right-text'>400 Spot left</p>
              </div>
              <div className='cancel-reg-section'>
                <h6>Hosted By</h6>
                <p>E-Sports Team</p>

                {/* <a >reg now</a> */}
                <Link to={'/view_page'} >VIEW</Link>
              </div>
            </div>
          </div>
           )
          })}


        
        


        </div>
      </div>


      {/* end cancel card portion */}
      <Footer />
    </div>
  )
}

export default Cancellation
