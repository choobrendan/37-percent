import logo from "./logo.svg";
import "./App.css";
import Graph from "./Graph";
import Home from "./Home";
import Love from "./Love";
import However from "./However";
import { useState,useEffect } from "react";

function App() {
  const [global, setGlobal] = useState("1");
  const [type, setType] = useState("");
  useEffect(() => {

console.log(type)

  }, [type]);

  return (
    <div className="App" > 
      <h1>The 37%</h1>
      {type==="" && (
      <Home global={global} setGlobal={setGlobal} type={type} setType={setType}></Home>
      )}
      {type.includes("love") && (
        <Love global={global} setGlobal={setGlobal} type={type} setType={setType}></Love>
      )}
      {global==="2"&&(
      <However global={global} setGlobal={setGlobal} type={type} setType={setType} ></However>
      )}
<Graph 
              global={global}
              setGlobal={setGlobal}
            ></Graph>
    </div>
  );
}

export default App;
