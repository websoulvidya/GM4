import React, { useState } from 'react'

import '../advertisement/Advertisement.css'
import * as yup from 'yup';

import { yupResolver } from '@hookform/resolvers/yup';

import Dashboard from '../../components/header/Dashboard';
import Footer from '../../components/footer/Footer';
import { FilledInput } from '@mui/material';

import QR_code from '../../assets/homeimages/QR_code.png'
import gpay from '../../assets/homeimages/Gpay.jpg'
// import paytm from '../../assets/Org_payment/paytm.png'
import phonepe from '../../assets/homeimages/phonepe.png'
import wpay from '../../assets/homeimages/whatsappPay.png'
import paytm from '../../assets/homeimages/Paytm-Logo.wine.png'
import { Grid, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useForm } from 'react-hook-form';
import { YoutubeSearchedForOutlined } from '@mui/icons-material';



//modal style 
const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));


//yup
let schema = yup.object().shape({
    OrganizationName: yup.string().required(),
    paymentScreenshot: yup.mixed().required()
});

// check validity
schema
    .isValid({
        name: 'jimmy',
        age: 24,
    })
    .then(function (valid) {
        valid = true; // => true
    });




function Ads_payment() {


    //form validation
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)

    });

    const onSubmit = (data) => {
        console.log(data);
    }
    const media = (e) => {
        console.log(e.target.value);
    }
    console.log(errors);
    return (
        <div>
            <div>
                <Dashboard />
            </div >

            {/* start Header */}
            <div className='payment_header'>
                <h1>payment</h1>
            </div>
            {/* end Header */}
            <div className='ads_body'>

                <div className='ads_payment_card_heading'>
                    <h3>Your Plan</h3>
                </div>
                <div className='ads_payment_card'>
                    <Grid container spacing={2} justifyContent={'center'}  >
                        <Grid item xs={10} sm={9} md={7} id='ads_tour_pay_card'>
                            <h3>popular</h3>
                            {/*start price details */}
                            <div className='ads_price_details'>
                                <h5>$99,00<span>/mon</span></h5>

                            </div>
                            {/* end Price details */}
                            <span className='plan_header'>plan includes:</span>
                            {/* start plan details */}
                            <ul>
                                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis labore pariatur sit </li>
                                <li> praesentium dolorem odio facilis, necessitatibus harum placeat?</li>
                                <li> quisquam voluptatem doloremque, dolores itaque porro sed dignissimos,</li>
                            </ul>
                            {/* end plan detials */}
                            <img src='https://media.istockphoto.com/vectors/scanning-a-qr-code-on-a-smartphone-vector-id1174223675?k=20&m=1174223675&s=612x612&w=0&h=qDjPSlPogAoUi9KrGZx23OqMlcuREEkWqLQyiK-pJT8=' />



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
                            <li><img src={phonepe} alt="" style={{ width: '4.9rem' }} /></li>
                            <li><img src={wpay} alt="" /></li>
                        </ul>
                    </div>


                </div>
                {/* start payment form */}
                <div className='pay_form'>
                    <form className='edit_matchForm' onSubmit={handleSubmit(onSubmit)}  >
                        <fieldset class="uk-fieldset">
                            <h2 class="joinhead"></h2>
                            <div class="uk-margin">
                                <input class="uk-input" type="text" placeholder="Organization Name" name='orgName' {...register('OrganizationName')} required /> <br />
                                {/* {userErr?<span className='error'>Organization name  is required</span>:null} */}
                                <p className='error'>{errors['OrganizationName']?.message}</p>
                            </div>

                            <div>
                                <div class="uk-margin" uk-margin>
                                    <div uk-form-custom="target: true" style={{ width: '100%', textAlign: 'start' }}>
                                        <label >Screenshot of Your Payment</label>
                                        <input type="file" name="paymentScreenshot" required />

                                        <input class="uk-input uk-form-width-extra-large" type="text" placeholder="Select file" name='paymentScreenshot' onChange={media} style={{ marginTop: '.5rem' }} disabled />

                                    </div>
                                </div>
                            </div>
                            <div>
                                <div class="uk-margin" uk-margin>
                                    <div uk-form-custom="target: true" style={{ width: '100%', textAlign: 'start' }}>
                                        <label >Advertising Imges</label>
                                        <input type="file" required />

                                        <input class="uk-input uk-form-width-extra-large" type="text" name='adsImg1' placeholder="Image 1" style={{ marginTop: '.5rem' }} disabled />
                                    </div>
                                </div>
                                <div class="uk-margin" uk-margin>
                                    <div uk-form-custom="target: true" style={{ width: '100%', textAlign: 'start' }}>
                                        <input type="file" required />

                                        <input class="uk-input uk-form-width-extra-large" type="text" name='adsImg2' placeholder="Image 2" style={{ marginTop: '.5rem' }} disabled />
                                    </div>
                                </div>
                                <div class="uk-margin" uk-margin>
                                    <div uk-form-custom="target: true" style={{ width: '100%', textAlign: 'start' }}>
                                        <input type="file" required />

                                        <input class="uk-input uk-form-width-extra-large" type="text" name='adsImg3' placeholder="Image 3" style={{ marginTop: '.5rem' }} disabled />
                                    </div>
                                </div>
                                <div class="uk-margin" uk-margin>
                                    <div uk-form-custom="target: true" style={{ width: '100%', textAlign: 'start' }}>
                                        <input type="file" required />

                                        <input class="uk-input uk-form-width-extra-large" type="text" name='adsImg4' placeholder="Image 4" style={{ marginTop: '.5rem' }} disabled />
                                    </div>
                                </div>
                                <div class="uk-margin" uk-margin>
                                    <div uk-form-custom="target: true" style={{ width: '100%', textAlign: 'start' }}>
                                        <label >Banner Image</label>
                                        <input type="file" required />

                                        <input class="uk-input uk-form-width-extra-large" type="text" name='bannerImage' placeholder="Select file" style={{ marginTop: '.5rem' }} disabled />
                                    </div>
                                </div>
                            </div>
                            <button class="openbtn" type='submit'>Submit</button>


                        </fieldset>
                    </form>
                </div>
                {/* end payment form */}
                <div>

                </div>
            </div>
            <div>
                <Footer />
            </div>
        </div>

    )
}

export default Ads_payment