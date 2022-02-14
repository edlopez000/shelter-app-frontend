import * as React from "react";
import { DogsData } from "../placeholderData/DogsArray";
import AnimalButton from "./selectAnimal/AnimalButton";
import { Typography } from "@mui/material";

export default function SelectDog() {
  return (
    <>
      <Typography
        textAlign={"left"}
        letterSpacing={0.15}
        fontSize={19}
        fontWeight={"bold"}
      >
        Select a Dog:
      </Typography>
      {DogsData.map((dog) => (
        <AnimalButton key={dog} type="dog" animalName={dog} />
      ))}
      ;
    </>
  );
}
