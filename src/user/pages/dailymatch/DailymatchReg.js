import React, { useState } from "react";
import { useForm } from 'react-hook-form';
import "../../pages/dailymatch/DailymatchReg.css"
import Selectarrowimg from "../../assets/DailyMatch/select-option.svg"

import AnimatedPage from "../AnimatedPage"

function DailymatchReg() {



  const { register, handleSubmit, watch, formState: { errors }, reset } = useForm();

  const submitData = (data) => {

    reset();

  };

  const [isActive, setIsActive] = useState(false);
  const [setected, setSelected] = useState("Select Slot");
  const options = ["Slot 1", "Slot 2", "Slot 3"];
  return (
    <AnimatedPage>
      <div>
        {/* <Userheader/> */}
        <div className="circles" style={{overflowX:"hidden"}}>
        <div className='dailymatch_regheaderclip'>
        <h1>Registration</h1>
      </div>
          <div className="smallcircles">
            <form className="regform" onSubmit={handleSubmit(submitData)}>
              <fieldset className="uk-fieldset uk-grid-small" uk-grid>
                <h2 className="joinhead">Register Now</h2>
                <hr />
                <div className="uk-margin uk-width-1-2@s reginput">
                  <input className="uk-input" type="text" placeholder="Team Name" id='teamname'
                    {...register("teamname", { required: "**Team Name is Required" })} autoComplete='off' />
                  {errors.teamname && (<span className='errormsgleft'>{errors.teamname.message}</span>)}
                </div>



                <div className="uk-margin uk-width-1-2@s reginput">
                  <input className="uk-input" type="text" placeholder="Team Tag"
                    {...register("teamtag", { required: "**Team Tag is Required", pattern: { value: /^[a-zA-Z0-9_.-]*$/, message: "**Only Alphabets and Numbers are allowed" } })} autoComplete='off' />
                  {errors.teamtag && (<span className='errormsgright'>{errors.teamtag.message}</span>)}
                </div>


                <div className="uk-margin uk-width-1-2@s reginput">
                  <input className="uk-input" type="text" placeholder="Player1 Name"
                    {...register("player1name", { required: "**Player Name is Required" })} autoComplete='off' />
                  {errors.player1name && (<span className='errormsgleft'>{errors.player1name.message}</span>)}
                </div>


                <div className="uk-margin uk-width-1-2@s reginput">
                  <input className="uk-input" type="text" placeholder="Player1 ID"
                    {...register("player1id", { required: "**Player ID is Required", pattern: { value: /^[0-9]*$/, message: "**Only Numbers are allowed" } })} autoComplete='off' />
                  {errors.player1id && (<span className='errormsgright'>{errors.player1id.message}</span>)}
                </div>


                <div className="uk-margin uk-width-1-2@s reginput">
                  <input className="uk-input" type="text" placeholder="Player2 Name"
                    {...register("player2name", { required: "**Player Name is Required" })} autoComplete='off' />
                  {errors.player2name && (<span className='errormsgleft'>{errors.player2name.message}</span>)}
                </div>
                <div className="uk-margin uk-width-1-2@s reginput">
                  <input className="uk-input" type="text" placeholder="Player2 ID"
                    {...register("player2id", { required: "**Player ID is Required", pattern: { value: /^[0-9]*$/, message: "**Only Numbers are allowed" } })} autoComplete='off' />
                  {errors.player2id && (<span className='errormsgright'>{errors.player2id.message}</span>)}
                </div>
                <div className="uk-margin uk-width-1-2@s reginput">
                  <input className="uk-input" type="text" placeholder="Player3 Name"
                    {...register("player3name", { required: "**Player Name is Required" })} autoComplete='off' />
                  {errors.player3name && (<span className='errormsgleft'>{errors.player3name.message}</span>)}
                </div>
                <div className="uk-margin uk-width-1-2@s reginput">
                  <input className="uk-input" type="text" placeholder="Player3 ID"
                    {...register("player3id", { required: "**Player ID is Required", pattern: { value: /^[0-9]*$/, message: "**Only Numbers are allowed" } })} autoComplete='off' />
                  {errors.player3id && (<span className='errormsgright'>{errors.player3id.message}</span>)}

                </div>
                <div className="uk-margin uk-width-1-2@s reginput">
                  <input className="uk-input" type="text" placeholder="Player4 Name"
                    {...register("player4name", { required: "**Player Name is Required" })} autoComplete='off' />
                  {errors.player4name && (<span className='errormsgleft'>{errors.player4name.message}</span>)}
                </div>
                <div className="uk-margin uk-width-1-2@s reginput">
                  <input className="uk-input" type="text" placeholder="Player4 ID"
                    {...register("player4id", { required: "**Player ID is Required", pattern: { value: /^[0-9]*$/, message: "**Only Numbers are allowed" } })} autoComplete='off' />
                  {errors.player4id && (<span className='errormsgright'>{errors.player4id.message}</span>)}
                </div>
                <div className="uk-margin uk-width-1-2@s reginput">
                  <input className="uk-input" type="text" placeholder="Player5 Name"
                    {...register("player5name", { required: "**Player Name is Required" })} autoComplete='off' />
                  {errors.player5name && (<span className='errormsgleft'>{errors.player5name.message}</span>)}
                </div>
                <div className="uk-margin uk-width-1-2@s reginput">
                  <input className="uk-input" type="text" placeholder="Player5 ID"
                    {...register("player5id", { required: "**Player ID  is Required", pattern: { value: /^[0-9]*$/, message: "**Only Numbers are allowed" } })} autoComplete='off' />
                  {errors.player5id && (<span className='errormsgright'>{errors.player5id.message}</span>)}
                </div>
   


                {/* select */}

                <div className="slot_dropdown" onClick={(e) => setIsActive(!isActive)}>
                  <div className="slot_btn" >{setected}
                    <span className="fas fa-caret-down selectdownicon"></span>
                  </div>
                  {isActive && (
                    <div className="slotlist_content">
                      {options.map((option) => (
                        <div className="slotlist_item" onClick={(e) => {
                          setSelected(option);
                          setIsActive(false);
                        }
                        }>{option}</div>
                      ))}

                    </div>
                  )}
                </div>

                {/* end */}

                <div>

                  <button class="scrimregbtn" >Register</button>

                </div>
              </fieldset>
            </form>

          </div>
        </div>   <br />
        {/* <Footer /> */}
      </div>
    </AnimatedPage>
  )
}

export default DailymatchReg