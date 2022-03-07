import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


export default function DropDownMenu(props) {
  const [open, setOpen] = React.useState(false);
  const [behavior, setBehavior] = React.useState('');

  const handleChange = (event) => {
    setBehavior(String(event.target.value) || 'NO');
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason !== 'backdropClick') {
      setOpen(false);
    }
  };

  return (
    <div>
      <Button variant='filled' color={'darkblue'} onClick={handleClickOpen}>{props.label}</Button>
      <Dialog disableEscapeKeyDown open={open} onClose={handleClose}>
        <DialogTitle>How Did I Behave?</DialogTitle>
        <DialogContent>
          <Box component="form" sx={{ display: 'flex', flexWrap: 'wrap' }}>

            <FormControl sx={{ m: 1, minWidth: 240 }}>
              <InputLabel sx={{flexShrink:3}} id="kennelOutBehavior">{props.label}</InputLabel>
              <Select
                labelId="kennelOut"
                id="kennelOut"
                value={behavior}
                onChange={handleChange}
                variant='filled'
                input={<OutlinedInput label={props.label} />}
              >
                <MenuItem sx={{color:'black', fontWeight:'bold'}} value={'NO'}>
                  <em>No Issues</em>
                </MenuItem>
                <MenuItem sx={{color:'blue', fontWeight:'bold'}} value={'MILD'}>Mild</MenuItem>
                <MenuItem sx={{color:'green', fontWeight:'bold'}} value={'MODERATE'}>Moderate</MenuItem>
                <MenuItem sx={{color:'red', fontWeight:'bold'}} value={'SIGNIFICANT'}>SEVERE</MenuItem>
              </Select>
            </FormControl>


          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Ok</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}