import React from 'react'
import "../../pages/openrooms/OpenroomIDP.css"
import Userheader from '../../components/userheader/Userheader';
import Footer from '../../components/footer/Footer';
function OpenroomIDP() {
    return (
        <div className='openidppage'> 
            <Userheader/>
            <div className='openidp-main-wrapper'>
                <div className='openidp_headerclip'>
                    <h1>IDP page</h1>
                </div>
                <div className='idpcard-wrapper'>
                    <div className='openidp-carditems'>
                        <div class="openidp-card">
                       
                            <div className='openroom-idpshare'>
                           
                                <h6 className='openroom-id'>ID</h6><p>Team12</p>
                        
                               <h6 className='openroom-pwd'>Password</h6> <p>1234567</p>
                            
                            </div>
                          
                        </div>
                    </div>
                    <div className='idp-shareicon'>
                       <a>Share</a>
                       
                    </div>
                    <div class="openroom_rounded-social-buttons">
                    <a class="social-button whatsapp" href="https://web.whatsapp.com/" target="_blank"><i class="fa fa-whatsapp"></i></a>
                    <a class="social-button discord" href="https://discord.com/" target="_blank"><i class="fab fa-discord"></i></a>
                    <a class="social-button gmail" href="https://www.gmail.com/" target="_blank"><img className='gmail-oenroom-idp' src="https://upload.wikimedia.org/wikipedia/commons/7/7e/Gmail_icon_%282020%29.svg" alt="" /></a>
                    <a class="social-button instagram" href="https://www.instagram.com/" target="_blank"><i class="fa fa-instagram"></i></a>
                </div>
                </div>
            </div>


            <Footer /></div>
    )
}

export default OpenroomIDP