import axios from "axios";
import AnimalButton from "./selectAnimal/AnimalButton";
import { Typography, List, Divider, Container, Modal} from "@mui/material";
import { React, useState, useEffect } from "react";

export default function SelectDog() {
  const [dogs, setDogs] = useState([]);
  const dogData = dogs.filter((dogs) => dogs.species === "dog");
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
      {/* <Modal
        open={true}
       // onClose={handleClose}
        aria-labelledby="Contagion Alert"
        aria-describedby="Check the health status of the animal to determine handling protocols.  Follow best practices as laid out in the volunteer handbook.  Have you checked the health status of this animal?">
      <button>Yes</button>
      </Modal> */}
    </Container>
  );
}
