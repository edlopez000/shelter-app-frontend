import axios from "axios";
import AnimalButton from "./AnimalButton";
import { List, Divider, Container } from "@mui/material";
import { React, useState, useEffect } from "react";

export default function GetDogs() {
  const [dogsData, setDogsData] = useState([]);

  useEffect(() => {
    async function getDogs() {
      const res = await axios.get("/animals/species/dog");
      setDogsData(res.data);
    }

    getDogs();
  }, []);

  return (
    <Container>
      <List sx={{ width: "100%", maxWidth: 600 }}>
        {dogsData.map((dog) => (
          <>
            <AnimalButton index={dog.id} type="dog" animalName={dog.name} />
            <Divider />
          </>
        ))}
      </List>
    </Container>
  );
}
