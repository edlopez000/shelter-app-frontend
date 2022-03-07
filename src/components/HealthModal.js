import { Typography, Container, Modal, Box, Button } from "@mui/material";
import { React, useState } from "react";

export default function HealthModal() {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 300,
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 4,
  };
  const [open, setOpen] = useState(true);
  const handleClose = () => setOpen(false);

  return (
    <Container>
      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          <Typography
            variant="h4"
            color={"red"}
            fontWeight="bold"
            textAlign={"center"}
          >
            Contagion Alert!
            <p></p>
          </Typography>
          <Typography>
            Check the health status of the animal to determine handling
            protocols. If the animal is contagious, follow best practices as
            laid out in the volunteer handbook. Have you checked the health
            status of this animal?
          </Typography>
          <Container sx={{ textAlign: "right", mt: 2 }}>
            <Button onClick={handleClose} variant={"contained"}>
              Yes
            </Button>
          </Container>
        </Box>
      </Modal>
    </Container>
  );
}
