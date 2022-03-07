import { Container, Typography } from "@mui/material";
import React from "react";
import HealthModal from "./HealthModal";
import GetDogs from "./selectAnimal/GetDogs";

export function SelectDog() {
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
      <GetDogs />
      <HealthModal />
    </Container>
  );
}
