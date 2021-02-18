import logo from './logo.svg';
import './App.css';

const a = 32;
const flag = false;


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>

        <p style={{
          color: 'red',
          fontSize: 2+10
        }}>
          Hello World!
        </p>
        <p>{a}</p>
        <p>{24}</p>
        <p>{ flag ? 'Flag is true' : 'Flag is false'}</p>
        <p>{flag && 'Flag is true'}
        {null}
        {undefined}
        {false}
        {true}</p>
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
