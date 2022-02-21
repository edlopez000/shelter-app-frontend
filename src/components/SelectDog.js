import * as React from "react";
import AnimalButton from "./selectAnimal/AnimalButton";
import { Typography, List, Divider, Container } from "@mui/material";

const dogsData = ["Jenna", "Kenneth", "Grizz", "DotCom"];

export default function SelectDog() {
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
            <AnimalButton key={dog} type="dog" animalName={dog} />
            <Divider />
          </>
        ))}
      </List>
    </Container>
  );
}
