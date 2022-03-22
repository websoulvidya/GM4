import React, { useLayoutEffect } from 'react'
import Dashboard from '../../components/header/Dashboard';
import Footer from '../../components/footer/Footer';
import './Mymatches.css'
//card images
import matchImg1 from '../../assets/myMatches/pubg1.png'
import matchImg2 from '../../assets/myMatches/pubg2.webp'
import matchImg3 from '../../assets/myMatches/cod.jpg'
import matchImg4 from '../../assets/myMatches/img3.jpeg'
import matchImg5 from '../../assets/myMatches/img4.jpg'
import matchImg6 from '../../assets/myMatches/img5.jpg'


//modal imports

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Container } from '@mui/material';

import Edit_match from './Edit_match';

import {
  Link,
} from 'react-router-dom';


// modal style

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


function Mymatches() {
  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  });
  //start modal functions
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  //end modal functions



  return (

    <div className='mymathes_page'>
      <Dashboard />

      {/* start header section */}
      <div className='mymatches_headerclip'>
        <h1>My matches</h1>
      </div>
      {/* end header sectioin */}




      {/* start matches section */}
      <div className='mymatches_tournament-main-wrapper'>
        <div className='mymatches_tournament-card-list'>
          {/* 2 */}
          <div className='cancel-card-list'>
            <div class="uk-child-width-1-4@l uk-child-width-1-3@m uk-grid uk-text-center main-card" id='ukk-grid' uk-grid>
              <div className='mymatches-carditems'>
                <div class="mymatches-card">
                  <div className='mymatches-main-titile'>
                    <h3>Tournament name</h3>
                  </div>
                  {/* team image */}
                  <div className='mymatches-team-img'>
                    <img src={matchImg6} />
                  </div>
                  {/* end team image */}
                  <div className='mymatches-rule'>

                    <i class="fa fa-gavel rule-icon" onClick={handleOpen} ></i>
                  </div>
                  {/* start modal */}
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
                      <Typography id="Mymatches-modal-modal-description" className='rules_modal' sx={{ mt: 2 }} style={{ height: '30rem', overflow: 'scroll' }} >

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
                  {/* end modal */}

                  <div className='mymatches-time-section'>
                    <h6>Price Pool</h6>
                    <p className='Mymatches-match-time'>5500</p>
                    <span>Entry Fee</span>
                    <p className='Mymatches-idp-time'>2000</p>
                  </div>
                  <div className='mymatches-date'>
                    <p className='mymatches-matchtitle'>Match date</p>
                    <span classname="mymatches-matchdate">16-01-2022</span>
                  </div>
                  <div className='mymatches-progress-bar'>
                    <progress value="3333" max="10000">

                    </progress>

                    <p className='Mymatches-progressbar-left-text'>100 Joined</p>
                    <p className='Mymatches-progressbar-right-text'>400 Spot left</p>
                  </div>
                  <div className='mymatches-reg-section'>
                    <h6>Hosted By</h6>
                    <p>E-Sports Team</p>

                    {/* <a >reg now</a> */}
                    <Link to={'/edit_match'} >EDIT</Link>
                  </div>
                </div>
              </div>
              <div className='mymatches-carditems'>
                <div class="mymatches-card">
                  <div className='mymatches-main-titile'>
                    <h3>Tournament name</h3>
                  </div>
                  {/* team image */}
                  <div className='mymatches-team-img'>
                    <img src={matchImg6} />
                  </div>
                  {/* end team image */}
                  <div className='mymatches-rule'>

                    <i class="fa fa-gavel rule-icon" onClick={handleOpen} ></i>
                  </div>
                  {/* start modal */}
                  <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"

                  >
                    <Box sx={style} className='Mymatches-modal_box' >
                      <Typography id="modal-modal-title" variant="h6" component="h2">
                        Rules
                      </Typography>
                      <Typography id="MyMatches-modal-modal-description" className='Mymatches-rules_modal' sx={{ mt: 2 }} style={{ height: '31rem', overflow: 'scroll' }} >

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
                  {/* end modal */}

                  <div className='mymatches-time-section'>
                    <h6>Price Pool</h6>
                    <p className='Mymatches-match-time'>5500</p>
                    <span>Entry Fee</span>
                    <p className='Mymatches-idp-time'>2000</p>
                  </div>
                  <div className='mymatches-date'>
                    <p className='mymatches-matchtitle'>Match date</p>
                    <span classname="mymatches-matchdate">16-01-2022</span>
                  </div>
                  <div className='mymatches-progress-bar'>
                    <progress value="3333" max="10000">

                    </progress>

                    <p className='Mymatches-progressbar-left-text'>100 Joined</p>
                    <p className='Mymatches-progressbar-right-text'>400 Spot left</p>
                  </div>
                  <div className='mymatches-reg-section'>
                    <h6>Hosted By</h6>
                    <p>E-Sports Team</p>

                    {/* <a >reg now</a> */}
                    <Link to={'/edit_match'} >EDIT</Link>
                  </div>
                </div>
              </div>
              <div className='mymatches-carditems'>
                <div class="mymatches-card">
                  <div className='mymatches-main-titile'>
                    <h3>Tournament name</h3>
                  </div>
                  <div className='mymatches-team-img' >
                    <img src={matchImg6} />
                  </div>
                  <div className='mymatches-rule'>
                    <i class="fa fa-gavel rule-icon" onClick={handleOpen} aria-hidden="true"></i>

                  </div>

                  <div className='mymatches-time-section'>
                    <h6>match time</h6>
                    <p className='Mymatches-match-time'>3:00</p>
                    <span>idp time</span>
                    <p className='Mymatches-idp-time'>2:45</p>
                  </div>
                  <div className='mymatches-date'>
                    <p className='mymatches-matchtitle'>Match date</p>
                    <span classname="mymatches-matchdate">16-01-2022</span>
                  </div>
                  <div className='mymatches-progress-bar'>
                    <progress value="3333" max="10000">

                    </progress>

                    <p className='Mymatches-progressbar-left-text'>100 Joined</p>
                    <p className='Mymatches-progressbar-right-text'>400 Spot left</p>
                  </div>
                  <div className='mymatches-reg-section'>
                    <h6>Hosted By</h6>
                    <p>E-Sports Team</p>

                    {/* <a >reg now</a> */}
                    <Link to={'/edit_match'} >EDIT</Link>
                  </div>
                </div>
              </div>
              <div className='mymatches-carditems'>
                <div class="mymatches-card">
                  <div className='mymatches-main-titile'>
                    <h3>Tournament name</h3>
                  </div>
                  <div className='mymatches-team-img' >
                    <img src={matchImg6} />
                  </div>
                  <div className='mymatches-rule'>
                    <i class="fa fa-gavel rule-icon" aria-hidden="true" onClick={handleOpen}></i>

                  </div>

                  <div className='mymatches-time-section'>
                    <h6>match time</h6>
                    <p className='Mymatches-match-time'>3:00</p>
                    <span>idp time</span>
                    <p className='Mymatches-idp-time'>2:45</p>
                  </div>
                  <div className='mymatches-date'>
                    <p className='mymatches-matchtitle'>Match date</p>
                    <span classname="mymatches-matchdate">16-01-2022</span>
                  </div>
                  <div className='mymatches-progress-bar'>
                    <progress value="3333" max="10000">

                    </progress>

                    <p className='Mymatches-progressbar-left-text'>100 Joined</p>
                    <p className='Mymatches-progressbar-right-text'>400 Spot left</p>
                  </div>
                  <div className='mymatches-reg-section'>
                    <h6>Hosted By</h6>
                    <p>E-Sports Team</p>

                    {/* <a >reg now</a> */}
                    <Link to={'/edit_match'} >EDIT</Link>
                  </div>
                </div>
              </div>
              <div className='mymatches-carditems'>
                <div class="mymatches-card">
                  <div className='mymatches-main-titile'>
                    <h3>Tournament name</h3>
                  </div>
                  <div className='mymatches-team-img' >
                    <img src={matchImg6} />
                  </div>
                  <div className='mymatches-rule'>
                    <i class="fa fa-gavel rule-icon" onClick={handleOpen} aria-hidden="true"></i>

                  </div>

                  <div className='mymatches-time-section'>
                    <h6>match time</h6>
                    <p className='Mymatches-match-time'>3:00</p>
                    <span>idp time</span>
                    <p className='Mymatches-idp-time'>2:45</p>
                  </div>
                  <div className='mymatches-date'>
                    <p className='mymatches-matchtitle'>Match date</p>
                    <span classname="mymatches-matchdate">16-01-2022</span>
                  </div>
                  <div className='mymatches-progress-bar'>
                    <progress value="3333" max="10000">

                    </progress>

                    <p className='Mymatches-progressbar-left-text'>100 Joined</p>
                    <p className='Mymatches-progressbar-right-text'>400 Spot left</p>
                  </div>
                  <div className='mymatches-reg-section'>
                    <h6>Hosted By</h6>
                    <p>E-Sports Team</p>

                    {/* <a >reg now</a> */}
                    <Link to={'/edit_match'} >EDIT</Link>
                  </div>
                </div>
              </div>
              <div className='mymatches-carditems'>
                <div class="mymatches-card">
                  <div className='mymatches-main-titile'>
                    <h3>Tournament name</h3>
                  </div>
                  <div className='mymatches-team-img' >
                    <img src={matchImg6} />
                  </div>
                  <div className='mymatches-rule'>
                    <i class="fa fa-gavel rule-icon" onClick={handleOpen} aria-hidden="true"></i>

                  </div>

                  <div className='mymatches-time-section'>
                    <h6>match time</h6>
                    <p className='Mymatches-match-time'>3:00</p>
                    <span>idp time</span>
                    <p className='Mymatches-idp-time'>2:45</p>
                  </div>
                  <div className='mymatches-date'>
                    <p className='mymatches-matchtitle'>Match date</p>
                    <span classname="mymatches-matchdate">16-01-2022</span>
                  </div>
                  <div className='mymatches-progress-bar'>
                    <progress value="3333" max="10000">

                    </progress>

                    <p className='Mymatches-progressbar-left-text'>100 Joined</p>
                    <p className='Mymatches-progressbar-right-text'>400 Spot left</p>
                  </div>
                  <div className='mymatches-reg-section'>
                    <h6>Hosted By</h6>
                    <p>E-Sports Team</p>

                    {/* <a >reg now</a> */}
                    <Link to={'/edit_match'} >EDIT</Link>
                  </div>
                </div>
              </div>
              <div className='mymatches-carditems'>
                <div class="mymatches-card">
                  <div className='mymatches-main-titile'>
                    <h3>Tournament name</h3>
                  </div>
                  <div className='mymatches-team-img'>
                    <img src={matchImg6} />
                  </div>
                  <div className='mymatches-rule'>
                    <i class="fa fa-gavel rule-icon" onClick={handleOpen} aria-hidden="true"></i>

                  </div>

                  <div className='mymatches-time-section'>
                    <h6>match time</h6>
                    <p className='Mymatches-match-time'>3:00</p>
                    <span>idp time</span>
                    <p className='Mymatches-idp-time'>2:45</p>
                  </div>
                  <div className='mymatches-date'>
                    <p className='mymatches-matchtitle'>Match date</p>
                    <span classname="mymatches-matchdate">16-01-2022</span>
                  </div>
                  <div className='mymatches-progress-bar'>
                    <progress value="3333" max="10000">

                    </progress>

                    <p className='Mymatches-progressbar-left-text'>100 Joined</p>
                    <p className='Mymatches-progressbar-right-text'>400 Spot left</p>
                  </div>
                  <div className='mymatches-reg-section'>
                    <h6>Hosted By</h6>
                    <p>E-Sports Team</p>

                    {/* <a >reg now</a> */}
                    <Link to={'/edit_match'} >EDIT</Link>
                  </div>
                </div>
              </div>
              <div className='mymatches-carditems'>
                <div class="mymatches-card">
                  <div className='mymatches-main-titile'>
                    <h3>Tournament name</h3>
                  </div>
                  <div className='mymatches-team-img'>
                    <img src={matchImg6} />
                  </div>
                  <div className='mymatches-rule'>
                    <i class="fa fa-gavel rule-icon" onClick={handleOpen} aria-hidden="true"></i>

                  </div>

                  <div className='mymatches-time-section'>
                    <h6>match time</h6>
                    <p className='Mymatches-match-time'>3:00</p>
                    <span>idp time</span>
                    <p className='Mymatches-idp-time'>2:45</p>
                  </div>
                  <div className='mymatches-date'>
                    <p className='mymatches-matchtitle'>Match date</p>
                    <span classname="mymatches-matchdate">16-01-2022</span>
                  </div>
                  <div className='mymatches-progress-bar'>
                    <progress value="3333" max="10000">

                    </progress>

                    <p className='Mymatches-progressbar-left-text'>100 Joined</p>
                    <p className='Mymatches-progressbar-right-text'>400 Spot left</p>
                  </div>
                  <div className='mymatches-reg-section'>
                    <h6>Hosted By</h6>
                    <p>E-Sports Team</p>

                    {/* <a >reg now</a> */}
                    <Link to={'/edit_match'} >EDIT</Link>
                  </div>
                </div>
              </div>
              <div className='mymatches-carditems'>
                <div class="mymatches-card">
                  <div className='mymatches-main-titile'>
                    <h3>Tournament name</h3>
                  </div>
                  <div className='mymatches-team-img'>
                    <img src={matchImg6} />
                  </div>
                  <div className='mymatches-rule'>
                    <i class="fa fa-gavel rule-icon" onClick={handleOpen} aria-hidden="true"></i>

                  </div>

                  <div className='mymatches-time-section'>
                    <h6>match time</h6>
                    <p className='Mymatches-match-time'>3:00</p>
                    <span>idp time</span>
                    <p className='Mymatches-idp-time'>2:45</p>
                  </div>
                  <div className='mymatches-date'>
                    <p className='mymatches-matchtitle'>Match date</p>
                    <span classname="mymatches-matchdate">16-01-2022</span>
                  </div>
                  <div className='mymatches-progress-bar'>
                    <progress value="3333" max="10000">

                    </progress>

                    <p className='Mymatches-progressbar-left-text'>100 Joined</p>
                    <p className='Mymatches-progressbar-right-text'>400 Spot left</p>
                  </div>
                  <div className='mymatches-reg-section'>
                    <h6>Hosted By</h6>
                    <p>E-Sports Team</p>

                    {/* <a >reg now</a> */}
                    <Link to={'/edit_match'} >EDIT</Link>
                  </div>
                </div>
              </div><div className='mymatches-carditems'>
                <div class="mymatches-card">
                  <div className='mymatches-main-titile'>
                    <h3>Tournament name</h3>
                  </div>
                  <div className='mymatches-team-img'>
                    <img src={matchImg6} />
                  </div>
                  <div className='mymatches-rule'>
                    <i class="fa fa-gavel rule-icon" onClick={handleOpen} aria-hidden="true"></i>

                  </div>

                  <div className='mymatches-time-section'>
                    <h6>match time</h6>
                    <p className='Mymatches-match-time'>3:00</p>
                    <span>idp time</span>
                    <p className='Mymatches-idp-time'>2:45</p>
                  </div>
                  <div className='mymatches-date'>
                    <p className='mymatches-matchtitle'>Match date</p>
                    <span classname="mymatches-matchdate">16-01-2022</span>
                  </div>
                  <div className='mymatches-progress-bar'>
                    <progress value="3333" max="10000">

                    </progress>

                    <p className='Mymatches-progressbar-left-text'>100 Joined</p>
                    <p className='Mymatches-progressbar-right-text'>400 Spot left</p>
                  </div>
                  <div className='mymatches-reg-section'>
                    <h6>Hosted By</h6>
                    <p>E-Sports Team</p>

                    {/* <a >reg now</a> */}
                    <Link to={'/edit_match'} >EDIT</Link>
                  </div>
                </div>
              </div><div className='mymatches-carditems'>
                <div class="mymatches-card">
                  <div className='mymatches-main-titile'>
                    <h3>Tournament name</h3>
                  </div>
                  <div className='mymatches-team-img'>
                    <img src={matchImg6} />
                  </div>
                  <div className='mymatches-rule'>
                    <i class="fa fa-gavel rule-icon" onClick={handleOpen} aria-hidden="true"></i>

                  </div>

                  <div className='mymatches-time-section'>
                    <h6>match time</h6>
                    <p className='Mymatches-match-time'>3:00</p>
                    <span>idp time</span>
                    <p className='Mymatches-idp-time'>2:45</p>
                  </div>
                  <div className='mymatches-date'>
                    <p className='mymatches-matchtitle'>Match date</p>
                    <span classname="mymatches-matchdate">16-01-2022</span>
                  </div>
                  <div className='mymatches-progress-bar'>
                    <progress value="3333" max="10000">

                    </progress>

                    <p className='Mymatches-progressbar-left-text'>100 Joined</p>
                    <p className='Mymatches-progressbar-right-text'>400 Spot left</p>
                  </div>
                  <div className='mymatches-reg-section'>
                    <h6>Hosted By</h6>
                    <p>E-Sports Team</p>

                    {/* <a >reg now</a> */}
                    <Link to={'/edit_match'} >EDIT</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
      {/* end matches section */}

      <Footer />
    </div>
  )
}

export default Mymatches
