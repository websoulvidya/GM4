import React from 'react';
import Dashboard from '../../components/header/Dashboard';
import Footer from '../../components/footer/Footer';
import './Tournamenlist.css';
import Grid from '@mui/material/Grid';
import Pagination from '@mui/material/Pagination'
import Stack from "@mui/material/Stack";


function Addtournamentslist(){

    return(
        <div >
      <Dashboard/>
        <div>

            {/* Header */}

        <h1 class="teamlistheader">TOURNAMENT LIST</h1>
        <div class="uk-margin uk-flex uk-flex-center ">
        <h3 class="totalteamzz">Total Teams : 500</h3>
            <input class="uk-input searchfieldz" type="text" placeholder="Enter Team Name" />
            <button class="searchbtnz">Search</button>
            </div>

 {/* Accordion Section  */}
 <Grid container>
<Grid Item xs={12} lg={6} sm={12} xl={6} md={7} className='grid-sectionz'>
<div id="digital-accordianz">
<ul uk-accordion="collapsible: true">
    <li>
        <a class="uk-accordion-title liz" href="#" >
        <span class="lzt">SLOT NUMBER</span><span class="lztt">TEAM NAME</span></a>
        <hr/>
    </li>
    <li>
        <a class="uk-accordion-title lizcon" href="#">
        <span>01</span><span>TEAM 01</span></a>
        <div class="uk-accordion-content">
            <p class="tagz">Team Tag</p>
            <ul class="ulistz">
                <li class="plistz">p1 <span>player name1</span> <span>PID1</span></li>
                <li class="plistz">p2  <span>player name2</span> <span>PID2</span></li>
                <li class="plistz">p3 <span>player name3</span><span>PID3</span></li>
                <li class="plistz">p4 <span>player name4</span> <span>PID4</span></li>
                <li class="plistz">p5 <span>player name5</span> <span>PID5</span></li>
            </ul>
        </div>
        <hr/>
    </li>

    <li>
        <a class="uk-accordion-title lizcon" href="#">
        <span>02</span><span>TEAM 02</span></a>
        <div class="uk-accordion-content">
            <p>Team Tag</p>
            <ul class="ulistz">
                <li class="plistz">p1 <span>player name1</span> <span>PID1</span></li>
                <li class="plistz">p2  <span>player name2</span> <span>PID2</span></li>
                <li class="plistz">p3 <span>player name3</span><span>PID3</span></li>
                <li class="plistz">p4 <span>player name4</span> <span>PID4</span></li>
                <li class="plistz">p5 <span>player name5</span> <span>PID5</span></li>
            </ul>
        </div>
        <hr/>
    </li>
    <li>
    <a class="uk-accordion-title lizcon" href="#">
    <span>03</span><span>TEAM 03</span></a>
        <div class="uk-accordion-content">
            <p>Team Tag</p>
            <ul class="ulistz">
                <li class="plistz">p1 <span>player name1</span> <span>PID1</span></li>
                <li class="plistz">p2  <span>player name2</span> <span>PID2</span></li>
                <li class="plistz">p3 <span>player name3</span><span>PID3</span></li>
                <li class="plistz">p4 <span>player name4</span> <span>PID4</span></li>
                <li class="plistz">p5 <span>player name5</span> <span>PID5</span></li>
            </ul>
        </div>
        <hr/>
    </li>
    <li>
    <a class="uk-accordion-title lizcon" href="#">
    <span>04</span><span>TEAM 04</span></a>
        <div class="uk-accordion-content">
            <p>Team Tag</p>
            <ul class="ulistz">
                <li class="plistz">p1 <span>player name1</span> <span>PID1</span></li>
                <li class="plistz">p2  <span>player name2</span> <span>PID2</span></li>
                <li class="plistz">p3 <span>player name3</span><span>PID3</span></li>
                <li class="plistz">p4 <span>player name4</span> <span>PID4</span></li>
                <li class="plistz">p5 <span>player name5</span> <span>PID5</span></li>
            </ul>
        </div>
        <hr/>
    </li>
    <li>
    <a class="uk-accordion-title lizcon" href="#">
    <span>05</span><span class="lstt">TEAM 05</span></a>
        <div class="uk-accordion-content">
            <p>Team Tag</p>
            <ul class="ulistz">
                <li class="plistz">p1 <span>player name1</span> <span>PID1</span></li>
                <li class="plistz">p2  <span>player name2</span> <span>PID2</span></li>
                <li class="plistz">p3 <span>player name3</span><span>PID3</span></li>
                <li class="plistz">p4 <span>player name4</span> <span>PID4</span></li>
                <li class="plistz">p5 <span>player name5</span> <span>PID5</span></li>
            </ul>
        </div>
        <hr/>
    </li>
    <li>
    <a class="uk-accordion-title lizcon" href="#">
    <span>06</span><span>TEAM 06</span></a>
        <div class="uk-accordion-content">
            <p>Team Tag</p>
            <ul class="ulistz">
                <li class="plistz">p1 <span>player name1</span> <span>PID1</span></li>
                <li class="plistz">p2  <span>player name2</span> <span>PID2</span></li>
                <li class="plistz">p3 <span>player name3</span><span>PID3</span></li>
                <li class="plistz">p4 <span>player name4</span> <span>PID4</span></li>
                <li class="plistz">p5 <span>player name5</span> <span>PID5</span></li>
            </ul>
        </div>
        <hr/>
    </li>
     <li>
     <a class="uk-accordion-title lizcon" href="#">
    <span>07</span><span>TEAM 07</span></a>
        <div class="uk-accordion-content">
            <p>Team Tag</p>
            <ul class="ulistz">
                <li class="plistz">p1 <span>player name1</span> <span>PID1</span></li>
                <li class="plistz">p2  <span>player name2</span> <span>PID2</span></li>
                <li class="plistz">p3 <span>player name3</span><span>PID3</span></li>
                <li class="plist">p4 <span>player name4</span> <span>PID4</span></li>
                <li class="plistz">p5 <span>player name5</span> <span>PID5</span></li>
            </ul>
        </div>
        <hr/>
    </li>
    <li>
    <a class="uk-accordion-title lizcon" href="#">
    <span>08</span><span>TEAM 08</span></a>
        <div class="uk-accordion-content">
            <p>Team Tag</p>
            <ul class="ulistz">
                <li class="plistz">p1 <span>player name1</span> <span>PID1</span></li>
                <li class="plistz">p2  <span>player name2</span> <span>PID2</span></li>
                <li class="plistz">p3 <span>player name3</span><span>PID3</span></li>
                <li class="plistz">p4 <span>player name4</span> <span>PID4</span></li>
                <li class="plistz">p5 <span>player name5</span> <span>PID5</span></li>
            </ul>
        </div>
        <hr/>
    </li>
    <li>
    <a class="uk-accordion-title lizcon" href="#">
    <span>09</span><span>TEAM 09</span></a>
        <div class="uk-accordion-content">
            <p>Team Tag</p>
            <ul class="ulistz">
                <li class="plistz">p1 <span>player name1</span> <span>PID1</span></li>
                <li class="plistz">p2  <span>player name2</span> <span>PID2</span></li>
                <li class="plistz">p3 <span>player name3</span><span>PID3</span></li>
                <li class="plistz">p4 <span>player name4</span> <span>PID4</span></li>
                <li class="plistz">p5 <span>player name5</span> <span>PID5</span></li>
            </ul>
        </div>
        <hr/>
    </li>
    <li>
    <a class="uk-accordion-title lizcon" href="#">
    <span>10</span><span>TEAM 10</span></a>
        <div class="uk-accordion-content">
            <p>Team Tag</p>
            <ul class="ulistz">
                <li class="plistz">p1<span>player name1</span> <span>PID1</span></li>
                <li class="plistz">p2 <span>player name2</span> <span>PID2</span></li>
                <li class="plistz">p3 <span>player name3</span><span>PID3</span></li>
                <li class="plistz">p4 <span>player name4</span> <span>PID4</span></li>
                <li class="plistz">p5 <span>player name5</span> <span>PID5</span></li>
            </ul>
        </div>
    </li>
</ul>
</div>
<br/>
<Stack spacing={2} id="paginz">
              <Pagination count={50} color="primary" id="pgnz"/>
            </Stack>

     </Grid>
     </Grid>



</div>
      <br/>
      <Footer />
      </div>
    )
}

export default Addtournamentslist;
