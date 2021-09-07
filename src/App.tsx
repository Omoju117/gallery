import { VFC } from 'react';
import logo from './logo.svg';
import './App.css';


const App:VFC = () => (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          source cloning successfully!
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Initialize Repository
        </a>
      </header>
    </div>
)

export default App;
