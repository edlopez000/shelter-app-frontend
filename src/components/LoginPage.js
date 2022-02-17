import React, { useState } from 'react';
import {
  TextField,
  Stack,
  Button,
  Typography,
  Link,
  SvgIcon,
  Box,
} from '@mui/material';
import axios from 'axios';
import { ReactComponent as DogHouse } from '../assets/dog-house.svg';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

//* THEMING will have to be applied to all pages, current it is
//set to backgroundColor=darkblue, buttons and action links fontWeight bold
//or the equivalent; variant for the main titles are 'overline'
//* regardless if these are the final design, a global theme will
// have to be applied in the App.js to streamline and DRY

function LoginPage() {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm({
    criteriaMode: 'all',
  });

  const navigate = useNavigate();

  const [submitError, setSubmitError] = useState('');

  const onSubmit = (data) => {
    axios
      .post(
        '/api/auth/signin',
        {
          username: data.username,
          password: data.password,
        },
        { headers: { 'X-Requested-With': 'XMLHttpRequest' } } // this is bad practice and needs to handled in the backend
      )
      .then((res) => {
        setSubmitError('');
        if (res.status === 200) {
          navigate('home', { replace: true });
        }
      })
      .catch((error) => {
        if (error.response.status === 500) {
          setSubmitError('Something went wrong. Please try submitting again.');
        } else {
          setSubmitError(error.response.data.message);
        }
      });
  };

  //  error.response.status gives you the 401 HTTP status

  return (
    <Box marginTop={33}>
      <Stack spacing={1}>
        <SvgIcon
          component={DogHouse}
          inheritViewBox
          sx={{
            fontSize: 115,
            margin: 'auto',
          }}
        />
        <Typography
          textAlign={'center'}
          variant="overline"
          fontSize={19}
          fontWeight={'bold'}
        >
          Shelter Volunteer App
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Stack spacing={1} margin={2}>
            <TextField
              label="Username"
              variant="filled"
              {...register('username', { required: true })}
            />
            <Typography sx={{ color: 'red', textAlign: 'center' }}>
              {errors?.username && 'Username is required'}
            </Typography>
            <TextField
              label="Password"
              type="password"
              variant="filled"
              {...register('password', { required: true })}
            />
            <Typography sx={{ color: 'red', textAlign: 'center' }}>
              {errors?.password && 'Password is required'}
            </Typography>

            <Link
              href="#"
              underline="hover"
              fontSize={12}
              sx={{
                textAlign: 'center',
                color: 'darkblue',
              }}
            >
              FORGOT MY PASSWORD
            </Link>

            <Typography sx={{ color: 'red', textAlign: 'center' }}>
              {submitError && `${submitError}`}
            </Typography>

            <Button
              variant="contained"
              type="submit"
              sx={{
                backgroundColor: 'darkblue',
                fontWeight: 'bold',
              }}
            >
              Login
            </Button>
          </Stack>
        </form>
      </Stack>
    </Box>
  );
}

export default LoginPage;
