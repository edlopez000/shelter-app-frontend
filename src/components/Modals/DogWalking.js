import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from '@mui/material';
import { React, useState } from 'react';

export default function DogWalking({ open, handleClose }) {
  const [selections, setSelections] = useState({
    pottied: '',
    kennelingIn: '',
    kennelingOut: '',
    kennelingThrough: '',
    shyness: '',
    leash: '',
    mouthing: '',
    jumping: '',
    energyLevel: '',
  });

  const handleSelections = (event) => {
    console.log(event);
    setSelections({
      ...selections,
      [event.target.name]: event.target.value,
    });
  };

  const handleChange = (event) => {
    setSelections(event.target.value || '');
  };

  console.log(selections);

  const handleSubmit = () => {
    handleClose();
    // Insert axios post here
    // resetSelections();
  };

  // const resetSelections = () => {
  //   Object.keys(selections).forEach((item) => (selections[item] = false));
  // };

  const {
    pottied,
    kennelingIn,
    kennelingOut,
    kennelingThrough,
    shyness,
    leash,
    mouthing,
    jumping,
    energyLevel,
  } = selections;

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>
        <Typography letterSpacing={0.15} fontSize={19} fontWeight={'bold'}>
          Dog Walking Options
        </Typography>
      </DialogTitle>
      <DialogContent>
        <DialogContentText>
          <FormControl variant="filled" fullWidth sx={{ m: 1, minWidth: 120 }}>
            <InputLabel id="demo-simple-select-filled-label">
              Pottied
            </InputLabel>
            <Select
              labelId="demo-simple-select-filled-label"
              id="demo-simple-select-filled"
              value={pottied}
              onChange={handleChange}
            >
              <MenuItem value="none">
                <em>None</em>
              </MenuItem>
              <MenuItem value={'peed'}>Peed</MenuItem>
              <MenuItem value={'pooped'}>Pooped</MenuItem>
              <MenuItem value={'housetrained'}>Seems House Trained</MenuItem>
            </Select>
          </FormControl>
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={handleSubmit}>Submit</Button>
      </DialogActions>
    </Dialog>
  );
}
