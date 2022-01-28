import React from 'react';
import ReactDOM from 'react-dom';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';




class LoginPage extends React.Component{
    render(){
      return(
        <div className='Frame'>
          <div className='Button'>
            <Button 
            onClick={()=> console.log("The Rural Juror")}>
              Login
            </Button>
          </div>
        </div>
      )
    };
}

  export default LoginPage;