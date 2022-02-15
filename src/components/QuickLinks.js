//THIS IS '/home' PAGE
import * as React from "react";
import {
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import UserGreeting from "./quicklinks/UserGreeting";
import AnimalIcon from "../assets/AnimalIcon";
import CleaningServicesIcon from "@mui/icons-material/CleaningServices";

import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";

export default function QuickLinks() {
  return (
 <>
        <UserGreeting />

        <Typography
          textAlign={"left"}
          letterSpacing={0.15}
          fontSize={19}
          fontWeight={"bold"}
        >
          Quick Links
        </Typography>

        <List sx={{ width: "100%", maxWidth: 600 }}>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <AnimalIcon name="dog" />
              </ListItemIcon>
              <ListItemText primary="Dogs" secondary="Handle dog needs!" />
              <ArrowForwardIosSharpIcon fontSize="small" />
            </ListItemButton>
          </ListItem>

          <Divider />

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <AnimalIcon name="cat" />
              </ListItemIcon>
              <ListItemText primary="Cats" secondary="Handle cat needs!" />
              <ArrowForwardIosSharpIcon fontSize="small" />
            </ListItemButton>
          </ListItem>

          <Divider />

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <CleaningServicesIcon
                  htmlColor="black"
                  fontSize="large"
                  name="cleaning services"
                />
              </ListItemIcon>
              <ListItemText
                primary="Housekeeping / Laundry"
                secondary="Handle housekeeping needs!"
              />
              <ArrowForwardIosSharpIcon fontSize="small" />
            </ListItemButton>
          </ListItem>
       
        <Divider /> 
        
        </List>
    </>
  );
}
