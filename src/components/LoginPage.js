import React from 'react';
import { 
  TextField, 
  Stack, 
  Button, 
  Grid, 
  Typography, 
  Link, 
 } from '@mui/material';

import DogHouse from '../assets/dog-house.svg';
// import AppBar from './AppBar';

function LoginPage() {


  return(
    <Grid
    container
    spacing={0}
    direction="column"
    alignItems="center"
    justifyContent="center"
    style={{ minHeight: '100vh' }}>
       

      <Grid item xs={3}>
        <img src={DogHouse} alt='shelter logo' style={{
          display: 'block',
          'margin-left': 'auto',
          'margin-right': 'auto',
          width: '100%'}}/>
          </Grid>
        <Stack className='LoginBox' spacing={2}>
          <Typography variant="h5">Shelter Volunteer App</Typography>

            <TextField label="E-mail" variant="filled"/>

            <TextField label="Password" type="password" variant="filled"/>
          
            <Link underline='hover' sx={{
              'text-align': 'center'
            }}>Forgot My Password</Link>

              <Button 
              onClick={()=> console.log("The Rural Juror")}
              variant="contained">
                Login
              </Button>

        </Stack>

      </Grid> 
      )
}

export default LoginPage;