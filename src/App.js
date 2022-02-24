import './App.css';
import LoginPage from './components/LoginPage.js';
import ButtonAppBar from './components/AppBar.js';
import { Container } from '@mui/material';
import QuickLinks from './components/QuickLinks';
import { Routes, Route } from 'react-router-dom';
import SelectDog from './components/SelectDog';
import Modal from './components/Modal';

function App() {
  return (
    <Container maxWidth="sm">
      <ButtonAppBar />
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="home" element={<QuickLinks />} />
        <Route path="dog" element={<SelectDog />} />
      </Routes>
    </Container>
  );
}

export default function App() {
  const [show, setShow] = useState(false)

  return (
    <div className='App'>
      <button onClick={()=> setShow(true)} >Show Modal?</button>
{   /* <Modal onClose={() => setShow=(false)}show={show}/> */}
      <Modal title="Contagion Alert" onClose={() => setShow=(false)} show={show}>
       <p>Check the health status of the animal to determine handling protocols.  Follow best practices as laid out in the volunteer handbook.  Have you checked the health status of this animal?</p>
      </Modal>
    </div>
  )
}