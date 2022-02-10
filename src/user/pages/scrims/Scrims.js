import React from 'react';
import Userheader from '../../components/userheader/Userheader';
import Footer from '../../components/footer/Footer';
import ScrimImg from "../../assets/Tournament/team.jpeg";
import "../../pages/scrims/Scims.css"

function Scrims() {
  return(
   
    <div>
      <Userheader/>
      <div className='scrims-main-wrapper'>
      <div className='scrims_headerclip'>
        <h1>Scrims</h1>
      </div>
         <div className='scrims-card-list'>
          <div class="uk-child-width-1-4@l uk-child-width-1-3@m uk-grid uk-text-center main-card" uk-grid>
            <div className='scrims-carditems'>
              <div class="scrims-card">
                <div className='scrims-main-titile'>
                  <h3>Scrims name</h3>
                </div>
                <div className='scrims-team-img'>
                  <img src={ScrimImg} />
                </div>
                <div className='scrims-rule'>
                  <i class="fa fa-gavel rule-icon" aria-hidden="true"></i>
    
                </div>
               
                <div className='scrims-time-section'>
                  <h6>match time</h6>
                  <p className='match-time'>3:00</p>
                  <span>idp time</span>
                  <p className='idp-time'>2:45</p>
                </div>
                <div className='scrims-date'>
                  <p className='scrims-matchtitle'>Match date</p>
                  <span classname="scrims-matchdate">16-01-2022</span>
                </div>
                <div className='scrims-progress-bar'>
                  <progress value="3333" max="10000">

                  </progress>

                  <p className='progressbar-left-text'>100 Joined</p>
                  <p className='progressbar-right-text'>400 Spot left</p>
                </div>
                <div className='scrims-reg-section'>
                  <h6>Hosted By</h6>
                  <p>E-Sports Team</p>

                  <a >reg now</a>
                </div>
              </div>
            </div>


            <div className='scrims-carditems'>
              <div class="scrims-card">
                <div className='scrims-main-titile'>
                  <h3>Scrims name</h3>
                </div>
                <div className='scrims-team-img'>
                  <img src={ScrimImg} />
                </div>
                <div className='scrims-rule'>
                  <i class="fa fa-gavel rule-icon" aria-hidden="true"></i>
    
                </div>
               
                <div className='scrims-time-section'>
                  <h6>match time</h6>
                  <p className='match-time'>3:00</p>
                  <span>idp time</span>
                  <p className='idp-time'>2:45</p>
                </div>
                <div className='scrims-date'>
                  <p className='scrims-matchtitle'>Match date</p>
                  <span classname="scrims-matchdate">16-01-2022</span>
                </div>
                <div className='scrims-progress-bar'>
                  <progress value="3333" max="10000">

                  </progress>

                  <p className='progressbar-left-text'>100 Joined</p>
                  <p className='progressbar-right-text'>400 Spot left</p>
                </div>
                <div className='scrims-reg-section'>
                  <h6>Hosted By</h6>
                  <p>E-Sports Team</p>

                  <a >reg now</a>
                </div>
              </div>
            </div>


            <div className='scrims-carditems'>
              <div class="scrims-card">
                <div className='scrims-main-titile'>
                  <h3>Scrims name</h3>
                </div>
                <div className='scrims-team-img'>
                  <img src={ScrimImg} />
                </div>
                <div className='scrims-rule'>
                  <i class="fa fa-gavel rule-icon" aria-hidden="true"></i>
    
                </div>
               
                <div className='scrims-time-section'>
                  <h6>match time</h6>
                  <p className='match-time'>3:00</p>
                  <span>idp time</span>
                  <p className='idp-time'>2:45</p>
                </div>
                <div className='scrims-date'>
                  <p className='scrims-matchtitle'>Match date</p>
                  <span classname="scrims-matchdate">16-01-2022</span>
                </div>
                <div className='scrims-progress-bar'>
                  <progress value="3333" max="10000">

                  </progress>

                  <p className='progressbar-left-text'>100 Joined</p>
                  <p className='progressbar-right-text'>400 Spot left</p>
                </div>
                <div className='scrims-reg-section'>
                  <h6>Hosted By</h6>
                  <p>E-Sports Team</p>

                  <a >reg now</a>
                </div>
              </div>
            </div>


            <div className='scrims-carditems'>
              <div class="scrims-card">
                <div className='scrims-main-titile'>
                  <h3>Scrims name</h3>
                </div>
                <div className='scrims-team-img'>
                  <img src={ScrimImg} />
                </div>
                <div className='scrims-rule'>
                  <i class="fa fa-gavel rule-icon" aria-hidden="true"></i>
    
                </div>
               
                <div className='scrims-time-section'>
                  <h6>match time</h6>
                  <p className='match-time'>3:00</p>
                  <span>idp time</span>
                  <p className='idp-time'>2:45</p>
                </div>
                <div className='scrims-date'>
                  <p className='scrims-matchtitle'>Match date</p>
                  <span classname="scrims-matchdate">16-01-2022</span>
                </div>
                <div className='scrims-progress-bar'>
                  <progress value="3333" max="10000">

                  </progress>

                  <p className='progressbar-left-text'>100 Joined</p>
                  <p className='progressbar-right-text'>400 Spot left</p>
                </div>
                <div className='scrims-reg-section'>
                  <h6>Hosted By</h6>
                  <p>E-Sports Team</p>

                  <a >reg now</a>
                </div>
              </div>
            </div>


            <div className='scrims-carditems'>
              <div class="scrims-card">
                <div className='scrims-main-titile'>
                  <h3>Scrims name</h3>
                </div>
                <div className='scrims-team-img'>
                  <img src={ScrimImg} />
                </div>
                <div className='scrims-rule'>
                  <i class="fa fa-gavel rule-icon" aria-hidden="true"></i>
    
                </div>
               
                <div className='scrims-time-section'>
                  <h6>match time</h6>
                  <p className='match-time'>3:00</p>
                  <span>idp time</span>
                  <p className='idp-time'>2:45</p>
                </div>
                <div className='scrims-date'>
                  <p className='scrims-matchtitle'>Match date</p>
                  <span classname="scrims-matchdate">16-01-2022</span>
                </div>
                <div className='scrims-progress-bar'>
                  <progress value="3333" max="10000">

                  </progress>

                  <p className='progressbar-left-text'>100 Joined</p>
                  <p className='progressbar-right-text'>400 Spot left</p>
                </div>
                <div className='scrims-reg-section'>
                  <h6>Hosted By</h6>
                  <p>E-Sports Team</p>

                  <a >reg now</a>
                </div>
              </div>
            </div>


            <div className='scrims-carditems'>
              <div class="scrims-card">
                <div className='scrims-main-titile'>
                  <h3>Scrims name</h3>
                </div>
                <div className='scrims-team-img'>
                  <img src={ScrimImg} />
                </div>
                <div className='scrims-rule'>
                  <i class="fa fa-gavel rule-icon" aria-hidden="true"></i>
    
                </div>
               
                <div className='scrims-time-section'>
                  <h6>match time</h6>
                  <p className='match-time'>3:00</p>
                  <span>idp time</span>
                  <p className='idp-time'>2:45</p>
                </div>
                <div className='scrims-date'>
                  <p className='scrims-matchtitle'>Match date</p>
                  <span classname="scrims-matchdate">16-01-2022</span>
                </div>
                <div className='scrims-progress-bar'>
                  <progress value="3333" max="10000">

                  </progress>

                  <p className='progressbar-left-text'>100 Joined</p>
                  <p className='progressbar-right-text'>400 Spot left</p>
                </div>
                <div className='scrims-reg-section'>
                  <h6>Hosted By</h6>
                  <p>E-Sports Team</p>

                  <a >reg now</a>
                </div>
              </div>
            </div>


            <div className='scrims-carditems'>
              <div class="scrims-card">
                <div className='scrims-main-titile'>
                  <h3>Scrims name</h3>
                </div>
                <div className='scrims-team-img'>
                  <img src={ScrimImg} />
                </div>
                <div className='scrims-rule'>
                  <i class="fa fa-gavel rule-icon" aria-hidden="true"></i>
    
                </div>
               
                <div className='scrims-time-section'>
                  <h6>match time</h6>
                  <p className='match-time'>3:00</p>
                  <span>idp time</span>
                  <p className='idp-time'>2:45</p>
                </div>
                <div className='scrims-date'>
                  <p className='scrims-matchtitle'>Match date</p>
                  <span classname="scrims-matchdate">16-01-2022</span>
                </div>
                <div className='scrims-progress-bar'>
                  <progress value="3333" max="10000">

                  </progress>

                  <p className='progressbar-left-text'>100 Joined</p>
                  <p className='progressbar-right-text'>400 Spot left</p>
                </div>
                <div className='scrims-reg-section'>
                  <h6>Hosted By</h6>
                  <p>E-Sports Team</p>

                  <a >reg now</a>
                </div>
              </div>
            </div>


            <div className='scrims-carditems'>
              <div class="scrims-card">
                <div className='scrims-main-titile'>
                  <h3>Scrims name</h3>
                </div>
                <div className='scrims-team-img'>
                  <img src={ScrimImg} />
                </div>
                <div className='scrims-rule'>
                  <i class="fa fa-gavel rule-icon" aria-hidden="true"></i>
    
                </div>
               
                <div className='scrims-time-section'>
                  <h6>match time</h6>
                  <p className='match-time'>3:00</p>
                  <span>idp time</span>
                  <p className='idp-time'>2:45</p>
                </div>
                <div className='scrims-date'>
                  <p className='scrims-matchtitle'>Match date</p>
                  <span classname="scrims-matchdate">16-01-2022</span>
                </div>
                <div className='scrims-progress-bar'>
                  <progress value="3333" max="10000">

                  </progress>

                  <p className='progressbar-left-text'>100 Joined</p>
                  <p className='progressbar-right-text'>400 Spot left</p>
                </div>
                <div className='scrims-reg-section'>
                  <h6>Hosted By</h6>
                  <p>E-Sports Team</p>

                  <a >reg now</a>
                </div>
              </div>
            </div>


            </div>
        </div>

      </div>
      
      {/* <Footer /> */}
  </div>
  );

}

export default Scrims;
