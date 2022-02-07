// import logo from './logo.svg';
import './App.css';
// import LoginPage from './components/LoginPage.js';
import QuickLinks from './components/QuickLinks.js';
import ButtonAppBar from './components/AppBar.js';
import { Container } from '@mui/material';
// import QuickLinks from './components/QuickList';

function App() {
  return (
    <Container maxWidth="sm">
      <ButtonAppBar />
      < QuickLinks />
    </Container>
  );
}

export default App;
