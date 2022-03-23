import React from 'react';
import Dashboard from '../../components/header/Dashboard';
import Sidenav from '../../components/sidenav/Sidenav';
import Cardhome from '../../components/cardhome/Cardhome';
import Footer from '../../components/footer/Footer';
import {useLayoutEffect} from 'react';
import './Orghome.css';
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