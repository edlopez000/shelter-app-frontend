import React from 'react';
import { Container, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { ReactComponent as DogHouse } from '../assets/dog-house.svg';

const AboutDev = () => {
  return (
    <Container align='center' flexGrow='1' sx={{align: 'center'}}>
      <Box
        component={DogHouse}
        sx={{ 
          flexGrow: 1,
          align: 'center',
          height: '30vh' }}
      />
      <Typography fontSize={17} align='center' fontWeight={'bold'}>
       Designed, built, and cried over by:
       <p>Deborah-Lynn Peach Paulison</p>
       <p>Stephanie Peets</p>
       <p>Edward Lopez-Ramos</p>
       <p>Henry Zhang</p>

       <p>Project Manager and Moral Guide:</p>
       <p>Saad Sharieff</p>
      </Typography>
    </Container>
  );
};

export default AboutDev;