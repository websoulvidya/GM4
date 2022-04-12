import React,{useEffect,useLayoutEffect,useState} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Userheader from '../../../components/userheader/Userheader';
import Footer from '../../../components/footer/Footer';
import './EditProfile.css';
import {  Badge, Button} from '@mui/material';
import { Avatar } from '@mui/material';
import { IconButton } from '@mui/material';
import CameraAltTwoToneIcon from '@mui/icons-material/CameraAltTwoTone';

import {useFormik} from 'formik';
import { Modal } from '@mui/material';


import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';




import * as yup from 'yup';





function EditProfile() {
  const navigate = useNavigate();

  // const [userInfo, setUserInfo] = useState()
  let formData=new FormData();

  const [firstname,setFirstname]=useState("");
  const [lastname, setLastname]= useState("");
  const [email, setEmail]= useState("");
  const [phonenumber, setPhonenumber]= useState("");
  const [selectedFile,setSelectedFile]=useState("");
  const [isFilePicked,setIsFilePicked]=useState("");
  // const [photo, setPhoto]= useState("");
  // const [file, setFile] = useState("https://thumbs.dreamstime.com/b/gerbera-flower-head-close-up-yellow-macro-98132761.jpg");


  // const [user, setUser] = useState({
  //   Username:"",
  //   Lastname:"",
  //   EmailId:"",
  //   Phonenumber:"",
  //   Photo:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pinterest.com%2Fpin%2F799740846311345088%2F&psig=AOvVaw2sRF0q71qVuQ16glww--pK&ust=1649583000870000&source=images&cd=vfe&ved=2ahUKEwiJ-8_X1Yb3AhXvRmwGHYnEBEgQjRx6BAgAEAk"
  
  // });

  // console.log(user)

const getUserInfo= async()=>{
  const id = localStorage.getItem("id");
  let url = `https://gm4-server.herokuapp.com/api/user/profile/${id}`;
  let options = {
      method: 'GET',
      url: url,
      headers: {
        'Content-Type':"Application/json",
        'Authorization':"Bearer "+localStorage.getItem("token")
      },
    
  }
    
  try {
      let response = await axios(options);
  // setUser({
  //   ...user,
  //   Username:response.data.firstName,
  //   Lastname:response.data.lastName,
  //   EmailId:response.data.email,
  //   Phonenumber:response.data.mobile

  // })
      // setFirstname({
      //   ...firstname,
      //   Username:response.data.firstName
      // })
      setFirstname(response.data.firstName)
      setLastname(response.data.lastName)
      setEmail(response.data.email)
      setPhonenumber(response.data.mobile)
      setSelectedFile(response.data.photo)

      

  } catch (error) {
     console.log(error)
  }
}
useEffect(() => {
 getUserInfo();
}, [])


 {/*File upload event */}

//  const [file, setFile] = useState(null);

    const handleImageChange = (event)=> {
            setSelectedFile(event.target.files[0]);
            setIsFilePicked(true);
    };

  // const [file, setFile] = useState(null);

//   const handleChange = function loadFile(event) {
//     if (event.target.files.length > 0) {
//         const file = URL.createObjectURL(event.target.files[0]);
//         setFile(file);
//     } 
// };

  

   {/*Modal functions */}

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

//   useLayoutEffect(() => {
//     window.scrollTo(0, 0)
// });
  {/*Modal style */}

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    height:150,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

  




    {/*Form Validation section*/}

 
    // const formik=useFormik({

      // initialValues:{

      //   Username:'',

      //   Lastname:'abc',
  
      //   EmailId:'angelchris458@gmail.com',

      //   Phonenumber:'9876543210'
  
      // },
  
      // validationSchema: yup.object({
  
      //   Photoupload:yup.mixed()
        
      //     .required('**Profile Photo required..'),
          
      //   Username: yup.string()
  
      //     .max(20, '**Username should not exceed 20 Characters')
          
      //     .required(' **User Name required')

      //     .matches('^[A-Za-z_-]*$' ,'**Invalid Username')

         
      //    ,
      //    Lastname: yup.string()
  
      //     .max(20, '**Username should not exceed 20 Characters')
          
      //     .required(' **User Name required')

      //     .matches('^[A-Za-z_-]*$' ,'**Invalid Username')

         
      //    ,
  
       
      //   EmailId: yup.string()
  
      //     .email('Invalid email address')
  
      //     .required('**Email Id required'),

      //   Phonenumber: yup.string()
          
      //   .max(10, '**Phone number must not exceed 10 numbers')
        
      //   .required('**Phone number required')

      //   .matches('[789]' , '**Invalid phone number')
        
      //   .min(10,'**Phone number should contain 10 numbers')
      //   ,
       
    
  
      // }),

      // onSubmit:values =>{
  
      //   console.log(JSON.stringify(values));
      //   handleOpen();
        
         
   
      // }
  
    // });  



    //user side validation
    
    const [userErrField, setUserErrField] = useState({
            fnameErr: "",
            lnameErr:"",
            emailErr: "",
            phoneErr: "",
          
    })
    // const handleUserChange = (event) => {
    //     const { name, value } = event.target;
    //     setFirstname({
    //         ...firstname,
    //         [name]: value
    //     })
    //     setLastname({
    //       ...lastname,
    //       [name]: value
    //   })
    //       setEmail({
    //         ...email,
    //         [name]: value
    //     })
    //     setPhonenumber({
    //       ...phonenumber,
    //       [name]: value
    //   })
      
    // }
    
      
   
    formData.append("firstName",firstname);
    formData.append("lastName",lastname);
    formData.append("email",email);
    formData.append("mobile",phonenumber);
    // formData.append("photo",file);
    if(isFilePicked){
      formData.append("photo",selectedFile)
    }

    const handleUserRegister = async (e) => {
      e.preventDefault();
      
      // console.log(formData)
     
      let id= await localStorage.getItem('id')

      if (validUserForm()) {
          let url = `https://gm4-server.herokuapp.com/api/user/edit/profile/${id}`;
          let options = {
              method: 'PUT',
              url: url,
              headers: {
                'Content-Type':"Application/json",
                'Authorization':"Bearer "+localStorage.getItem("token")
              },
              data:formData
          }
          try {
              let response = await axios(options)
              console.log(response.data)
              alert("Profile updated successfully")
              
          } catch (error) {

              console.log(error)
              alert(error.message)
              // alert("Please enter correct values")
          }
      } else {
          console.log("invalid form")
          // alert("Please enter correct values")
      }
  }
  const validUserForm = () => {
      var userformIsValid = true
      const validEmailRegex = RegExp(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
      const validNameRegex = RegExp(/^[a-zA-Z ]{2,30}$/);
      const mobileRegex = RegExp(/^(?:(?:\+|0{0,2})91(\s*[\-]\s*)?|[0]?)?[789]\d{9}$/);
      setUserErrField({
          fnameErr: "",
          lnameErr:"",
          emailErr: "",
          phoneErr: "",
         
      })
      if (firstname.Username == "") {
          userformIsValid = false;
          setUserErrField(pre => ({
              ...pre, fnameErr: "Please enter First name **"
          }))
      }
      // if (firstname.Username !== "" && !validNameRegex.test(firstname.Username))
      //   {
      //       userformIsValid = false;
      //       setUserErrField(pre => ({
      //           ...pre, fnameErr: "Please enter First name in correct format **"
      //       }))
      //   }

      if (lastname.Lastname == "") {
        userformIsValid = false;
        setUserErrField(pre => ({
            ...pre, lnameErr: "Please enter last name **"
        }))
      }
    // if (lastname.Lastname !== "" && !validNameRegex.test(lastname.Lastname))
    //   {
    //       userformIsValid = false;
    //       setUserErrField(pre => ({
    //           ...pre, lnameErr: "Please enter Last name in correct format **"
    //       }))
    //   }

      if (email.EmailId == "") {
          userformIsValid = false;
          setUserErrField(pre => ({
              ...pre, emailErr: "Please enter email **"
          }))
      }
      // if (email.EmailId !== "" && !validEmailRegex.test(email.EmailId))
      //   {
      //       userformIsValid = false;
      //       setUserErrField(pre => ({
      //           ...pre, emailErr: "Please enter Email in correct format **"
      //       }))
      //   }

      if (phonenumber.Phonenumber == "") {
          userformIsValid = false;
          setUserErrField(pre => ({
              ...pre, phoneErr: "Please enter phone **"
          }))
      }
      // if (phonenumber.Phonenumber !== "" && !mobileRegex.test(phonenumber.Phonenumber))
      //   {
      //       userformIsValid = false;
      //       setUserErrField(pre => ({
      //           ...pre, phoneErr: "Please enter valid phone number **"
      //       }))
      //   }

      
      return userformIsValid;
  }
  // console.log(file)
  // console.log(firstname)
  // console.log(lastname)
  // console.log(email)
  // console.log(phonenumber)
  
  return (
  
  <div className='user-editprofile'>
    <Userheader/>
    

      {/* Edit Profile page header */}
     
      <div className='user-profile-header'>
      <h1>Profile</h1>
      </div>

       {/*Edit Profile page form  */}
    
      <div>
    <form className='Editprofile-Form'  onSubmit={handleUserRegister} >
      <h2 class="editprofile-head">Edit profile</h2>
      <fieldset className="uk-fieldset">
        <hr/>
        <div className="uk-margin">
        
         {/*Edit Profile Photo upload*/}
          <p className='user-editprofile-upload'> 

            <center>  
            <input type="file" onChange={handleImageChange} id="upload" accept="image/*" name="file"
                    style={{display: "none"}} 
                    value={selectedFile && selectedFile}
                     required="" />

              {/* <input type="file" 
              onChange={handleChange} 
              value={file && file}
              id="upload" accept="image/*" name="Photoupload"
                    style={{display: "none"}}  required="" /> */}


      
              <label htmlFor="upload" className='user-profilephoto'>

                <IconButton color="primary" aria-label="upload picture" component="span" >

                    <Badge  badgeContent={<CameraAltTwoToneIcon/>} 
                          anchorOrigin={{
                            horizontal:'right',
                            vertical:'bottom'
                           }} >
                 
                    <Avatar id="avatar" 
                    src={selectedFile}
                            style={{            
                                width: "80px",
                                height: "80px",
                            }}  />
                    </Badge>
                </IconButton>
              </label>
              <label htmlFor="avatar"/>

            {/*Photo upload validation */}

              {/* {formik.errors.Photoupload ?  */}
                     
                     <span 
                     style={{
                       color:'red', 
                       fontSize:'12px',
                       fontWeight:'700' ,
                      
                       }}>
                     {/* {formik.errors.Photoupload} */}
                     </span> 
                     {/* : null} */}
                     </center>
                  </p>
            

             {/*Edit Profile input field */}

          <input class="uk-input"   type="text" name='Username' placeholder=" "
            required="" value={firstname && firstname}
             onChange={(e)=>{setFirstname(e.target.value)}} maxLength={30} autoComplete='off'/>   
               {userErrField.fnameErr.length > 0 && 
               <span style={{color:'red' ,float:'left', fontSize:'12px',fontWeight:'700'}}>
                 {userErrField.fnameErr}</span>}

            <div class="uk-margin">

              <input class="uk-input"   type="text" name='Lastname' placeholder=""
              value={lastname && lastname} 
              onChange={(e)=>{setLastname(e.target.value)}} autoComplete='off'/>   
              {userErrField.lnameErr.length > 0 && 
              <span style={{color:'red' ,float:'left', fontSize:'12px',fontWeight:'700'}}>
              {userErrField.lnameErr}</span>}

            </div>
          </div>
          
          <div class="uk-margin">
          <input class="uk-input" type="email" name='EmailId' placeholder=""
          required="" value={email && email} 
          onChange={(e)=>{setEmail(e.target.value)}}
          autoComplete='off'/>   
          {userErrField.emailErr.length > 0 && 
          <span  style={{color:'red', fontSize:'12px',fontWeight:'700',float:'left'}}>
          {userErrField.emailErr}</span>}
          </div>

          <div class="uk-margin">
          <input class="uk-input"  type="text" name= 'Phonenumber' placeholder=""
          required=""
          value={phonenumber && phonenumber}
          onChange={(e)=>{setPhonenumber(e.target.value)}}
          autoComplete='off'/>   
          {userErrField.phoneErr.length > 0 && 
          <span  style={{color:'red' , fontSize:'12px' ,fontWeight:'700',float:'left'}}>
            {userErrField.phoneErr}</span>}
         

          </div>
         
        <div>
          <Button  type='submit' id="but1">Save</Button>
        </div>
    </fieldset>

      {/*Modal */}
        {/* <Modal   
                open={open}
                onClose={handleClose}
                aria-labelledby="userep-modal-title"
                aria-describedby="userep-modal-description" >
                <Box sx={style} className='userep-modal_box' >
                 
                <Typography id="userep-modal-description" className='rules_modal'   >
​
                    <h3>Profile updated</h3>
                   
                    <span>Your profile is updated Successfully!</span>
                    <br/>

                  <div className='userep-button_area'>
                  <button onClick={handleClose} className='userep-modal_close'>Ok</button>
                  
                  </div>
                </Typography>
                  
                </Box>
              </Modal> */}
    </form>

  </div>
  <Footer />
  </div>
 
)
}

export default EditProfile
  