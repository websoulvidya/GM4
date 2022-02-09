import React from 'react';
import Userheader from '../../components/userheader/Userheader';
import Footer from '../../components/footer/Footer';
import {Link} from 'react-router-dom';




function Userhome() {
  return(
    <div>
      <Userheader/>
      <h1>HOME</h1>
      <Link to="/tournament" >Tournament</Link>
      <Link to="/scrims" >Scrims</Link>
      <Link to="/dailymatch" >Dailymatch</Link>
      <Link to="/openrooms" >Openrooms</Link>



      <Footer />
  </div>
  );

}

export default Userhome;
