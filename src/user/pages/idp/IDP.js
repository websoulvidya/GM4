import React from 'react';
import Userheader from '../../components/userheader/Userheader';
import Footer from '../../components/footer/Footer';
import './IDP.css';
import {Grid} from '@mui/material';
import img1 from '../../assets/homepage/idp-pubg.jpg'
function IDP() {
  return(
    <div>
      <Userheader/>
      <div className='idp-head-bg'>

      <h1>IDP</h1>
      </div>
      <div className="myBoolingInfo_wrapper11">
        <Grid container>
          <Grid item md={6} xs={12} xl={4}>
                <div className="myBoolingInfo_container1">
                    <div className="myBoolingInfo_card1">
                        <h2>BOOKED TOURNAMENT</h2>
                        <div className="Image_flex">
                            <div className="Image_box">
                                <img src={img1} alt="fleximage" />
                            </div>
                            <div className="text-box">
                                <div className="text-box_flex_box1">
                                    <div className="p_pool">
                                        <h4>ORGANISER NAME</h4>
                                        {/* <p>300</p> */}
                                    </div>
                                    {/* <div className="hori-div">
                                    </div>
                                    <div className="entry">
                                        <h4>SLOT NUMBER</h4>
                                           <p>300</p>
                                    </div> */}
                                </div>
                                <progress value="3333" max="10000"></progress>
                                <div className="progresstextflex">
                                    <div>
                                        <p>100 joined</p>
                                    </div>
                                    <div>
                                        <p>400 spot left</p>
                                    </div>
                                </div>
                                <div className="timeFlexbox_match">
                                    <div className="my_Date1">
                                        <h4>MATCH DATE</h4>
                                        <p>06/05/2022</p>
                                    </div>
                                    <div className="horidiv3"></div>
                                    <div className="my_Time1">
                                        <h4>MATCH TIME</h4>
                                        <p>2:30pm</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="blue_box">
                        <div>
                            <h4>IDP TIME</h4>
                            <p>9:00am</p>
                        </div>
                        <div className="horidiv2"></div>
                        <div>
                        <h4>  <a className='idp-link' href="/viewidp" > VIEW IDP</a></h4>
                         
                        </div>
                    </div>
                    <div className='myi_tournament-rule1'>
                        <i class="fa fa-gavel rule-icon" aria-hidden="true"></i>
                    </div>
                </div>
                </Grid>
                <Grid item md={6} xs={12} xl={4}>
                <div className="myBoolingInfo_container1">
                    <div className="myBoolingInfo_card1">
                        <h2>BOOKED SCRIMS</h2>
                        <div className="Image_flex">
                            <div className="Image_box">
                            <img src={img1} alt="fleximage" />
                            </div>
                            <div className="text-box">
                                <div className="text-box_flex_box1">
                                    <div className="p_pool">
                                        <h4>ORGANISER NAME</h4>
                                        {/* <p>300</p> */}
                                    </div>
                                    {/* <div className="hori-div">
                                    </div>
                                    <div className="entry">
                                        <h4>SLOT NUMBER</h4>
                                        <p>300</p>
                                    </div> */}
                                </div>
                                <progress value="3333" max="10000"></progress>
                                <div className="progresstextflex">
                                    <div>
                                        <p>100 joined</p>
                                    </div>
                                    <div>
                                        <p>400 spot left</p>
                                    </div>
                                </div>
                                <div className="timeFlexbox_match">
                                    <div className="my_Date1">
                                        <h4>MATCH DATE</h4>
                                        <p>06/05/2022</p>
                                    </div>
                                    <div className="horidiv3"></div>
                                    <div className="my_Time1">
                                        <h4>MATCH TIME</h4>
                                        <p>2:30pm</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="blue_box">
                        <div>
                            <h4>IDP TIME</h4>
                            <p>9:00am</p>
                        </div>
                        <div className="horidiv2"></div>
                        <div>
                            <h4>  <a className='idp-link' href="/viewidp" > VIEW IDP</a></h4>
                            {/* <p>Scrim</p> */}
                        </div>
                    </div>
                    <div className='myi_tournament-rule1'>
                        <i class="fa fa-gavel rule-icon" aria-hidden="true"></i>
                    </div>
                </div>
                </Grid>
                <Grid item md={6} xs={12} xl={4}>
                <div className="myBoolingInfo_container1">
                    <div className="myBoolingInfo_card1">
                        <h2>BOOKED DAILY MATCHES</h2>
                        <div className="Image_flex">
                            <div className="Image_box">
                            <img src={img1} alt="fleximage" />
                            </div>
                            <div className="text-box">
                                <div className="text-box_flex_box1">
                                    <div className="p_pool">
                                        <h4>ORGANISER NAME</h4>
                                    </div>
                                    {/* <div className="hori-div">
                                    </div>
                                    <div className="entry">
                                        <h4>SLOT NUMBER</h4>
                                        <p>300</p>
                                    </div> */}
                                </div>
                                <progress value="3333" max="10000"></progress>
                                <div className="progresstextflex">
                                    <div>
                                        <p>100 joined</p>
                                    </div>
                                    <div>
                                        <p>400 spot left</p>
                                    </div>
                                </div>
                                <div className="timeFlexbox_match">
                                    <div className="my_Date1">
                                        <h4>MATCH DATE</h4>
                                        <p>06/05/2022</p>
                                    </div>
                                    <div className="horidiv3"></div>
                                    <div className="my_Time1">
                                        <h4>MATCH TIME</h4>
                                        <p>2:30pm</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="blue_box">
                        <div>
                            <h4>IDP TIME</h4>
                            <p>9:00am</p>
                        </div>
                        <div className="horidiv2"></div>
                        <div>
                        <h4>  <a className='idp-link' href="/viewidp" > VIEW IDP</a></h4>
                            {/* <p>Scrim</p> */}
                        </div>
                    </div>
                    <div className='myi_tournament-rule1'>
                        <i class="fa fa-gavel rule-icon" aria-hidden="true"></i>
                    </div>
                </div>
                </Grid>
                </Grid>

            </div>
      <Footer />
  </div>
  );

}

export default IDP;
