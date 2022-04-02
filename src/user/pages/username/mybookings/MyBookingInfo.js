import React, { useState } from "react";
import './My_Booking_Info.css';
import myI_img from '../../../assets/myBookings_Info_Assets/262886-pubg-game-wallpaper (1).jpg';
import { useForm } from "react-hook-form";
import Userheader from '../../../components/userheader/Userheader';
import Footer from '../../../components/footer/Footer';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Container } from '@mui/material';
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
    const { register, watch, handleSubmit, formState: { errors }, reset,trigger} = useForm()
    const submitData = (data,validate) => {
        validate.team_name="";
        console.log(data);
        reset();
        
    }
    //useState for modal
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [validate, setValidate]=useState({
        team_name:'',
        slot_number:'',
        Reason:''
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
                    <div className="myBoolingInfo_container">
                        <div className="myBoolingInfo_card">
                            <h2>Organisation1</h2>
                            <div className="Image_flex-abh">
                                <div className="Image_box-abh">
                                    <img src={myI_img} alt="fleximage" />
                                </div>
                                <div className="text-box-abh">
                                    <div className="text-box_flex_box1-abh">
                                        <div className="p_pool-abh">
                                            <h4>PRIZE POOL</h4>
                                            <p>300</p>
                                        </div>
                                        <div className="hori-div-abh">

                                        </div>
                                        <div className="entry-abh">
                                            <h4>SLOT NUMBER</h4>
                                            <p>300</p>
                                        </div>
                                    </div>
                                    <progress value="3333" max="10000" className="myInfoProgress"></progress>
                                    <div className="progresstextflex-abh">
                                        <div>
                                            <p>100 joined</p>
                                        </div>
                                        <div>
                                            <p>400 spot left</p>
                                        </div>
                                    </div>
                                    <div className="timeFlexbox_match-abh">
                                        <div className="my_Date-abh">
                                            <h4>MATCH DATE</h4>
                                            <p>06/05/2022</p>
                                        </div>
                                        <div className="horidiv3-abh"></div>
                                        <div className="my_Time-abh">
                                            <h4>MATCH TIME</h4>
                                            <p>2:30pm</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="blue_box-abh">
                            <div>
                                <h4>IDP TIME</h4>
                                <p>9:00am</p>
                            </div>
                            <div className="horidiv2-abh"></div>
                            <div>
                                <h4>MATCH TYPE</h4>
                                <p>Scrim</p>
                            </div>
                        </div>
                        <div className='myi_tournament-rule-abh'>
                            <i className="fa fa-gavel rule-icon" aria-hidden="true" onClick={handleOpen}></i>
                        </div>
                    </div>
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
                                <input className="uk-input" type="text" id="teamname" name="teamname" placeholder="Team Name" {...register('teamname', { required: "**Team Name is Required",pattern:{value:/^[^@\s#$!][a-zA-Z0-9_.-\s]*$/,message:"**Only Alphabets and numbers allowed and no first space"}})} maxLength={30} 
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
                                autoComplete='off' onKeyUp={()=>{trigger("teamname")}}/>
                                {errors.teamname && (<p className='MyBookingerrormsgleft'>{errors.teamname.message}</p>)}
                            </div>
                            <div className="uk-margin">
                                <input className="uk-input" type="text" placeholder="Slot Number" id="slotnumber" name="slotnumber" {...register('slotnumber', { required: "** Slot number is Required",pattern:{value:/^[0-9]*$/,message:"**Only Numbers are allowed"} })} maxLength={30} 
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
                                autoComplete='off' onKeyUp={()=>{trigger("slotnumber")}}/>
                                {errors.slotnumber && (<p className='MyBookingerrormsgleft'>{errors.slotnumber.message}</p>)}
                            </div>
                            <div className="uk-margin">
                                <textarea className="uk-textarea" type="textarea" id="Reason_For_Cancellation" name="Reason_For_Cancellation" placeholder="Reason For Cancellation" {...register('Reason_For_Cancellation', { required: "**Reason For Cancellation is Required",pattern:{value:/^[^@\s#$!][a-zA-Z0-9\s.-_?]*$/,message:"**Only Alphabets and Numbers are allowed and no first space"} })} maxLength={30} onKeyUp={()=>{trigger("Reason_For_Cancellation")}}/>
                                {errors.Reason_For_Cancellation && (<p className='MyBookingerrormsgleft'>{errors.Reason_For_Cancellation.message}</p>)}
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