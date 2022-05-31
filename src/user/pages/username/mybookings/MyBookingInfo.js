import React, {  useState, useEffect } from 'react';
import './My_Booking_Info.css';
import myI_img from '../../../assets/myBookings_Info_Assets/262886-pubg-game-wallpaper (1).jpg';
import { useForm } from "react-hook-form";
import Userheader from '../../../components/userheader/Userheader';
import Footer from '../../../components/footer/Footer';
import Box from '@mui/material/Box';

import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

import { useParams } from 'react-router-dom';
import Moment from "react-moment";
import axios from "axios"
//Style for the modal
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
//Use form is an npm package which is used to validate forms in react
function MyBookingInfo() {
    const { userid,id } = useParams();
    console.log(id)
    const token = localStorage.getItem("token")
    const { register, watch, handleSubmit, formState: { errors }, reset, trigger } = useForm()
    // const submitData = (data, validate) => {
    //     validate.team_name = "";
    //     console.log(data);
    //     reset();

    // }

//cancellation
const [slotcancell, setSlotCancell] = React.useState('');
async function submitData(data) {
    console.log(data)
    let url = `https://gm4-server.herokuapp.com/api/user/cancellation/request/${localStorage.getItem('id')}/${id}`
    const options = {
      method: "POST",
      url: url,
      headers: {
        "Authorization": `Bearer ${token}`
      },
      data: {
        teamName: data.teamname,
        slotNumber: data.slotnumber,
        reason: data.reason,
      }
    }

    try {
      const response = await axios(options);
      alert("Cancell Tournament Successfully")
      reset();
    } catch (error) {
      alert(error.response.data.error)
    }
  }
///////////////////

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
           
        }).catch(()=>{
      console.log("Error")
    })
  }, [])

  



    //useState for modal
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [validate, setValidate] = useState({
        team_name: '',
        slot_number: '',
        Reason: ''
    });
    return (
        <div>
            <Userheader />
            <div className='matches_header_info'>
                <div></div>
                <h1>My Bookings Info</h1>
            </div>
            <div className="mainWrapper-abh">
                <div className="myBoolingInfo_wrapper1">
                    {/* from this div onwardss card bedins */}
                    { tournamentList.filter((val) => (val._id == id)).map((val) => {
                        if(val._id == id){
                   return (

                            <div className="myBoolingInfo_container">
                                <div className="myBoolingInfo_card">
                                    <h2>{val.tournamentId.organiserName}</h2>
                                    <div className="Image_flex-abh">
                                        <div className="Image_box-abh">
                                            <img src={myI_img} alt="fleximage" />
                                        </div>
                                        <div className="text-box-abh">
                                            <div className="text-box_flex_box1-abh">
                                                <div className="p_pool-abh">
                                                    <h4>PRIZE POOL</h4>
                                                    <p>{val.tournamentId.prizePool}</p>
                                                </div>
                                                <div className="hori-div-abh">
                                                
                                                </div>
                                                <div className="entry-abh">
                                                    <h4>Entry Fee</h4>
                                                    <p>{val.tournamentId.entryFee}</p>
                                                </div>
                                            </div>
                                            <progress value={val.tournamentId.numberOfRegs} max="100" className="myInfoProgress"></progress>
                                            <div className="progresstextflex-abh">
                                                <div>
                                                    <p>{val.tournamentId.numberOfRegs} joined</p>
                                                </div>
                                                <div>
                                                    <p>{val.tournamentId.teamLimit - val.tournamentId.numberOfRegs} spot left</p>
                                                </div>
                                            </div>
                                            <div className="timeFlexbox_match-abh">
                                                <div className="my_Date-abh">
                                                    <h4>MATCH DATE</h4>
                                                    <p><Moment format='DD/MM/YYYY'>{val.tournamentId.matchDate}</Moment></p>
                                                </div>
                                                <div className="horidiv3-abh"></div>
                                                <div className="my_Time-abh">
                                                    <h4>MATCH TIME</h4>
                                                    <p><Moment format='LT'>{val.tournamentId.matchTime}</Moment></p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="blue_box-abh">
                                    <div>
                                        <h4>Team Name</h4>
                                        <p>{val.teamName}</p>
                                    </div>
                                    <div className="horidiv2-abh"></div>
                                    <div>
                                        <h4>MATCH TYPE</h4>
                                        <p>{val.tournamentId.matchType}</p>
                                    </div>
                                </div>
                                <div className='myi_tournament-rule-abh'>
                                    <i className="fa fa-gavel rule-icon" aria-hidden="true" onClick={handleOpen}></i>
                                </div>
                            </div>
                               
                                           )
                                          }
                                        })}


                                        {/* scrim */}
                                        { scrimsList.filter((scr) => (scr._id == id)).map((scr) => {
                                     if(scr._id == id){
                                           return (

                                                
                            <div className="myBoolingInfo_container">
                                <div className="myBoolingInfo_card">
                                    <h2>{scr.scrimId.organizationName}</h2>
                                    <div className="Image_flex-abh">
                                        <div className="Image_box-abh">
                                            <img src={myI_img} alt="fleximage" />
                                        </div>
                                        <div className="text-box-abh">
                                            <div className="text-box_flex_box1-abh">
                                                <div className="p_pool-abh">
                                                    <h4>Team Name </h4>
                                                    <p>{scr.teamName}</p>
                                                </div>
                                                <div className="hori-div-abh">
                                                
                                                </div>
                                                <div className="entry-abh">
                                                    <h4>Slot Number</h4>
                                                    <p>{scr.slot}</p>
                                                </div>
                                            </div>
                                            <progress value={scr.scrimId.numberOfRegs} max="100" className="myInfoProgress"></progress>
                                            <div className="progresstextflex-abh">
                                                <div>
                                                    <p>{scr.scrimId.numberOfRegs} joined</p>
                                                </div>
                                                <div>
                                                    <p>{100 - scr.scrimId.numberOfRegs} spot left</p>
                                                </div>
                                            </div>
                                            <div className="timeFlexbox_match-abh">
                                                <div className="my_Date-abh">
                                                    <h4>MATCH DATE</h4>
                                                    <p><Moment format='DD/MM/YYYY'>{scr.scrimId.matchDate}</Moment></p>
                                                </div>
                                                <div className="horidiv3-abh"></div>
                                                <div className="my_Time-abh">
                                                    <h4>MATCH TIME</h4>
                                                    <p><Moment format='LT'>{scr.scrimId.matchTime}</Moment></p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="blue_box-abh">
                                    <div>
                                        <h4>IDP TIME</h4>
                                        <p><Moment format='LT'>{scr.scrimId.idpTime}</Moment></p>
                                    </div>
                                    <div className="horidiv2-abh"></div>
                                    <div>
                                        <h4>MATCH TYPE</h4>
                                        <p>{scr.scrimId.matchType}</p>
                                    </div>
                                </div>
                                <div className='myi_tournament-rule-abh'>
                                    <i className="fa fa-gavel rule-icon" aria-hidden="true" onClick={handleOpen}></i>
                                </div>
                            </div>


                            )
                            }
                            })}


                            {/*  daily match*/}
                            { dailtmatchList.filter((dmt) => (dmt._id == id)).map((dmt) => {
                                     if(dmt._id == id){
                                           return (


                            <div className="myBoolingInfo_container">
                                <div className="myBoolingInfo_card">
                                    <h2>{dmt.dailyMatchId.organizationName}</h2>
                                    <div className="Image_flex-abh">
                                        <div className="Image_box-abh">
                                            <img src={myI_img} alt="fleximage" />
                                        </div>
                                        <div className="text-box-abh">
                                            <div className="text-box_flex_box1-abh">
                                                <div className="p_pool-abh">
                                                    <h4>Team Name </h4>
                                                    <p>{dmt.teamName}</p>
                                                </div>
                                                <div className="hori-div-abh">
                                                
                                                </div>
                                                <div className="entry-abh">
                                                    <h4>Slot Number</h4>
                                                    <p>{dmt.slot}</p>
                                                </div>
                                            </div>
                                            <progress value={dmt.dailyMatchId.numberOfRegs} max="100" className="myInfoProgress"></progress>
                                            <div className="progresstextflex-abh">
                                                <div>
                                                    <p>{dmt.dailyMatchId.numberOfRegs} joined</p>
                                                </div>
                                                <div>
                                                    <p>{100 - dmt.dailyMatchId.numberOfRegs} spot left</p>
                                                </div>
                                            </div>
                                            <div className="timeFlexbox_match-abh">
                                                <div className="my_Date-abh">
                                                    <h4>MATCH DATE</h4>
                                                    <p><Moment format='DD/MM/YYYY'>{dmt.dailyMatchId.matchDate}</Moment></p>
                                                </div>
                                                <div className="horidiv3-abh"></div>
                                                <div className="my_Time-abh">
                                                    <h4>MATCH TIME</h4>
                                                    <p><Moment format='LT'>{dmt.dailyMatchId.matchTime}</Moment></p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="blue_box-abh">
                                    <div>
                                        <h4>IDP TIME</h4>
                                        <p><Moment format='LT'>{dmt.dailyMatchId.idpTime}</Moment></p>
                                    </div>
                                    <div className="horidiv2-abh"></div>
                                    <div>
                                        <h4>MATCH TYPE</h4>
                                        <p>{dmt.dailyMatchId.matchType}</p>
                                    </div>
                                </div>
                                <div className='myi_tournament-rule-abh'>
                                    <i className="fa fa-gavel rule-icon" aria-hidden="true" onClick={handleOpen}></i>
                                </div>
                            </div>

                                )
                                }
                                })}

                </div>

                {/* Code for cancellation form heading */}

                <div className="myInfo_cancel">
                    <div></div>
                    <h1>Cancellation</h1>
                </div>

                {/* Code for form */}

                <div className="myInfo_cancel_form">
                    <form onSubmit={handleSubmit(submitData)} className="myInfo_form">
                        <fieldset className="uk-fieldset">
                            <div className="uk-margin">
                                <input className="uk-input" type="text" id="teamname" name="teamname" placeholder="Team Name" {...register('teamname', { required: "**Team Name is Required", pattern: { value: /^[^@\s#$!][a-zA-Z0-9_.-\s]*$/, message: "**Only Alphabets and numbers allowed and no first space" } })} maxLength={30}
                                    // onChange={(event)=>{
                                    //     if (event.target.value === " " && validate.team_name.length === 0) {
                                    //         event.preventDefault();
                                    //     } else {
                                    //         setValidate({
                                    //             ...validate,
                                    //             team_name: event.currentTarget.value.replace(/[^\w\s]/gi, "").replace(/[0-9]/g, "")

                                    //         })
                                    //     }
                                    // }}
                                    // value={validate.team_name}  
                                    autoComplete='off' onKeyUp={() => { trigger("teamname") }} />
                                {errors.teamname && (<p className='MyBookingerrormsgleft'>{errors.teamname.message}</p>)}
                            </div>
                            <div className="uk-margin">
                                <input className="uk-input" type="text" placeholder="Slot Number" id="slotnumber" name="slotnumber" {...register('slotnumber', { required: "** Slot number is Required", pattern: { value: /^[0-9]*$/, message: "**Only Numbers are allowed" } })} maxLength={30}
                                    // onChange={(event)=>{
                                    //     if (event.target.value === " " && validate.slot_number.length === 0) {
                                    //         event.preventDefault();
                                    //     } else {
                                    //         setValidate({
                                    //             ...validate,
                                    //             slot_number: event.currentTarget.value.replace(/[^\w\s]/gi, "").replace(/[a-zA-z#!@$&]/g, "")
                                    //         })
                                    //     }
                                    // }} value={validate.slot_number}
                                    autoComplete='off' onKeyUp={() => { trigger("slotnumber") }} />
                                {errors.slotnumber && (<p className='MyBookingerrormsgleft'>{errors.slotnumber.message}</p>)}
                            </div>
                            <div className="uk-margin">
                                <textarea className="uk-textarea" type="textarea" id="reason" name="reason" placeholder="Reason For Cancellation" {...register('reason', { required: "**Reason For Cancellation is Required", pattern: { value: /^[^@\s#$!][a-zA-Z0-9\s.-_?]*$/, message: "**Only Alphabets and Numbers are allowed and no first space" } })} maxLength={30} onKeyUp={() => { trigger("reason") }} />
                                {errors.reason && (<p className='MyBookingerrormsgleft'>{errors.reason.message}</p>)}
                            </div>
                            <div className="uk-margin"></div>
                            <div className="uk-margin"></div>
                            <div>
                                <button type="submit" className="MyBookings_openbtn">Send</button>
                            </div>
                        </fieldset>
                    </form>
                </div>
            </div>

            {/* this modal is for showing rules of the game in when clicking the hammer icon  */}

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"

            >
                <Box sx={style} className='modal_box_myBookings' >
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Rules
                    </Typography>
                    <Typography id="modal-modal-description_myBookings" className='rules_modal_myBookings' sx={{ mt: 2 }} style={{ height: '20rem', overflow: 'scroll' }} >

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
    );
}
export default MyBookingInfo;