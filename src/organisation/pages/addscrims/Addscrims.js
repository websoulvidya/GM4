import React from 'react';
import Dashboard from '../../components/header/Dashboard';
import Footer from '../../components/footer/Footer';
import './Addscrims.css';

function Adddscrims() {
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
            <input class="uk-input" type="text" placeholder="Match Date" />
            </div>
            <div class="uk-margin">
            <input class="uk-input" type="text" placeholder="Match Time" />
            </div>
            <div class="uk-margin">
            <input class="uk-input" type="text" placeholder="IDP Time" />
            </div>
            <div class="uk-margin">
            <input class="uk-input" type="text" placeholder="Match Type" />
        </div>
        <div>
          <button class="openbtn">Open</button>
          <button class="slotlistbtn">Open</button>

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
export default Adddscrims;