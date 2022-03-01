import React from 'react'
import Homeheader from '../../../components/homeheader/Homeheader';
import Footer from '../../../components/footer/Footer';

import './Advertise.css'

import AdsHead from '../../../assets/images/img7.jpg';

import { Box } from '@mui/system';
import { Grid } from '@mui/material';
import { CardActions } from '@mui/material';
import { Button } from '@mui/material';
import { IconButton } from '@mui/material';
import { Container } from '@mui/material';
import { Link } from 'react-router-dom';


function Advertise() {
  return (
    <div>
      <Homeheader/>

      <div className='ad-head'>

        </div>


        <Box sx={{ flexGrow: 1 }} ml='auto' mr='auto'>
           <Grid container spacing={3} sx={{maxWidth:'1500px'}} style={{width:'90%',paddingRight:'25px'}} ml='auto' mr='auto' mt='-60px' mb='100px'>
             <div className='ad-head2'>
               <h1>Advertisemnet</h1>
             </div>
             </Grid>
                 </Box>

  
      <div className='ads-head-img'>
    
      </div>





      <div className='ads'>
                <Container maxWidth="xl">
                    <Box sx={{ flexGrow: 1 }}>
                      <h1 classNmae='ads-plan'>Our Advertisemnet Plans</h1>
                        <Grid container spacing={2}>
                            <Grid item xl={3} xs={12} md={4} lg={3} sm={6}>
                                <div className='ads_card'>
                                    <div className='plan_price' >
                                        <h6>Intro</h6>
                                        <h4>$19<span>/month</span></h4>
                                    </div>
                                    <div className='ads_details'>
                                        <span>Plan Includes:</span>
                                        <ul>
                                            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis labore pariatur sit </li>

                                        </ul>

                                    </div>
                                    {/* <a href="" >choose plan</a> */}
                                    <Link to={'/ads_payment'} >Choose plan</Link>
                                </div>
                            </Grid>
                            <Grid item xl={3} xs={12} md={4} lg={3} sm={6} >
                                <div className='ads_card'>
                                    <div className='plan_price' >
                                        <h6>Base</h6>
                                        <h4>$39<span>/month</span></h4>
                                    </div>
                                    <div className='ads_details'>
                                        <span>Plan Includes:</span>
                                        <ul>
                                            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis labore pariatur sit </li>
                                            <li> praesentium dolorem odio facilis, necessitatibus harum placeat?</li>
                                        </ul>

                                    </div>
                                    {/* <button>choose plan</button> */}
                                    <Link to={'/ads_payment'} >Choose plan</Link>
                                </div>
                            </Grid>
                            <Grid item xl={3} xs={12} md={4} lg={3} sm={6}>
                                <div className='ads_card'>
                                    <div className='plan_price' >
                                        <h6>Popular</h6>
                                        <h4>$99<span>/month</span></h4>
                                    </div>
                                    <div className='ads_details'>
                                        <span>Plan Includes:</span>
                                        <ul>
                                            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis labore pariatur sit </li>
                                            <li> praesentium dolorem odio facilis, necessitatibus harum placeat?</li>
                                            <li> quisquam voluptatem doloremque, dolores itaque porro sed dignissimos,</li>
                                        </ul>

                                    </div>
                                    <Link to={'/ads_payment'} >Choose plan</Link>
                                </div>
                            </Grid>
                            <Grid item xl={3} xs={12} md={4} lg={3} sm={6}>
                                <div className='ads_card'>
                                    <div className='plan_price' >
                                        <h6>Enterprice</h6>
                                        <h4>$199<span>/month</span></h4>
                                    </div>
                                    <div className='ads_details'>
                                        <span>Plan Includes:</span>
                                        <ul>
                                            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis labore pariatur sit </li>
                                            <li> praesentium dolorem odio facilis, necessitatibus harum placeat</li>
                                            <li> quisquam voluptatem doloremque dolores itaque porro sed dignissimos</li>
                                        </ul>

                                    </div>
                                    <Link to={'/ads_payment'} >Choose plan</Link>
                                </div>
                            </Grid>

                        </Grid>
                    </Box>
                </Container>
            </div>





      <Footer/>
    </div>
  )
}

export default Advertise
