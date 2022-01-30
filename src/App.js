// import logo from './logo.svg';
// import './App.css';
import LoginPage from './components/LoginPage.js';
import ButtonAppBar from './components/AppBar.js';


function App() {
  return (
    <div className="App">
      <header className="App-header">
      <ButtonAppBar />
        <p>
          <LoginPage />
        </p>
      </header>
    </div>
  );
}

export default App;
