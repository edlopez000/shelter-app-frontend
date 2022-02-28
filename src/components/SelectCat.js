// TODO: Figure out Keys Error

import axios from 'axios';
import AnimalButton from './selectAnimal/AnimalButton';
import {
  Typography,
  List,
  Divider,
  Container,
  Modal,
  Box,
  Button,
} from '@mui/material';
import { React, useState, useEffect } from 'react';

export default function SelectCat(props) {
  const [cats, setCats] = useState([]);
  const catData = cats.filter((cats) => cats.species === 'cat'); // TODO: Is this the right place for this logic?

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 300,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
  };
  const [open, setOpen] = useState(true);
  const handleClose = () => setOpen(false);

  const listCats = () => {
    axios
      .get('/animals')
      .then((res) => {
        console.log(res.data);
        setCats(res.data);
      })
      .catch((error) => {
        console.log('Something went wrong', error);
      });
  };

  useEffect(() => {
    listCats();
  }, []);

  return (
    <Container>
      <Typography
        textAlign={'left'}
        letterSpacing={0.15}
        fontSize={19}
        fontWeight={'bold'}
      >
        Select a cat:
      </Typography>

      <List sx={{ width: '100%', maxWidth: 600 }}>
        {catData.map((cat) => (
          <>
            <AnimalButton key={cat.id} type="cat" animalName={cat.name} />
            <Divider />
          </>
        ))}
      </List>
      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          <Typography
            variant="h5"
            color={'red'}
            fontWeight="bold"
            textAlign={'center'}
          >
            Contagion Alert!
          </Typography>
          <Typography>
            Check the health status of the animal to determine handling
            protocols. If the animal is contagious, follow best practices as
            laid out in the volunteer handbook. Have you checked the health
            status of this animal?
          </Typography>
          <Container sx={{ textAlign: 'right', mt: 2 }}>
            <Button onClick={handleClose} variant={'contained'}>
              Yes
            </Button>
          </Container>
        </Box>
      </Modal>
    </Container>
  );
}
