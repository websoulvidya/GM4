import React,{useEffect,useLayoutEffect,useState} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'
import "./Userheader.css";
import { Link } from 'react-router-dom';
import {AppBar,Toolbar,Typography,useMediaQuery,useTheme} from '@mui/material';
import Box from '@mui/material/Box';


import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

import DrawerComponent  from './DrawerComponent';

import logo from '../../assets/logo.png';



function Userheader() {


  const navigate = useNavigate();

  //API integration code
  const [info,setInfo]= useState("")
  const userName = async (e) => {
    let user= await localStorage.getItem('username')
    if(user){
      setInfo(user)
    }else{
      navigate('/login')
    }
  }
  useEffect(() => {
   userName();
  }, [info])
  
   //Logout functions
   const userLogout=async()=>{
      let url = 'https://gm4-server.herokuapp.com/api/signout';
      let options = {
          method: 'GET',
          url: url,
      }
      try {
       const response =await axios(options);
       alert(response.data.message)
       localStorage.clear();
       navigate('/')
      } catch (error) {
        alert(error.message)
      }
}

    // code for search bar

    const Search = styled('div')(({ theme }) => ({
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      border:"1px solid #6BDCFC",
    
      '&:hover': {
          border:"1px solid  rgb(0,0,0)",
        // backgroundColor:"#6BDCFC"
      },
      '&:focus':{
        border:"1px solid #6BDCFC",
      },
      marginLeft: 20,
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
        marginLeft:"15%",
            marginBottom:"15px",
            marginTop:"10px",
        color:"rgb(102 98 98)",
    
    
      },
    }));
    
    const SearchIconWrapper = styled('div')(({ theme }) => ({
      padding: theme.spacing(0, 2),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      marginLeft:"90%;"
    //   justifyContent: 'right',
    }));
    
    const StyledInputBase = styled(InputBase)(({ theme }) => ({
      color: 'inherit',
      '& .MuiInputBase-input': {
        padding: theme.spacing(1, 2, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(1)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        height:"20%",
        color:"#fffff",
        [theme.breakpoints.up('sm')]: {
          // width: '64ch',
        //   '&:focus': {
        //     width: '20ch',
        //   },
        '&:focus': {
          width: '80ch',
          border:"none"
        },
        '&:hover': {
          border:"none",
          // backgroundColor:"rgb(102 98 98)",
      },
        },
      },
    }));

    // code for responsive header
   const [openDrawer,setOpenDrawer]=useState(true);
   //theme instance
    const theme=useTheme()
    const matches=useMediaQuery(theme.breakpoints.down("md" || "sm"));

    
    

    // code for dropdown
    const [anchorEl,setAnchorEl]=useState(null);
    const openMenu=Boolean(anchorEl);
    const handleClick=(e)=>{
        setAnchorEl(e.currentTarget)
    };

    const handleClose=()=>{
        setAnchorEl(null);
    };
    // dropdown code ends
    


  return (
    <>

    <AppBar position="fixed"  sx={{backgroundColor:"white",top:0}} id="App">
      <Toolbar>
        <Box sx={{ display:"flex" ,justifyContent:"space-between",width:"40%",alignItems:"center"}} component="div">
          <Box sx={{display:"flex"}}>
          <img onClick={() => navigate('/')}  src={logo}  alt="" class="userheader-logo" />
          </Box>

           

           {/* links */}
           {/* {matches ? (<IconButton style={{width:"100px",height:"50px",color:"#6BDCFC"}} onClick={()=>setOpenDrawer(true)}><MenuIcon style={{width:"40px",height:"150px",display:"flex",marginLeft:"650px"}}/></IconButton>) :( <IconButton></IconButton>)} */}
                    

                    {matches ? (<DrawerComponent 
                    openDrawer={openDrawer} 
                    setOpenDrawer={setOpenDrawer}/>
                    ):(

          <Box sx={{ display:"flex"}}>

            {/* searchbar portion */}

           <Search id="userheader-searchbar" >
                        <SearchIconWrapper id="userheader-searchicon">
                        <SearchIcon  sx={{ display:"right",color:"rgb(102 98 98)"}}/>
                        </SearchIconWrapper>
                        <StyledInputBase id="usersearch-content"
                        placeholder="Search…"
                        inputProps={{ 'aria-label': 'search' }}
                        />
                    </Search>
                {/* searchbar portion ends */}


           


            <Link to="/userhome" style={{textDecoration:"none"}} ><Typography class="userheader-links">HOME</Typography></Link>
        
            <Link to="/useridp" style={{textDecoration:"none"}}><Typography class="userheader-links">IDP</Typography></Link>
          
            <Link to="/notification"style={{textDecoration:"none"}} ><Typography class="userheader-links">NOTIFICATION</Typography></Link>
          

              <Typography class="userheader-links"
                  aria-controls="basic-menu"
                  aria-haspopup="true"
                  aria-expanded={openMenu ? 'true':undefined}
                  onClick={handleClick}
                  >{info && info}
              </Typography>
              <Menu  id="userhome-dropdownmenu"
                            anchorEl={anchorEl}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={openMenu}   onClose={handleClose} class="MuiMenu-root"  >
                                    <MenuItem  id="userhome-headermenu" onClick={handleClose}><Link to="/profile" class="userheader-sublink" style={{textDecoration:"none"}}>Profile</Link></MenuItem>
                                    <MenuItem  id="userhome-headermenu" onClick={handleClose}><Link to="/changepass" class="userheader-sublink" style={{textDecoration:"none"}}>Changepassword</Link></MenuItem>
                                    <MenuItem  id="userhome-headermenu" onClick={handleClose}><Link to="/mybookings" class="userheader-sublink" style={{textDecoration:"none"}}>My Bookings</Link></MenuItem>
                                    <MenuItem  id="userhome-headermenu" ><button onClick={userLogout} class="userheader-sublink" style={{textDecoration:"none"}}>Logout</button></MenuItem>
                                    

                                </Menu>
                                
          </Box>

        ) };

           
         </Box>                   
      </Toolbar>
                            
    </AppBar>
    </>
  )
}

export default Userheader
