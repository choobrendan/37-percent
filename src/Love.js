import React, { useEffect, useRef } from "react";
import However from "./However";
import "./Love.css";
const Love = ({ global, setGlobal, type, setType }) => {



  return (
    <div>
      <p>Interesting! Who are you looking for?</p>
      <div style={{display:"flex", alignItems:"center",justifyContent:"center"}}>
        <div style={{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}} >
          <img src={require(`.//images/guy/guy-${ Math.floor(Math.random() * 10)}.png`)} alt="haha "></img>
          <button 
            onClick={() => {
              setType("guy");
              setGlobal("2");
            }}
            type="button"
          >
            A guy
          </button>
        </div>
        <div style={{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}} >
          <img src={require(".//images/girl/girl.png")} alt="haha "></img>
          <button 
            onClick={() => {
              setType("girl");
              setGlobal("2");
            }}
            type="button"
          >
            A girl
          </button>
        </div>
        <div style={{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}} >
          <img src={require(".//images/both/both.png")} alt="haha "></img>
          <button 
            onClick={() => {
              setType("both");
              setGlobal("2");
            }}
            type="button"
          >
            Both 👀
          </button>
        </div>
      </div>
      <div>
        <p style={{ fontSize: "12px" }} s>
          Disclaimer: All hypothetical guys and/or girls are 18 and above if you
          are older than 18 and otherwise if you are younger than 18 (or
          whatever age your country's age of consent is)
        </p>
      </div>
    </div>
  );
};

export default Love;
