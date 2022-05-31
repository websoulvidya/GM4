import React from 'react';
import Dashboard from '../../components/header/Dashboard';
import Footer from '../../components/footer/Footer';
import './Advertisement.css'
import img7 from '../../assets/homeimages/img7.jpg'
import {
    Link,
} from 'react-router-dom';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));
function Advertisement() {
    return (
        <div style={{overflowX:"hidden"}}>
            <div>
                <Dashboard />
            </div>
            <div class="advs_header">
                <h1>Advertisement</h1>
            </div>
            {/* start  advertisement banner image */}
            <div className='payment_banner'>
                <img src={img7} />
            </div>
            {/* end advertisement banner image */}
            <div className='ads_card_header'>
                <h4>Advertisement Plan</h4>
            </div>
            {/* start advertisement card portion */}
            <div className='ads'>
                <Container maxWidth="xl">
                    <Box sx={{ flexGrow: 1 }}>
                        <Grid container spacing={2}>
                            {/* each card sections */}
                            <Grid item xl={3} xs={12} md={4} lg={3} sm={6}>
                                <div className='ads_card'>
                                    {/*start ads price details */}
                                    <div className='plan_price' >
                                        <h6>Intro</h6>
                                        <h4>$19<span>/month</span></h4>
                                    </div>
                                    {/* end ads price details */}
                                    <div className='ads_details'>
                                        <span>Plan Includes:</span>
                                        <ul>
                                            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis labore pariatur sit </li>
                                            <li> praesentium dolorem odio facilis, necessitatibus harum placeat?</li>
                                            <li> quisquam voluptatem doloremque, dolores itaque porro sed dignissimos,</li>
                                        </ul>
                                    </div>
                                    {/* <a href="" >choose plan</a> */}
                                    <Link to={`/ads_payment`} state={{ from: "Intro" }} >Choose plan</Link>
                                </div>
                            </Grid>
                            {/* each card section */}
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
                                            <li> quisquam voluptatem doloremque, dolores itaque porro sed dignissimos,</li>
                                        </ul>
                                    </div>
                                    {/* <button>choose plan</button> */}
                                    <Link to={'/ads_payment'} state={{ from: "Base" }} >Choose plan</Link>
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
                                    <Link to={'/ads_payment'} state={{ from: "Popular" }}>Choose plan</Link>
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
                                    <Link to={'/ads_payment'} state={{ from: "Enterprice" }} >Choose plan</Link>
                                </div>
                            </Grid>
                        </Grid>
                    </Box>
                </Container>
            </div>
            {/* end advertisement card portion */}
            
            <div>
                <Footer />
            </div>
        </div>
    )
}
export default Advertisement;
