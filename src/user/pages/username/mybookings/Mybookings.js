import React from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import Userheader from '../../../components/userheader/Userheader';
import Footer from '../../../components/footer/Footer';
import './Mybookings.css'
import my_img from '../../../assets/myBookings_Assets/262886-pubg-game-wallpaper (1).jpg';
import MyBookingInfo from './MyBookingInfo';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Container } from '@mui/material';

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
      <div className='myBookings_wrapper1'>
        
        <div className='myBookings_row1'>
        {/* first card portion flexbox begins here */}
          <div className='myBookings_outerflex'>
            {/* first card begins here */}
            <div className='myBookings_innerdiv'>
              
                <div className='myBookings_innerpositiondiv'>
                  <h4>Organization1</h4>
                  <Link to='/MyBookingInfo'>
                  <div className='myBookings_innerimagetextflex'>
                    <div className='myBookings_imagebox'>
                      <img src={my_img} alt='fleximg' />
                    </div>
                    <div className='myBookings_textbox'>
                      <div className='myBookings_textbox_poolflex'>
                        <div className='myBookings_textbox_poolflex__prize'>
                          <h6>MATCH TIME</h6>
                          <p>3:00</p>
                        </div>
                        <div className='myBookings_textbox_poolflex__horizontal-div'>

                        </div>
                        <div className='myBookings_textbox_poolflex__prize__entry-fee'>
                          <h6>IDP TIME</h6>
                          <p>1:00</p>
                        </div>
                      </div>
                      <div className='myBookings_match'>
                        <p>MATCH DATE : 05-08-2022</p>
                      </div>
                      <progress value="3333" max="10000" className='myBookings_progress'></progress>
                      <div className="myBookings_textbox_progresstextflex">
                        <div>
                          <p>100 joined</p>
                        </div>
                        <div>
                          <p>400 spot left</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  </Link>
                  <div className='myBookings_blue-box'>
                    <div>
                      <h5>HOSTED BY</h5>
                      <a href="#"><p>E-SPORTS TEAM</p></a>
                    </div>
                    <div className='myBookings_verticaldiv2'>

                    </div>
                    <div>
                      <a href="#"><h5>REG NOW</h5></a>
                    </div>
                  </div>
                  <div className='my_tournament-rule'>
                    <i class="fa fa-gavel rule-icon" aria-hidden="true" onClick={handleOpen}></i>
                  </div>
                </div>
              
            </div>
            {/* Second Card begins here */}
            <div className='myBookings_innerdiv'>
              
                <div className='myBookings_innerpositiondiv'>
                  <h4>Organization2</h4>
                  <Link to='/MyBookingInfo'>
                  <div className='myBookings_innerimagetextflex'>
                    <div className='myBookings_imagebox'>
                      <img src={my_img} alt='fleximg' />
                    </div>
                    <div className='myBookings_textbox'>
                      <div className='myBookings_textbox_poolflex'>
                        <div className='myBookings_textbox_poolflex__prize'>
                          <h6>MATCH TIME</h6>
                          <p>3:00</p>
                        </div>
                        <div className='myBookings_textbox_poolflex__horizontal-div'>

                        </div>
                        <div className='myBookings_textbox_poolflex__prize__entry-fee'>
                          <h6>IDP TIME</h6>
                          <p>1:00</p>
                        </div>
                      </div>
                      <div className='myBookings_match'>
                        <p>MATCH DATE : 05-08-2022</p>
                      </div>
                      <progress value="3333" max="10000" className='myBookings_progress'></progress>
                      <div className="myBookings_textbox_progresstextflex">
                        <div>
                          <p>100 joined</p>
                        </div>
                        <div>
                          <p>400 spot left</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  </Link>
                  <div className='myBookings_blue-box'>
                    <div>
                      <a href=""><h5>HOSTED BY</h5></a>
                      <p>E-SPORTS TEAM</p>
                    </div>
                    <div className='myBookings_verticaldiv2'>

                    </div>
                    <div>
                      <a href=""><h5>REG NOW</h5></a>
                    </div>
                  </div>
                  <div className='my_tournament-rule'>
                    <i class="fa fa-gavel rule-icon" aria-hidden="true" onClick={handleOpen}></i>
                  </div>
                </div>
            </div>
          </div>
          {/* Second card flex box portion begins here */}
          <div className='myBookings_outerflex'>
            {/* Third card  wrapper */}
            <div className='myBookings_innerdiv'>
              
                <div className='myBookings_innerpositiondiv'>
                  <h4>Organization3</h4>
                  <Link to='/MyBookingInfo'>
                  <div className='myBookings_innerimagetextflex'>
                    <div className='myBookings_imagebox'>
                      <img src={my_img} alt='fleximg' />
                    </div>
                    <div className='myBookings_textbox'>
                      <div className='myBookings_textbox_poolflex'>
                        <div className='myBookings_textbox_poolflex__prize'>
                          <h6>MATCH TIME</h6>
                          <p>3:00</p>
                        </div>
                        <div className='myBookings_textbox_poolflex__horizontal-div'>

                        </div>
                        <div className='myBookings_textbox_poolflex__prize__entry-fee'>
                          <h6>IDP TIME</h6>
                          <p>1:00</p>
                        </div>
                      </div>
                      <div className='myBookings_match'>
                        <p>MATCH DATE : 05-08-2022</p>
                      </div>
                      <progress value="3333" max="10000" className='myBookings_progress'></progress>
                      <div className="myBookings_textbox_progresstextflex">
                        <div>
                          <p>100 joined</p>
                        </div>
                        <div>
                          <p>400 spot left</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  </Link>
                  <div className='myBookings_blue-box'>
                    <div>
                      <a href="#"><h5>HOSTED BY</h5></a>
                      <p>E-SPORTS TEAM</p>
                    </div>
                    <div className='myBookings_verticaldiv2'>

                    </div>
                    <div>
                      <a href="#"><h5>REG NOW</h5></a>
                    </div>
                  </div>
                  <div className='my_tournament-rule'>
                    <i class="fa fa-gavel rule-icon" aria-hidden="true" onClick={handleOpen}></i>
                  </div>
                </div>
              
            </div>
            {/* Fourth card  */}
            <div className='myBookings_innerdiv'>
              
                <div className='myBookings_innerpositiondiv'>
                  <h4>Organization4</h4>
                  <Link to='/MyBookingInfo'>
                  <div className='myBookings_innerimagetextflex'>
                    <div className='myBookings_imagebox'>
                      <img src={my_img} alt='fleximg' />
                    </div>
                    <div className='myBookings_textbox'>
                      <div className='myBookings_textbox_poolflex'>
                        <div className='myBookings_textbox_poolflex__prize'>
                          <h6>MATCH TIME</h6>
                          <p>3:00</p>
                        </div>
                        <div className='myBookings_textbox_poolflex__horizontal-div'>

                        </div>
                        <div className='myBookings_textbox_poolflex__prize__entry-fee'>
                          <h6>IDP TIME</h6>
                          <p>1:00</p>
                        </div>
                      </div>
                      <div className='myBookings_match'>
                        <p>MATCH DATE : 05-08-2022</p>
                      </div>
                      <progress value="3333" max="10000" className='myBookings_progress'></progress>
                      <div className="myBookings_textbox_progresstextflex">
                        <div>
                          <p>100 joined</p>
                        </div>
                        <div>
                          <p>400 spot left</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  </Link>
                  <div className='myBookings_blue-box'>
                    <div>
                      <a href="#"><h5>HOSTED BY</h5></a>
                      <p>E-SPORTS TEAM</p>
                    </div>
                    <div className='myBookings_verticaldiv2'>

                    </div>
                    <div>
                      <a href=""><h5>REG NOW</h5></a>
                    </div>
                  </div>
                  <div className='my_tournament-rule'>
                    <i class="fa fa-gavel rule-icon" aria-hidden="true" onClick={handleOpen}></i>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </div>
      {/* Modal for rules dialouge box for rules*/}
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
          <Typography id="modal-modal-description" className='rules_modal' sx={{ mt: 2 }} style={{ height: '30rem', overflow: 'scroll' }} >

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
      <Footer />
    </div>
  )
}
export default Mybookings
