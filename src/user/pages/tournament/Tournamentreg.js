import React,{useLayoutEffect,useState} from 'react'
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import { Modal } from '@mui/material';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';


import Userheader from '../../components/userheader/Userheader';
import Footer from '../../components/footer/Footer';
import "./Tournamentreg.css";


function Tournamentreg() {

  {/*Modal functions */}

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  //code for validations

  const { register, handleSubmit, watch, formState: { errors }, reset} = useForm();

  const submitData = (data) =>{
    console.log(data);
    reset();

   

  };

  //code to scroll to the top of window
  useLayoutEffect(() => {
    window.scrollTo(0, 0)
    });


    


  {/*Modal style */}

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    height:150,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

const [tourTeamname, settourTeamname] = useState("");
const [tourPlayername1, settourPlayername1] = useState("");
const [tourPlayername2, settourPlayername2] = useState("");
const [tourPlayername3, settourPlayername3] = useState("");
const [tourPlayername4, settourPlayername4] = useState("");
const [tourPlayername5, settourPlayername5] = useState("");

const [Player1id, setPlayer1id] = useState("");
const [Player2id, setPlayer2id] = useState("");
const [Player3id, setPlayer3id] = useState("");
const [Player4id, setPlayer4id] = useState("");
const [Player5id, setPlayer5id] = useState("");


const handleKeyDown = (e) => {
  if (e.key === " " && tourTeamname.length===0) {
    e.preventDefault();
  }
  // else if (e.key === " " && tourPlayername1.length===0) {
  //   e.preventDefault();
  // }
  // else if (e.key === " " && tourPlayername2.length===0) {
  //   e.preventDefault();
  // }
  // else if (e.key === " " && tourPlayername3.length===0) {
  //   e.preventDefault();
  // }
  // else if (e.key === " " && tourPlayername4.length===0) {
  //   e.preventDefault();
  // }
  // else if (e.key === " " && tourPlayername5.length===0) {
  //   e.preventDefault();
  // }
  
};
const handlesKeyDown = (e) => {
  if (e.key === " " && tourPlayername1.length===0) {
    e.preventDefault();
  }
  
};

const handles1KeyDown = (e) => {
  if (e.key === " " && tourPlayername2.length===0) {
    e.preventDefault();
  }
  
};

const handles2KeyDown = (e) => {
  if (e.key === " " && tourPlayername3.length===0) {
    e.preventDefault();
  }
  
};

const handles3KeyDown = (e) => {
  if (e.key === " " && tourPlayername4.length===0) {
    e.preventDefault();
  }
  
};

const handles4KeyDown = (e) => {
  if (e.key === " " && tourPlayername5.length===0) {
    e.preventDefault();
  }
  
};





  return (
    <div class="tournament-reg" style={{width:"100%",marginLeft:"0px",marginRight:"0px",padding:"0px",overflowX:"hidden"}}>
      <Userheader/>
      <div class="reg-circles">
        <h1 class="tour-regheader">REGISTRATION</h1>
        <div class="tour-smallcircles">
          <form class="tourregform" onSubmit={handleSubmit(submitData)}>
            <fieldset class="uk-fieldset uk-grid-small" uk-grid>
              <h2 class="tour-joinhead">Register Now</h2>
              <hr />
              <div class="uk-margin uk-width-1-2@s tour-reginput">
                <input class="uk-input" type="text" placeholder="Team Name" id='teamsname' minLength={5} maxLength={30}
                {...register("teamsname", { required: "**Team Name is Required" })}
 
                onKeyDown={handleKeyDown}
                onChange= {(e)=>settourTeamname(e.target.value.replace(/[^\w\s]/gi,"").replace(/[0-9]/g,"") )}

                value={tourTeamname}
                 autoComplete='off' />
                {errors.teamsname && (<span className='tour-errormsg'>{errors.teamsname.message}</span>)}
              </div>

              <div class="uk-margin uk-width-1-2@s tour-reginput">
                <input class="uk-input" type="text" placeholder="Team Tag" id="teamtag" minLength={5} maxLength={30}
                {...register("teamtag", { required: "**Team Tag is Required",pattern:{value:/^[a-zA-Z0-9_.-]*$/,message:"**Only Alphabets and Numbers are allowed"} })} autoComplete='off'/>
                {errors.teamtag && ( <span className='tour-errormsg-right'>{errors.teamtag.message}</span>)}      
              </div>

              

              <div class="uk-margin uk-width-1-2@s tour-reginput">
                <input class="uk-input" type="text" placeholder="Player1 Name" id="player1name" minLength={5} maxLength={30}
                {...register("player1name", { required: "**Player Name is Required" })}
                onKeyDown={handlesKeyDown}
                onChange= {(e)=>settourPlayername1(e.target.value.replace(/[^\w\s]/gi,"").replace(/[0-9]/g,"") )}
                value={tourPlayername1}
                />
                {errors.player1name && (<span className='tour-errormsg'>{errors.player1name.message}</span>)}
              </div>


              <div class="uk-margin uk-width-1-2@s tour-reginput">
                <input class="uk-input" type="text" placeholder="Player1 ID"  id="player1id" minLength={5} maxLength={30}
                  {...register("player1id", { required: "**Player ID is Required"})}
                  onChange= {(e)=>setPlayer1id(e.target.value.replace(/[^\w\s]/gi,"").replace(/[a-z]/g,"")
                  .replace(/[A-Z]/g,"").replace(/\s/g, ""))}
                  value={Player1id}
                  autoComplete='off'/>
                  {errors.player1id && ( <span className='tour-errormsg-right'>{errors.player1id.message}</span>)}  
              </div>

             

              <div class="uk-margin uk-width-1-2@s tour-reginput">
                <input class="uk-input" type="text" placeholder="Player2 Name"  id="player2name" minLength={5} maxLength={30}
                {...register("player2name", { required: "**Player Name is Required" })}
                onKeyDown={handles1KeyDown}
                onChange= {(e)=>settourPlayername2(e.target.value.replace(/[^\w\s]/gi,"").replace(/[0-9]/g,""))}
                value={tourPlayername2}
                autoComplete='off'/>
                 {errors.player2name && (<span className='tour-errormsg'>{errors.player2name.message}</span>)}
              </div>

              <div class="uk-margin uk-width-1-2@s tour-reginput">
                <input class="uk-input" type="text" placeholder="Player2 ID" id="player2id" minLength={5} maxLength={30}
                {...register("player2id", { required: "**Player ID is Required"})} 
              
                onChange= {(e)=>setPlayer2id(e.target.value.replace(/[^\w\s]/gi,"").replace(/[a-z]/g,"")
                  .replace(/[A-Z]/g,"").replace(/\s/g, ""))}
                  value={Player2id}
                  autoComplete='off'/>
                 {errors.player2id && (<span className='tour-errormsg-right'>{errors.player2id.message}</span>)}
              </div>

              <div class="uk-margin uk-width-1-2@s tour-reginput">
                <input class="uk-input" type="text" placeholder="Player3 Name" minLength={5} maxLength={30}
                {...register("player3name", { required: "**Player Name is Required" })} 
                onKeyDown={handles2KeyDown}
                onChange= {(e)=>settourPlayername3(e.target.value.replace(/[^\w\s]/gi,"").replace(/[0-9]/g,""))}
                value={tourPlayername3} 
               autoComplete='off'/>
                 {errors.player3name && (<span className='tour-errormsg'>{errors.player3name.message}</span>)}
              </div>

              <div class="uk-margin uk-width-1-2@s tour-reginput">
                <input class="uk-input" type="text" placeholder="Player3 ID" id="palyer3id" minLength={5} maxLength={30}
                {...register("player3id", { required: "**Player ID is Required"})} 
                onChange= {(e)=>setPlayer3id(e.target.value.replace(/[^\w\s]/gi,"").replace(/[a-z]/g,"")
                  .replace(/[A-Z]/g,"").replace(/\s/g, ""))}
                  value={Player3id}
                  autoComplete='off' />
                {errors.player3id && (<span className='tour-errormsg-right'>{errors.player3id.message}</span>)}
                
              </div>

              <div class="uk-margin uk-width-1-2@s tour-reginput">
                <input class="uk-input" type="text" placeholder="Player4 Name"  minLength={5} maxLength={30}
                {...register("player4name", { required: "**Player Name is Required" })}
                onKeyDown={handles3KeyDown}
                onChange= {(e)=>settourPlayername4(e.target.value.replace(/[^\w\s]/gi,"").replace(/[0-9]/g,""))}
                value={tourPlayername4}
                 autoComplete='off'/>
                  {errors.player4name && (<span className='tour-errormsg'>{errors.player4name.message}</span>)}
              </div>

              <div class="uk-margin uk-width-1-2@s tour-reginput">
                <input class="uk-input" type="text" placeholder="Player4 ID" minLength={5} maxLength={30}
                {...register("player4id", { required: "**Player ID is Required"})} 
                onChange= {(e)=>setPlayer4id(e.target.value.replace(/[^\w\s]/gi,"").replace(/[a-z]/g,"")
                  .replace(/[A-Z]/g,"").replace(/\s/g, ""))}
                  value={Player4id}
                  autoComplete='off'/>
                {errors.player4id && (<span className='tour-errormsg-right'>{errors.player4id.message}</span>)}
              </div>

              <div class="uk-margin uk-width-1-2@s tour-reginput">
                <input class="uk-input" type="text" placeholder="Player5 Name" minLength={5} maxLength={30}
                {...register("player5name", { required: "**Player Name is Required" })}
                onKeyDown={handles4KeyDown}
                onChange= {(e)=>settourPlayername5(e.target.value.replace(/[^\w\s]/gi,"").replace(/[0-9]/g,""))}
                value={tourPlayername5}
                autoComplete='off'/>
                {errors.player5name && (<span className='tour-errormsg'>{errors.player5name.message}</span>)}
              </div>

              <div class="uk-margin uk-width-1-2@s tour-reginput">
                <input class="uk-input" type="text" placeholder="Player5 ID" minLength={5} maxLength={30}
                {...register("player5id", { required: "**Player ID  is Required" })} 
                onChange= {(e)=>setPlayer5id(e.target.value.replace(/[^\w\s]/gi,"").replace(/[a-z]/g,"")
                  .replace(/[A-Z]/g,"").replace(/\s/g, ""))}
                  value={Player5id}
                  autoComplete='off'/>
                  {errors.player5id && (<span className='tour-errormsg-right'>{errors.player5id.message}</span>)}
              </div>


              <div  class="uk-margin uk-width-1-2@s tour-reginput">
                    <Link to="/tournament/payment">
                      <a class="uk-button uk-button-default uk-input scan-btn tour-reginput" href="#"  style={{color:"#9999A6"}}
                      {...register("feepayment", { required: "** Registration fee is required" })} autoComplete='off'
                      >Scan QR Code for payment</a>
                      {errors.feepayment && (<span className='tour-errormsg'>{errors.feepayment.message}</span>)}
                    </Link>
              </div>

              <div class="uk-margin uk-width-1-2@s tour-reginput" >
                <div uk-form-custom="target: true" class="payment-upload">
                  <input  type="file" class="uk-input"  style={{backgroundColor:"#fffff"}} 
                  autoComplete='off' {...register('paymentupload', {
                    required: "**Screenshot of payment is required ",
                    validate: {
                        // lessThan1MB: files => files[0]?.size < 10000 || 'Max 10MB',

                        acceptedFormats: files =>
                            ['image/jpeg', 'image/png', 'image/gif'].includes(
                                files[0]?.type
                            ) || 'Only PNG, JPEG and GIF files allowed',
                          },
                      })} />

                      <input  class="uk-input " type="text" placeholder="Upload Screenshot of payment" style={{backgroundColor:"#fffff"}}
                        autoComplete='off'/>
                        {errors.paymentupload && (<span className='tour-errormsg-screenshot'>{errors.paymentupload.message}</span>)}

                  </div>
              </div>

              <div class="tournament-btn">
​
                <button class="tournamentregbtn">Register</button>
​
              </div>

            </fieldset>


            <Modal   
                open={open}
                onClose={handleClose}
                aria-labelledby="userep-modal-title"
                aria-describedby="userep-modal-description" >
                <Box sx={style} className='userep-modal_box' >
                 
                <Typography id="userep-modal-description" className='rules_modal'   >
​
                    <h3>Profile updated</h3>
                   
                    <span>Your profile is updated Successfully!</span>
                    <br/>

                  <div className='userep-button_area'>
                  <button onClick={handleClose} className='userep-modal_close'>Ok</button>
                  
                  </div>
                </Typography>
                 
                  
                </Box>
              </Modal>



          </form>
        </div>
      </div>   
      <br />

      {/* //footer */}
      <div class="tournamentreg-footer">
      <Footer/>

      </div>
    </div>
  )
}

export default Tournamentreg
