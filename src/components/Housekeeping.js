import axios from "axios";
import { Button } from "@mui/material";
import { Typography, List, Divider, Container,
FormGroup, FormControlLabel, Checkbox,
  } from "@mui/material";
import { React, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { blue } from "@mui/material/colors";



export default function Housekeeping(props) {
    const navigate = useNavigate();
   
    const [selections, setSelections] = useState({
      cleanGroomRoom: false,
      emptyWashKongs: false,
      organizeVolArea: false,
      laundry: false,
      groundsKeeping: false
    });
    const [volunteerId, setVolunteerId] = useState('');
    const [submitError, setSubmitError] = useState('');

    const { 
      cleanGroomRoom, 
      emptyWashKongs, 
      organizeVolArea,
      laundry,
      groundsKeeping
            } = selections;

    



    const taskList = [
      "Clean Groom Room", 
      "Empty Wash Kongs", 
      "Organize Volunteer Area",
      "Laundry",
      "Groundskeeping"
    ]
  
    const handleSelections = (event) => {
      setSelections({
        ...selections,
        [event.target.name]: event.target.checked,
      });
    };
  
    const submitTasks = async () => {
        let res = axios.post("/housekeeping", {
          volunteerId: volunteerId,
          cleanGroomRoom: selections.cleanGroomRoom,
          emptyWashKongs: selections.emptyWashKongs,
          organizeVolArea: selections.organizeVolArea,
          laundry: selections.laundry,
          groundsKeeping: selections.groundsKeeping
        });
        res
          .then((res) => {
            if (res.status === 200) {
            console.log(res);
            navigate('/home');
            }
          })
          .catch((error) => {
            console.log(error);
            if (error.response.status === 500) {
              setSubmitError('Something went wrong. Please try submitting again.');
            } else {
              setSubmitError(error.response.data.message);
            }
          });
      };

      //need authService and JWT 
      useEffect(() => {
        setVolunteerId('35a48823-f4bb-4398-9a0b-9c6b90d07173');
        }, []);

  return (
    <Container>
      <Typography
        textAlign={"center"}
        letterSpacing={0.15}
        fontSize={19}
        fontWeight={"bold"}
      >
        Select Completed Task(s):
      </Typography>

     
        <FormGroup   sx={{ width: "100%", maxWidth: 500, alignContent: "center", marginTop: 5}}>
            <FormControlLabel 
            control={<Checkbox 
              onChange={handleSelections} 
              checked={cleanGroomRoom} 
              name="cleanGroomRoom"
              sx={{color:blue}}/>} 
            label={taskList[0]} sx={{ margin: 1}} />
            <Divider />
            <FormControlLabel control={<Checkbox 
              onChange={handleSelections} 
              checked={emptyWashKongs} 
              name="emptyWashKongs"
              sx={{color:blue}}/>} label={taskList[1]} sx={{ margin: 1}}/>
            <Divider />
            <FormControlLabel control={<Checkbox 
              onChange={handleSelections} 
              checked={organizeVolArea} 
              name="organizeVolArea"
              sx={{color:blue}}/>} label={taskList[2]} sx={{ margin: 1}} />
            <Divider />
            <FormControlLabel control={<Checkbox 
              onChange={handleSelections} 
              checked={laundry} 
              name="laundry"
              sx={{color:blue}}/>} label={taskList[3]} sx={{ margin: 1}}/>
            <Divider />
            <FormControlLabel control={<Checkbox 
              onChange={handleSelections} 
              checked={groundsKeeping} 
              name="groundsKeeping"
              sx={{color:blue}} />} label={taskList[4]} sx={{ margin: 1}}/>


            <Button     
             onClick={submitTasks}
            variant= "contained"
            type="submit"
            sx={{
                backgroundColor: 'darkblue',
                fontWeight: 'bold',
                alignContent: 'center',
                marginTop: 3
              }}>Submit</Button>
    
        </FormGroup>

        <Typography sx={{ color: 'red', textAlign: 'center', margin: 3 }}>
              {submitError && `${submitError}`}
            </Typography>


      
    </Container>
  );
}
