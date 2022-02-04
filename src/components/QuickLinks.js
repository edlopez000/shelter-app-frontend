import react from "react";
import { Grid } from "@mui/material";
function QuickLinks(props){
    console.log(props.magic)
    return (
        <Grid container spacing={2}>
        <Grid item xs={8}>
          <p>xs=8</p>
        </Grid>
        <Grid item xs={4}>
          <p>xs=4</p>
        </Grid>
        <Grid item xs={4}>
          <p>xs=4</p>
        </Grid>
        <Grid item xs={8}>
          <p>xs=8</p>
        </Grid>
      </Grid>
    )
}
export default QuickLinks;