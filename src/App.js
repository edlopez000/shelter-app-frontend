import './App.css';
import LoginPage from './components/LoginPage.js';
import ButtonAppBar from './components/AppBar.js';
import { Container } from '@mui/material';
import QuickLinks from './components/QuickLinks';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Container maxWidth="sm">
      <ButtonAppBar />
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="home" element={<QuickLinks />} />
      </Routes>
    </Container>
  );
}

export default App;
