import axios from "axios";
import { Button } from "@mui/material";
import { Typography, List, Divider, Container,
FormGroup, FormControlLabel, Checkbox,
  } from "@mui/material";
import { React, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { blue } from "@mui/material/colors";



export default function Housekeeping() {
    const navigate = useNavigate();
    const [checked, setChecked] = useState([]);
    const [submitError, setSubmitError] = useState('');


    const taskList = [
      "Clean Groom Room", 
      "Empty Wash Kongs", 
      "Organize Volunteer Area",
      "Laundry",
      "Groundskeeping"
    ]

    // const submitValue = [
    //     "hCleanGroomRoom",
    //     "hEmptyWashKongs",
    //     hOrganizeVolArea,
    //     hLaundry,
    //     hGroundskeeping
    // ]
  
    const submitTasks = async (event) => {
        let res = axios.post("/session", {
          volunteerId: 1,
          fPlaying: true,
          hGroundskeeping: true
        })

        setChecked(event.target.checked)
        res
          .then((res) => {
            if (res.status === 200) {
            console.log(res);
            navigate('home');
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
            <FormControlLabel control={<Checkbox onChange={checked} value={true} sx={{color:blue}}/>} 
            label={taskList[0]} sx={{ margin: 1}} />
            <Divider />
            <FormControlLabel control={<Checkbox />} label={taskList[1]} sx={{ margin: 1}}/>
            <Divider />
            <FormControlLabel control={<Checkbox />} label={taskList[2]} sx={{ margin: 1}} />
            <Divider />
            <FormControlLabel control={<Checkbox />} label={taskList[3]} sx={{ margin: 1}}/>
            <Divider />
            <FormControlLabel control={<Checkbox />} label={taskList[4]} sx={{ margin: 1}}/>


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
