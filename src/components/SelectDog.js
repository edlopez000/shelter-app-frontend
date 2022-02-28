import axios from "axios";
import AnimalButton from "./selectAnimal/AnimalButton";
import { Typography, List, Divider, Container, Modal, Box, Button } from "@mui/material";
import { React, useState, useEffect } from "react";


export function SelectDog() {
  
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
        textAlign={"left"}
        letterSpacing={0.15}
        fontSize={19}
        fontWeight={"bold"}
      >
        Select a dog:
      </Typography>

      <List sx={{ width: "100%", maxWidth: 600 }}>
        {dogsData.map((dog) => (
          <>
            <AnimalButton animalId={dog.id} type="dog" animalName={dog.name} />
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
          <Button onClick={handleClose}>I will check</Button>
        </Box>
      </Modal>
    </Container>
    
  );
}
