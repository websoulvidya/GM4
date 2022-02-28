import React from 'react';
import Dashboard from '../../components/header/Dashboard';
import Footer from '../../components/footer/Footer';
import './Dailymatchslotlist.css';
import Grid from '@mui/material/Grid';
import Pagination from '@mui/material/Pagination'
import Stack from "@mui/material/Stack";





function Dailymatchslotlist(){



    return(
        <div >
      <Dashboard/>
        <div>

            {/* Header */}

        <h1 class="slotlistheader">DAILY MATCH SLOT LIST</h1>
        <div class="uk-margin uk-flex uk-flex-center ">
        <h3 class="totalteam">Total Teams : 25</h3>
            <input class="uk-input searchfield" type="text" placeholder="Enter Team Name" />
            <button class="searchbtn">Search</button>
            </div>

 {/* Accordion Section  */}
 <Grid container>
<Grid Item xs={12} lg={6} sm={12} xl={6} md={7} className='grid-sections'>
<div id="digital-accordians">
<ul uk-accordion="collapsible: true">
    <li>
        <a class="uk-accordion-title lis" href="#" >
        <span class="lt">SLOT NUMBER</span><span class="ltt">TEAM NAME</span></a>
        <hr/>
    </li>
    <li>
        <a class="uk-accordion-title liscon" href="#">
        <span>01</span><span>TEAM 01</span></a>
        <div class="uk-accordion-content">
            <p class="tag">Team Tag</p>
            <ul class="ulist">
                <li class="plist">p1 <span>player name1</span> <span>PID1</span></li>
                <li class="plist">p2  <span>player name2</span> <span>PID2</span></li>
                <li class="plist">p3 <span>player name3</span><span>PID3</span></li>
                <li class="plist">p4 <span>player name4</span> <span>PID4</span></li>
                <li class="plist">p5 <span>player name5</span> <span>PID5</span></li>
            </ul>
        </div>
        <hr/>
    </li>

    <li>
        <a class="uk-accordion-title liscon" href="#">
        <span>02</span><span>TEAM 02</span></a>
        <div class="uk-accordion-content">
            <p>Team Tag</p>
            <ul class="ulist">
                <li class="plist">p1 <span>player name1</span> <span>PID1</span></li>
                <li class="plist">p2  <span>player name2</span> <span>PID2</span></li>
                <li class="plist">p3 <span>player name3</span><span>PID3</span></li>
                <li class="plist">p4 <span>player name4</span> <span>PID4</span></li>
                <li class="plist">p5 <span>player name5</span> <span>PID5</span></li>
            </ul>
        </div>
        <hr/>
    </li>
    <li>
    <a class="uk-accordion-title liscon" href="#">
    <span>03</span><span>TEAM 03</span></a>
        <div class="uk-accordion-content">
            <p>Team Tag</p>
            <ul class="ulist">
                <li class="plist">p1 <span>player name1</span> <span>PID1</span></li>
                <li class="plist">p2  <span>player name2</span> <span>PID2</span></li>
                <li class="plist">p3 <span>player name3</span><span>PID3</span></li>
                <li class="plist">p4 <span>player name4</span> <span>PID4</span></li>
                <li class="plist">p5 <span>player name5</span> <span>PID5</span></li>
            </ul>
        </div>
        <hr/>
    </li>
    <li>
    <a class="uk-accordion-title liscon" href="#">
    <span>04</span><span>TEAM 04</span></a>
        <div class="uk-accordion-content">
            <p>Team Tag</p>
            <ul class="ulist">
                <li class="plist">p1 <span>player name1</span> <span>PID1</span></li>
                <li class="plist">p2  <span>player name2</span> <span>PID2</span></li>
                <li class="plist">p3 <span>player name3</span><span>PID3</span></li>
                <li class="plist">p4 <span>player name4</span> <span>PID4</span></li>
                <li class="plist">p5 <span>player name5</span> <span>PID5</span></li>
            </ul>
        </div>
        <hr/>
    </li>
    <li>
    <a class="uk-accordion-title liscon" href="#">
    <span>05</span><span class="lstt">TEAM 05</span></a>
        <div class="uk-accordion-content">
            <p>Team Tag</p>
            <ul class="ulist">
                <li class="plist">p1 <span>player name1</span> <span>PID1</span></li>
                <li class="plist">p2  <span>player name2</span> <span>PID2</span></li>
                <li class="plist">p3 <span>player name3</span><span>PID3</span></li>
                <li class="plist">p4 <span>player name4</span> <span>PID4</span></li>
                <li class="plist">p5 <span>player name5</span> <span>PID5</span></li>
            </ul>
        </div>
        <hr/>
    </li>
    <li>
    <a class="uk-accordion-title liscon" href="#">
    <span>06</span><span>TEAM 06</span></a>
        <div class="uk-accordion-content">
            <p>Team Tag</p>
            <ul class="ulist">
                <li class="plist">p1 <span>player name1</span> <span>PID1</span></li>
                <li class="plist">p2  <span>player name2</span> <span>PID2</span></li>
                <li class="plist">p3 <span>player name3</span><span>PID3</span></li>
                <li class="plist">p4 <span>player name4</span> <span>PID4</span></li>
                <li class="plist">p5 <span>player name5</span> <span>PID5</span></li>
            </ul>
        </div>
        <hr/>
    </li>
     <li>
     <a class="uk-accordion-title liscon" href="#">
    <span>07</span><span>TEAM 07</span></a>
        <div class="uk-accordion-content">
            <p>Team Tag</p>
            <ul class="ulist">
                <li class="plist">p1 <span>player name1</span> <span>PID1</span></li>
                <li class="plist">p2  <span>player name2</span> <span>PID2</span></li>
                <li class="plist">p3 <span>player name3</span><span>PID3</span></li>
                <li class="plist">p4 <span>player name4</span> <span>PID4</span></li>
                <li class="plist">p5 <span>player name5</span> <span>PID5</span></li>
            </ul>
        </div>
        <hr/>
    </li>
    <li>
    <a class="uk-accordion-title liscon" href="#">
    <span>08</span><span>TEAM 08</span></a>
        <div class="uk-accordion-content">
            <p>Team Tag</p>
            <ul class="ulist">
                <li class="plist">p1 <span>player name1</span> <span>PID1</span></li>
                <li class="plist">p2  <span>player name2</span> <span>PID2</span></li>
                <li class="plist">p3 <span>player name3</span><span>PID3</span></li>
                <li class="plist">p4 <span>player name4</span> <span>PID4</span></li>
                <li class="plist">p5 <span>player name5</span> <span>PID5</span></li>
            </ul>
        </div>
        <hr/>
    </li>
    <li>
    <a class="uk-accordion-title liscon" href="#">
    <span>09</span><span>TEAM 09</span></a>
        <div class="uk-accordion-content">
            <p>Team Tag</p>
            <ul class="ulist">
                <li class="plist">p1 <span>player name1</span> <span>PID1</span></li>
                <li class="plist">p2  <span>player name2</span> <span>PID2</span></li>
                <li class="plist">p3 <span>player name3</span><span>PID3</span></li>
                <li class="plist">p4 <span>player name4</span> <span>PID4</span></li>
                <li class="plist">p5 <span>player name5</span> <span>PID5</span></li>
            </ul>
        </div>
        <hr/>
    </li>
    <li>
    <a class="uk-accordion-title liscon" href="#">
    <span>10</span><span>TEAM 10</span></a>
        <div class="uk-accordion-content">
            <p>Team Tag</p>
            <ul class="ulist">
                <li class="plist">p1<span>player name1</span> <span>PID1</span></li>
                <li class="plist">p2 <span>player name2</span> <span>PID2</span></li>
                <li class="plist">p3 <span>player name3</span><span>PID3</span></li>
                <li class="plist">p4 <span>player name4</span> <span>PID4</span></li>
                <li class="plist">p5 <span>player name5</span> <span>PID5</span></li>
            </ul>
        </div>
    </li>
</ul>
</div>
<br/>
<Stack spacing={2} id="pagin">
              <Pagination count={5} color="primary" id="pgn"/>
            </Stack>

     </Grid>
     </Grid>



</div>
      <br/>
      <Footer />
      </div>
    )
}

export default Dailymatchslotlist;
