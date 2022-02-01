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


        <Link to="/" ></Link>

        <Typography 
                aria-controls="basic-menu"
                            aria-haspopup="true"
                            aria-expanded={openMenu ? 'true':undefined}
                            onClick={handleClick}
                            >More
                            </Typography>
                            

                            <Menu id="basic-menu" anchorEl={anchorEl}  open={openMenu}  onClose={handleClose}>
                                <MenuItem onClick={handleClose} style={{color:"black"}}><Link to="/about">About US</Link></MenuItem>
                                <MenuItem onClick={handleClose}><Link to="/ourteam">Our Team</Link></MenuItem>
                                <MenuItem onClick={handleClose}><Link to="/careers">Careers</Link></MenuItem>
                                <MenuItem onClick={handleClose}><Link to="/advertise">Advertise</Link></MenuItem>
                                <MenuItem onClick={handleClose}><Link to="/blog">Blog</Link></MenuItem>
                                <MenuItem onClick={handleClose}><Link to="/orghome">Organiser</Link></MenuItem>
                                <MenuItem onClick={handleClose}><Link to="/userhome">Users</Link></MenuItem>

                            </Menu>

                            <Typography>Login</Typography>

                            {/* <Typography
                aria-controls="basicmenu"
                            aria-haspopup="true"
                            aria-expanded={openMenu ? 'true':undefined}
                            onClick={handleClick}
                            >Login
                            </Typography>

                            <Menu id="basicmenu" anchorEl={anchorEl}  open={openMenu}  onClose={handleClose} sx={{Height:"400px",marginLeft:"500"}}  >
                                <MenuItem onClick={handleClose}><Link to="/orghome">Organiser</Link></MenuItem>
                                <MenuItem onClick={handleClose}><Link to="/userhome">Users</Link></MenuItem>
                            </Menu> */}
                            

                            

                            
    </div>
  )
}

export default Homeheader
