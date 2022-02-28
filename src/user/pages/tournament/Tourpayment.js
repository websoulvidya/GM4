import React from 'react'
import Userheader from '../../components/userheader/Userheader';
import Footer from '../../components/footer/Footer';
import "./Tourpayment.css";

import gpay from '../../assets/homepage/Gpay.jpg'
import paytm from '../../assets/homepage/paytm.png'
import phonepe from '../../assets/homepage/phonepe.png'
import wpay from '../../assets/homepage/whatsappPay.png'

import QR_code from '../../assets/homepage/QR_code.png'


import { Grid, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));


function Tourpayment() {
  return (
    <div  style={{overflowX:"hidden"}}>

            <div>
                <Userheader />
            </div>
            <div className='tourpayment_header'>
                <h1>payment</h1>
            </div>

            
            
            <div className='tour-QR_code_section'>
                <h5>Scan QR Code To Pay </h5>
                <div className='tour-QR_code'>
                    <img src={QR_code} />
                </div>
                
                <hr />
                <div className='tour-payment_method_img'>
                    <ul>
                        <li><img src={gpay} alt="" /></li>
                        <li><img src={paytm} alt="" /></li>
                        <li><img src={phonepe} alt="" style={{width:'4.9rem'}} /></li>
                        <li><img src={wpay} alt="" /></li>
                    </ul>
                </div>


            </div>
            
            <div class="tour-payment-footer">
                <Footer />
            </div>

      
    </div>
  )
}

export default Tourpayment
