import axios from "axios";
import AnimalButton from "./AnimalButton";
import { List, Divider, Container } from "@mui/material";
import { React, useState, useEffect } from "react";

export default function GetCats() {
  const [catsData, setCatsData] = useState([]);

  useEffect(() => {
    async function getCats() {
      const res = await axios.get("/animals/species/cat");
      setCatsData(res.data);
    }

    getCats();
  }, []);

  return (
    <Container>
      <List sx={{ width: "100%", maxWidth: 600 }}>
        {catsData.map((cat) => (
          <>
            <AnimalButton index={cat.id} type="cat" animalName={cat.name} />
            <Divider />
          </>
        ))}
      </List>
    </Container>
  );
}
