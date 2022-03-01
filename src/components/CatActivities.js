import * as React from "react";
import {
  Container,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";

export default function CatActivities() {
  return (
    <Container>
      <Typography
        textAlign={"left"}
        letterSpacing={0.15}
        fontSize={19}
        fontWeight={"bold"}
      >
        Cat Activities:
      </Typography>

      <List sx={{ width: "100%", maxWidth: 600 }}>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemText primary="Cat Care" />
            <ArrowForwardIosSharpIcon fontSize="small" />
          </ListItemButton>
        </ListItem>

        <Divider />

        <ListItem disablePadding>
          <ListItemButton>
            <ListItemText primary="Enrichment" />
            <ArrowForwardIosSharpIcon fontSize="small" />
          </ListItemButton>
        </ListItem>

        <Divider />

        <ListItem disablePadding>
          <ListItemButton>
            <ListItemText primary="Fear Free Training" />
            <ArrowForwardIosSharpIcon fontSize="small" />
          </ListItemButton>
        </ListItem>

        <Divider />
      </List>
    </Container>
  );
}
