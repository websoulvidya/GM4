import * as React from 'react';
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom';

import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import LogoutIcon from '@mui/icons-material/Logout';
import MoreIcon from '@mui/icons-material/MoreVert';
import './Dashboard.css';
import { HeightTwoTone } from '@mui/icons-material';



import logo from '../../assets/homeimages/logo.png';


const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  border:"1px solid #6BDCFC",
  // backgroundColor: "rgb(102 98 98)",
  '&:hover': {
    border:"1px solid #6BDCFC",
  
  },
  '&:focus': {
    width: '40ch',
    border:"none",
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
//   [theme.breakpoints.up('sm')]: {
//     marginLeft: theme.spacing(3),
//     width: 'auto',

//     marginLeft:"15%",
//     marginBottom:"5px",
//     marginTop:"5px",
// color:"rgb(102 98 98)",

   
//   },
  
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
      height:"10%",
      color:"#fffff",
      [theme.breakpoints.up('md')]: {
      width: '78ch',
      
      '&:focus': {
        // width: '40ch',
        border:"none",
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

export default function PrimarySearchAppBar() {

  const navigate = useNavigate();


  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };
  

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      className="profile-menuId"
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
      >
     
      <MenuItem onClick={() => navigate('/organisation/profile')}>Profile</MenuItem>
      <MenuItem onClick={() => navigate('/')}>Logout</MenuItem>        


    </Menu>
  );


  // header in responsive case

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    
    <Menu id="org-headermenu"
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
        
      }}
      
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
          <Link class="uk-button uk-button-default" id="buttons_nav" to='/orghome'>
                        <h4 className='navhead'>DashBoard</h4>
                    </Link>
      </MenuItem>
      <MenuItem >
          <Link class="uk-button uk-button-default" id="buttons_nav" to='/sendidp'>
              <h4 className='navhead'>Send Idp</h4>
          </Link>
      </MenuItem>
      <MenuItem>
          <Link class="uk-button uk-button-default" id="buttons_nav" to='/slotlist'>
                        <h4 className='navhead'>Slot List</h4>
                    </Link>
      </MenuItem>
      <MenuItem>
          <Link class="uk-button uk-button-default" id="buttons_nav" to='/mymatches'>
                        <h4 className='navhead'>My matches</h4>
                    </Link>
      </MenuItem>
      <MenuItem>
      <Link class="uk-button uk-button-default" id="buttons_nav" to='/cancellation'>
                        <h4 className='navhead'>Cancellation</h4>
                    </Link>
      </MenuItem>
      <MenuItem>
          <Link class="uk-button uk-button-default" id="buttons_nav" to='/advertisement'>
                        <h4 className='navhead'>Advertisement</h4>
          </Link>
      </MenuItem>
      {/* <MenuItem>
      <a class="uk-button uk-button-default" id="buttons_nav" href="/Logout">
                        <h4 className='navhead'>Logout</h4>
                    </a>
      </MenuItem> */}
    
     

      {/* Notification parts */}
      <MenuItem onClick={() => navigate('/notifications')}>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge badgeContent={17} color="primary">
            <NotificationsIcon color="action"/>
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>

      {/* profile icons */}
      <MenuItem onClick={() => navigate('/organisation/profile')}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>

      {/* logout icons */}

      <MenuItem onClick={() => navigate('/')}>
        <IconButton
          size="large"
          color="inherit"
        >
        <LogoutIcon color="action"/>

        </IconButton>
        <p>Logout</p>
      </MenuItem>

      

    </Menu>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed"  id='apporg' sx={{backgroundColor:"white",top:0}}>
        <Toolbar>
         
         
          <Box sx={{display:"flex"}}>
              <img onClick={() => navigate('/')} src={logo}  alt="" class="headerlogo-org" />
          </Box>
          <Search id="header-searchbarorg">
            <SearchIconWrapper id="org-searchicon">
              <SearchIcon sx={{ display:"right",color:"rgb(102 98 98)"}}/>
            </SearchIconWrapper>
            <StyledInputBase id="org-searchinput"
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
              
            />
          </Search>

          {/* icon portion  starts*/}
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
           
            <IconButton  id="org-notification-icon"
              size="large"
              aria-label="show 17 new notifications"
              color="inherit">
              <Badge badgeContent={17} color="primary">
                  <NotificationsIcon  sx={{ color:"rgb(102 98 98)"}} color="action" 
                  onClick={() => navigate('/notifications')}/>

              </Badge>
            </IconButton>

            <IconButton id="org-profile-icon"
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle sx={{ display:"right",color:"rgb(102 98 98)"}} />
            </IconButton>
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon sx={{color:"gray"}}/>
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu} 
    </Box>
  );
}