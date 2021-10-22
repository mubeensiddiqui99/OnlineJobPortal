
import  AppBar  from './components/AppBar';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <AppBar />
        <p>Todos</p>
        <ul>
          <li>login</li>
          <li>portal</li>
          <li>resume</li>
          </ul>
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
