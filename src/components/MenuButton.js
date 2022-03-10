import * as React from 'react';
import { Link } from 'react-router-dom';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from 'react-router';

export default function BasicMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const navigate = useNavigate();
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton
        size="large"
        edge="start"
        color="inherit"
        aria-label="menu"
        sx={{ mr: 2 }}
        onClick={handleClick}
      >
        <MenuIcon />
      </IconButton>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
          dense: 'true',
          disablePadding: 'true',
        }}
      >
        <MenuItem component={Link} to="/home">Home</MenuItem>
        <MenuItem component={Link} to="/dog">Dog</MenuItem>
        <MenuItem component={Link} to="/cat">Cat</MenuItem>
        <MenuItem component={Link} to="/links">Resources</MenuItem>
        <MenuItem component={Link} to="/about">Contact</MenuItem>
        <MenuItem component={Link} to="/devs">Developers</MenuItem>
        <MenuItem component={Link} to="/logout">Logout</MenuItem>
      </Menu>
    </div>
  );
 }
 

