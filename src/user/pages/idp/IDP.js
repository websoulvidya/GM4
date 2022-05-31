import React ,{useLayoutEffect,useEffect,useState} from 'react';
import Userheader from '../../components/userheader/Userheader';
import Footer from '../../components/footer/Footer';
import './IDP.css';
import {Grid} from '@mui/material';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import img1 from '../../assets/homepage/idp-pubg.jpg'
import Moment from "react-moment";
import axios from "axios"

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



function IDP() {

  
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
    
//scrims
useEffect(()=>{
    axios.get(`http://localhost:8000/api/user/view/booked/scrims/${localStorage.getItem('id')}`,{ headers: {"Authorization" : `Bearer ${token}`} }).then((response)=>{
           setScrimsList(response.data)
           
        }).catch(()=>{
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




  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return(

    <div>
      <Userheader/>

      {/* heading section */}
      <div className='idp-head-bg'>

      <h1>IDP</h1>
      </div>
      {/* card section */}

      <div className="myBoolingInfo_wrapper11">
        <Grid container>
            {/* Tournament */}
       { tournamentList.filter((i, index) => (index ===0)).map((i, index) => {
                   return (

                        <Grid item md={6} xs={12} xl={4}>
              
                <div className="myBoolingInfo_container1">
                    <div className="myBoolingInfo_card1">
                        <h2>BOOKED TOURNAMENT</h2>
                        <div className="Image_flex">
                            <div className="Image_box">
                                <img src={img1} alt="fleximage" />
                            </div>
                            <div className="text-box">
                                <div className="text-box_flex_box1">
                                    <div className="p_pool">
                                        <h4> {i.tournamentId.organiserName}</h4>
                                    </div>
                                </div>
                                <progress className='progress-th' value="3333" max="10000"></progress>
                                <div className="progresstextflex">
                                    <div>
                                        <p>{i.tournamentId.numberOfRegs} joined</p>
                                    </div>
                                    <div>
                                        <p>{(i.tournamentId.teamLimit) - (i.tournamentId.numberOfRegs)} spot left</p>
                                    </div>
                                </div>
                                <div className="timeFlexbox_match">
                                    <div className="my_Date1">
                                        <h4>MATCH DATE</h4>
                                        <p><Moment format="DD/MM/YYYY">{i.tournamentId.matchDate}</Moment></p>
                                    </div>
                                    <div className="horidiv3"></div>
                                    <div className="my_Time1">
                                        <h4>MATCH TIME</h4>
                                        <p><Moment format='LT'>{i.tournamentId.matchTime}</Moment></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="blue_box">
                        <div>
                            <h4>Entry Fee</h4>
                            <p>{i.tournamentId.entryFee}</p>
                        </div>
                        <div className="horidiv2"></div>
                        <div>
                        <h4>  <a className='idp-link' href="/booedtournament" > View More</a></h4>
                         
                        </div>
                    </div>
                    <div className='myi_tournament-rule1'>
                        <i class="fa fa-gavel rule-icon" aria-hidden="true"   onClick={handleOpen}></i>
                    </div>
                </div>
                </Grid>
                       )
                    })}


                    {/* scrims */}


                  
                    { scrimsList.filter((scr, index) => (index ===0)).map((scr, index) => {
                   return (
          
                <Grid item md={6} xs={12} xl={4}>
                <div className="myBoolingInfo_container1">
                    <div className="myBoolingInfo_card1">
                        <h2>BOOKED SCRIMS</h2>
                        <div className="Image_flex">
                            <div className="Image_box">
                            <img src={img1} alt="fleximage" />
                            </div>
                            <div className="text-box">
                                <div className="text-box_flex_box1">
                                    <div className="p_pool">
                                        <h4> {scr.scrimId.organizationName}</h4>
                                        {/* <p>300</p> */}
                                    </div>
                                    {/* <div className="hori-div">
                                    </div>
                                    <div className="entry">
                                        <h4>SLOT NUMBER</h4>
                                        <p>300</p>
                                    </div> */}
                                </div>
                                <progress className='progress-th' value={scr.scrimId.numberOfRegs} max="100"></progress>
                                <div className="progresstextflex">
                                    <div>
                                        <p>{scr.scrimId.numberOfRegs} joined</p>
                                    </div>
                                    <div>
                                        <p>{50 -scr.scrimId.numberOfRegs} spot left</p>
                                    </div>
                                </div>
                                <div className="timeFlexbox_match">
                                    <div className="my_Date1">
                                        <h4>MATCH DATE</h4>
                                        <p><Moment format="DD/MM/YYYY">{scr.scrimId.matchDate}</Moment></p>
                                    </div>
                                    <div className="horidiv3"></div>
                                    <div className="my_Time1">
                                        <h4>MATCH TIME</h4>
                                        <p><Moment format='LT'>{scr.scrimId.matchTime}</Moment></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="blue_box">
                        <div>
                            <h4>IDP TIME</h4>
                            <p><Moment format='LT'>{scr.scrimId.idpTime}</Moment></p>
                        </div>
                        <div className="horidiv2"></div>
                        <div>
                            <h4>  <a className='idp-link' href="/bookedscrims" >View More</a></h4>
                            {/* <p>Scrim</p> */}
                        </div>
                    </div>
                    <div className='myi_tournament-rule1'>
                        <i class="fa fa-gavel rule-icon" aria-hidden="true"   onClick={handleOpen}></i>
                    </div>
                </div>
                </Grid>
                       
                       )
                    })}

                {/* daily match  */}
                {dailtmatchList.filter((dmt,index)=>(index ===0)).map((dmt,idex)=>{
                    return(
         
                <Grid item md={6} xs={12} xl={4}>
                <div className="myBoolingInfo_container1">
                    <div className="myBoolingInfo_card1">
                        <h2>BOOKED DAILY MATCHES</h2>
                        <div className="Image_flex">
                            <div className="Image_box">
                            <img src={img1} alt="fleximage" />
                            </div>
                            <div className="text-box">
                                <div className="text-box_flex_box1">
                                    <div className="p_pool">
                                        <h4>{dmt.dailyMatchId.organizationName}</h4>
                                    </div>
                                    {/* <div className="hori-div">
                                    </div>
                                    <div className="entry">
                                        <h4>SLOT NUMBER</h4>
                                        <p>300</p>
                                    </div> */}
                                </div>
                                <progress className='progress-th' value={dmt.dailyMatchId.numberOfRegs} max="100"></progress>
                                <div className="progresstextflex">
                                    <div>
                                        <p>{dmt.dailyMatchId.numberOfRegs} joined</p>
                                    </div>
                                    <div>
                                        <p>{100-dmt.dailyMatchId.numberOfRegs} spot left</p>
                                    </div>
                                </div>
                                <div className="timeFlexbox_match">
                                    <div className="my_Date1">
                                        <h4>MATCH DATE</h4>
                                        <p><Moment format="DD/MM/YYYY">{dmt.dailyMatchId.matchDate}</Moment></p>
                                    </div>
                                    <div className="horidiv3"></div>
                                    <div className="my_Time1">
                                        <h4>MATCH TIME</h4>
                                        <p><Moment format='LT'>{dmt.dailyMatchId.matchTime}</Moment></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="blue_box">
                        <div>
                            <h4>IDP TIME</h4>
                            <p><Moment format='LT'>{dmt.dailyMatchId.idpTime}</Moment></p>
                        </div>
                        <div className="horidiv2"></div>
                        <div>
                        <h4>  <a className='idp-link' href="/bookeddaily" > View More</a></h4>
                            {/* <p>Scrim</p> */}
                        </div>
                    </div>
                    <div className='myi_tournament-rule1'>
                        <i class="fa fa-gavel rule-icon" aria-hidden="true"  onClick={handleOpen} ></i>
                    </div>
                </div>
                </Grid>
                               
                               )
                            })}
                </Grid>

            </div>
    {/* Modal for rules dialouge box for rules*/}
    <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"

      >
        <Box sx={style} className='modal_box_useridp' >
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Rules
          </Typography>
          <Typography id="modal-modal-description_useridp" className='rules_modal' sx={{ mt: 2 }} style={{ height: '20rem', overflow: 'scroll'}} >

            <ul className='modal-idp-style'>
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
          <button onClick={handleClose} className='modal_close_useridp'>ok</button>
        </Box>
      </Modal>


      <Footer />
  </div>
  );

}

export default IDP;
