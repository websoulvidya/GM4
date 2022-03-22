import React,{useState} from 'react'
import './Homeheader.css';
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom';
import {AppBar,Toolbar,Typography,useMediaQuery,useTheme} from '@mui/material';
import Box from '@mui/material/Box';

import logo from '../../assets/logo.png';



import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { styled, alpha } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';

import DrawerComponent  from './DrawerComponent';




export default function Homeheader() {

    const navigate = useNavigate();

    // code for search bar

            const Search = styled('div')(({ theme }) => ({
        position: 'relative',
          borderRadius: theme.shape.borderRadius,
            // borderRadius:"50px",
            border:"1px solid #6BDCFC",

        // backgroundColor: "rgb(102 98 98)",
        '&:hover': {
            border:"none",
            // backgroundColor:"rgb(102 98 98)",
        },
        '&:focus':{
            border:"1px solid black",
        },
        marginLeft: 20,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(1),
            width: 'auto',
            marginLeft:"30%",
            marginBottom:"20px",
            marginTop:"15px",
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
        // marginLeft:"90%;"
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
            height:"10%",
            color:"#fffff",
            [theme.breakpoints.up('md')]: {
            // width: '64ch',
              '&:focus': {
                width: '80ch',
                border:'none'
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

    console.log(theme.breakpoints.down("md" || "sm"));


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
    <AppBar  position="fixed"  sx={{backgroundColor:"white",top:0}}  id="App" >
        <Toolbar>
            <Box sx={{ display:"flex",justifyContent:"space-between",width:"40%",alignItems:"center" }} component="div">

                <Box sx={{display:"flex"}}>
                        {/* <h1 class="logo-heading">GM4</h1> */}
                        <img onClick={() => navigate('/')} src={logo}  alt="" class="header-logo" />
                </Box>

                <Link to="/" ></Link>

                {/* links */}
                {/* {matches ? 
                (<IconButton style={{width:"100px",height:"50px",color:"#6BDCFC"}} 
                onClick={()=>setOpenDrawer(!openDrawer)}> {openDrawer ?"x":
                    <MenuIcon style={{width:"40px",height:"150px",display:"flex",marginLeft:"250px"}}/>}
                    </IconButton>) :( <IconButton></IconButton>)} */}

                {matches ? (<DrawerComponent 
                openDrawer={openDrawer} 
                setOpenDrawer={setOpenDrawer}/>
                ):(

                   


                    <Box sx={{ display:"flex"}}>        
                    {/* searchbar portion */}

                    <Search id="header-searchbar">
                            <SearchIconWrapper id="header-searchicon" >
                            <SearchIcon  sx={{ display:"right",color:"rgb(102 98 98)"}}/>
                            </SearchIconWrapper>
                            <StyledInputBase id="search-content"
                            placeholder="Search…"
                            inputProps={{ 'aria-label': 'search' }}
                            />
                    </Search>

                    {/* searchbar portion ends */}

                    <Link to="/login" style={{textDecoration:"none"}} ><Typography class="header-link" >LOGIN</Typography>
                    </Link>

                    
                        <Typography class="header-link"
                        aria-controls="basic-menu"
                        aria-haspopup="true"
                        aria-expanded={openMenu ? 'true':undefined}
                        onClick={handleClick}
                        >MORE
                        </Typography>
                        <Menu  id="home-dropdownmenu"
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
                            open={openMenu}   onClose={handleClose} class="MuiMenu-root" >
                                    <MenuItem id="home-headermenu" onClick={handleClose}><Link to="/about" class="header-sublink" style={{textDecoration:"none"}}>About US</Link></MenuItem>
                                    <MenuItem id="home-headermenu" onClick={handleClose}><Link to="/ourteam" class="header-sublink" style={{textDecoration:"none"}}>Our Team</Link></MenuItem>
                                    <MenuItem id="home-headermenu" onClick={handleClose}><Link to="/careers" class="header-sublink" style={{textDecoration:"none"}}>Careers</Link></MenuItem>
                                    <MenuItem id="home-headermenu" onClick={handleClose}><Link to="/advertise" class="header-sublink" style={{textDecoration:"none"}}>Advertise</Link></MenuItem>
                                    <MenuItem id="home-headermenu" onClick={handleClose}><Link to="/blog" class="header-sublink" style={{textDecoration:"none"}}>Blog</Link></MenuItem>
                                    <MenuItem id="home-headermenu" onClick={handleClose}><Link to="/orghome" class="header-sublink" style={{textDecoration:"none"}}>Organiser</Link></MenuItem>
                                    <MenuItem id="home-headermenu" onClick={handleClose}><Link to="/userhome" class="header-sublink" style={{textDecoration:"none"}}>Users</Link></MenuItem>

                                </Menu>

                    </Box>

                ) }
                
            


                          

             </Box>               
        </Toolbar>
                            
    </AppBar>
    </>
  );
};


