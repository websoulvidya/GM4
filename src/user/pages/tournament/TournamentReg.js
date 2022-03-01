import React from 'react';
import "../../pages/tournament/Tournament.css";
import Userheader from '../../components/userheader/Userheader';
import Footer from '../../components/footer/Footer';
import ""

function TournamentReg() {
  return (
    <div>
      {/* <Userheader/> */}
    <h1 class="regheader">Registeration</h1>
    <div>
      <form>
      <fieldset class="uk-fieldset">
        <h2 class="joinhead">Join Now</h2>
        <hr/>
      <div class="uk-margin">
            <input class="uk-input" type="text" placeholder="Organization Name" required/>
            </div>
            <div class="uk-margin">
            <input class="uk-input" type="text" placeholder="Match Date" required/>
            </div>
            <div class="uk-margin">
            <input class="uk-input" type="text" placeholder="Match Time" required/>
            </div>
            <div class="uk-margin">
            <input class="uk-input" type="text" placeholder="IDP Time" required/>
            </div>
            <div class="uk-margin">
            <input class="uk-input" type="text" placeholder="Match Type" required/>
        </div>
        <div>
          <button class="openbtn">Open</button>
          <button class="slotlistbtn">Slot List</button>
          <button class="closebtn">Close</button>
        </div>
      </fieldset>
      </form>
      </div>
           {/* <Footer /> */}
    </div>
  )
}

export default TournamentReg;