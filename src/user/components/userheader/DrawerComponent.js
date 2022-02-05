import React,{useState} from 'react'
import {Drawer,Typography,List,ListItem,ListItemIcon,ListItemText,Menu,MenuItem,Box} from '@mui/material'
import { Link } from 'react-router-dom';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import { styled, alpha } from '@mui/material/styles';
import { IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';



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
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(1),
            width: 'auto',
            marginLeft:"5%",
            marginBottom:"10px",
            marginTop:"45%",
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
            [theme.breakpoints.up('md')]: {
            width: '24ch',
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

  return (
    <div>
        <Drawer anchor="left" open={openDrawer}>
            <List style={{backgroundColor:"#fffff",width:"850px"}}>
                <ListItem divider style={{backgroundColor:"white",marginTop:"-10px"}} onClick={()=>setOpenDrawer(false)}>
                    <ListItemIcon>
                        <ListItemText>
                            <Box sx={{display:"flex",marginTop:"5px",marginLeft:"15px",backgroundColor:"#ffff"}}>
                            <h1 class="logo-heading">GM4</h1>
                            <CloseIcon id="header-closeicon"/>
                            </Box>
                        </ListItemText>
                    </ListItemIcon>
                </ListItem>

                <ListItem divider button style={{margin:"10px 0 0px 0px"}} onClick={()=>setOpenDrawer(false)}>
                    <ListItemIcon>
                        <ListItemText style={{margin:"10px 0 10px 10px"}}><Link to="/userhome" style={{textDecoration:"none"}} ><Typography style={{fontSize:"30px",fontFamily:"Open Sans",fontWeight:"600",color:"rgb(102 98 98)"}}>Home</Typography></Link></ListItemText>
                    </ListItemIcon>
                </ListItem>
                <ListItem divider button style={{margin:"10px 0 0px 0px"}} onClick={()=>setOpenDrawer(false)}>
                    <ListItemIcon>
                        <ListItemText style={{margin:"10px 0 10px 10px"}}><Link to="/useridp" style={{textDecoration:"none"}}><Typography style={{fontSize:"30px",fontFamily:"Open Sans",fontWeight:"600",color:"rgb(102 98 98)"}}>IDP</Typography></Link></ListItemText>
                    </ListItemIcon>
                </ListItem>
                <ListItem divider button style={{margin:"10px 0 0px 0px"}} onClick={()=>setOpenDrawer(false)}>
                    <ListItemIcon>
                        <ListItemText style={{margin:"10px 0 10px 10px"}}><Link to="/notification"style={{textDecoration:"none"}} ><Typography style={{fontSize:"30px",fontFamily:"Open Sans",fontWeight:"600",color:"rgb(102 98 98)"}}>Notification</Typography></Link></ListItemText>
                    </ListItemIcon>
                </ListItem>
                
                <ListItem divider button style={{margin:"10px 0 10px"}} onClick={()=>setOpenDrawer(false)}>
                    <ListItemIcon>
                        <ListItemText style={{margin:"10px 0 10px 10px",fontSize:"34px",fontFamily:"Roboto,Arial, Helvetica, sans-serif",fontWeight:"600",color:"white"}} aria-controls="basic-menu"
                            aria-haspopup="true"
                            aria-expanded={openMenu ? 'true':undefined}
                            onClick={handleClick}><Typography style={{fontSize:"30px",fontFamily:"Open Sans",fontWeight:"600",color:"rgb(102 98 98)"}}>
                                Username</Typography>
                        </ListItemText>
                        <Menu id="basic-menu" anchorEl={anchorEl}  open={openMenu}  onClose={handleClose} style={{width:"80%",marginTop:"450px"}}>
                            <MenuItem onClick={handleClose} style={{fontSize:"30px",fontFamily:"Open Sans",fontWeight:"600",color:"rgb(102 98 98)"}}><Link to="/profile" style={{textDecoration:"none"}}>Profile</Link></MenuItem>
                            <MenuItem onClick={handleClose} style={{fontSize:"30px",fontFamily:"Open Sans",fontWeight:"600",color:"rgb(102 98 98)"}}><Link to="/changepass" style={{textDecoration:"none"}}>Changepassword</Link></MenuItem>
                            <MenuItem onClick={handleClose} style={{fontSize:"30px",fontFamily:"Open Sans",fontWeight:"600",color:"rgb(102 98 98)"}}><Link to="/mybookings" style={{textDecoration:"none"}}>My Bookings</Link></MenuItem>
                            <MenuItem onClick={handleClose} style={{fontSize:"30px",fontFamily:"Open Sans",fontWeight:"600",color:"rgb(102 98 98)"}}><Link to="/logout" style={{textDecoration:"none"}}>Logout</Link></MenuItem>

                        </Menu>
                                        
                    </ListItemIcon>
                </ListItem>

                <Search id="header-search">
                    <SearchIconWrapper>
                    <SearchIcon sx={{ display:"right",color:"rgb(102 98 98)"}}/>
                    </SearchIconWrapper>
                    <StyledInputBase 
                    placeholder="Search…"
                    inputProps={{ 'aria-label': 'search' }}
                    />
                </Search>

            </List>
            
        </Drawer>

        {/* <Typography  style={{marginLeft:"40%", fontSize:"1.5rem"}}><b>  </b></Typography>
        <IconButton  onClick={()=> setOpenDrawer(!openDrawer)} style={{marginLeft:"-42%", backgroundColor:"black" ,color:"white",borderRadius:"0rem" ,padding:"1rem"}}>
            {openDrawer ?"x":<MenuIcon />}
        </IconButton> */}

        <IconButton  onClick={()=> setOpenDrawer(true)} style={{borderRadius:"0rem" ,padding:"1rem"}}>
            {openDrawer ?<CloseIcon  style={{width:"40px",height:"150px",display:"flex",marginLeft:"50px"}}/>
            :<MenuIcon id="header-menuicon" style={{color:"#6BDCFC"}} />}
        </IconButton>

      
    </div>
  )
}

export default DrawerComponent;
