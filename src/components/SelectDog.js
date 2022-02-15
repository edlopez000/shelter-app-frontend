import * as React from 'react';
import AnimalButton from './selectAnimal/AnimalButton';
import { Container, Typography } from '@mui/material';

const dogsData = ['Jenna', 'Kenneth', 'Grizz', 'DotCom'];

export default function SelectDog() {
  return (
    <Container>
      <Typography
        textAlign={'left'}
        letterSpacing={0.15}
        fontSize={19}
        fontWeight={'bold'}
      >
        Select a Dog:
      </Typography>
      {dogsData.map((dog) => (
        <AnimalButton key={dog} type="dog" animalName={dog} />
      ))}
    </Container>
  );
}
