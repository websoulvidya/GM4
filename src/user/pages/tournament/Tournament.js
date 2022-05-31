import React, { useLayoutEffect, useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Link, useNavigate } from 'react-router-dom';

import Userheader from '../../components/userheader/Userheader';
import Footer from '../../components/footer/Footer';
import "../../pages/tournament/Tournament.css";
import axios from "axios"

import TeamImg from "../../assets/homepage/team.jpeg";
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

function Tournament() {

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [tournamentList, setTournamentlist] = useState([])
  const [tournamentRegList, setTournamentReglist] = useState([])
  const token = localStorage.getItem('token')
  //console.log(token)
  // console.log(localStorage.getItem('id'))
  useEffect(() => {

    axios.get(`https://gm4-server.herokuapp.com/api/user/list/all/tournament/${localStorage.getItem('id')}`, { headers: { "Authorization": `Bearer ${token}` } }).then((response) => {

      setTournamentlist(response.data)

    }).catch(() => {
      console.log("Error")
    })
  }, [])

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
  return (

    <div className="tournament" style={{ width: "100%", margin: "0px", padding: "0px", overflowX: "hidden" }} id='tournament'>
      <Userheader />
      <div className='tournament-main-wrapper'>
        <div className='tournament_headerclip'>
          <h1>Tournament</h1>
        </div>
        <div className='tournament-card-list'>
          <div class="uk-child-width-1-4@l uk-child-width-1-3@m uk-child-width-1-1@s uk-grid uk-text-center tournament-main-card" uk-grid>

            {/* first card starts */}

            {tournamentList.map((val) => {

              // <p id="demo" style={{display:"none"}}></p>
              return (
                <div className='tournament-carditems'>
                  <div class="tour-card">
                    <div className='tournament-main-titile'>
                      <h3>{val.tournamentName}</h3>
                    </div>
                    <div className='tournamnet-team-img'>
                      <img src={TeamImg} />
                    </div>
                    <div className='tournament-rule'>
                      <i class="fa fa-gavel tour-rule-icon" onClick={handleOpen} aria-hidden="true"></i>
                      <Modal
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="tourmodal-modal-title"
                        aria-describedby="tourmodal-modal-description"

                      >
                        <Box sx={style} className='tourmodal_box' >
                          <Typography id="tourmodal-modal-title" variant="h6" component="h2">
                            Rules
                          </Typography>
                          <Typography id="tourmodal-modal-description" className='tourrules_modal' sx={{ mt: 2 }} style={{ height: '30rem', overflow: 'scroll' }} >

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
                          <button onClick={handleClose} className='tourmodal_close'>ok</button>
                        </Box>
                      </Modal>
                    </div>

                    <div className='tour-pay-section'>
                      <h6>Prize Pool</h6>
                      <p className='tourprize-pool'>{val.prizePool}</p>
                      <span>Entry Fee</span>
                      <p className='tourentry-fee'>{val.entryFee}</p>
                    </div>

                    <div className='tour-progress-bar'>
                      <progress value={val.numberOfRegs} max="100">

                      </progress>

                      <p className='tourprogressbar-left-text'>{val.numberOfRegs} Joined</p>
                      <p className='tourprogressbar-right-text'>{(val.teamLimit) - (val.numberOfRegs)}   Spot left</p>
                    </div>
                    <div className='tour-reg-section'>
                      <h6>Hosted By</h6>
                      <p>{val.organiserName}</p>

                      <Link to={`/tournament/registration/${val._id}`} style={{ textDecoration: "none" }}><a style={{ textDecoration: "none" }} >register now</a></Link>
                    </div>
                  </div>
                </div>
              )
            })}




            {/* first card ends */}



          </div>
        </div>

      </div>

      <div class="tournament-footer">
        <Footer />
      </div>


    </div>
  );

}

export default Tournament;
