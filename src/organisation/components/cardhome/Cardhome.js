import React from 'react';
import './Cardhome.css';
import {Link} from 'react-router-dom';


function Cardhome(){
 return(
 
    <div  className="card_home_main" >
        <div class="uk-flex uk-flex-wrap" id="card_first_main">
            <div class="uk-card uk-card-default uk-card-body" id="card_first"  uk-scrollspy="cls: uk-animation-slide-left; repeat: true">
              <Link to="/addtournament" >
                <button className='button_main_card' >
                  <h4 id="addtournament_first_heading" >Add Tournament</h4>
                </button>
              </Link>
            </div>
            <div class="uk-card uk-card-default uk-card-body uk-margin-left" id="card_second" uk-scrollspy="cls: uk-animation-slide-right; repeat: true" >
              <Link to="/addscrims" >
                <button className='button_main_card'>
                  <h4 id="addtournament_first_heading">Add Scrims</h4>
                </button>
              </Link>
            </div>
        </div>
        <div class="uk-flex uk-flex-wrap " id="card_second_main" >
            <div class="uk-card uk-card-default uk-card-body"  id="card_third" uk-scrollspy="cls: uk-animation-slide-left; repeat: true" > 
              <Link to="/adddailymatch" >
                <button className='button_main_card'>
                  <h4 id="addtournament_first_heading">Add Dailymatch</h4>
                </button>
              </Link>
            </div>
            <div class="uk-card uk-card-default uk-card-body uk-margin-left" id="card_four" uk-scrollspy="cls: uk-animation-slide-right; repeat: true" > 
              <Link to="/addopenrooms" >
                <button className='button_main_card'>
                  <h4 id="addtournament_first_heading">Add Openrooms</h4>
                </button>
              </Link>
            </div>
        </div>
  </div>
 );
}


export default Cardhome;

