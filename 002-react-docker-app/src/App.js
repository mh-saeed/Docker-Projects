import logo from "./logo.svg";
import docker from "./img/docker.png";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div >
          <img src={logo} className="App-logo" alt="logo"  style={{margin:"0", padding:"0"}}/>
          <img src={docker} className="App-logo" alt="dockerImage"  style={{width:"350px", height:"350px"}}/>
          <h1>React With Docker</h1>
        </div>
      </header>
    </div>
  );
}

export default App;
