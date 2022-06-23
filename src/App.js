import logo from './logo.svg';
// import './App.css';
import Navbar from './Navbar';
import Home from './Home';

function App() {
  const series = 'the sopranos'
  return (
    <div className="App">
      <Navbar />
      <div className="content">
          <Home />
      </div>
    </div>
    // <h1>hello world
    //   </h1>
  );
}

export default App;







/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <h2>bullshit</h2>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */