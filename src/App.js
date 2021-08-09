
import logo from './logo.svg';
import './App.css';
import Axios from 'axios';

function App() {

  window.onload = function() {
    getPlanet();
  }

  const getPlanet = () =>{
    Axios.get("https://swapi.dev/api/planets/1/").then(
        (response)=>{
          
  });
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
