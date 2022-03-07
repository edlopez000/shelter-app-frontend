import React from 'react';
import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import AnimalIcon from '../../assets/AnimalIcon';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import { useNavigate } from 'react-router-dom';

const AnimalButton = (props) => {
  const navigate = useNavigate();
  const activities = `/${props.type}Activities`;

  return (
    <ListItem
      disablePadding
      key={props.id}
      onClick={() => navigate(activities)}
    >
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
