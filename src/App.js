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
     <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
    <div>
          
      <button style={{border:"0px"}} onClick={() =>{setGlobal("1");setType("")}}><h1>The 37%</h1></button>
      <a href="https://www.instagram.com/brendan_choo7">
            <i class="fa fa-instagram" style={{ fontSize: "36px",  }}></i></a>
          <a href="https://github.com/choobrendan/">
            <i class="fa fa-github" style={{ fontSize: "36px", marginLeft: '10px' }}></i></a>
        </div>
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
              setGlobal={setGlobal}type={type} 
            ></Graph>
    </div>
  );
}

export default App;
