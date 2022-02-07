import { Typography } from "@mui/material";
import React from "react";

const UserGreeting = () => {
    const userName = "Peach"

    return (
        <Typography 
        textAlign={'center'} 
        letterSpacing={.15}
        fontSize={19} 
        fontWeight={'bold'}>
          Hi { userName }!
        </Typography>

    );
}

export default UserGreeting;