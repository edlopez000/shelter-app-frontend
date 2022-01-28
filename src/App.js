import logo from './logo.svg';
import './App.css';
import './components/LoginPage.js';
import LoginPage from './components/LoginPage.js';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          <LoginPage />
        </p>
      </header>
    </div>
  );
}

export default App;
