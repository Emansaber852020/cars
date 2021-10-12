import logo from './logo.svg';
import './App.css';
 import C001 from './components/C001';
import part1 from './components/part1';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      
       <C001 />
     
        <img src={logo} className=" App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
