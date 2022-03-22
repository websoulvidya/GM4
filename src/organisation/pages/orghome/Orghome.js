import React from 'react';
import Dashboard from '../../components/header/Dashboard';
import Sidenav from '../../components/sidenav/Sidenav';
import Cardhome from '../../components/cardhome/Cardhome';
import Footer from '../../components/footer/Footer';
import {Link} from 'react-router-dom';

import  react from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './Orghome.css';
import {useLayoutEffect} from "react";
function Orghome() {
  useLayoutEffect(() => {
    window.scrollTo(0, 0)
});
  return(
      <div  style={{width:"100%",margin:"0px",padding:"0px",overflowX:"hidden"}}>
        <div>
          <Dashboard/>
        </div>
        <div class="uk-column-1-2 org-home">
          <Sidenav/>
          <Cardhome/>
        </div>
        <div class="org-footer">
          <Footer/>
        </div>
      </div>
  );

}

export default Orghome;