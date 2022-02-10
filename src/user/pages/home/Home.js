import React from 'react';
import './Home.css';
import {Link} from 'react-router-dom';

import Homeheader from '../../components/homeheader/Homeheader';
import Footer from '../../components/footer/Footer';

import img1 from '../../assets/homepage/homeslider1.jpg'
import img2 from '../../assets/homepage/homeslider.jpg'
import img3 from '../../assets/homepage/homeslider2.jpg'
import img4 from '../../assets/homepage/images2.jpg'
import ScrimImg from "../../assets/Tournament/team.jpeg";





function Home() {
  return(
    <div>
      <Homeheader/>
          <div className="home-main-wrapper">

              {/* first slider block starts*/}
              <div uk-slider="center:true,autoplay:true,autoplay-interval: 100">

                  <div class="uk-position-relative">

                      <div class="uk-slider-container uk-light slider-images">
                          <ul class="uk-slider-items uk-child-width-1-1 uk-child-width-1-1@s uk-child-width-1-1@m">
                              
                              <li>
                                  <img src={img1} class="slider-image" alt=""/>
                              </li>
                              <li>
                                  <img src={img2} class="slider-image" alt=""/>
                              </li>
                              <li>
                                  <img src={img3} class="slider-image" alt=""/>
                              </li>
                              <li>
                                  <img src={img4} class="slider-image" alt=""/>
                              </li>
                              
                          </ul>
                      </div>


                     
                          <a class="uk-position-center-left uk-position-small uk-icon uk-slidenav-previous uk-slidenav" href="#" uk-slider-item="previous">
                            <svg width="14" height="24" viewBox="0 0 14 24" xmlns="http://www.w3.org/2000/svg" class="arrow-svg">
                              <polyline fill="none" stroke="#000" stroke-width="2.4" points="12.775,1 1.225,12 12.775,23 ">
                              </polyline>
                            </svg>
                          </a>
                          <a class="uk-position-center-right uk-position-small uk-icon uk-slidenav-next uk-slidenav" href="#"  uk-slider-item="next">
                            <svg width="14" height="24" viewBox="0 0 14 24" xmlns="http://www.w3.org/2000/svg" class="arrow-svg">
                              <polyline fill="none" stroke="#000" stroke-width="2.4" points="1.225,23 12.775,12 1.225,1 ">
                              </polyline>
                            </svg>
                          </a>
                  </div>

                  {/* <ul class="uk-slider-nav uk-dotnav  uk-flex-center uk-margin" >
                  <li uk-slider-item="0" class=""><a href="" class="slider-link"  style={{width:"15px",height:"15px"}}></a></li>
                  <li uk-slider-item="1" class="uk-active"><a href="" class="slider-link" style={{width:"15px",height:"15px"}}></a></li>
                  <li uk-slider-item="2"><a href="" class="slider-link" style={{width:"15px",height:"15px"}}></a></li>
                  <li uk-slider-item="3"><a href="" class="slider-link" style={{width:"15px",height:"15px"}}></a></li>
                  </ul> */}
                           


                            

              </div>

              {/* first slider block ends */}


              {/* home card section starts */}

        <div className='scrims-card-list'>
          <div class="uk-child-width-1-2@l uk-child-width-1-3@m uk-grid uk-text-center main-card" uk-grid>
              

          {/* first card  */}
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
            {/* first card ends  */}
            {/* first card  */}
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
            {/* first card ends  */}
            {/* first card  */}
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
            {/* first card ends  */}
            {/* first card  */}
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
            {/* first card ends  */}








          </div>
        </div>



              {/* home card section ends */}



          </div>








          {/* <Link to="/tournament" >Tournament</Link>
      <Link to="/scrims" >Scrims</Link>
      <Link to="/dailymatch" >Dailymatch</Link>
      <Link to="/openrooms" >Openrooms</Link> */}



          

          
      {/* <Footer /> */}
  </div>
  );

}

export default Home;
