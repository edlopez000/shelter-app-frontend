import * as React from 'react';
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
        <MenuItem onClick={() => {navigate('/about'); handleClose()}}>About</MenuItem>
        <MenuItem onClick={() => {navigate('/home'); handleClose()}}>The Rural Juror</MenuItem>
        <MenuItem onClick={() => {navigate('/dog'); handleClose()}}>Lawns and Jawns</MenuItem>
        <MenuItem onClick={() => {navigate('/cat'); handleClose()}}>Cats The Musical</MenuItem>
        <MenuItem onClick={() => {navigate('/links'); handleClose()}}>Resources</MenuItem>
        <MenuItem onClick={() => {navigate('/devs'); handleClose()}}>Developers</MenuItem>
      </Menu>
    </div>
  );
}
