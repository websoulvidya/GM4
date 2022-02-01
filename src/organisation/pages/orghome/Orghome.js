import React from 'react';
import Dashboard from '../../components/header/Dashboard';
import Footer from '../../components/footer/Footer';
import {Link} from 'react-router-dom';


function Orghome() {
  return(
    <div>
      <Dashboard/>
      <h1>orgHome</h1>

      <Link to="/addtournament" >Add Tournament</Link>
      <Link to="/addscrims" >Add Scrims</Link>
      <Link to="/adddailymatch" >Add Dailymatch</Link>
      <Link to="/addopenrooms" >Add Openrooms</Link>

      <Footer />
  </div>
  );

}

export default Orghome;
