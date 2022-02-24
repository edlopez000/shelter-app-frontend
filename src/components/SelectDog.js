import React, { useState, useEffect } from 'react';
import AnimalButton from './selectAnimal/AnimalButton';
import { Container, Typography } from '@mui/material';
import axios from 'axios';

// const dogsData = ['Jenna', 'Kenneth', 'Grizz', 'DotCom'];

export default function SelectDog() {
  const [dogsData, setDogsData] = useState([]);

  useEffect(() => {
    async function getDogs() {
      const res = await axios.get('/animals/species/dog');
      setDogsData(res.data);
    }

    getDogs();
  }, []);

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
        <AnimalButton key={dog.id} type="dog" animalName={dog.name} />
      ))}
    </Container>
  );
}
