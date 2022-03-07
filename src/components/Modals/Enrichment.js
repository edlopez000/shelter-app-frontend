import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Typography,
  FormGroup,
  Checkbox,
  FormControlLabel,
} from '@mui/material';
import { React, useState } from 'react';

export default function EnrichmentModal({ open, handleClose }) {
  const [selections, setSelections] = useState({
    treats: false,
    toys: false,
    playing: false,
    cuddleTime: false,
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

  const { treats, toys, playing, cuddleTime } = selections;

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>
        <Typography letterSpacing={0.15} fontSize={19} fontWeight={'bold'}>
          Enrichment Options
        </Typography>
      </DialogTitle>
      <DialogContent>
        <DialogContentText>
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox
                  checked={treats}
                  onChange={handleSelections}
                  name="treats"
                />
              }
              label={'Treats'}
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={toys}
                  onChange={handleSelections}
                  name="toys"
                />
              }
              label={'Toys'}
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={playing}
                  onChange={handleSelections}
                  name="playing"
                />
              }
              label={'Playing'}
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={cuddleTime}
                  onChange={handleSelections}
                  name="cuddleTime"
                />
              }
              label={'Cuddle Time'}
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
