import axios from "axios";
import AnimalButton from "./selectAnimal/AnimalButton";
import { Typography, List, Divider, Container, Modal, Box, Button } from "@mui/material";
import { React, useState, useEffect } from "react";


export default function SelectDog() {
  const [dogs, setDogs] = useState([]);
  const dogData = dogs.filter((dogs) => dogs.species === "dog");
  
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



  const listDogs = () => {
    axios
      .get("/animals")
      .then((res) => {
        console.log(res.data);
        setDogs(res.data);
      })
      .catch((error) => {
        console.log("Something went wrong", error);
      });
  };

  useEffect(() => {
    listDogs();
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
        {dogData.map((dog) => (
          <>
            <AnimalButton key={dog.id} type="dog" animalName={dog.name} />
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
