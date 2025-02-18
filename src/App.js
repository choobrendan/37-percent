import logo from "./logo.svg";
import "./App.css";
import Graph from "./Graph";
import Home from "./Home";
import Love from "./Love";
import { useState } from "react";

function App() {
const [global,setGlobal]=useState("init")
  return (
    <div className="App">
      <h1>The 37%</h1>
      {/* <Home></Home> */}
      {/* <Love></Love> */}
            <Graph 
              global={global}
              setGlobal={setGlobal}
            ></Graph>
    </div>
  );
}

export default App;
