import React,{useState} from 'react'
import { Link } from 'react-router-dom';
import {Typography} from '@mui/material';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';


function Homeheader() {

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


        <Link to="/userhome" >Home</Link>
        <Link to="/useridp" >IDP</Link>
        <Link to="/notification" >Notification</Link>


        <Typography 
                aria-controls="basic-menu"
                            aria-haspopup="true"
                            aria-expanded={openMenu ? 'true':undefined}
                            onClick={handleClick}
                            >Username
                            </Typography>
                            

                            <Menu id="basic-menu" anchorEl={anchorEl}  open={openMenu}  onClose={handleClose}>
                                <MenuItem onClick={handleClose} style={{color:"black"}}><Link to="/profile">Profile</Link></MenuItem>
                                <MenuItem onClick={handleClose}><Link to="/changepass">Changepassword</Link></MenuItem>
                                <MenuItem onClick={handleClose}><Link to="/mybookings">My Bookings</Link></MenuItem>
                                <MenuItem onClick={handleClose}><Link to="/logout">Logout</Link></MenuItem>
                                

                            </Menu>

                           

                            
                            

                            
    </div>
  )
}

export default Homeheader
