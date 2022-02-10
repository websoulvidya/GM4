import React from 'react';
import './Userhome.css';
import Userheader from '../../components/userheader/Userheader';
import Footer from '../../components/footer/Footer';
import {Link} from 'react-router-dom';

import img1 from '../../assets/homepage/homeslider1.jpg'
import img2 from '../../assets/homepage/homeslider.jpg'
import img3 from '../../assets/homepage/homeslider2.jpg'
import img4 from '../../assets/homepage/images2.jpg'




function Userhome() {
  return(
    <div>
      <Userheader/>
      <div className="home-main-wrapper">

              {/* first slider block starts*/}
              <div uk-slider="center:true,autoplay:true,autoplay-interval: 100">

                  <div class="uk-position-relative">

                      <div class="uk-slider-container uk-light userslider-images">
                          <ul class="uk-slider-items uk-child-width-1-1 uk-child-width-1-1@s uk-child-width-1-1@m">
                              
                              <li>
                                  <img src={img1} class="userslider-image" alt=""/>
                              </li>
                              <li>
                                  <img src={img2} class="userslider-image" alt=""/>
                              </li>
                              <li>
                                  <img src={img3} class="userslider-image" alt=""/>
                              </li>
                              <li>
                                  <img src={img4} class="userslider-image" alt=""/>
                              </li>
                              
                          </ul>
                      </div>


                     
                          <a class="uk-position-center-left uk-position-small uk-icon uk-slidenav-previous uk-slidenav" href="#" uk-slider-item="previous">
                            <svg width="14" height="24" viewBox="0 0 14 24" xmlns="http://www.w3.org/2000/svg" class="user-arrow-svg">
                              <polyline fill="none" stroke="#000" stroke-width="2.4" points="12.775,1 1.225,12 12.775,23 ">
                              </polyline>
                            </svg>
                          </a>
                          <a class="uk-position-center-right uk-position-small uk-icon uk-slidenav-next uk-slidenav" href="#"  uk-slider-item="next">
                            <svg width="14" height="24" viewBox="0 0 14 24" xmlns="http://www.w3.org/2000/svg" class="user-arrow-svg">
                              <polyline fill="none" stroke="#000" stroke-width="2.4" points="1.225,23 12.775,12 1.225,1 ">
                              </polyline>
                            </svg>
                          </a>
                  </div>

                  {/* <ul class="uk-slider-nav uk-dotnav  uk-flex-center uk-margin" >
                  <li uk-slider-item="0" class=""><a href="" class="slider-link" ></a></li>
                  <li uk-slider-item="1" class="uk-active"><a href="" class="slider-link"></a></li>
                  <li uk-slider-item="2"><a href="" class="slider-link"></a></li>
                  <li uk-slider-item="3"><a href="" class="slider-link"></a></li>
                  </ul> */}
                           


                            

              </div>

              {/* first slider block ends */}

      
      <Link to="/tournament" >Tournament</Link>
      <Link to="/scrims" >Scrims</Link>
      <Link to="/dailymatch" >Dailymatch</Link>
      <Link to="/openrooms" >Openrooms</Link>


      </div>
      {/* <Footer /> */}
  </div>
  );

}

export default Userhome;
