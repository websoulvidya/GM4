import React,{useEffect,useLayoutEffect,useState} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'

import './Userhome.css';
import Userheader from '../../components/userheader/Userheader';
import Footer from '../../components/footer/Footer';
import {Link} from 'react-router-dom';
import {Grid,Box,Button} from '@mui/material';

import Aos from  'aos';
import "aos/dist/aos.css";


import img1 from '../../assets/homepage/homeslider1.jpg'
import img2 from '../../assets/homepage/homeslider.jpg'
import img3 from '../../assets/homepage/homeslider2.jpg'
import img4 from '../../assets/homepage/homeslider6.jpg'


import Banner from "../../assets/homepage/banner.jpg";





function Userhome() {

  const navigate = useNavigate();

  // //API integration code
  // const [info,setInfo]= useState("")
  // const userName = async (e) => {
  //   let user= await localStorage.getItem('username')
  //   if(user){
  //     setInfo(user)
  //   }else{
  //     navigate('/login')
  //   }
  // }
  // useEffect(() => {
  //  userName();
  // }, [info])


  
  
    // funcion for aos
    useEffect(() => {
      Aos.init({duration:1000});
  },[]);

  //code to scroll to the top of window
  useLayoutEffect(() => {
    window.scrollTo(0, 0)
    });

  return(
    <div className="userhome" style={{width:"100%",margin:"0px",padding:"0px",overflowX:"hidden"}}>
      <Userheader/>
      <div className="userhome-main-wrapper">

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

              {/*user home card section starts */}

              <div className='userhome-card-list'>
                  <div className='userhome_headerclip'>
                    <h1>Match Category</h1>
                  </div>
                  <div class="userhome-card-main">
                      <Grid container spacing={{ xs: 2, }} columns={{ xs: 4, sm: 8, md: 12 }} >

                        {/* first card  */}
                          <Grid item xs={12}  md={6} lg={6} >
                            <div class="uk-animation-toggle" tabindex="0">
                              <div class="uk-animation-scale-up ">
                                <div className='userhome-carditems'  data-aos="slide-right" data-aos-duration="800" style={{backgroundColor: '#E7658E'}}>
                                  <div class="userhome-card ">
                                    <div className='userhome-main-title'>
                                      <Link to="/tournament" style={{textDecoration:"none"}}><h3>Tournaments</h3></Link>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>        
                          </Grid>
                          {/* first card ends  */}

                          {/* second card  */}
                          <Grid item xs={12}  md={6} lg={6} >
                            <div class="uk-animation-toggle" tabindex="0">
                              <div class="uk-animation-scale-up">
                                <div className='userhome-carditems' data-aos="slide-left" data-aos-duration="800" style={{backgroundColor: '#EDAE57'}}>
                                  <div class="userhome-card">
                                    <div className='userhome-main-title'>
                                        <Link to="/scrims" style={{textDecoration:"none"}}><h3>Scrims</h3></Link>
                                    </div>
                                    
                                  </div>
                                </div>
                              </div>
                            </div>
                          </Grid>
                         {/* second card ends  */}
                          
                          {/* third card  */}
                          <Grid item xs={12}  md={6} lg={6} >
                            <div class="uk-animation-toggle" tabindex="0">
                              <div class="uk-animation-scale-up">
                                <div className='userhome-carditems' data-aos="slide-right" data-aos-duration="800" style={{backgroundColor: '#A27CFB'}}>
                                  <div class="userhome-card">
                                    <div className='userhome-main-title'>
                                      <Link to="/dailymatch" style={{textDecoration:"none"}}><h3>Daily match</h3></Link>
                                    </div>
                                    
                                  </div>
                                </div>
                              </div>
                            </div>
                          </Grid>
                  
                            {/* third card ends  */}
                            
                            {/* fourth card  */}
                          <Grid item xs={12}  md={6} lg={6} >
                            <div class="uk-animation-toggle" tabindex="0">
                              <div class="uk-animation-scale-up">
                                <div className='userhome-carditems' data-aos="slide-left" data-aos-duration="800" style={{backgroundColor: '#72E1BA'}}>
                                  <div class="userhome-card">
                                    <div className='userhome-main-title'>
                                      <Link to="/openrooms" style={{textDecoration:"none"}}><h3>Open rooms</h3></Link>
                                    </div>
                                    
                                  </div>
                                </div>
                              </div>
                            </div>
                          </Grid>
                          {/* fourth card ends  */}
                      </Grid>
                    </div>
                  </div>
                {/*user home card section ends */}


                <Grid item xs={12}  md={12} lg={12} >

                    <div class="userhome-banner">
                    <img src={Banner} class="userbanner-image" alt=""/>

                    </div>
                </Grid>

        

          {/* <Link to="/tournament" >Tournament</Link>
      <Link to="/scrims" >Scrims</Link>
      <Link to="/dailymatch" >Dailymatch</Link>
      <Link to="/openrooms" >Openrooms</Link> */}


              

      
      

          </div>
          <div class="home-footer">
          <Footer />
          </div>  
    </div>
  );

}

export default Userhome;
