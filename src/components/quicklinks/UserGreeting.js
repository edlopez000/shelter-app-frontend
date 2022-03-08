import { Typography } from '@mui/material';
import React, { useContext } from 'react';
import { UserContext } from '../UserContext';

const UserGreeting = () => {
  const { user } = useContext(UserContext);

  console.log(user);

  return (
    <Typography
      textAlign={'center'}
      letterSpacing={0.15}
      fontSize={19}
      fontWeight={'bold'}
    >
      Hi {user.firstName}!
    </Typography>
  );
};

export default UserGreeting;
