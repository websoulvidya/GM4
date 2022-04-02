import React, { useState } from "react";
import { useForm } from 'react-hook-form';
import "../../pages/dailymatch/DailymatchReg.css"
import Userheader from '../../components/userheader/Userheader';
import Footer from '../../components/footer/Footer';


function DailymatchReg() {



  const { register, handleSubmit, watch, formState: { errors }, reset,trigger } = useForm();

  const submitData = (data) => {
    reset();
  };

  const [isActive, setIsActive] = useState(false);
  const [setected, setSelected] = useState("Select Slot");
  const options = ["Slot 1", "Slot 2", "Slot 3"];

  return (
  
      <div>
        <Userheader/>
        <div className="dailymatchcircles" style={{overflowX:"hidden"}}>
        <div className='dailymatch_regheaderclip'>
        <h1>Registration</h1>
      </div>
          <div className="daily_smallcircles">
            <form className="daily_regform" onSubmit={handleSubmit(submitData)}>
              <fieldset className="uk-fieldset uk-grid-small" uk-grid>
                <h2 className="dailyreg_joinhead">Register Now</h2>
                <hr />
                <div className="uk-margin uk-width-1-2@s reginput">
              <input className={`uk-input ${errors.teamname && "invalideBorder"}`} type="text" placeholder="Team Name" id='teamname'  name="teamname" 
              {...register("teamname", { required: "**Team Name is Required", pattern: { value: /^[^@\s#$!][a-zA-Z0-9_.-\s]*$/, message: "**Only Alphabets and Numbers are allowed" } })}  
              autoComplete='off' onKeyUp={()=>{trigger("teamname")}}
             />
               {errors.teamname && (<span className='dailymatch_errormsgleft'>{errors.teamname.message}</span>)}
            </div>
          
                      
            <div className="uk-margin uk-width-1-2@s reginput">
              <input className={`uk-input ${errors.teamtag && "invalideBorder"}`} type="text" placeholder="Team Tag" 
              {...register("teamtag", { required: "**Team Tag is Required" , pattern: { value: /^[^@\s#$!][a-zA-Z0-9_.-\s]*$/, message: "**Only Alphabets and Numbers are allowed" }})} autoComplete='off'
              onKeyUp={()=>{trigger("teamtag")}} />
                {errors.teamtag && ( <span className='dailymatch_errormsgright'>{errors.teamtag.message}</span>)}      
            </div>
                

            <div className="uk-margin uk-width-1-2@s reginput">
              <input className={`uk-input ${errors.player1name && "invalideBorder"}`} type="text" placeholder="Player1 Name" 
              {...register("player1name", { required: "**Player Name is Required" ,pattern:{value:/^[^@\s#$!][a-zA-Z_.-\s]*$/,message:"**Only Alphabets are allowed"}})} autoComplete='off'
              onKeyUp={()=>trigger("player1name")}/>
              {errors.player1name && (<span className='dailymatch_errormsgleft'>{errors.player1name.message}</span>)}
            </div>
          

            <div className="uk-margin uk-width-1-2@s reginput">
              <input className={`uk-input ${errors.player1id && "invalideBorder"}`} type="text" placeholder="Player1 ID" 
                {...register("player1id", { required: "**Player ID is Required",pattern: { value: /^[0-9]*$/, message: "**Only Numbers are allowed" } })} autoComplete='off'
               onKeyUp={()=>trigger("player1id")}/>
                  {errors.player1id && ( <span className='dailymatch_errormsgright'>{errors.player1id.message}</span>)}  
            </div>
         

            <div className="uk-margin uk-width-1-2@s reginput">
              <input className={`uk-input ${errors.player2name && "invalideBorder"}`} type="text" placeholder="Player2 Name" 
              {...register("player2name", { required: "**Player Name is Required",pattern:{value:/^[^@\s#$!][a-zA-Z_.-\s]*$/,message:"**Only Alphabets are allowed"} })}  autoComplete='off'
               onKeyUp={()=>trigger("player2name")}/>
               {errors.player2name && (<span className='dailymatch_errormsgleft'>{errors.player2name.message}</span>)}
            </div>


            <div className="uk-margin uk-width-1-2@s reginput">
              <input className={`uk-input ${errors.player2id && "invalideBorder"}`} type="text" placeholder="Player2 ID" 
               {...register("player2id", { required: "**Player ID is Required" ,pattern: { value: /^[0-9]*$/, message: "**Only Numbers are allowed" }})} autoComplete='off'
                 onKeyUp={()=>trigger("player2id")}/>
               {errors.player2id && (<span className='dailymatch_errormsgright'>{errors.player2id.message}</span>)}
            </div>


            <div className="uk-margin uk-width-1-2@s reginput">
              <input className={`uk-input ${errors.player3name && "invalideBorder"}`} type="text" placeholder="Player3 Name" 
              {...register("player3name", { required: "**Player Name is Required",pattern:{value:/^[^@\s#$!][a-zA-Z_.-\s]*$/,message:"**Only Alphabets are allowed"} })} autoComplete='off'
               onKeyUp={()=>trigger("player3name")}/>
               {errors.player3name && (<span className='dailymatch_errormsgleft'>{errors.player3name.message}</span>)}
            </div>



            <div className="uk-margin uk-width-1-2@s reginput">
              <input className={`uk-input ${errors.player3id && "invalideBorder"}`} type="text" placeholder="Player3 ID" 
              {...register("player3id", { required: "**Player ID is Required" ,pattern: { value: /^[0-9]*$/, message: "**Only Numbers are allowed" }})} autoComplete='off' 
               onKeyUp={()=>trigger("player3id")} />
              {errors.player3id && (<span className='dailymatch_errormsgright'>{errors.player3id.message}</span>)}
              
            </div>


            <div className="uk-margin uk-width-1-2@s reginput">
              <input className={`uk-input ${errors.player4name && "invalideBorder"}`} type="text" placeholder="Player4 Name"
               {...register("player4name", { required: "**Player Name is Required" ,pattern:{value:/^[^@\s#$!][a-zA-Z_.-\s]*$/,message:"**Only Alphabets are allowed"}})} autoComplete='off'
               onKeyUp={()=>trigger("player4name")}/>
                {errors.player4name && (<span className='dailymatch_errormsgleft'>{errors.player4name.message}</span>)}
            </div>


            <div className="uk-margin uk-width-1-2@s reginput">
              <input className={`uk-input ${errors.player4id && "invalideBorder"}`} type="text" placeholder="Player4 ID" 
             {...register("player4id", { required: "**Player ID is Required" ,pattern: { value: /^[0-9]*$/, message: "**Only Numbers are allowed" }})} autoComplete='off'
              onKeyUp={()=>trigger("player4id")}/>
              {errors.player4id && (<span className='dailymatch_errormsgright'>{errors.player4id.message}</span>)}
            </div>


            <div className="uk-margin uk-width-1-2@s reginput">
              <input className={`uk-input ${errors.player5name && "invalideBorder"}`} type="text" placeholder="Player5 Name" 
              {...register("player5name", { required: "**Player Name is Required" ,pattern:{value:/^[^@\s#$!][a-zA-Z_.-\s]*$/,message:"**Only Alphabets are allowed"}})} autoComplete='off'
              onKeyUp={()=>trigger("player5name")}/>
              {errors.player5name && (<span className='dailymatch_errormsgleft'>{errors.player5name.message}</span>)}
            </div>


            <div className="uk-margin uk-width-1-2@s reginput">
              <input className={`uk-input ${errors.player5id && "invalideBorder"}`} type="text" placeholder="Player5 ID" 
              {...register("player5id", { required: "**Player ID  is Required" ,pattern: { value: /^[0-9]*$/, message: "**Only Numbers are allowed" }})} autoComplete='off'
             onKeyUp={()=>trigger("player5id")} />
                {errors.player5id && (<span className='dailymatch_errormsgright'>{errors.player5id.message}</span>)}
            </div>



                {/* select */}

                <div className="dailyregslot_dropdown" onClick={(e) => setIsActive(!isActive)}>
                  <div className="dailyreg_slot_btn" >{setected}
                    <span className="fas fa-caret-down dailyreg_selectdownicon"></span>
                  </div>
                  {isActive && (
                    <div className="daily_slotlist_content">
                      {options.map((option) => (
                        <div className="daily_slotlist_item" onClick={(e) => {
                          setSelected(option);
                          setIsActive(false);
                        }
                        }><p>{option}</p></div>
                      ))}

                    </div>
                  )}
                </div>

                {/* end */}

                <div>

                  <button class="dailymatchregbtn" >Register</button>

                </div>
              </fieldset>
            </form>

          </div>
        </div>   <br />
        <Footer />
      </div>
  
  )
}

export default DailymatchReg