import React from 'react';
import Dashboard from '../../components/header/Dashboard';
import Footer from '../../components/footer/Footer';
import './Addtournament.css';
import {Link} from 'react-router-dom';

function Adddtournament() {
 return (
    <div>
      <div>
      <Dashboard/>
      </div>
      <div class="circles">
​
    <h1 class="regheader">Registeration</h1>
    <div class="smallcircles">
   
      <form class="regform">
      <fieldset class="uk-fieldset">
        <h2 class="joinhead">Join Now</h2>
        <hr/>
      <div class="uk-margin">
            <input class="uk-input" type="text" placeholder="Organization Name" />
            </div>
            <div class="uk-margin">
            <input class="uk-input" type="text" placeholder="Tournament Name" />
            </div>
            <div class="uk-margin">
            <input class="uk-input" type="text" placeholder="Prize Pool" />
            </div>
            <div class="uk-margin">
            <input class="uk-input" type="text" placeholder="Entry Fee" />
            </div>
            <div class="uk-margin">
            <input class="uk-input" type="text" placeholder="Team Limit" />
        </div>
        <div class="uk-margin">
            <input class="uk-input" type="text" placeholder="Match Type" />
        </div>
        <div>
          <button class="openbtn">Open</button>
          <Link  to="/Tournamentlist"><button class="slotlistbtn">Team List</button></Link>
          <button class="closebtn">Close</button>
        </div>
      </fieldset>
      </form>
      </div>
      </div>
​
    
    </div>
  )
}
export default Adddtournament;