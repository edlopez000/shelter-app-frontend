// import logo from './logo.svg';
// import './App.css';
import LoginPage from './components/LoginPage.js';
import ButtonAppBar from './components/AppBar.js';
import { Container } from '@mui/material';

function App() {
  return (
    // <Container maxWidth='sm'>

    <div className="App">
      <header className="App-header">
      <ButtonAppBar />
        <p>
          <LoginPage />
        </p>
      </header>
    </div>
    // </Container>
  );
}

export default App;
