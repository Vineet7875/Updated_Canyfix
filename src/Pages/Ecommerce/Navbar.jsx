import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Navbar = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const cartItemCount = useSelector(state => state.cartItemCount);
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleCategoryClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleCartClick = () => {
    navigate('/Cart')
  };

  return (
    <AppBar position="static" color="inherit" sx={{ boxShadow: 'none', justifyContent: 'space-between', boxShadow: 'rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px' }}>
      <Toolbar sx={{ justifyContent: 'space-between' }}>

        {!isSmallScreen && (
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontSize: '1.7rem', fontFamily: 'Titillium Web, sans-serif' }}>
            <a href="#top">
              <img src="canyfixlogo.png" alt="Company Logo" style={{ width: '100px', height: 'auto', display: 'flex' }} />
            </a>


          </Typography>
        )}

        {isSmallScreen ? (
          <>
            <IconButton color="inherit" edge="end" onClick={handleCategoryClick} >
              <MenuIcon sx={{ fontSize: '2.2rem', color: 'black', marginRight: '1.5rem' }} />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleClose}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              getContentAnchorEl={null}
            >
              <MenuItem onClick={handleClose} sx={{ fontSize: '1.5rem', fontFamily: 'Titillium Web, sans-serif' }}>Category</MenuItem>
              <MenuItem onClick={handleClose} sx={{ fontSize: '1.5rem', fontFamily: 'Titillium Web, sans-serif' }}>What's New</MenuItem>
              <MenuItem onClick={handleClose} sx={{ fontSize: '1.5rem', fontFamily: 'Titillium Web, sans-serif' }}>Deals</MenuItem>
              <MenuItem onClick={handleClose} sx={{ fontSize: '1.5rem', fontFamily: 'Titillium Web, sans-serif' }}>Delivery</MenuItem>
            </Menu>
          </>
        ) : (
          <>
            <Typography variant="h6" component="div" sx={{ mr: 3, cursor: 'pointer', color: 'black', fontSize: '1.7rem', fontFamily: 'Titillium Web, sans-serif' }}>
              <span onClick={handleCategoryClick}>Categories</span>
              <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose} sx={{ fontSize: '1.5rem', fontFamily: 'Titillium Web, sans-serif' }}>Category</MenuItem>
                <MenuItem onClick={handleClose} sx={{ fontSize: '1.5rem', fontFamily: 'Titillium Web, sans-serif' }}>What's New</MenuItem>
                <MenuItem onClick={handleClose} sx={{ fontSize: '1.5rem', fontFamily: 'Titillium Web, sans-serif' }}>Deals</MenuItem>
                <MenuItem onClick={handleClose} sx={{ fontSize: '1.5rem', fontFamily: 'Titillium Web, sans-serif' }}>Delivery</MenuItem>
              </Menu>
            </Typography>

            <Typography variant="h6" component="div" sx={{ mr: 3, cursor: 'pointer', color: 'black', fontSize: '1.7rem', fontFamily: 'Titillium Web, sans-serif' }}>
              Deals
            </Typography>

            <Typography variant="h6" component="div" sx={{ mr: 3, cursor: 'pointer', color: 'black', fontSize: '1.7rem', fontFamily: 'Titillium Web, sans-serif' }}>
              What's New
            </Typography>

            <Typography variant="h6" component="div" sx={{ mr: 3, cursor: 'pointer', color: 'black', fontSize: '1.7rem', fontFamily: 'Titillium Web, sans-serif' }}>
              Delivery
            </Typography>
          </>
        )}

        <div style={{ display: 'flex', alignItems: 'center', borderRadius: '4px', background: '#f0f0f0', padding: '0px 8px', marginRight: '12px' }}>
          <IconButton color="inherit">
            <SearchIcon sx={{ fontSize: '2rem', color: 'black' }} />
          </IconButton>
          <input type="text" placeholder="Search" style={{ border: 'none', outline: 'none', background: 'transparent', marginLeft: '8px', flex: '1', color: 'black' }} />
        </div>

        {isSmallScreen ? (
          <div>
            <IconButton color="inherit">
              <AccountCircleIcon sx={{ fontSize: '2.2rem', color: 'black' }} />
            </IconButton>
            <IconButton color="inherit">
              <ShoppingCartIcon sx={{ fontSize: '2.2rem', color: 'black' }} onClick={handleCartClick} />
              <span style={{fontWeight:'bold'}}>{cartItemCount}</span>
            </IconButton>
          
          </div>
        ) : (
          <div style={{ display: 'flex'}}>
            <div style={{ display: 'flex', alignItems: 'center', marginRight: '12px', color: 'black' }}>
              <Typography variant="subtitle1" component="div" sx={{ marginRight: 1, fontSize: '1.7rem', fontFamily: 'Titillium Web, sans-serif' }}>
                Account
              </Typography>
              <IconButton color="inherit">
                <AccountCircleIcon sx={{ fontSize: '2.2rem', color: 'black' }} />
              </IconButton>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', color: 'black' }}>
              <Typography variant="subtitle1" component="div" sx={{ marginRight: 1, fontSize: '1.7rem', fontFamily: 'Titillium Web, sans-serif' }}>
                Cart
              </Typography>
              <IconButton color="inherit">
                <ShoppingCartIcon sx={{ fontSize: '2.2rem', color: 'black' }} onClick={handleCartClick} />
                <span style={{fontWeight:'bold'}}>{cartItemCount}</span>
              </IconButton>
             
            </div>
          </div>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
