import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import IconButton from "@mui/material/IconButton";
import Divider from "@mui/material/Divider";
import UserGreeting from "./UserGreeting";
import AnimalIcon from "./AnimalIcon";
import CleaningServicesIcon from '@mui/icons-material/CleaningServices';

export default function QuickLinks() {
  this.name = "Home";
  return (
    <div>
      <List sx={{ width: "100%", maxWidth: 600, bgcolor: "background.paper" }}>
        <UserGreeting />
        <ListItem alignItems="flex-start">
          <ListItem
            secondaryAction={
              <IconButton edge="end" aria-label="delete">
                <ArrowForwardIosSharpIcon />
              </IconButton>
            }
          >
            <ListItemIcon>
              <AnimalIcon name="dog" />
            </ListItemIcon>

            <ListItemText
              primary="Dogs"
              secondary="Handle dog needs!"
              sx={{ ml: 2 }}
            />
          </ListItem>
        </ListItem>

        <Divider component="li" sx={{ ml: 13, maxWidth: 425 }} />
        <ListItem alignItems="flex-start">
          <ListItem
            secondaryAction={
              <IconButton edge="end" aria-label="delete">
                <ArrowForwardIosSharpIcon />
              </IconButton>
            }
          >
            <ListItemIcon>
              <AnimalIcon name="cat" />
            </ListItemIcon>

            <ListItemText
              primary="Cats"
              secondary="Handle cat needs!"
              sx={{ ml: 2 }}
            />
          </ListItem>
        </ListItem>

        <Divider component="li" sx={{ ml: 13, maxWidth: 425 }} />
        <ListItem alignItems="flex-start">
          <ListItem
            secondaryAction={
              <IconButton edge="end" aria-label="delete">
                <ArrowForwardIosSharpIcon />
              </IconButton>
            }
          >
            <ListItemIcon>
              <CleaningServicesIcon 
              htmlColor="black"
              fontSize="large"
              name="cleaning services" />
            </ListItemIcon>

            <ListItemText
              primary="Housekeeping / Laundry"
              secondary="Handle housekeeping needs!"
              sx={{ ml: 2 }}
            />
          </ListItem>
        </ListItem>

        <Divider component="li" sx={{ ml: 13, maxWidth: 425 }} />
        
      </List>
    </div>
  );
}
