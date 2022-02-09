import React from "react";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

//Landing page links
import Homeheader from '../user/components/homeheader/Homeheader';
import Footer from '../user/components/footer/Footer';
import Home from '../user/pages/home/Home';
// import Organiser from '../Pages/login/organiser/Organiser';
// import User from '../Pages/login/user/User';
import About from '../user/pages/more/about/About';
import Advertise from '../user/pages/more/advertise/Advertise';
import Blog from '../user/pages/more/blog/Blog';
import Careers from '../user/pages/more/careers/Careers';
import Ourteam from '../user/pages/more/ourteam/Ourteam';



//usermodule page links

import Userheader from '../user/components/userheader/Userheader';
import Userhome from '../user/pages/userhome/Userhome';
import Useridp from '../user/pages/idp/IDP';
import Usernotif from '../user/pages/notification/Notification';
import Profile from '../user/pages/username/profile/Profile';
import Changepass from '../user/pages/username/changepass/Changepass';
import Mybookings from '../user/pages/username/mybookings/Mybookings';
import Tournament from '../user/pages/tournament/Tournament';
import Scrims from "../user/pages/scrims/Scrims";
import Dailymatch from "../user/pages/dailymatch/Dailymatch";
import Openrooms from "../user/pages/openrooms/Openrooms";




//org module page links

import Orghome from '../organisation/pages/orghome/Orghome';
import Dashboard from '../organisation/components/header/Dashboard';
import Orgfooter from '../organisation/components/footer/Footer';
import Chat from '../organisation/pages/chat/Chat';
import Orgnotification from '../organisation/pages/notification/Notification';
import Sendidp from '../organisation/pages/sendidp/Sendidp';
import Slotlist from '../organisation/pages/slotlist/Slotlist';
import Mymatches from '../organisation/pages/mymatches/Mymatches';
import Cancellation  from "../organisation/pages/cancellation/Cancellation";

import Addtournament from '../organisation/pages/addtournaments/Addtournament';
import Addscrims from "../organisation/pages/addscrims/Addscrims";
import Adddailymatch from "../organisation/pages/adddailymatches/Adddailymatches";
import Addopenrooms from "../organisation/pages/addopenrooms/Addopenrooms";
import Tournamentlist from '../organisation/pages/addtournaments/Tournamentlist'



//Authentication page links

import Signup from '../authentication/signup/Signup';
import Login from '../authentication/login/Login';
import Forgotpassword from '../authentication/forgotpassword/Forgotpassword';




export default function Navigate() {
  return (
    <BrowserRouter>
        {/* <div>
            <Homeheader/>
        </div> */}

        
    <Routes>
    
    {/* Landing page links */}

    <Route path="/homeheader" element={<Homeheader />}/>
    <Route path="/footer" element={<Footer />}/>
    <Route path="/logout" element={<Home/>}/>

      <Route exact path="/" element={<Home />}/>
      <Route  path="/about" element={<About />}/>
      <Route  path="/advertise" element={<Advertise />}/>
      <Route  path="/blog" element={<Blog/>}/>
      <Route  path="/careers" element={<Careers />}/>
      <Route path="/ourteam" element={<Ourteam />}/>

    {/* user module page links */}

    <Route path="/userheader" element={<Userheader />}/>
      <Route path="/userhome" element={<Userhome />}/>
      <Route path="/useridp" element={<Useridp />}/>
      <Route path="/notification" element={<Usernotif />}/>
      <Route path="/profile" element={<Profile />}/>
      <Route path="/changepass" element={<Changepass />}/>
      <Route path="/mybookings" element={<Mybookings />}/>
      <Route path="/tournament" element={<Tournament />}/>
      <Route path="/scrims" element={<Scrims />}/>
      <Route path="/dailymatch" element={<Dailymatch />}/>
      <Route path="/openrooms" element={<Openrooms />}/>




    {/* org module page links */}

    <Route path="/dashboard" element={<Dashboard />}/>
    <Route path="/orghome" element={<Orghome />}/>
    <Route path="/orgfooter" element={<Orgfooter />}/>
    <Route path="/chat" element={<Chat />}/>
    <Route path="/notifications" element={<Orgnotification />}/>
    <Route path="/sendidp" element={<Sendidp />}/>
    <Route path="/slotlist" element={<Slotlist />}/>
    <Route path="/mymatches" element={<Mymatches />}/>
    <Route path="/cancellation" element={<Cancellation />}/>
    <Route path="/addtournament" element={<Addtournament />}/>
    <Route path="/addscrims" element={<Addscrims />}/>
    <Route path="/adddailymatch" element={<Adddailymatch />}/>
    <Route path="/addopenrooms" element={<Addopenrooms />}/>
    <Route path="/Tournamentlist" element={<Tournamentlist />}/>



    {/* authentication page links */}

    <Route path="/signup" element={<Signup />}/>
    <Route path="/forgotpassword" element={<Forgotpassword />}/>
    <Route path="/login" element={<Login />}/>



    </Routes>

        {/* <div>
            <Footer/>
        </div> */}
  </BrowserRouter>
    
        
                
  );
}

