import React from "react";
import { Stack, SvgIcon } from "@mui/material";
import { ReactComponent as DogsCategory } from "../assets/border-collie.svg";
import UserGreeting from "./UserGreeting";

const QuickLinks = () => {
  return (
    <Stack>
      <UserGreeting />
       <SvgIcon 
          component={DogsCategory}       
          inheritViewBox
          sx={{
            fontSize: 115,
            margin: '0 0 0 0'
          }}
          />


      <p>Cats</p>
      <p>Housekeeping</p>
    </Stack>
  );
}

export default QuickLinks;
