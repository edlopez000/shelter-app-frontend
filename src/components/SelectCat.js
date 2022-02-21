import * as React from "react";
import AnimalButton from "./selectAnimal/AnimalButton";
import { Typography, List, Divider, Container } from "@mui/material";

const catsData = ["Tater", "Bubba", "Emily Dickenson"];

export default function SelectCat() {
  return (
    < Container>
      <Typography
        textAlign={"left"}
        letterSpacing={0.15}
        fontSize={19}
        fontWeight={"bold"}
      >
        Select a cat:
      </Typography>

      <List sx={{ width: "100%", maxWidth: 600 }}>
        {catsData.map((cat) => (
          <>
            <AnimalButton key={cat} type="cat" animalName={cat} />
            <Divider />
          </>
        ))}
      </List>
    </Container>
  );
}
