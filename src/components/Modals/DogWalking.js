import {
    Box, 
    Button,
    Checkbox,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    FormControlLabel,
    FormGroup,
    Grid,
    Paper,
    Typography,
  } from '@mui/material';
  import { React, useState } from 'react';
  import DropDownMenu from '../DropDownMenu';
  import { styled } from '@mui/material/styles';
import axios from 'axios';
  
  export default function DogWalking({ open, handleClose }) {
    const [selections, setSelections] = useState({
        cwalkPeed: false,
		cwalkPooped: false,
		chouseTrained: false
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
      
      axios.post("/session")
      resetSelections();
    };
  
    const resetSelections = () => {
      Object.keys(selections).forEach((item) => (selections[item] = false));
    };
  
    const { cwalkPeed,
    cwalkPooped,
    chouseTrained } = selections;

    const labels = {
        kennelOut: "Kennel Out",
        kennelThrough: "Kennel Thru",
        kennelIn: "Kennel In",
        shyness: "Shyness",
        leash: "Leash",
        mouthing: "Mouthing",
        jumping: "Jumping"
    }

    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'light' ? 'white' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
      }));
  
    return (
      <Dialog open={open} onClose={handleClose} sx={{flexGrow:4, minBlockSize:500, alignItems:"center"}}>
        <DialogTitle>
          <Typography letterSpacing={0.15} fontSize={19} fontWeight={'bold'} align={'center'}>
            Walk Behavior
          </Typography>
        </DialogTitle>

        <DialogContent align={'center'} sx={{flexGrow:2}}>
         
        <FormGroup>
            <Box sx={{flexGrow:2}}>
        <Grid container spacing={3}>
          
            <Grid item xs>
            <Item>
              <DropDownMenu label={labels.kennelOut}/>
            </Item>
            </Grid>

            <Grid item xs={4}>
            <Item>
              <DropDownMenu label={labels.kennelThrough}/>
            </Item>
            </Grid>

            <Grid item xs>
            <Item>
              <DropDownMenu label={labels.kennelIn}/>
            </Item>
            </Grid>

            <Grid item xs>
            <Item>
              <DropDownMenu label={labels.shyness}/>
            </Item>
             </Grid>

            <Grid item xs>
            <Item>
              <DropDownMenu label={labels.leash}/>
            </Item>
            </Grid>
             
            <Grid item xs>
            <Item>
              <DropDownMenu label={labels.mouthing}/>
            </Item>
            </Grid>
             
            <Grid item xs>
            <Item>
              <DropDownMenu label={labels.jumping}/>
            </Item>
            </Grid>
            
              </Grid>
              </Box>
              </FormGroup>


        <Box sx={{align:'center', marginLeft:30, marginTop:7}}>
              <FormGroup>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={cwalkPeed}
                    onChange={handleSelections}
                    name="cwalkPeed"
                  />
                }
                label={'Tinkle'}
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={cwalkPooped}
                    onChange={handleSelections}
                    name="cwalkPooped"
                  />
                }
                label={'Potty'}
              />

            <FormControlLabel
                control={
                  <Checkbox
                    checked={chouseTrained}
                    onChange={handleSelections}
                    name="chouseTrained"
                  />
                }
                label={'House Trained'}
              />
            </FormGroup>
            </Box>
        
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSubmit}>Submit</Button>
        </DialogActions>
      </Dialog>
    );
  }
  