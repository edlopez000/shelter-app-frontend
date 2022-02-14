import React from "react";
import Divider from "@mui/material/Divider";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import AnimalIcon from "../../assets/AnimalIcon";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";



const AnimalButton = (props) => {
  return (
    <>
     
      <Box sx={{ width: "100%", maxWidth: 360 }}>
        <List>
          <ListItem disablePadding className="animal">
            <ListItemButton>
              <ListItemIcon>
                <AnimalIcon name={props.type} />
              </ListItemIcon>
              <ListItemText primary={props.animalName} />
              <ArrowForwardIosSharpIcon fontSize="small" />
            </ListItemButton>
          </ListItem>
          <Divider />
     </List>
      </Box>
    </>
  );
};

export default AnimalButton;
