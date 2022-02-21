import React from "react";
import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import AnimalIcon from "../../assets/AnimalIcon";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";

const AnimalButton = (props) => {
  return (
    <ListItem disablePadding className="animal">
      <ListItemButton>
        <ListItemIcon>
          <AnimalIcon name={props.type} />
        </ListItemIcon>
        <ListItemText primary={props.animalName} />
        <ArrowForwardIosSharpIcon fontSize="small" />
      </ListItemButton>
    </ListItem>
  );
};

export default AnimalButton;
