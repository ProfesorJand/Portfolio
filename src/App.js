//import logo from "./logo.svg";
import Navbar from "./Components/Navbar/Navbar";
import "./App.css";
import Home from "./Components/Home/Home";

function App() {
  return (
    <>
      <div className="containerApp">
        <div className="containerApp-Left">
          <Navbar />
        </div>

        <div className="containerApp-Right">
          <Home />
        </div>
      </div>
    </>
  );
}

export default App;
