import React, { useState , useEffect } from 'react'

import './Adspayment.css';


import Dashboard from '../../components/header/Dashboard';
import Footer from '../../components/footer/Footer';
import { FilledInput } from '@mui/material';

import QR_code from '../../assets/homeimages/QR_code.png'
import gpay from '../../assets/homeimages/Gpay.jpg';
import paytm from '../../assets/homeimages/paytm.png'
import phonepe from '../../assets/homeimages/phonepe.png';
import wpay from '../../assets/homeimages/whatsappPay.png'

import { Grid, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';


//validation
import { useForm } from "react-hook-form";


import { yupResolver } from '@hookform/resolvers/yup';
import { date, string } from 'yup/lib/locale';
import * as yup from 'yup';
import { Formik } from 'formik';
import { useFormik } from 'formik';
import { useLocation } from 'react-router-dom'

// api calling 

import { useParams } from 'react-router-dom';
import axios from "axios"


//modal style 
const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));




function Ads_payment() {

    //form submit
    const { register, handleSubmit, watch, formState: { errors }, reset } = useForm();
    // const submitData = (data) => {
    //     reset();
    // };
// api calling

const token = localStorage.getItem("token")
  const userid = localStorage.getItem("id")
  let fromdata = new FormData();

  const location = useLocation()
  
  const { from }  = location.state;
  
  const submitData = async (data) => {
    console.log(data)
    fromdata.append("category", data.catogery)
    fromdata.append("organiserName", data.orgsname)
    fromdata.append("paymentScreenshot", data.scrnshot)
    fromdata.append("image1", data.ads1)
    fromdata.append("image2", data.adsImg2)
    fromdata.append("image3", data.adsImg3)
    fromdata.append("image4", data.adsImg4)
    fromdata.append("bannerImage", data.bannerImg)
    

    let url = `http://localhost:8000/organiser/request/ad/${userid}`;
    const options = {
      method: "POST",
      url: url,
      data: fromdata,
      headers: {
        "Authorization": `Bearer ${token}`
      }
    }
    try {
      const response = await axios(options);
      alert('Tournement Registration successfully')
      console.log(response);
      reset();
    } catch (error) {
      alert(error.response.data.error.name) 
      console.log(error);
     
    }

  }

    return (
        <div style={{ overflowX: "hidden" }}>
            <div>
                <Dashboard />
            </div >

            {/* start Header */}
            <div className='adspayment_header'>
                <h1>payment</h1>
            </div>
            {/* end Header */}
            <div className='adspayment_body'>

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
                            <li><img src={paytm} alt="" style={{ width: '4.9rem' }} /></li>
                            <li><img src={phonepe} alt="" style={{ width: '4.9rem' }} /></li>
                            <li><img src={wpay} alt="" /></li>
                        </ul>
                    </div>


                </div>
                {/* start payment form */}
                <div className='pay_form'>
                    <form className='ads_paymentForm' onSubmit={handleSubmit(submitData)} >
                        <h3 className='ads_form_heading'>Ads Image Selection</h3>
                        <fieldset class="uk-fieldset">
                            <h2 class="joinhead"></h2>
                            <div class="uk-margin">
                                <input className="uk-input" type="text" placeholder="Organizer name" id='orgsname' style={{ backgroundColor: "#F8F8F8" }}
                                    {...register("orgsname", { required: "**Organizer Name is Required" })} autoComplete='off' />
                                {errors.orgsname && (<span className="adspayment-errormsg">{errors.orgsname.message}</span>)}
                            </div>
                            <div class="uk-margin">
                                <input className="uk-input" type="text" placeholder="Organizer name" id='catgry' style={{ backgroundColor: "#F8F8F8" }}
                                    {...register("catogery", { required: "**Organizer Name is Required" })} autoComplete='off' value={from}/>
                                {errors.orgsname && (<span className="adspayment-errormsg">{errors.orgsname.message}</span>)}
                            </div>

                            <div class="uk-margin" uk-margin>
                                <div uk-form-custom="target: true" style={{ width: '100%', textAlign: 'start' }}>
                                    <input className="uk-input" type="file" placeholder="Upload Screenshot of Payment"
                                        autoComplete='off' {...register('scrnshot', {
                                            required: "**Payment screenShot is required ",
                                            validate: {
                                                // lessThan1MB: files => files[0]?.size < 10000 || 'Max 10MB',

                                                acceptedFormats: files =>
                                                    ['image/jpeg', 'image/png', 'image/gif'].includes(
                                                        files[0]?.type
                                                    ) || 'Only PNG, JPEG e GIF',
                                            },
                                        })} />
                                    <input class="uk-input uk-form-width-extra-large" type="text" placeholder="Upload Screenshot of Payment" name='paymentScreenshot' style={{ marginTop: '.5rem' }} disabled />
                                    {errors.scrnshot && (<span className='adspayment-errormsg'>{errors.scrnshot.message}</span>)}

                                </div>
                            </div>
                            <div>
                                <div class="uk-margin" uk-margin>
                                    <div uk-form-custom="target: true" style={{ width: '100%', textAlign: 'start' }}>
                                        <label >Advertising Imges</label>
                                        <input className="uk-input" type="file" placeholder=""
                                            autoComplete='off' {...register('ads1', {
                                                required: "**Advertisement image is required ",
                                                validate: {
                                                    // lessThan1MB: files => files[0]?.size < 10000 || 'Max 10MB',

                                                    acceptedFormats: files =>
                                                        ['image/jpeg', 'image/png', 'image/gif'].includes(
                                                            files[0]?.type
                                                        ) || 'Only PNG, JPEG e GIF',
                                                },
                                            })} />

                                        <input class="uk-input uk-form-width-extra-large" type="text" name='adsImg1' placeholder="Image 1" style={{ marginTop: '.5rem' }} disabled />
                                        {errors.ads1 && (<span className='adspayment-errormsg'>{errors.ads1.message}</span>)}
                                    </div>
                                </div>
                                <div class="uk-margin" uk-margin>
                                    <div uk-form-custom="target: true" style={{ width: '100%', textAlign: 'start' }}>
                                        <input type="file"
                                        {...register('adsImg1', {
                                            required: "**Banner image is required ",
                                            validate: {
                                                // lessThan1MB: files => files[0]?.size < 10000 || 'Max 10MB',

                                                acceptedFormats: files =>
                                                    ['image/jpeg', 'image/png', 'image/gif'].includes(
                                                        files[0]?.type
                                                    ) || 'Only PNG, JPEG e GIF',
                                            },
                                        })} />

                                        <input class="uk-input uk-form-width-extra-large" type="text" name='adsImg2' placeholder="Image 2" style={{ marginTop: '.5rem' }} disabled />
                                    </div>
                                </div>
                                <div class="uk-margin" uk-margin>
                                    <div uk-form-custom="target: true" style={{ width: '100%', textAlign: 'start' }}>
                                        <input type="file"  name='adsImg2' {...register('adsImg2', {
                                                required: "**Banner image is required ",
                                                validate: {
                                                    // lessThan1MB: files => files[0]?.size < 10000 || 'Max 10MB',

                                                    acceptedFormats: files =>
                                                        ['image/jpeg', 'image/png', 'image/gif'].includes(
                                                            files[0]?.type
                                                        ) || 'Only PNG, JPEG e GIF',
                                                },
                                            })}/>

                                        <input class="uk-input uk-form-width-extra-large" type="text" name='adsImg3' placeholder="Image 3" style={{ marginTop: '.5rem' }} disabled />
                                    </div>
                                </div>
                                <div class="uk-margin" uk-margin>
                                    <div uk-form-custom="target: true" style={{ width: '100%', textAlign: 'start' }}>
                                        <input type="file" {...register('adsImg3', {
                                                required: "**Banner image is required ",
                                                validate: {
                                                    // lessThan1MB: files => files[0]?.size < 10000 || 'Max 10MB',

                                                    acceptedFormats: files =>
                                                        ['image/jpeg', 'image/png', 'image/gif'].includes(
                                                            files[0]?.type
                                                        ) || 'Only PNG, JPEG e GIF',
                                                },
                                            })} />

                                        <input class="uk-input uk-form-width-extra-large" type="text" name='adsImg4' placeholder="Image 4" style={{ marginTop: '.5rem' }} disabled />
                                    </div>
                                </div>
                                <div class="uk-margin" uk-margin>
                                    <div uk-form-custom="target: true" style={{ width: '100%', textAlign: 'start' }}>
                                        <label >Banner Image</label>
                                        <input className="uk-input" type="file" placeholder=""
                                            autoComplete='off' {...register('bannerImg', {
                                                required: "**Banner image is required ",
                                                validate: {
                                                    // lessThan1MB: files => files[0]?.size < 10000 || 'Max 10MB',

                                                    acceptedFormats: files =>
                                                        ['image/jpeg', 'image/png', 'image/gif'].includes(
                                                            files[0]?.type
                                                        ) || 'Only PNG, JPEG e GIF',
                                                },
                                            })} />

                                        <input class="uk-input uk-form-width-extra-large" type="text" name='bannerImage' placeholder="Select file" style={{ marginTop: '.5rem' }} disabled />
                                        {errors.bannerImg && (<span className='adspayment-errormsg'>{errors.bannerImg.message}</span>)}
                                        
                                    </div>
                                </div>
                               
                            </div>
                            <button class="ads-paymentbtn" type='submit'>Submit</button>


                        </fieldset>
                    </form>
                    {/* end payment form */}
                    <div>
                    </div>
                </div>
            </div>
            <div>
                <Footer />
            </div>
        </div>

    )
}

export default Ads_payment