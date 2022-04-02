import React,{useState} from 'react'
import {Drawer,Typography,List,ListItem,ListItemIcon,ListItemText,Menu,MenuItem,Box,useMediaQuery,useTheme} from '@mui/material'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import { styled, alpha } from '@mui/material/styles';
import { IconButton } from '@mui/material';
import Grid from '@mui/material/Grid';
import MenuIcon from '@mui/icons-material/Menu';
// import MoreVertIcon from '@mui/icons-material/MoreVert';
import MoreIcon from '@mui/icons-material/MoreVert';
import CloseIcon from '@mui/icons-material/Close';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import logo from '../../assets/logo.png';



import "./DrawerComponent.css";


const DrawerComponent=() =>{

    const navigate = useNavigate();


    const [openDrawer, setOpenDrawer]= useState(false);
    const [showdrop, setshowdrop]=useState(false);
    const [showlang, setshowlang]= useState(false);

    // code for search bar

    const Search = styled('div')(({ theme }) => ({
        position: 'relative',
          borderRadius: theme.shape.borderRadius,
            // borderRadius:"50px",
            border:"1px solid #6BDCFC",

        // backgroundColor: "rgb(102 98 98)",
        '&:hover': {
            border:"1px solid #6BDCFC",
            // backgroundColor:"rgb(102 98 98)",
        },
        '&:focus': {
            width: '80ch',
            border:"none"
          },
        marginLeft: 20,
        width: '100%',
        [theme.breakpoints.up('md')]: {
            marginLeft: theme.spacing(1),
            width: 'auto',
            marginLeft:"5%",
            marginBottom:"10px",
            marginTop:"70%",
            marginRight:"10%",
            color:"rgb(102 98 98)",


        },
        [theme.breakpoints.down('md')]: {
            marginLeft: theme.spacing(1),
            width: 'auto',
            marginLeft:"0%",
            marginBottom:"10px",
            marginTop:"70%",
            marginRight:"1%",
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
            height:"20%",
            color:"#fffff",
            [theme.breakpoints.up('md')]: {
              '&:focus': {
                // width: '20ch',
                border:"none"
              },
              '&:hover': {
                border:"none",
                // backgroundColor:"rgb(102 98 98)",
            },
            
            },
            [theme.breakpoints.down('md')]: {
                '&:focus': {
                  // width: '20ch',
                  border:"none"
                },
                '&:hover': {
                  border:"none",
                  // backgroundColor:"rgb(102 98 98)",
              },
            },
        },
        }));



    // code for dropdown
    const [anchorEl,setAnchorEl]=React.useState(null);
    const openMenu=Boolean(anchorEl);
    const handleClick=(e)=>{
        setAnchorEl(e.currentTarget)
    };

    const handleClose=()=>{
        setAnchorEl(null);
        
    };
    // dropdown code ends


    // const theme=useTheme()
    // const ismatches=useMediaQuery(theme.breakpoints.down("sm"));

//     const [age, setAge] = React.useState('');

//   const handleChange = (event) => {
//     setAge(event.target.value);
//   };


  return (
    <div>
        

        <Drawer anchor="left"  open={openDrawer} onClose={()=> setOpenDrawer(false)}> 

            <List style={{backgroundColor:"#fffff",width:"900px"}}>
            <ListItem divider style={{backgroundColor:"white",marginTop:"-10px"}} 
                        onClick={()=>setOpenDrawer(false)}>
                <ListItemIcon>
                    <ListItemText>
                        <Box sx={{display:"flex",marginTop:"5px",marginLeft:"15px",backgroundColor:"#ffff"}}>
                        <img onClick={() => navigate('/')} src={logo}  class="header-logo" alt="logo" />
                        {/* <h1 class="logo-heading">GM4</h1> */}
                        <CloseIcon id="header-closeicon"/>
                        </Box>
                    </ListItemText>
                </ListItemIcon>
            </ListItem>

            <ListItem divider button style={{margin:"10px 0 0px 0px"}} onClick={()=>setOpenDrawer(false)} >
            {/* onClick={() => navigate('/login')} */}
                <ListItemIcon>
                    <ListItemText  style={{margin:"10px 0 10px 10px"}}>
                        <Link to="/login" style={{textDecoration:"none"}} >
                            <Typography class="header-link">LOGIN</Typography>
                        </Link>
                    </ListItemText>
                </ListItemIcon>
            </ListItem>

            <ListItem divider button style={{margin:"10px 0 10px"}} onClick={()=>setOpenDrawer(true)}>
                <ListItemIcon>
                    <ListItemText  style={{margin:"10px 0 10px 10px"}} 
                        aria-controls="basic-menu"
                        aria-haspopup="true"
                        aria-expanded={openMenu ? 'true':undefined}
                        onClick={handleClick}
                        ><Typography class="header-link">
                            MORE</Typography>
                    </ListItemText>

                   
                    <Menu id="home-dropdownmenu"
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
                            open={openMenu}   onClose={handleClose} >
                        <MenuItem onClick={handleClose} id="home-headermenu"><Link to="/about" class="header-sublink" style={{textDecoration:"none"}}>About US</Link></MenuItem>
                        <MenuItem onClick={handleClose} id="home-headermenu"><Link to="/ourteam" class="header-sublink" style={{textDecoration:"none"}}>Our Team</Link></MenuItem>
                        <MenuItem onClick={handleClose} id="home-headermenu"><Link to="/careers" class="header-sublink" style={{textDecoration:"none"}}>Careers</Link></MenuItem>
                        <MenuItem onClick={handleClose} id="home-headermenu"><Link to="/advertise" class="header-sublink" style={{textDecoration:"none"}}>Advertise</Link></MenuItem>
                        <MenuItem onClick={handleClose} id="home-headermenu"><Link to="/blog"class="header-sublink" style={{textDecoration:"none"}}>Blog</Link></MenuItem>
                        <MenuItem onClick={handleClose} id="home-headermenu"><Link to="/orghome" class="header-sublink" style={{textDecoration:"none"}}>Organiser</Link></MenuItem>
                        <MenuItem onClick={handleClose} id="home-headermenu"><Link to="/userhome" class="header-sublink" style={{textDecoration:"none"}}>Users</Link></MenuItem>

                    </Menu>
          
                </ListItemIcon>
            </ListItem>

            {/* <Search  id="header-searchbar">
                <SearchIconWrapper id="header-searchicon">
                <SearchIcon sx={{ display:"right",color:"rgb(102 98 98)"}}/>
                </SearchIconWrapper>
                <StyledInputBase id="search-content"
                placeholder="Search…"
                inputProps={{ 'aria-label': 'search' }}
                endIcon={<KeyboardArrowDownIcon sx={{width:"30px",color:"red",marginLeft:"-30px"}}/>}
                />
            </Search> */}

        </List>
        </Drawer>
             
        
            <Grid item xs={12} sm={12} md={12}>

                <Grid item xs={2} sm={4} md={4}>
                    <img onClick={() => navigate('/')}  src={logo}  alt="" class="header-logo" />
                </Grid>
                <Grid item xs={8} sm={8} md={8}>
                    <Search  id="header-searchbar">
                        <SearchIconWrapper id="header-searchicon">
                        <SearchIcon sx={{ display:"right",color:"rgb(102 98 98)"}}/>
                        </SearchIconWrapper>
                        <StyledInputBase id="search-content"
                        placeholder="Search…"
                        inputProps={{ 'aria-label': 'search' }}
                        />
                    </Search>
                </Grid>
                <Grid item xs={2} sm={2} md={2}>
                    <IconButton 
                    size="large"
                    aria-label="show more"
                    aria-haspopup="true"
                    color="inherit"
                    disableFocusRipple="true"
                    disableRipple="true"
                     onClick={()=> setOpenDrawer(!openDrawer)} style={{borderRadius:"0rem" ,padding:"1rem"}}>
                    {openDrawer ?<CloseIcon  style={{width:"40px",height:"150px",display:"flex",marginLeft:"50px"}}/>
                    :<MoreIcon 
                    disableFocusRipple="true"
                    disableRipple="true"
                    id="header-moreicon" onClick={() => setOpenDrawer(!openDrawer)}   style={{color:"#6BDCFC"}} />}
                    </IconButton>
                {/* id="header-menuicon" */}
                </Grid>
            </Grid>

      
    </div>
  )
}

export default DrawerComponent;
