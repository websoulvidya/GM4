import React from 'react';
import Homeheader from '../../../components/homeheader/Homeheader';
import Footer from '../../../components/footer/Footer';

/* import css file*/
import './Ourteam.css';

/*material ui */
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';




/* team members photo */

import Neeraja from '../../../assets/images/neeraja.jpg'
import Sharoon from '../../../assets/images/sharoon.jpg'
import Namitha from '../../../assets/images/namitha.jpg'
import Rijo from '../../../assets/images/rijo.jpg'
import Abhinand from '../../../assets/images/abhinad.jpg'
import Shyamjith from '../../../assets/images/shyamjith.jpg'
import Vidhya from '../../../assets/images/vidya.jpg'
import Nadhisha from '../../../assets/images/nadisha.jpg'
import Thahseen from '../../../assets/images/muhamma.jpg'
import Abhilash from '../../../assets/images/abhi francis.jpg'
import Ashfaq from '../../../assets/images/ashfaq1.jpg'





function Ourteam() {


 
  return (
    <div>
      <Homeheader/>


      <div className='ourteam-all'>

        <div className='ourteam-head'>

        </div>


        <Box sx={{ flexGrow: 1 }} ml='auto' mr='auto'>
           <Grid container spacing={3} sx={{maxWidth:1200}} style={{width:'100%',paddingRight:'25px'}} ml='auto' mr='auto' mt='-60px' mb='100px'>
             <div className='ourteam-head2'>
               <h1>OUR TEAM</h1>
             </div>



           <Grid item xs={12} sm={6} md={4} lg={3} >
               <Card  style={{borderBottom:'7px solid #6bdcfc',alignItem:'center' }} >
                 <div className='ourteam-cardimg'>
                   <img src={Namitha} style={{borderRadius:'100%',marginTop:'20px'}}/>
                 </div>
                 <CardContent>
                   <Typography gutterBottom variant="h5" component="div" className='team-name' fontSize='18px'>
                     Namitha K V
                   </Typography>
                   <Typography variant="body2" color="text.secondary">
                     <b><i>Web Developer</i></b>
                   </Typography>
                 </CardContent>

                 <div className='team-social'>
                
                   <a><i class="fab fa-twitter"></i></a>
                   <a target='_blank' href='https://www.facebook.com/namitha.kannoth.5'><i class="fab fa-facebook"></i></a>
                   <a target='_blank' href='http://www.linkedin.com/in/namitha-k-v-307470154'><i class="fab fa-linkedin"></i></a>

                 </div>
               </Card>
             </Grid>


             


             <br/>




             <Grid item xs={12} sm={6} md={4} lg={3}>
               <Card style={{borderBottom:'7px solid #6bdcfc' }}>
                 <div className='ourteam-cardimg'>
                   <img src={Nadhisha} style={{borderRadius:'100%',marginTop:'20px'}}/>

                 </div>
                 <CardContent>
                   <Typography gutterBottom variant="h5" component="div" className='team-name' fontSize='18px'>
                     Nadisha E K
                   </Typography>
                   <Typography variant="body2" color="text.secondary">
                     <b><i>Web Developer</i></b>
                   </Typography>
                 </CardContent>

                 <div className='team-social'>
                
                   <a><i class="fab fa-twitter"></i></a>
                   <a><i class="fab fa-facebook"></i></a>
                   <a><i class="fab fa-linkedin"></i></a>

                  </div>
               </Card>
             </Grid>



             <br/>





             <Grid item xs={12} sm={6} md={4} lg={3} ml='auto' mr='auto'>
               <Card style={{borderBottom:'7px solid #6bdcfc' }}>
                 <div className='ourteam-cardimg'>
                   <img src={Abhinand} style={{borderRadius:'100%',marginTop:'20px'}}/>

                 </div>
                 <CardContent>
                   <Typography gutterBottom variant="h5" component="div" className='team-name' fontSize='18px'>
                     Abhinand P
                   </Typography>
                   <Typography variant="body2" color="text.secondary">
                     <b><i>Web Developer</i></b>
                   </Typography>
                 </CardContent>

                 <div className='team-social'>
                
                   <a><i class="fab fa-twitter"></i></a>
                   <a target='_blank' href='https://www.facebook.com/abhinand.prabhakar'><i class="fab fa-facebook"></i></a>
                   <a target='_blank' href='https://www.linkedin.com/in/abhinand-p-5b4091188'><i class="fab fa-linkedin"></i></a>

                 </div>
               </Card>
             </Grid>



             <br/>




             <Grid item xs={12} sm={6} md={4} lg={3} ml='auto' mr='auto'>
               <Card style={{borderBottom:'7px solid #6bdcfc' }}>
                 <div className='ourteam-cardimg'>
                   <img src={Neeraja} style={{borderRadius:'100%',marginTop:'20px'}}/>

                 </div>
                 <CardContent>
                   <Typography gutterBottom variant="h5" component="div" className='team-name'fontSize='18px'>
                     Neeraja K
                   </Typography>
                   <Typography variant="body2" color="text.secondary">
                    <b><i>Web Developer</i></b>
                   </Typography>
                 </CardContent>

                 <div className='team-social'>
                
                   <a><i class="fab fa-twitter"></i></a>
                   <a><i class="fab fa-facebook"></i></a>
                   <a target='_blank' href='https://www.linkedin.com/in/neeraja-k-6b4721212'><i class="fab fa-linkedin"></i></a>

                 </div>

               </Card>
             </Grid>




             <br/>





             <Grid item xs={12} sm={6} md={4} lg={3} ml='auto' mr='auto'>
               <Card style={{borderBottom:'7px solid #6bdcfc' }}>
                 <div className='ourteam-cardimg'>
                   <img src={Rijo} style={{borderRadius:'100%',marginTop:'20px'}}/>

                 </div>
                 <CardContent>
                   <Typography gutterBottom variant="h5" component="div" className='team-name' fontSize='18px'>
                     Rijo Joy
                   </Typography>
                   <Typography variant="body2" color="text.secondary">
                     <b><i>Web Developer</i></b>
                   </Typography>
                 </CardContent>

                 <div className='team-social'>
                
                   <a><i class="fab fa-twitter"></i></a>
                   <a target='_blank' href='https://www.facebook.com/profile.php?id=100075283353567'><i class="fab fa-facebook"></i></a>
                   <a target='_blank' href='https://www.linkedin.com/in/rijo-joy-7b5b22231'><i class="fab fa-linkedin"></i></a>

                </div>

               </Card>
             </Grid>



             <br/>




             <Grid item xs={12} sm={6} md={4} lg={3} ml='auto' mr='auto'>
               <Card style={{borderBottom:'7px solid #6bdcfc' }}>
                 <div className='ourteam-cardimg'>
                   <img src={Sharoon} style={{borderRadius:'100%',marginTop:'20px'}}/>

                 </div>
                 <CardContent>
                   <Typography gutterBottom variant="h5" component="div" className='team-name' fontSize='18px'>
                     Sharoon M
                   </Typography>
                   <Typography variant="body2" color="text.secondary">
                     <b><i>Web Developer</i></b>
                   </Typography>
                 </CardContent>

                 <div className='team-social'>
                
                   <a target='_blank' href='https://twitter.com/Sharoon28608053?t=ziq1fZuHe8Xc4uOwz14YLQ&s=09'><i class="fab fa-twitter"></i></a>
                   <a target='_blank' href='https://www.facebook.com/sharoon.sharoon4'><i class="fab fa-facebook"></i></a>
                   <a target='_blank' href='https://www.linkedin.com/in/sharoon-m-47425a149'><i class="fab fa-linkedin"></i></a>

                 </div>
               </Card>
             </Grid>



             <br/>



             <Grid item xs={12} sm={6} md={4} lg={3} ml='auto' mr='auto'>
               <Card style={{borderBottom:'7px solid #6bdcfc' }}>
                 <div className='ourteam-cardimg'>
                   <img src={Shyamjith} style={{borderRadius:'100%',marginTop:'20px'}}/>

                 </div>
                 <CardContent>
                   <Typography gutterBottom variant="h5" component="div" className='team-name' fontSize='18px'>
                     Shyamjith T
                   </Typography>
                   <Typography variant="body2" color="text.secondary">
                     <b><i>Web Developer</i></b>
                   </Typography>
                 </CardContent>

                 <div className='team-social'>
                
                   <a><i class="fab fa-twitter"></i></a>
                   <a target='_blank' href='https://www.facebook.com/shyam.shyamjith.73'><i class="fab fa-facebook"></i></a>
                   <a target='_blank' href='https://www.linkedin.com/in/shyam-jith-aa5015229'><i class="fab fa-linkedin"></i></a>

                 </div>
               </Card>
             </Grid>



             <br/>




             <Grid item xs={12} sm={6} md={4} lg={3} ml='auto' mr='auto'>
               <Card  style={{borderBottom:'7px solid #6bdcfc' }}>
                 <div className='ourteam-cardimg'>
                   <img src={Vidhya} style={{borderRadius:'100%',marginTop:'20px'}}/>

                 </div>
                 <CardContent>
                   <Typography gutterBottom variant="h5" component="div" className='team-name' fontSize='18px'>
                     Vidya Surendran
                   </Typography>
                   <Typography variant="body2" color="text.secondary">
                      <b><i>Web Developer</i></b>
                   </Typography>
                 </CardContent>

                 <div className='team-social'>
                
                   <a><i class="fab fa-twitter"></i></a>
                   <a><i class="fab fa-facebook"></i></a>
                   <a><i class="fab fa-linkedin"></i></a>

                 </div>
               </Card>
             </Grid>



             <br/>





             <Grid item xs={12} sm={6} md={4} lg={3}>
               <Card  style={{borderBottom:'7px solid #6bdcfc' }}>
                 <div className='ourteam-cardimg'>
                   <img src={Thahseen} style={{borderRadius:'100%',marginTop:'20px'}}/>

                 </div>
                 <CardContent>
                   <Typography gutterBottom variant="h5" component="div" className='team-name' fontSize='18px'>
                     Mohamad Tahseen
                   </Typography>
                   <Typography variant="body2" color="text.secondary">
                     <b><i>Web Developer</i></b>
                   </Typography>
                 </CardContent>

                 <div className='team-social'>
                
                   <a><i class="fab fa-twitter"></i></a>
                   <a target='_blank' href='https://www.facebook.com/tahseenpm007'><i class="fab fa-facebook"></i></a>
                   <a target='_blank' href='https://www.linkedin.com/in/mohamad-tahseen-77280821a'><i class="fab fa-linkedin"></i></a>

                 </div>
               </Card>
             </Grid>



             <br/>




             
             <Grid item xs={12} sm={6} md={4} lg={3}>
               <Card  style={{borderBottom:'7px solid #6bdcfc' }}>
                 <div className='ourteam-cardimg'>
                   <img src={Abhilash} style={{borderRadius:'100%',marginTop:'20px'}}/>

                 </div>
                 <CardContent>
                   <Typography gutterBottom variant="h5" component="div" className='team-name' fontSize='18px'>
                     Abhilash Francis
                   </Typography>
                   <Typography variant="body2" color="text.secondary">
                     <b><i>Web Developer</i></b>
                   </Typography>
                 </CardContent>

                 <div className='team-social'>
                
                   <a><i class="fab fa-twitter"></i></a>
                   <a target='_blank' href='https://www.facebook.com/abhilash.francis.7'><i class="fab fa-facebook"></i></a>
                   <a target='_blank' href='https://www.linkedin.com/in/abhilash-francis-66971118a'><i class="fab fa-linkedin"></i></a>

                 </div>
               </Card>
             </Grid>



             <br/>






             <Grid item xs={12} sm={6} md={4} lg={3}>
               <Card  style={{borderBottom:'7px solid #6bdcfc' }}>
                 <div className='ourteam-cardimg'>
                   <img src={Ashfaq} style={{borderRadius:'100%',marginTop:'20px'}}/>

                 </div>
                 <CardContent>
                   <Typography gutterBottom variant="h5" component="div" className='team-name' fontSize='18px'>
                     Muhammed Ashfaq C V
                   </Typography>
                   <Typography variant="body2" color="text.secondary">
                     <b><i>Web Developer</i></b>
                   </Typography>
                 </CardContent>

                 <div className='team-social'>
                
                   <a><i class="fab fa-twitter"></i></a>
                   <a target='_blank' href='https://www.facebook.com/ashfaq.mohammed.7524/'><i class="fab fa-facebook"></i></a>
                   <a target='_blank' href='https://www.linkedin.com/in/ashfaq-muhammed-105128218/'><i class="fab fa-linkedin"></i></a>

                 </div>
               </Card>
             </Grid>



             <br/>





    
          </Grid>
        </Box>





  

















      </div>


      <Footer />
    </div>
  )
}

export default Ourteam




