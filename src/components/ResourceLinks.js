import React from 'react';
import { Container, Typography, Link, Stack } from '@mui/material';
import { Box } from '@mui/system';


const ResourceLinks = () => {
  return (
    <Container>
        <Typography align="center">
        <h1>Resource Links for Sharing</h1>
      <Box
        component="img"
        src="https://i.imgur.com/mzVqW5J.jpg"
        sx={{ height: '50vh' }}
      />
      <Stack spacing={2}>
        <Link target={"_blank"} href="https://www.bellareedpbr.com/bringing-dog-home">Tips For Bringing Your Dog Home</Link>
        <Link target={"_blank"} href="https://www.aspca.org/pet-care/animal-poison-control">Animal Poison Control - (888) 426-4435</Link>
        <Link target={"_blank"} href="https://www.aspca.org/pet-care/animal-poison-control/toxic-and-non-toxic-plants">Printable Lists of Toxic Plants</Link>
        <Link target={"_blank"} href="https://www.aspca.org/pet-care/animal-poison-control/people-foods-avoid-feeding-your-pets">People Foods That Are Toxic to Your Pet</Link>
        <Link target={"_blank"} href="https://resources.bestfriends.org/pet-training/dog-training">Canine Training Resources</Link>
        <Link target={"_blank"} href="https://resources.bestfriends.org/pet-training-cats/all-cat-training-resources">Feline Training Resources</Link>
      </Stack>
      </Typography>
    </Container>
  );
};

export default ResourceLinks;