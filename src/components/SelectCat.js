import { Container, Typography } from "@mui/material";
import React from "react";
import HealthModal from "./HealthModal";
import GetCats from "./selectAnimal/GetCats";

export default function SelectCat() {
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
      <GetCats />
      <HealthModal />
    </Container>
  );
}
