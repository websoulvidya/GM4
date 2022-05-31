import React, { useLayoutEffect, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from "axios"
import "../../pages/openrooms/OpenroomIDP.css"
import Userheader from '../../components/userheader/Userheader';
import Footer from '../../components/footer/Footer';

function OpenroomIDP() {
    const { id } = useParams();
    const [openRoomList, setOpenRoomList] = useState([])
    const token = localStorage.getItem("token")
  
    useEffect(() => {
      axios.get(`https://gm4-server.herokuapp.com/api/user/openroom/list/all/${localStorage.getItem('id')}`, { headers: { "Authorization": `Bearer ${token}` } }).then((response) => {
  
        setOpenRoomList(response.data)
  
      }).catch(() => {
        console.log("Error")
      })
    }, [])
    return (
        <div className='openidppage'> 
            <Userheader/>
            <div className='openidp-main-wrapper'>
                <div className='openidp_headerclip'>
                    <h1>IDP page</h1>
                </div>

                { openRoomList.filter((val) => (val._id == id)).map((val) => {
                        if(val._id == id){
                   return (

                <div className='idpcard-wrapper'>
                    <div className='openidp-carditems'>
                        <div class="openidp-card">
                       
                            <div className='openroom-idpshare'>
                           
                                <h6 className='openroom-id'>ID</h6><p>{(val._id).slice(0,8)}</p>
                        
                               <h6 className='openroom-pwd'>Password</h6> <p>{(val.organiserId).slice(0,6)}</p>
                            
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

)
}
})}


            </div>


            <Footer /></div>
    )
}

export default OpenroomIDP