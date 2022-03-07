import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import MenuButton from './MenuButton';
import Drawer from '@mui/material';

export default function ButtonAppBar() {
  return (
    <Box
      sx={{
        flexGrow: 1,
        marginBottom: 8,
      }}
    >
      <AppBar>
        <Toolbar variant="dense" sx={{ backgroundColor: "darkblue" }}>
          <MenuButton />
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, "font-weight": "bold", letterSpacing: 1 }}
          >
            Home
          </Typography>
          <Button variant="outlined" target="_blank" href="https://www.amazon.com/hz/wishlist/ls/1F0WL8J9XEG5L/ref=nav_wishlist_lists_1?_encoding=UTF8&type=wishlist" color="inherit" sx={{ "font-weight": "bold" }}>
            Donate
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
