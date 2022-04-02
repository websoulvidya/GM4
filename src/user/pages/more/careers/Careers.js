import React,{useLayoutEffect,useState} from 'react'
import { useForm } from 'react-hook-form';


import Homeheader from '../../../components/homeheader/Homeheader';
import Footer from '../../../components/footer/Footer';

import './Careers.css'

import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';



import CareerHead from '../../../assets/images/career.webp';




const Input = styled('input')({
  display: 'none',
});

function Careers() {

  const { register, handleSubmit, watch, formState: { errors }, reset } = useForm();

  const submitData = (data) => {

    reset();

  };

  const [isActive, setIsActive] = useState(false);
  const [setected, setSelected] = useState("Select Position");
  const options = ["Mobile App Developer", "Web Developer", "Graphic Designer","Business Development Executive"];
 

 
  return (

    
    <div>
      <Homeheader/>
      <div className='career'>


        


      <Box sx={{ flexGrow: 1 }}>
      <Grid container  >
        <Grid item xs={12} md={6} >
          <div>

            <img src={CareerHead} />

          </div>
        </Grid>
        <Grid item xs={12} md={6} className='career-heading' >
          <div className='career-heading1'>
            <h1>
              Explore Life at GM4
            </h1>
            <p>
             Wherever you desire to go, we give you the tools, the techniques, and the teams to navigate the journey.
            </p>
           


          </div>
        </Grid>
        
      </Grid>
    </Box>

<br/>






<Box sx={{ flexGrow: 1 }} ml='auto' mr='auto' mb='100px'>
<h1 style={{fontFamily: 'Open Sans,sans-serif' ,color:'#6bdcfc',fontWeight:'600'  }}>CURRENT OPENINGS</h1>
<br/>

<Grid className='career-card-all' container spacing={5}  maxWidth={'1200px'} style={{width:'100%',paddingRight:'25px'}} ml='auto' mr='auto' >



  <Grid item xs={12} sm={6} md={4} lg={3} >

    <Card className='career-card'>
      <CardContent>
        <div className='career-cardicon'>
        <i class="fas fa-layer-group"></i>
        </div>
        <br />
        <Typography variant="h6" component="div" fontSize={'18px'} fontFamily={'Open Sans, sans-serif'}>
          Graphic Designer
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          1 vaccancy
        </Typography>
      </CardContent>
      
    </Card>
  </Grid>





  <Grid item xs={12} sm={6} md={4} lg={3} >

<Card className='career-card' >
  <CardContent>
    <div className='career-cardicon'>
      <i class="fas fa-laptop-code"></i>
    </div>
    <br />
    <Typography variant="h6" component="div" fontSize={'18px'} fontFamily={'Open Sans, sans-serif'}>
       Web Developer
    </Typography>
    <Typography sx={{ mb: 1.5 }} color="text.secondary">
      3 vaccancy
    </Typography>
  </CardContent>
  
</Card>
</Grid>






<Grid item xs={12} md={4} sm={6} lg={3} >

<Card className='career-card'>
  <CardContent>
    <div className='career-cardicon'>
       <i class="far fa-building"></i>
     </div>
    <br />
    <Typography variant="h6" component="div"  fontSize={'18px'} fontFamily={'Open Sans, sans-serif'}>
      Bussiness Development 
    </Typography>
    <Typography sx={{ mb: 1.5 }} color="text.secondary">
      1 vaccancy
    </Typography>
  </CardContent>
  
</Card>
</Grid>






<Grid item xs={12} md={4} sm={6} lg={3} >

<Card className='career-card'>
  <CardContent>
    <div className='career-cardicon'>
    <i class="fas fa-bug"></i>   
    </div>
    <br />
    <Typography variant="h6" component="div" fontSize={'18px'} fontFamily={'Open Sans, sans-serif'}>
      Mobile App Developer
    </Typography>
    <Typography sx={{ mb: 1.5 }} color="text.secondary">
      2 vaccancy
    </Typography>
  </CardContent>
  
</Card>
</Grid>



  





  </Grid>
  </Box>

  <br/>




  <div class="smallcircles">
    {/* <div id='circle1' /><div id='circle2' /><div id='circle3' /><div id='circle4' /><div id='circle5' /><div id='circle6' /><div id='circle7' /> */}

      <form class="career-form"  ml='auto' mr='auto' onSubmit={handleSubmit(submitData)}>
      <h1 style={{color:'#6bdcfc',fontWeight:600}}>APPLY NOW</h1>

      <fieldset class="uk-fieldset">
        <h2 class="joinhead"></h2>

             <div class="uk-margin">
               <input class="uk-input" placeholder="Name" type="name"  tabindex="1" name='name' {...register("name", { required: "**Name is Required" })}  autoComplete='off'/>   {errors.name && (<span className='errormsgcareer'>{errors.name.message}</span>)}
             </div>
            
            <div class="uk-margin">
              <input class="uk-input" placeholder="Email id" type="email" tabindex="1" name='email' {...register("email", { required: "** Email is Required" })}  autoComplete='off'/>   {errors.email && (<span className='errormsgcareer'>{errors.email.message}</span>)}
            </div>

            <div class="uk-margin">
              <input class="uk-input" placeholder="Phone Number" type="phone" tabindex="1" name='phone' {...register("phone", { required: "**Phone Number is Required" })}  autoComplete='off'/>   {errors.phone && (<span className='errormsgcareer'>{errors.phone.message}</span>)}
            </div>

             {/* select */}

             <div className="uk-input" style={{marginTop:'10px'}} onClick={(e) => setIsActive(!isActive)}>
                  <div className="careerposition" >{setected}
                    <span className="fas fa-caret-down dailyreg_selectdownicon"></span>
                  </div>
                  {isActive && (
                    <div className="position_content">
                      {options.map((option) => (
                        <div className="position_item" onClick={(e) => {
                          setSelected(option);
                          setIsActive(false);
                        }
                        }>{option}</div>
                      ))}

                    </div>
                  )}
                </div>

                {/* end */}




                <div class="uk-margin" uk-margin>
                                    <div uk-form-custom="target: true" style={{ width: '100%', textAlign: 'start' }}>
                                        <input className="uk-input" type="file" placeholder="Upload Resume"
                                            autoComplete='off' {...register('scrnshot', {
                                                required: "**Upload Resume ",
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
          <button class="closebtn">APPLY</button>
        </div>
      </fieldset>
      </form>

      </div>

  
    



    

            




      </div>
      <Footer />
    </div>
  )
}

export default Careers




