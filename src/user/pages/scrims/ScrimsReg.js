import React, { useState } from "react";
import ReactDOM from "react-dom";
import { useForm } from 'react-hook-form';
import Userheader from '../../components/userheader/Userheader';
import Footer from '../../components/footer/Footer';
import "../../pages/scrims/ScrimsReg.css"


function ScrimsReg() {
  const { register, handleSubmit, formState: { errors }, reset} = useForm();

  
  const submitData = (data) =>{

       reset();
  };

  const [isActive, setIsActive] = useState(false);
  const [setected, setSelected] = useState("Select Slot");
  const options = ["Slot 1", "Slot 2", "Slot 3"];
  ///////////////Team Name

  const [teamName, setTeamName] = useState("")
  const handleKeyDown = (e) => {
    if (e.key === " " && teamName.length===0) {
      e.preventDefault();
    }
  };
///Team Tag
  const [teamTag, setTeamTag] = useState("")
  const handleKeyDown1 = (e) => {
    if (e.key === " " && teamTag.length===0) {
      e.preventDefault();
    }
  };
//Player1Name
  const [playerName1, setPlayerName1] = useState("")
  const handleKeyDown2 = (e) => {
    if (e.key === " " && playerName1.length===0) {
      e.preventDefault();
    }
  };
//Player1 ID
  const [player1ID, setPlayer1ID] = useState("")
  const handleKeyDown3 = (e) => {
    if (e.key === " " && player1ID.length===0) {
      e.preventDefault();
    }
  };
//Player 2 Name
  const [playerName2, setPlayerName2] = useState("")
  const handleKeyDown4 = (e) => {
    if (e.key === " " && playerName2.length===0) {
      e.preventDefault();
    }
  };
//player 2 ID
  const [player2ID, setPlayer2ID] = useState("")
  const handleKeyDown5 = (e) => {
    if (e.key === " " && player2ID.length===0) {
      e.preventDefault();
    }
  };

//Player 3 Name
const [playerName3, setPlayerName3] = useState("")
const handleKeyDown6 = (e) => {
  if (e.key === " " && playerName3.length===0) {
    e.preventDefault();
  }
};
//player 3 ID
const [player3ID, setPlayer3ID] = useState("")
const handleKeyDown7 = (e) => {
  if (e.key === " " && player3ID.length===0) {
    e.preventDefault();
  }
};

//Player 4 Name
const [playerName4, setPlayerName4] = useState("")
const handleKeyDown8 = (e) => {
  if (e.key === " " && playerName4.length===0) {
    e.preventDefault();
  }
};
//player 4 ID
const [player4ID, setPlayer4ID] = useState("")
const handleKeyDown9 = (e) => {
  if (e.key === " " && player4ID.length===0) {
    e.preventDefault();
  }
};


//Player 5 Name
const [playerName5, setPlayerName5] = useState("")
const handleKeyDown10 = (e) => {
  if (e.key === " " && playerName5.length===0) {
    e.preventDefault();
  }
};
//player 5 ID
const [player5ID, setPlayer5ID] = useState("")
const handleKeyDown11 = (e) => {
  if (e.key === " " && player5ID.length===0) {
    e.preventDefault();
  }
};
  return (
 
    <div>
    <Userheader/>
    <div className="scrimscircles" style={{overflowX:"hidden"}}>
    <div className='scrims_regheaderclip'>
        <h1>Registration</h1>
      </div>
      <div className="scrims_smallcircles">
        <form className="scrims_regform" onSubmit={handleSubmit(submitData)}>
          <fieldset className="uk-fieldset uk-grid-small" uk-grid>
            <h2 className="scrims_joinhead">Register Now</h2>
            <hr />
            <div className="uk-margin uk-width-1-2@s reginput">
              <input className="uk-input" type="text" placeholder="Team Name" id='teamname'  
              {...register("teamname", { required: "**Team Name is Required" ,pattern:{value:/^[a-zA-Z0-9_.-]*$/,message:"**Only Alphabets and Numbers are allowed"} })}  
              autoComplete='off' onChange= {(e)=>setTeamName(e.target.value.replace(/[^\w\s]/gi,"") )}
              onKeyDown={handleKeyDown} value={teamName} />
               {errors.teamname && (<span className='errormsgleft'>{errors.teamname.message}</span>)}
            </div>
          
           
           
            <div className="uk-margin uk-width-1-2@s reginput">
              <input className="uk-input" type="text" placeholder="Team Tag" 
              {...register("teamtag", { required: "**Team Tag is Required",pattern:{value:/^[a-zA-Z0-9_.-]*$/,message:"**Only Alphabets and Numbers are allowed"} })} autoComplete='off'
              onChange= {(e)=>setTeamTag(e.target.value.replace(/[^\w\s]/gi,"") )}
              onKeyDown={handleKeyDown1} value={teamTag} />
                {errors.teamtag && ( <span className='errormsgright'>{errors.teamtag.message}</span>)}      
            </div>
                

            <div className="uk-margin uk-width-1-2@s reginput">
              <input className="uk-input" type="text" placeholder="Player1 Name" 
              {...register("player1name", { required: "**Player Name is Required",pattern:{value:/^[A-Za-z]+$/,message:"Only Alphabets are allowed"}})} autoComplete='off'
              onChange= {(e)=>setPlayerName1(e.target.value.replace(/[^\w\s]/gi,"").replace(/[0-9]/g,""))}
              onKeyDown={handleKeyDown2} value={playerName1} />
              {errors.player1name && (<span className='errormsgleft'>{errors.player1name.message}</span>)}
            </div>
          

            <div className="uk-margin uk-width-1-2@s reginput">
              <input className="uk-input" type="text" placeholder="Player1 ID" 
                {...register("player1id", { required: "**Player ID is Required",pattern:{value:/^[0-9]*$/,message:"**Only Numbers are allowed"} })} autoComplete='off'
                onChange= {(e)=>setPlayer1ID(e.target.value.replace(/[^\w\s]/gi,"").replace(/^[A-Za-z]+$/g,"") )}
              onKeyDown={handleKeyDown3} value={player1ID} />
                  {errors.player1id && ( <span className='errormsgright'>{errors.player1id.message}</span>)}  
            </div>
         

            <div className="uk-margin uk-width-1-2@s reginput">
              <input className="uk-input" type="text" placeholder="Player2 Name" 
              {...register("player2name", { required: "**Player Name is Required",pattern:{value:/^[A-Za-z]+$/,message:"Only Alphabets are allowed"} })}  autoComplete='off'
              onChange= {(e)=>setPlayerName2(e.target.value.replace(/[^\w\s]/gi,"").replace(/[0-9]/g,"") )}
              onKeyDown={handleKeyDown4} value={playerName2} />
               {errors.player2name && (<span className='errormsgleft'>{errors.player2name.message}</span>)}
            </div>


            <div className="uk-margin uk-width-1-2@s reginput">
              <input className="uk-input" type="text" placeholder="Player2 ID" 
               {...register("player2id", { required: "**Player ID is Required",pattern:{value:/^[0-9]*$/,message:"**Only Numbers are allowed"} })} autoComplete='off'
               onChange= {(e)=>setPlayer2ID(e.target.value.replace(/[^\w\s]/gi,"").replace(/^[A-Za-z]+$/g,"") )}
              onKeyDown={handleKeyDown5} value={player2ID} />
               {errors.player2id && (<span className='errormsgright'>{errors.player2id.message}</span>)}
            </div>


            <div className="uk-margin uk-width-1-2@s reginput">
              <input className="uk-input" type="text" placeholder="Player3 Name" 
              {...register("player3name", { required: "**Player Name is Required" ,pattern:{value:/^[A-Za-z]+$/,message:"Only Alphabets are allowed"}})} autoComplete='off'
              onChange= {(e)=>setPlayerName3(e.target.value.replace(/[^\w\s]/gi,"").replace(/[0-9]/g,"") )}
              onKeyDown={handleKeyDown6} value={playerName3} />
               {errors.player3name && (<span className='errormsgleft'>{errors.player3name.message}</span>)}
            </div>



            <div className="uk-margin uk-width-1-2@s reginput">
              <input className="uk-input" type="text" placeholder="Player3 ID" 
              {...register("player3id", { required: "**Player ID is Required",pattern:{value:/^[0-9]*$/,message:"**Only Numbers are allowed"} })} autoComplete='off' 
              onChange= {(e)=>setPlayer3ID(e.target.value.replace(/[^\w\s]/gi,"").replace(/^[A-Za-z]+$/g,"") )}
              onKeyDown={handleKeyDown7} value={player3ID}  />
              {errors.player3id && (<span className='errormsgright'>{errors.player3id.message}</span>)}
              
            </div>


            <div className="uk-margin uk-width-1-2@s reginput">
              <input className="uk-input" type="text" placeholder="Player4 Name"
               {...register("player4name", { required: "**Player Name is Required", pattern:{value:/^[A-Za-z]+$/,message:"Only Alphabets are allowed"} })} autoComplete='off'
               onChange= {(e)=>setPlayerName4(e.target.value.replace(/[^\w\s]/gi,"").replace(/[0-9]/g,"") )}
              onKeyDown={handleKeyDown8} value={playerName4} />
                {errors.player4name && (<span className='errormsgleft'>{errors.player4name.message}</span>)}
            </div>


            <div className="uk-margin uk-width-1-2@s reginput">
              <input className="uk-input" type="text" placeholder="Player4 ID" 
             {...register("player4id", { required: "**Player ID is Required",pattern:{value:/^[0-9]*$/,message:"**Only Numbers are allowed"} })} autoComplete='off'
             onChange= {(e)=>setPlayer4ID(e.target.value.replace(/[^\w\s]/gi,"").replace(/^[A-Za-z]+$/g,"") )}
              onKeyDown={handleKeyDown9} value={player4ID} />
              {errors.player4id && (<span className='errormsgright'>{errors.player4id.message}</span>)}
            </div>


            <div className="uk-margin uk-width-1-2@s reginput">
              <input className="uk-input" type="text" placeholder="Player5 Name" 
              {...register("player5name", { required: "**Player Name is Required",pattern:{value:/^[A-Za-z]+$/,message:"Only Alphabets are allowed"} })} autoComplete='off'
              onChange= {(e)=>setPlayerName5(e.target.value.replace(/[^\w\s]/gi,"").replace(/[0-9]/g,""))}
              onKeyDown={handleKeyDown10} value={playerName5} />
              {errors.player5name && (<span className='errormsgleft'>{errors.player5name.message}</span>)}
            </div>


            <div className="uk-margin uk-width-1-2@s reginput">
              <input className="uk-input" type="text" placeholder="Player5 ID" 
              {...register("player5id", { required: "**Player ID  is Required",pattern:{value:/^[0-9]*$/,message:"**Only Numbers are allowed"} })} autoComplete='off'
              onChange= {(e)=>setPlayer5ID(e.target.value.replace(/[^\w\s]/gi,"").replace(/^[A-Za-z]+$/g,"") )}
              onKeyDown={handleKeyDown11} value={player5ID} />
                {errors.player5id && (<span className='errormsgright'>{errors.player5id.message}</span>)}
            </div>



            {/* select */}
            <div className="scrimsslot_dropdown" onClick={(e) => setIsActive(!isActive)}>
                  <div className="scrimsslot_btn" >{setected}
                    <span className="fas fa-caret-down scrims_selectdownicon"></span>
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

              <button class="scrimregbtn">Register</button>

            </div>
          </fieldset>
        </form>

      </div>
    </div>   <br />
    <Footer />
  </div>

    );
}
export default ScrimsReg;