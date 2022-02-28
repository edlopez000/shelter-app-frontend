import React from 'react';
import { Container, Typography } from '@mui/material';
import { Box } from '@mui/system';

const NotFoundPage = () => {
  return (
    <Container>
      <Box
        component="img"
        src="https://i.imgur.com/aU6INii.jpeg"
        sx={{ height: '50vh' }}
      />
      <Typography>
        Nobody's purrrrfect! This page could not be found!
      </Typography>
    </Container>
  );
};

export default NotFoundPage;
