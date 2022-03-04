import React from 'react';

import './Orgpayment.css'

import Dashboard from '../../components/header/Dashboard';
import Footer from '../../components/footer/Footer';

import { loremIpsum, LoremIpsum } from 'react-lorem-ipsum';

import payment_img1 from '../../assets/payment/payment_banner2.jpg'
import img5 from '../../assets/payment/img5.jpg'

import QR_code from '../../assets/homeimages/QR_code.png';
import gpay from '../../assets/homeimages/Gpay.jpg';
import paytm from '../../assets/homeimages/paytm.png'
import phonepe from '../../assets/homeimages/phonepe.png';
import wpay from '../../assets/homeimages/whatsappPay.png'










import { Grid, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));


function Orgpayment() {
    return (
        <div>
            <div>
                <Dashboard />
            </div>
            <div className='payment_header'>
                <h1>payment</h1>
            </div>
            
            <div className='payment_card_heading'>
                <h3>GM4 MemberShip</h3>
            </div>
            <div className='payment_card'>
                <Grid container spacing={2} justifyContent={'center'}>
                    <Grid item xs={10} sm={9} md={7} id='tour_pay_card'>
                        <h3>Your Benefits</h3>
                        <h6>Lorem ipsum odor amet, consectetuer adipiscing elit. Ac purus in massa egestas mollis varius;
                            dignissim elementum. Mollis tincidunt mattis hendrerit dolor eros enim, nisi ligula ornare.</h6>
                        {/* <img src={img5} /> */}
                        <img src='https://media.istockphoto.com/vectors/scanning-a-qr-code-on-a-smartphone-vector-id1174223675?k=20&m=1174223675&s=612x612&w=0&h=qDjPSlPogAoUi9KrGZx23OqMlcuREEkWqLQyiK-pJT8=' />
                        <div className='tournament_price_details'>
                            <h5>$99,00<span>/mon</span></h5>

                        </div>


                    </Grid>
                </Grid>
            </div>
            <div className='QR_code_section'>
                <h5>Scan QR Code To Pay </h5>
                <div className='QR_code'>
                    <img src={QR_code} />
                </div>
                
                <hr />
                <div className='payment_method_img'>
                    <ul>
                        <li><img src={gpay} alt="" /></li>
                        <li><img src={paytm} alt="" /></li>
                        <li><img src={phonepe} alt="" style={{width:'4.9rem'}} /></li>
                        <li><img src={wpay} alt="" /></li>
                    </ul>
                </div>


            </div>
            
            <div>
                <Footer />
            </div>

        </div>
    )
}

export default Orgpayment;
