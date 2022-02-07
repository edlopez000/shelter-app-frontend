// import logo from './logo.svg';
import './App.css';
import LoginPage from './components/LoginPage.js';
import QuickLinks from './components/QuickLinks.js';
import ButtonAppBar from './components/AppBar.js';
import { Container } from '@mui/material';

function App() {
  return (
    <Container maxWidth="sm">
      <ButtonAppBar />
      < LoginPage />
    </Container>
  );
}

export default App;
