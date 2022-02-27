import React from 'react'
import './Footer.css'
import fimg from '../../assets/footer_Assets/logo intern re.png'
import {BrowserRouter,Link,Route,Routes} from 'react-router-dom'
function Footer() {
  return (
    <div>
      {/* this is the main wrapper for the footer */}
      <div className='footer_wrapper1'>
        {/* this div is a flex box inside this flex box their is another flex box */}
        <div className='footer_row_1'>
          {/* this div is also a flex box */}
          <div className='footer_innersub_row_1'>
            <div className='footer_innerdiv-logo-content footer_innerdiv'>
              {/* this div is where logo is placed */}
              <div className='footer_innerdiv-image-logo'>
                <img src={fimg} alt="footer_image" />
              </div>
              <div className='footer_innerdiv-logo_text'>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur, corrupti fugit nemo sapiente rerum libero quod consequuntur vel dolorem nobis molestiae ab enim?</p>
              </div>
            </div>
            <div className='footer_innerdiv-important-links footer_innerdiv'>
              <div className='footer_innerdiv-important-links-heading'>
                <h4>IMPORTANT LINKS</h4>
              </div>
              {/* Links to the pages are given here */}
              <div className='footer_innerdiv-important-links_links'>
                <ul>
                  <li><Link to="k">Tournament</Link></li>
                  <li><Link to="k">Scrims</Link></li>
                  <li><Link to="k">Daily Matches</Link></li>
                  <li><Link to="k">Open Matches</Link></li>
                </ul>
              </div>
            </div>
          </div>
          <div className='footer_innersub_row_2'>
            <div className='footer_innerdiv-useful-links footer_innerdiv'>
              <div className='footer_innerdiv-useful-links-heading'>
                <h4>USEFUL LINKS</h4>
              </div>
              {/* links to pages are given here */}
              <div className='footer_innerdiv-useful-links_links'>
              <ul>
                  <li><Link to="k">Home</Link></li>
                  <li><Link to="k">About Us</Link></li>
                  <li><Link to="k">Careers</Link></li>
                  <li><Link to="k">Blogs</Link></li>
                </ul>
              </div>
            </div>
            <div className='footer_innerdiv-contact-us footer_innerdiv'>
              <div className='footer_innerdiv-contact-us-heading'>
                <h4>CONTACT US</h4>
                <p>Banglore,</p>
                <p>India,</p>
                <p>Ph:79472</p>
                <p>Email:ugbvw@gmail.com</p>
                {/* Links to social media Icons are placed here */}
                <div  className='footer_icons'>
                    <Link to="kkk" uk-icon="icon: facebook"></Link>
                    <Link to="kkk" uk-icon="icon: twitter"></Link>
                    <Link to="kkk" uk-icon="icon: instagram"></Link>
                    <Link to="kkk" uk-icon="icon: linkedin"></Link>
                    <Link to="kkk" uk-icon="icon: youtube"></Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='footer_copyright'>
          <p>© 2008 - 2021 Gm4. All Rights Reserved.</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
