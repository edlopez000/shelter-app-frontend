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
import { ReactComponent as DogHouse } from '../assets/dog-house.svg';

function LoginPage() {
  const [email, setEmail, password, setPassword] = useState('');

  const handleEmail = (event) => {
    setEmail(event.target.value);
  };

  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

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
        <TextField
          required
          label="E-mail"
          variant="filled"
          value={email}
          onChange={handleEmail}
        />
        <TextField
          required
          label="Password"
          type="password"
          variant="filled"
          value={password}
          onChange={handlePassword}
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
    </Box>
  );
}

export default LoginPage;
