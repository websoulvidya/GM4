import React, { useLayoutEffect, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from "axios"
import Userheader from '../../components/userheader/Userheader';
import Footer from '../../components/footer/Footer';
import './Viewidp.css';
function Viewidp() {
  const { id } = useParams();


  const uniqueId = () => parseInt(Date.now() * Math.random()).toString();
  //page view
  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  });



const token = localStorage.getItem("token")
const [tournamentList, setTournamentlist] = useState([])
const [scrimsList,setScrimsList] = useState([])
const [dailtmatchList, setDailymatchList] = useState([])
   
//tournament
useEffect(() => {

  axios.get(`http://localhost:8000/api/user/list/booked/tournaments/${localStorage.getItem('id')}`, { headers: { "Authorization": `Bearer ${token}` } }).then((response) => {

    setTournamentlist(response.data)
    
  }).catch(() => {
    console.log("Error")
  })
}, [])
  //dailymatch
  useEffect(() => {
    axios.get(`http://localhost:8000/api/user/booked/matches/${localStorage.getItem('id')}`, { headers: { "Authorization": `Bearer ${token}` } }).then((response) => {
  
      setDailymatchList(response.data)
     
    }).catch(() => {
      console.log("Error")
    })
  }, [])
  
  //scrims
  
  useEffect(()=>{
    axios.get(`http://localhost:8000/api/user/view/booked/scrims/${localStorage.getItem('id')}`,{ headers: {"Authorization" : `Bearer ${token}`} }).then((response)=>{
           setScrimsList(response.data)
           
        }).catch(()=>{
      console.log("Error")
    })
  }, [])

  

  return (
    <div className='view-idp'>
      <Userheader />
      <div className='idp-head-bg'>
        <h1>IDP</h1>
      </div>

      {/* id password section */}
      { tournamentList.filter((val) => (val._id == id)).map((val) => {
          
                        if(val._id == id){
                       
                   return (
                     <>
      <div className='view-idp-container'>
        <div className='id'>
          <h5 className='idp-id'>ID</h5>
          <h5>{(val._id).slice(0,8)}</h5>
          <h5 className='idp-pass'>Password</h5>
          <h5>{val.teamName + (val._id).slice(5,9)}</h5>
        </div>
      </div>


      <div className='social-text'>
        <h4>share</h4>
      </div>

      {/* social media icons */}
      <div className='social-icons'>
        <div class="round-social-buttons">
          <a class="social-button whatsapp" href="https://web.whatsapp.com/" target="_blank"><i class="fa fa-whatsapp"></i></a>
          <a class="social-button discord" href="https://www.discord.com/" target="_blank"><i class="fab fa-discord"></i></a>
          <a class="social-button gmail" href="https://www.gmail.com/" target="_blank"><img className='gm-icon-idp' src="https://upload.wikimedia.org/wikipedia/commons/7/7e/Gmail_icon_%282020%29.svg" alt="" /> </a>
          <a class="social-button instagram" href="https://www.instagram.com/" target="_blank"><i class="fab fa-instagram"></i></a>

        </div>
      </div>
      </>
)
}
})}

                  {/* scrim */}
                  { scrimsList.filter((scr) => (scr._id == id)).map((scr) => {
                                     if(scr._id == id){
                                           return (
                                            <>
                                            <div className='view-idp-container'>
                                              <div className='id'>
                                                <h5 className='idp-id'>ID</h5>
                                                <h5>{(scr._id).slice(0,8)}</h5>
                                                <h5 className='idp-pass'>Password</h5>
                                                <h5>{scr.teamName + (scr._id).slice(5,9)}</h5>
                                              </div>
                                            </div>
                                      
                                      
                                            <div className='social-text'>
                                              <h4>share</h4>
                                            </div>
                                      
                                            {/* social media icons */}
                                            <div className='social-icons'>
                                              <div class="round-social-buttons">
                                                <a class="social-button whatsapp" href="https://web.whatsapp.com/" target="_blank"><i class="fa fa-whatsapp"></i></a>
                                                <a class="social-button discord" href="https://www.discord.com/" target="_blank"><i class="fab fa-discord"></i></a>
                                                <a class="social-button gmail" href="https://www.gmail.com/" target="_blank"><img className='gm-icon-idp' src="https://upload.wikimedia.org/wikipedia/commons/7/7e/Gmail_icon_%282020%29.svg" alt="" /> </a>
                                                <a class="social-button instagram" href="https://www.instagram.com/" target="_blank"><i class="fab fa-instagram"></i></a>
                                      
                                              </div>
                                            </div>
                                            </>
                                      )
                                      }
                                      })}

                                        {/* dailymatch */}
                                        { dailtmatchList.filter((dmt) => (dmt._id == id)).map((dmt) => {
                                     if(dmt._id == id){
                                           return (


                                            <>
                                            <div className='view-idp-container'>
                                              <div className='id'>
                                                <h5 className='idp-id'>ID</h5>
                                                <h5>{(dmt._id).slice(0,8)}</h5>
                                                <h5 className='idp-pass'>Password</h5>
                                                <h5>{dmt.teamName + (dmt._id).slice(5,9)}</h5>
                                              </div>
                                            </div>
                                      
                                      
                                            <div className='social-text'>
                                              <h4>share</h4>
                                            </div>
                                      
                                            {/* social media icons */}
                                            <div className='social-icons'>
                                              <div class="round-social-buttons">
                                                <a class="social-button whatsapp" href="https://web.whatsapp.com/" target="_blank"><i class="fa fa-whatsapp"></i></a>
                                                <a class="social-button discord" href="https://www.discord.com/" target="_blank"><i class="fab fa-discord"></i></a>
                                                <a class="social-button gmail" href="https://www.gmail.com/" target="_blank"><img className='gm-icon-idp' src="https://upload.wikimedia.org/wikipedia/commons/7/7e/Gmail_icon_%282020%29.svg" alt="" /> </a>
                                                <a class="social-button instagram" href="https://www.instagram.com/" target="_blank"><i class="fab fa-instagram"></i></a>
                                      
                                              </div>
                                            </div>
                                            </>
                                      )
                                      }
                                      })}
                                      
      <Footer />
    </div>
  )
}

export default Viewidp