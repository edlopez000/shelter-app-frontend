import {
  Button,
  Checkbox,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  FormControlLabel,
  FormGroup,
  Typography,
} from '@mui/material';
import { React, useState } from 'react';

export default function CatCare({ open, handleClose }) {
  const [selections, setSelections] = useState({
    cleanKennel: false,
    changeLitter: false,
    changeFoodWater: false,
  });

  const handleSelections = (event) => {
    setSelections({
      ...selections,
      [event.target.name]: event.target.checked,
    });
  };

  const handleSubmit = () => {
    handleClose();
    // Insert axios post here
    resetSelections();
  };

  const resetSelections = () => {
    Object.keys(selections).forEach((item) => (selections[item] = false));
  };

  const { cleanKennel, changeLitter, changeFoodWater } = selections;

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>
        <Typography letterSpacing={0.15} fontSize={19} fontWeight={'bold'}>
          Cat Care Options
        </Typography>
      </DialogTitle>
      <DialogContent>
        <DialogContentText>
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox
                  checked={cleanKennel}
                  onChange={handleSelections}
                  name="cleanKennel"
                />
              }
              label={'Clean Kennel'}
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={changeLitter}
                  onChange={handleSelections}
                  name="changeLitter"
                />
              }
              label={'Change Litter'}
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={changeFoodWater}
                  onChange={handleSelections}
                  name="changeFoodWater"
                />
              }
              label={'Change Food/Water'}
            />
          </FormGroup>
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={handleSubmit}>Submit</Button>
      </DialogActions>
    </Dialog>
  );
}
