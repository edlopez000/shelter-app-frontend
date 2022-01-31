import React from 'react';
<<<<<<< HEAD
import { 
  TextField, 
  Stack, 
  Button, 
  Grid, 
  Typography, 
  Link, 
  Container
 } from '@mui/material';

import DogHouse from '../assets/dog-house.svg';
=======
import {
  TextField,
  Stack,
  Button,
  Typography,
  Link,
  SvgIcon,
  Box,
} from '@mui/material';
import { ReactComponent as DogHouse } from '../assets/dog-house.svg';
import { useForm } from 'react-hook-form';
>>>>>>> 2feb267b968b3d1d1daf2110768026c366a9cae9

function LoginPage() {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

<<<<<<< HEAD
  return(
    <Container maxWidth='sm'>

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
=======
  return (
    <Box>
      <Stack
      // sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
      // Above line makes everything vertically align but makes them way smaller
      >
        <SvgIcon
          component={DogHouse}
          inheritViewBox
          sx={{
            fontSize: 200,
          }}
        />
        <Typography textAlign={'center'} variant="h5">
          Shelter Volunteer App
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Stack>
            <TextField
              label="Email"
              variant="filled"
              {...register('email', { required: true })}
            />
            <Typography sx={{ color: 'red', textAlign: 'center' }}>
              {errors?.email && 'Email is required'}
            </Typography>
            <TextField
              label="Password"
              type="password"
              variant="filled"
              {...register('password')}
            />
>>>>>>> 2feb267b968b3d1d1daf2110768026c366a9cae9

            <Link
              href="#"
              underline="hover"
              sx={{
                textAlign: 'center',
              }}
            >
              Forgot My Password
            </Link>

<<<<<<< HEAD
       </Grid> 
       </Container>
      )
=======
            <Button variant="contained" type="submit">
              Login
            </Button>
          </Stack>
        </form>
      </Stack>
    </Box>
  );
>>>>>>> 2feb267b968b3d1d1daf2110768026c366a9cae9
}

export default LoginPage;
