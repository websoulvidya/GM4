import React from 'react'
import Userheader from '../../components/userheader/Userheader';
import Footer from '../../components/footer/Footer';
import './Viewidp.css';
function Viewidp() {
  return (
    <div className='view-idp'>
          <Userheader/>
        <div className='idp-head-bg'>
              <h1>IDP</h1>
              </div>

              {/* id password section */}
         <div className='view-idp-container'>
             <div className='id'>
                 <h5 className='idp-id'>ID</h5>
                 <h5>Team12</h5>
                 <h5 className='idp-pass'>Password</h5>
                 <h5>1234567</h5>
             </div>
            </div>

             <div className='social-text'>
             <h4>share</h4>
             </div>

             {/* social media icons */}
             <div className='social-icons'>
                <div class="round-social-buttons">
                    <a class="social-button whatsapp" href="https://www.facebook.com/" target="_blank"><i class="fab fa-whatsapp"></i></a>
                    <a class="social-button discord" href="https://www.twitter.com/" target="_blank"><i class="fab fa-discord"></i></a>
                    <a class="social-button gmail" href="https://www.linkedin.com/" target="_blank"><i class="fab fa-google"></i></a>
                    <a class="social-button instagram" href="https://www.instagram.com/" target="_blank"><i class="fab fa-instagram"></i></a>
                </div>
             </div>
        <Footer/>
    </div>
  )
}

export default Viewidp