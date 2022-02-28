import axios from "axios";
import AnimalButton from "./selectAnimal/AnimalButton";
import { Typography, List, Divider, Container } from "@mui/material";
import * as React from "react";
import HistoryTable from "./HistoryTable";

export function SelectDog() {
  const [dogsData, setDogsData] = React.useState([]);

  React.useEffect(() => {
    async function getDogs() {
      const res = await axios.get("/animals/species/dog");
      setDogsData(res.data);
    }

    getDogs();
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
        {dogsData.map((dog) => (
          <>
            <AnimalButton animalId={dog.id} type="dog" animalName={dog.name} />
            <Divider />
          </>
        ))}
      </List>
      <HistoryTable />
    </Container>
  );
}
