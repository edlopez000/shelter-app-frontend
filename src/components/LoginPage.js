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
import { useState } from 'react';
import { setState } from 'react';


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

  const [
    result, 
    setResult
  ] = useState("");

  const findUser = (userID) => {
    fetch().then(response => response.json()).then((user) => {
      if(user != null){
        this.setState({
          id: user.id,
          password: user.password,
        });
      }
    }).catch((error) => {
      setError
    });
  };
   //axios or fetch goes here
  // const onSubmit = (data) => console.log(data);
 
  React.useEffect(() => {
    setError("email", {
      types: {
        required: "Email is required.",
        email: "Must use valid email."
      }
    });
  }, [setError])

  return (
    <Box marginTop={33}>
      <Stack spacing={1}>
        <SvgIcon 
          component={DogHouse}
          inheritViewBox
          sx={{
            fontSize: 115,
            margin: 'auto'
          }}
        />
        <Typography textAlign={'center'} variant="overline" fontSize={19} fontWeight={'bold'}>
          Shelter Volunteer App
        </Typography>
        <form onSubmit={handleSubmit((data) => setResult(JSON.stringify(data)))}>
          <Stack spacing={1} margin={2}>
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
              fontSize={12}
              sx={{
                textAlign: 'center',
                color: 'darkblue'
              }}
            >
              FORGOT MY PASSWORD
            </Link>

            <Button 
              variant="contained" 
              type="submit" 
              sx={{ 
                backgroundColor: 'darkblue',
                fontWeight: 'bold'
                }}>
              Login
            </Button>
            <p>{result}</p>
          </Stack>
        </form>
      </Stack>
    </Box>
  );
}

export default LoginPage;
