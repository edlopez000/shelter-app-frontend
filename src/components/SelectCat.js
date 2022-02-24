// TODO: Figure out Keys Error

import axios from "axios";
import AnimalButton from "./selectAnimal/AnimalButton";
import { Typography, List, Divider, Container } from "@mui/material";
import { React, useState, useEffect } from "react";

export default function SelectCat(props) {
  const [cats, setCats] = useState([]);
  const catData = cats.filter((cats) => cats.species === "cat"); // TODO: Is this the right place for this logic?

  const listCats = () => {
    axios
      .get("/animals")
      .then((res) => {
        console.log(res.data);
        setCats(res.data);
      })
      .catch((error) => {
        console.log("Something went wrong", error);
      });
  };

  useEffect(() => {
    listCats();
  }, []);

  return (
    <Container>
      <Typography
        textAlign={"left"}
        letterSpacing={0.15}
        fontSize={19}
        fontWeight={"bold"}
      >
        Select a cat:
      </Typography>

      <List sx={{ width: "100%", maxWidth: 600 }}>
        {catData.map((cat) => (
          <>
            <AnimalButton key={cat.id} type="cat" animalName={cat.name} />
            <Divider />
          </>
        ))}
      </List>
    </Container>
  );
}
