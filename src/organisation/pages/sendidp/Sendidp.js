import React from 'react'
import Dashboard from '../../components/header/Dashboard';
import Footer from '../../components/footer/Footer';

import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';


import './Sendidp.css'


import {
  Link,
} from 'react-router-dom';


//IMAGES
import matchImg1 from '../../assets/myMatches/pubg1.png'
import matchImg2 from '../../assets/myMatches/pubg2.webp'
import matchImg3 from '../../assets/myMatches/cod.jpg'




//mui
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';






//start modal style 
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



const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

//end modal style




function Sendidp() {




  //start modal functions
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  //end modal functions




  return (
    <div className='sendIdpPage'>
      <div>
        <Dashboard />
      </div>
      {/* header  */}
      <div className='idp_header'>
        <h1>send IDP</h1>
      </div>
      {/* end Header */}
      {/* start idp card section */}


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
                  <div className='mymatches-team-img' >
                    <img src={matchImg3} />
                  </div>
                  <div className='mymatches-rule'>
                    <i class="fa fa-gavel rule-icon" onClick={handleOpen} aria-hidden="true"></i>

                  </div>
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

                  <div className='mymatches-time-section'>
                    <h6>match time</h6>
                    <p className='match-time'>3:00</p>
                    <span>idp time</span>
                    <p className='idp-time'>2:45</p>
                  </div>
                  <div className='mymatches-date'>
                    <p className='mymatches-matchtitle'>Match date</p>
                    <span classname="mymatches-matchdate">16-01-2022</span>
                  </div>
                  <div className='mymatches-progress-bar'>
                    <progress value="3333" max="10000">

                    </progress>

                    <p className='progressbar-left-text'>100 Joined</p>
                    <p className='progressbar-right-text'>400 Spot left</p>
                  </div>
                  <div className='mymatches-reg-section'>
                    <h6>Hosted By</h6>
                    <p>E-Sports Team</p>

                    {/* <a >reg now</a> */}
                    <Link to={'/idp_page'} >IDP</Link>
                  </div>
                </div>
              </div>
              <div className='mymatches-carditems'>
                <div class="mymatches-card">
                  <div className='mymatches-main-titile'>
                    <h3>Tournament name</h3>
                  </div>
                  <div className='mymatches-team-img'>
                    <img src={matchImg3} />
                  </div>
                  <div className='mymatches-rule'>
                    <i class="fa fa-gavel rule-icon" onClick={handleOpen} aria-hidden="true"></i>

                  </div>

                  <div className='mymatches-time-section'>
                    <h6>match time</h6>
                    <p className='match-time'>3:00</p>
                    <span>idp time</span>
                    <p className='idp-time'>2:45</p>
                  </div>
                  <div className='mymatches-date'>
                    <p className='mymatches-matchtitle'>Match date</p>
                    <span classname="mymatches-matchdate">16-01-2022</span>
                  </div>
                  <div className='mymatches-progress-bar'>
                    <progress value="3333" max="10000">

                    </progress>

                    <p className='progressbar-left-text'>100 Joined</p>
                    <p className='progressbar-right-text'>400 Spot left</p>
                  </div>
                  <div className='mymatches-reg-section'>
                    <h6>Hosted By</h6>
                    <p>E-Sports Team</p>

                    {/* <a >reg now</a> */}
                    <Link to={'/idp_page'} >IDP</Link>
                  </div>
                </div>
              </div>
              <div className='mymatches-carditems'>
                <div class="mymatches-card">
                  <div className='mymatches-main-titile'>
                    <h3>Tournament name</h3>
                  </div>
                  <div className='mymatches-team-img'>
                    <img src={matchImg3} />
                  </div>
                  <div className='mymatches-rule'>
                    <i class="fa fa-gavel rule-icon" onClick={handleOpen} aria-hidden="true"></i>

                  </div>

                  <div className='mymatches-time-section'>
                    <h6>match time</h6>
                    <p className='match-time'>3:00</p>
                    <span>idp time</span>
                    <p className='idp-time'>2:45</p>
                  </div>
                  <div className='mymatches-date'>
                    <p className='mymatches-matchtitle'>Match date</p>
                    <span classname="mymatches-matchdate">16-01-2022</span>
                  </div>
                  <div className='mymatches-progress-bar'>
                    <progress value="3333" max="10000">

                    </progress>

                    <p className='progressbar-left-text'>100 Joined</p>
                    <p className='progressbar-right-text'>400 Spot left</p>
                  </div>
                  <div className='mymatches-reg-section'>
                    <h6>Hosted By</h6>
                    <p>E-Sports Team</p>

                    {/* <a >reg now</a> */}
                    <Link to={'/idp_page'} >IDP</Link>
                  </div>
                </div>
              </div>
              <div className='mymatches-carditems'>
                <div class="mymatches-card">
                  <div className='mymatches-main-titile'>
                    <h3>Tournament name</h3>
                  </div>
                  <div className='mymatches-team-img'>
                    <img src={matchImg3} />
                  </div>
                  <div className='mymatches-rule'>
                    <i class="fa fa-gavel rule-icon" onClick={handleOpen} aria-hidden="true"></i>

                  </div>

                  <div className='mymatches-time-section'>
                    <h6>match time</h6>
                    <p className='match-time'>3:00</p>
                    <span>idp time</span>
                    <p className='idp-time'>2:45</p>
                  </div>
                  <div className='mymatches-date'>
                    <p className='mymatches-matchtitle'>Match date</p>
                    <span classname="mymatches-matchdate">16-01-2022</span>
                  </div>
                  <div className='mymatches-progress-bar'>
                    <progress value="3333" max="10000">

                    </progress>

                    <p className='progressbar-left-text'>100 Joined</p>
                    <p className='progressbar-right-text'>400 Spot left</p>
                  </div>
                  <div className='mymatches-reg-section'>
                    <h6>Hosted By</h6>
                    <p>E-Sports Team</p>

                    {/* <a >reg now</a> */}
                    <Link to={'/idp_page'} >IDP</Link>
                  </div>
                </div>
              </div>
              <div className='mymatches-carditems'>
                <div class="mymatches-card">
                  <div className='mymatches-main-titile'>
                    <h3>Tournament name</h3>
                  </div>
                  <div className='mymatches-team-img'>
                    <img src={matchImg3} />
                  </div>
                  <div className='mymatches-rule'>
                    <i class="fa fa-gavel rule-icon" onClick={handleOpen} aria-hidden="true"></i>

                  </div>

                  <div className='mymatches-time-section'>
                    <h6>match time</h6>
                    <p className='match-time'>3:00</p>
                    <span>idp time</span>
                    <p className='idp-time'>2:45</p>
                  </div>
                  <div className='mymatches-date'>
                    <p className='mymatches-matchtitle'>Match date</p>
                    <span classname="mymatches-matchdate">16-01-2022</span>
                  </div>
                  <div className='mymatches-progress-bar'>
                    <progress value="3333" max="10000">

                    </progress>

                    <p className='progressbar-left-text'>100 Joined</p>
                    <p className='progressbar-right-text'>400 Spot left</p>
                  </div>
                  <div className='mymatches-reg-section'>
                    <h6>Hosted By</h6>
                    <p>E-Sports Team</p>

                    {/* <a >reg now</a> */}
                    <Link to={'/idp_page'} >IDP</Link>
                  </div>
                </div>
              </div>
              <div className='mymatches-carditems'>
                <div class="mymatches-card">
                  <div className='mymatches-main-titile'>
                    <h3>Tournament name</h3>
                  </div>
                  <div className='mymatches-team-img'>
                    <img src={matchImg3} />
                  </div>
                  <div className='mymatches-rule'>
                    <i class="fa fa-gavel rule-icon" onClick={handleOpen} aria-hidden="true"></i>

                  </div>

                  <div className='mymatches-time-section'>
                    <h6>match time</h6>
                    <p className='match-time'>3:00</p>
                    <span>idp time</span>
                    <p className='idp-time'>2:45</p>
                  </div>
                  <div className='mymatches-date'>
                    <p className='mymatches-matchtitle'>Match date</p>
                    <span classname="mymatches-matchdate">16-01-2022</span>
                  </div>
                  <div className='mymatches-progress-bar'>
                    <progress value="3333" max="10000">

                    </progress>

                    <p className='progressbar-left-text'>100 Joined</p>
                    <p className='progressbar-right-text'>400 Spot left</p>
                  </div>
                  <div className='mymatches-reg-section'>
                    <h6>Hosted By</h6>
                    <p>E-Sports Team</p>

                    {/* <a >reg now</a> */}
                    <Link to={'/idp_page'} >IDP</Link>
                  </div>
                </div>
              </div>
              <div className='mymatches-carditems'>
                <div class="mymatches-card">
                  <div className='mymatches-main-titile'>
                    <h3>Tournament name</h3>
                  </div>
                  <div className='mymatches-team-img'>
                    <img src={matchImg3} />
                  </div>
                  <div className='mymatches-rule'>
                    <i class="fa fa-gavel rule-icon" onClick={handleOpen} aria-hidden="true"></i>

                  </div>

                  <div className='mymatches-time-section'>
                    <h6>match time</h6>
                    <p className='match-time'>3:00</p>
                    <span>idp time</span>
                    <p className='idp-time'>2:45</p>
                  </div>
                  <div className='mymatches-date'>
                    <p className='mymatches-matchtitle'>Match date</p>
                    <span classname="mymatches-matchdate">16-01-2022</span>
                  </div>
                  <div className='mymatches-progress-bar'>
                    <progress value="3333" max="10000">

                    </progress>

                    <p className='progressbar-left-text'>100 Joined</p>
                    <p className='progressbar-right-text'>400 Spot left</p>
                  </div>
                  <div className='mymatches-reg-section'>
                    <h6>Hosted By</h6>
                    <p>E-Sports Team</p>

                    {/* <a >reg now</a> */}
                    <Link to={'/idp_page'} >IDP</Link>
                  </div>
                </div>
              </div>
              <div className='mymatches-carditems'>
                <div class="mymatches-card">
                  <div className='mymatches-main-titile'>
                    <h3>Tournament name</h3>
                  </div>
                  <div className='mymatches-team-img'>
                    <img src={matchImg3} />
                  </div>
                  <div className='mymatches-rule'>
                    <i class="fa fa-gavel rule-icon" onClick={handleOpen} aria-hidden="true"></i>

                  </div>

                  <div className='mymatches-time-section'>
                    <h6>match time</h6>
                    <p className='match-time'>3:00</p>
                    <span>idp time</span>
                    <p className='idp-time'>2:45</p>
                  </div>
                  <div className='mymatches-date'>
                    <p className='mymatches-matchtitle'>Match date</p>
                    <span classname="mymatches-matchdate">16-01-2022</span>
                  </div>
                  <div className='mymatches-progress-bar'>
                    <progress value="3333" max="10000">

                    </progress>

                    <p className='progressbar-left-text'>100 Joined</p>
                    <p className='progressbar-right-text'>400 Spot left</p>
                  </div>
                  <div className='mymatches-reg-section'>
                    <h6>Hosted By</h6>
                    <p>E-Sports Team</p>

                    {/* <a >reg now</a> */}
                    <Link to={'/idp_page'} >IDP</Link>
                  </div>
                </div>
              </div><div className='mymatches-carditems'>
                <div class="mymatches-card">
                  <div className='mymatches-main-titile'>
                    <h3>Tournament name</h3>
                  </div>
                  <div className='mymatches-team-img'>
                    <img src={matchImg3} />
                  </div>
                  <div className='mymatches-rule'>
                    <i class="fa fa-gavel rule-icon" onClick={handleOpen} aria-hidden="true"></i>

                  </div>

                  <div className='mymatches-time-section'>
                    <h6>match time</h6>
                    <p className='match-time'>3:00</p>
                    <span>idp time</span>
                    <p className='idp-time'>2:45</p>
                  </div>
                  <div className='mymatches-date'>
                    <p className='mymatches-matchtitle'>Match date</p>
                    <span classname="mymatches-matchdate">16-01-2022</span>
                  </div>
                  <div className='mymatches-progress-bar'>
                    <progress value="3333" max="10000">

                    </progress>

                    <p className='progressbar-left-text'>100 Joined</p>
                    <p className='progressbar-right-text'>400 Spot left</p>
                  </div>
                  <div className='mymatches-reg-section'>
                    <h6>Hosted By</h6>
                    <p>E-Sports Team</p>

                    {/* <a >reg now</a> */}
                    <Link to={'/idp_page'} >IDP</Link>
                  </div>
                </div>
              </div><div className='mymatches-carditems'>
                <div class="mymatches-card">
                  <div className='mymatches-main-titile'>
                    <h3>Tournament name</h3>
                  </div>
                  <div className='mymatches-team-img'>
                    <img src={matchImg3} />
                  </div>
                  <div className='mymatches-rule'>
                    <i class="fa fa-gavel rule-icon" onClick={handleOpen} aria-hidden="true"></i>

                  </div>

                  <div className='mymatches-time-section'>
                    <h6>match time</h6>
                    <p className='match-time'>3:00</p>
                    <span>idp time</span>
                    <p className='idp-time'>2:45</p>
                  </div>
                  <div className='mymatches-date'>
                    <p className='mymatches-matchtitle'>Match date</p>
                    <span classname="mymatches-matchdate">16-01-2022</span>
                  </div>
                  <div className='mymatches-progress-bar'>
                    <progress value="3333" max="10000">

                    </progress>

                    <p className='progressbar-left-text'>100 Joined</p>
                    <p className='progressbar-right-text'>400 Spot left</p>
                  </div>
                  <div className='mymatches-reg-section'>
                    <h6>Hosted By</h6>
                    <p>E-Sports Team</p>

                    {/* <a >reg now</a> */}
                    <Link to={'/idp_page'} >IDP</Link>
                  </div>
                </div>
              </div>



            </div>

          </div>
        </div>
      </div>
      {/* end send idp card portion */}


      {/* 
      <Container maxWidth="xl">
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={1}>
            <Grid item xl={3} lg={3} md={6} sm={6} xs={12} mb={4}>
              <div className='idpp_card'>
                <div className='pro_img'>
                  <img src={matchImg1} alt="" />
                </div>
                <div className='main_title'>
                  <h3>Tournament name</h3>
                </div>
                <div className='idp_rule'>
                  <i class="fa fa-gavel rule-icon" onClick={handleOpen} aria-hidden="true"></i>


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

                </div>
                <div className='idp_price_section'>
                  <h6>Prize Pool</h6>
                  <p className='prize-pool'>300</p>
                  <span>Entry Fee</span>
                  <p className='entry-fee'>100</p>
                </div>
                <div className='idp_tour_progress-bar'>
                  <progress className='idp_page_progressbar' value="3333" max="10000">

                  </progress>
                  <div className='idp_slot_space2'>
                    <span>100 joined</span>
                    <span>400 spot left</span>
                  </div>
                </div>
                <div className='idp_tour-reg-section2' id='tour_reg'>
                  <h6>Hosted By</h6>
                  <p>E-Sports Team</p>

                  <Link to={"/idp_page"} >IDP</Link>

                </div>

              </div>
            </Grid>
            <Grid item xl={3} lg={3} md={6} sm={6} xs={12}>
              <div className='idpp_card'>
                <div className='pro_img'>
                  <img src={matchImg1} alt="" />
                </div>
                <div className='main_title'>
                  <h3>Tournament name</h3>
                </div>
                <div className='idp_rule'>
                  <i class="fa fa-gavel rule-icon" onClick={handleOpen} aria-hidden="true"></i>


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

                </div>
                <div className='idp_price_section'>
                  <h6>Prize Pool</h6>
                  <p className='prize-pool'>300</p>
                  <span>Entry Fee</span>
                  <p className='entry-fee'>100</p>
                </div>
                <div className='idp_tour_progress-bar'>
                  <progress className='idp_page_progressbar' value="3333" max="10000">

                  </progress>
                  <div className='idp_slot_space2'>
                    <span>100 joined</span>
                    <span>400 spot left</span>
                  </div>
                </div>
                <div className='idp_tour-reg-section2' id='tour_reg'>
                  <h6>Hosted By</h6>
                  <p>E-Sports Team</p>

                  <Link to={"/idp_page"} >IDP</Link>

                </div>

              </div>
            </Grid>
            <Grid item xl={3} lg={3} md={6} sm={6} xs={12}>
              <div className='idpp_card'>
                <div className='pro_img'>
                  <img src={matchImg1} alt="" />
                </div>
                <div className='main_title'>
                  <h3>Tournament name</h3>
                </div>
                <div className='idp_rule'>
                  <i class="fa fa-gavel rule-icon" onClick={handleOpen} aria-hidden="true"></i>


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

                </div>
                <div className='idp_price_section'>
                  <h6>Prize Pool</h6>
                  <p className='prize-pool'>300</p>
                  <span>Entry Fee</span>
                  <p className='entry-fee'>100</p>
                </div>
                <div className='idp_tour_progress-bar'>
                  <progress className='idp_page_progressbar' value="3333" max="10000">

                  </progress>
                  <div className='idp_slot_space2'>
                    <span>100 joined</span>
                    <span>400 spot left</span>
                  </div>
                </div>
                <div className='idp_tour-reg-section2' id='tour_reg'>
                  <h6>Hosted By</h6>
                  <p>E-Sports Team</p>

                  <Link to={"/idp_page"} >IDP</Link>

                </div>

              </div>
            </Grid>
            <Grid item xl={3} lg={3} md={6} sm={6} xs={12}>
              <div className='idpp_card'>
                <div className='pro_img'>
                  <img src={matchImg1} alt="" />
                </div>
                <div className='main_title'>
                  <h3>Tournament name</h3>
                </div>
                <div className='idp_rule'>
                  <i class="fa fa-gavel rule-icon" onClick={handleOpen} aria-hidden="true"></i>


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

                </div>
                <div className='idp_price_section'>
                  <h6>Prize Pool</h6>
                  <p className='prize-pool'>300</p>
                  <span>Entry Fee</span>
                  <p className='entry-fee'>100</p>
                </div>
                <div className='idp_tour_progress-bar'>
                  <progress className='idp_page_progressbar' value="3333" max="10000">

                  </progress>
                  <div className='idp_slot_space2'>
                    <span>100 joined</span>
                    <span>400 spot left</span>
                  </div>
                </div>
                <div className='idp_tour-reg-section2' id='tour_reg'>
                  <h6>Hosted By</h6>
                  <p>E-Sports Team</p>

                  <Link to={"/idp_page"} >IDP</Link>

                </div>

              </div>
            </Grid>
            <Grid item xl={3} lg={3} md={6} sm={6} xs={12}>
              <div className='idpp_card'>
                <div className='pro_img'>
                  <img src={matchImg1} alt="" />
                </div>
                <div className='main_title'>
                  <h3>Tournament name</h3>
                </div>
                <div className='idp_rule'>
                  <i class="fa fa-gavel rule-icon" onClick={handleOpen} aria-hidden="true"></i>


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

                </div>
                <div className='idp_price_section'>
                  <h6>Prize Pool</h6>
                  <p className='prize-pool'>300</p>
                  <span>Entry Fee</span>
                  <p className='entry-fee'>100</p>
                </div>
                <div className='idp_tour_progress-bar'>
                  <progress className='idp_page_progressbar' value="3333" max="10000">

                  </progress>
                  <div className='idp_slot_space2'>
                    <span>100 joined</span>
                    <span>400 spot left</span>
                  </div>
                </div>
                <div className='idp_tour-reg-section2' id='tour_reg'>
                  <h6>Hosted By</h6>
                  <p>E-Sports Team</p>

                  <Link to={"/idp_page"} >IDP</Link>

                </div>

              </div>
            </Grid>

          </Grid>
        </Box>
      </Container> */}


      <div>
        <Footer />
      </div>
    </div>
  )
}

export default Sendidp
