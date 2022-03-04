import React from 'react'
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import Userheader from '../../components/userheader/Userheader';
import Footer from '../../components/footer/Footer';
import "./Tournamentreg.css";


function Tournamentreg() {

  const { register, handleSubmit, watch, formState: { errors }, reset} = useForm();
  const submitData = (data) =>{
    console.log(data);
    reset();
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
                <input class="uk-input" type="text" placeholder="Team Name" id='teamsname'  
                {...register("teamsname", { required: "**Team Name is Required" })}  autoComplete='off' />
                {errors.teamsname && (<span className='tour-errormsg'>{errors.teamsname.message}</span>)}
              </div>

              <div class="uk-margin uk-width-1-2@s tour-reginput">
                <input class="uk-input" type="text" placeholder="Team Tag" id="teamtag"
                {...register("teamtag", { required: "**Team Tag is Required",pattern:{value:/^[a-zA-Z0-9_.-]*$/,message:"**Only Alphabets and Numbers are allowed"} })} autoComplete='off'/>
                {errors.teamtag && ( <span className='tour-errormsg'>{errors.teamtag.message}</span>)}      
              </div>

              <div class="uk-margin uk-width-1-2@s tour-reginput">
                <input class="uk-input" type="text" placeholder="Player1 Name" id="player1name"
                {...register("player1name", { required: "**Player Name is Required" })} autoComplete='off'/>
                {errors.player1name && (<span className='tour-errormsg'>{errors.player1name.message}</span>)}
              </div>

              <div class="uk-margin uk-width-1-2@s tour-reginput">
                <input class="uk-input" type="text" placeholder="Player1 ID"  id="player1id"
                  {...register("player1id", { required: "**Player ID is Required",pattern:{value:/^[0-9]*$/,message:"Only Numbers are allowed"} })} autoComplete='off'/>
                  {errors.player1id && ( <span className='tour-errormsg'>{errors.player1id.message}</span>)}  
              </div>

              <div class="uk-margin uk-width-1-2@s tour-reginput">
                <input class="uk-input" type="text" placeholder="Player2 Name"  id="player2name"
                {...register("player2name", { required: "**Player Name is Required" })}  autoComplete='off'/>
                 {errors.player2name && (<span className='tour-errormsg'>{errors.player2name.message}</span>)}
              </div>

              <div class="uk-margin uk-width-1-2@s tour-reginput">
                <input class="uk-input" type="text" placeholder="Player2 ID" id="player2id"
                {...register("player2id", { required: "**Player ID is Required",pattern:{value:/^[0-9]*$/,message:"Only Numbers are allowed"} })} autoComplete='off'/>
                 {errors.player2id && (<span className='tour-errormsg'>{errors.player2id.message}</span>)}
              </div>

              <div class="uk-margin uk-width-1-2@s tour-reginput">
                <input class="uk-input" type="text" placeholder="Player3 Name" 
                {...register("player3name", { required: "**Player Name is Required" })} autoComplete='off'/>
                 {errors.player3name && (<span className='tour-errormsg'>{errors.player3name.message}</span>)}
              </div>

              <div class="uk-margin uk-width-1-2@s tour-reginput">
                <input class="uk-input" type="text" placeholder="Player3 ID" 
                {...register("player3id", { required: "**Player ID is Required",pattern:{value:/^[0-9]*$/,message:"Only Numbers are allowed"} })} autoComplete='off' />
                {errors.player3id && (<span className='tour-errormsg'>{errors.player3id.message}</span>)}
                
              </div>

              <div class="uk-margin uk-width-1-2@s tour-reginput">
                <input class="uk-input" type="text" placeholder="Player4 Name" 
                {...register("player4name", { required: "**Player Name is Required" })} autoComplete='off'/>
                  {errors.player4name && (<span className='tour-errormsg'>{errors.player4name.message}</span>)}
              </div>

              <div class="uk-margin uk-width-1-2@s tour-reginput">
                <input class="uk-input" type="text" placeholder="Player4 ID" 
                {...register("player4id", { required: "**Player ID is Required",pattern:{value:/^[0-9]*$/,message:"Only Numbers are allowed"} })} autoComplete='off'/>
                {errors.player4id && (<span className='tour-errormsg'>{errors.player4id.message}</span>)}
              </div>

              <div class="uk-margin uk-width-1-2@s tour-reginput">
                <input class="uk-input" type="text" placeholder="Player5 Name" 
                {...register("player5name", { required: "**Player Name is Required" })} autoComplete='off'/>
                {errors.player5name && (<span className='tour-errormsg'>{errors.player5name.message}</span>)}
              </div>

              <div class="uk-margin uk-width-1-2@s tour-reginput">
                <input class="uk-input" type="text" placeholder="Player5 ID" 
                {...register("player5id", { required: "**Player ID  is Required",pattern:{value:/^[0-9]*$/,message:"Only Numbers are allowed"} })} autoComplete='off'/>
                  {errors.player5id && (<span className='tour-errormsg'>{errors.player5id.message}</span>)}
              </div>


              <div  class="uk-margin uk-width-1-2@s tour-reginput">
                    <Link to="/tournament/payment">
                      <a class="uk-button uk-button-default uk-input scan-btn tour-reginput" href="#"  style={{color:"#9999A6"}}
                      {...register("feepayment", { required: "** Registration fee is required",pattern:{value:/^[0-9]*$/,message:"Only Numbers are allowed"} })} autoComplete='off'
                      >Scan QR Code for payment</a>
                      {errors.feepayment && (<span className='tour-errormsg'>{errors.feepayment.message}</span>)}
                    </Link>
              </div>

              <div class="uk-margin uk-width-1-2@s tour-reginput" >
                <div uk-form-custom="target: true" class="payment-upload">
                  <input  type="file" class="uk-input"  style={{backgroundColor:"#fffff"}} />
                  <input  class="uk-input " type="text" placeholder="Upload Screenshot of payment" style={{backgroundColor:"#fffff"}}
                    {...register("paymentupload", { required: "**Screenshot of payment  is Required",pattern:{value:/^[0-9]*$/,message:"Only Numbers are allowed"} })} autoComplete='off'/>
                    {errors.paymentupload && (<span className='tour-errormsg'>{errors.paymentupload.message}</span>)}
                    </div>
             </div>

             <div class="tournament-btn">
​
                <button class="tournamentregbtn">Register</button>
​
              </div>

           


            </fieldset>
          </form>
        </div>
      </div>   <br />

      <div class="tournamentreg-footer">
      <Footer/>

      </div>
    </div>
  )
}

export default Tournamentreg
