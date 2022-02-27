import React,{useState} from 'react'
import {Drawer,Typography,List,ListItem,ListItemIcon,ListItemText,Menu,MenuItem,Box,useMediaQuery,useTheme} from '@mui/material'
import { Link } from 'react-router-dom';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import { styled, alpha } from '@mui/material/styles';
import { IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import logo from '../../assets/logo.png';


import "./DrawerComponent.css";


const DrawerComponent=({openDrawer,setOpenDrawer}) =>{

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
            //   '&:focus': {
            //     width: '20ch',
            //   },
            },
        },
        }));



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


    // const theme=useTheme()
    // const ismatches=useMediaQuery(theme.breakpoints.down("sm"));


  return (
    <div>
        

        <Drawer anchor="left" open={openDrawer}> 

            <List style={{backgroundColor:"#fffff",width:"900px"}}>
            <ListItem divider style={{backgroundColor:"white",marginTop:"-10px"}} onClick={()=>setOpenDrawer(false)}>
                <ListItemIcon>
                    <ListItemText>
                        <Box sx={{display:"flex",marginTop:"5px",marginLeft:"15px",backgroundColor:"#ffff"}}>
                        <img src={logo}  class="header-logo" alt="logo" />
                        {/* <h1 class="logo-heading">GM4</h1> */}
                        <CloseIcon id="header-closeicon"/>
                        </Box>
                    </ListItemText>
                </ListItemIcon>
            </ListItem>

            <ListItem divider button style={{margin:"10px 0 0px 0px"}} onClick={()=>setOpenDrawer(false)}>
                <ListItemIcon>
                    <ListItemText style={{margin:"10px 0 10px 10px"}}><Typography class="header-link">LOGIN</Typography></ListItemText>
                </ListItemIcon>
            </ListItem>

            <ListItem divider button style={{margin:"10px 0 10px"}} onClick={()=>setOpenDrawer(false)}>
                <ListItemIcon>
                    <ListItemText style={{margin:"10px 0 10px 10px"}} aria-controls="basic-menu"
                        aria-haspopup="true"
                        aria-expanded={openMenu ? 'true':undefined}
                        onClick={handleClick} ><Typography class="header-link">
                            MORE</Typography>
                    </ListItemText>
                    <Menu id="basic-menu" anchorEl={anchorEl}  open={openMenu}  onClose={handleClose}>
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

            <Search  id="header-searchbar">
                <SearchIconWrapper id="header-searchicon">
                <SearchIcon sx={{ display:"right",color:"rgb(102 98 98)"}}/>
                </SearchIconWrapper>
                <StyledInputBase id="search-content"
                placeholder="Search…"
                inputProps={{ 'aria-label': 'search' }}
                endIcon={<KeyboardArrowDownIcon sx={{width:"30px",color:"red",marginLeft:"-30px"}}/>}
                />
            </Search>

        </List>
        </Drawer>
             
                   

        {/* <IconButton  onClick={()=> setOpenDrawer(!openDrawer)} style={{marginLeft:"-42%", backgroundColor:"grey" ,color:"red",borderRadius:"0rem" ,padding:"1rem"}}>
            {openDrawer ?"x":<MenuIcon />}
        </IconButton> */}

{/* (<IconButton  onClick={()=>setOpenDrawer(true)} style={{width:"100px",height:"50px",color:"#6BDCFC"}} > 
{openDrawer ?"x":
                    <MenuIcon style={{width:"40px",height:"150px",display:"flex",marginLeft:"650px"}}/>
    }</IconButton>)  */}
                                    <img src={logo}  alt="" class="header-logo" />

        <IconButton  onClick={()=> setOpenDrawer(true)} style={{borderRadius:"0rem" ,padding:"1rem"}}>
            {openDrawer ?<CloseIcon  style={{width:"40px",height:"150px",display:"flex",marginLeft:"50px"}}/>
            :<MenuIcon id="header-menuicon" style={{color:"#6BDCFC"}} />}
        </IconButton>

      
    </div>
  )
}

export default DrawerComponent;
