import React from 'react';
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

function LoginPage() {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

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

            <Link
              href="#"
              underline="hover"
              sx={{
                textAlign: 'center',
              }}
            >
              Forgot My Password
            </Link>

            <Button variant="contained" type="submit">
              Login
            </Button>
          </Stack>
        </form>
      </Stack>
    </Box>
  );
}

export default LoginPage;
