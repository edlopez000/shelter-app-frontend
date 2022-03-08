import React from 'react';
import { Container, Typography } from '@mui/material';
import { Box } from '@mui/system';

const NotFoundPage = () => {
  return (
    <Container align='center' flexGrow='1' sx={{align: 'center', flexGrow: 1}}>
      <Box
        component="img"
        src="https://i.imgur.com/aU6INii.jpeg"
        sx={{ 
          flexGrow: 1,
          align: 'center',
          height: '50vh' }}
      />
      <Typography align='center'>
        Nobody's purrrrfect! This page could not be found!
      </Typography>
    </Container>
  );
};

export default NotFoundPage;
