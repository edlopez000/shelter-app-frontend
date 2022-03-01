import { React } from "react";
import HealthModal from "./HealthModal";
import GetCats from "./selectAnimal/GetCats";

import { Typography, Container } from "@mui/material";

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
