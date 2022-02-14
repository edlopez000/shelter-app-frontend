import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import MenuButton from './MenuButton';

export default function ButtonAppBar() {
  return (
    <Box sx={{ 
      flexGrow: 1, marginBottom:10
     }}>
      <AppBar >
        <Toolbar variant="dense" sx={{backgroundColor: 'darkblue'}}>
          <MenuButton />
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}
          ></Typography>
          <Button color="inherit" sx={{'font-weight': 'bold'}}>Home</Button>
          <Button color="inherit" sx={{'font-weight': 'bold'}}>Donate</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
