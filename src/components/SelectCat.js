import axios from "axios";
import AnimalButton from "./selectAnimal/AnimalButton";
import { Typography, List, Divider, Container, Modal, Box, Button } from "@mui/material";
import { React, useState, useEffect } from "react";

export default function SelectCat(props) {

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
  const [open, setOpen] = useState(true);
  const handleClose = () => setOpen(false);

  const [catsData, setCatsData] = useState([]);
  
  useEffect(() => {
    async function getCats() {
      const res = await axios.get('/animals/species/cat');
      setCatsData(res.data);
    }

    getCats();
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
        {catsData.map((cat) => (
          <>
            <AnimalButton key={cat.id} type="cat" animalName={cat.name} />
            <Divider />
          </>
        ))}
      </List>
      <Modal
        open={open}
        onClose={handleClose}>
          
        <Box sx={style}>
          <Typography variant="h3">
            Contagion Alert!
          </Typography>
          <Typography>
          Check the health status of the animal to determine handling protocols and follow best practices as laid out in the volunteer handbook.  
          </Typography>
          <Button onClick={handleClose}>Acknowledged</Button>
        </Box>
      </Modal>
    </Container>
  );
}
