//import logo from "./logo.svg";
import Navbar from './Components/Navbar/Navbar';
import './App.css';
import Home from './Components/Home/Home';
import { useState } from 'react';

function App() {
  const [lenguage, setLenguage] = useState('es');
  return (
    <>
      <div className="containerApp">
        <div className="containerApp-Left">
          <Navbar lenguage={lenguage} />
        </div>

        <div className="containerApp-Right">
          <Home lenguage={lenguage} setLenguage={setLenguage} />
        </div>
      </div>
    </>
  );
}

export default App;
