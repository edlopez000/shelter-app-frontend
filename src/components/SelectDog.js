<<<<<<< HEAD
//THIS IS '/dog' PAGE
import * as React from "react";
import AnimalButton from "./selectAnimal/AnimalButton";
import { Typography } from "@mui/material";
=======
import * as React from 'react';
import AnimalButton from './selectAnimal/AnimalButton';
import { Container, Typography } from '@mui/material';
>>>>>>> 74317566e481c1f354e859b0b5e913e5c554e285

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
