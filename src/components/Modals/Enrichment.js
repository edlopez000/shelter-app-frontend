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
import { React } from 'react';

export default function EnrichmentModal({ open, handleClose }) {
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
            <FormControlLabel control={<Checkbox />} label={'Treats'} />
            <FormControlLabel control={<Checkbox />} label={'Toys'} />
            <FormControlLabel control={<Checkbox />} label={'Playing'} />
            <FormControlLabel control={<Checkbox />} label={'Cuddle Time'} />
          </FormGroup>
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={handleClose}>Submit</Button>
      </DialogActions>
    </Dialog>
  );
}
