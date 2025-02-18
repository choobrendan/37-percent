import React, { useState, useEffect } from "react";
import "./GraphInit.css"
const GraphInit = ({count, trying, setCount, setTrying}) => {
  const minCount = 10;
  const maxCount = 30;
  const increaseCount = () => {
    if (count < maxCount) {
      setCount(prevCount => prevCount + 1);
    }
  };
  
  const decreaseCount = () => {
    if (count > minCount) {
      setCount(prevCount => prevCount - 1);
    }
  };
  

  useEffect(() => {
    setTrying(Math.ceil(count * 0.37));
  }, [count]);  

  return (
    <div>
      <div style={{ display: "flex" }}>
    <div style={{ textAlign: "center", display:"flex", alignItems:"center"}}>
      <div style={{display:"flex"}}>
      <p>I want to try </p>
      </div>
      <div style={{ marginLeft:"5px",marginRight:"5px",}}>
        <button class="arrow" style={{fontSize:"32px",  position:"relative", top:"12px"}}
          onClick={increaseCount}
          disabled={count >= maxCount}
        >
          ^
        </button>

        <p>{count}</p>
        <button class="arrow" style={{fontSize:"30px",  position:"relative", bottom:"16px"}}
          onClick={decreaseCount}
          disabled={count <= minCount}
        >
            ⌄
        </button>
      </div>
      <p>fruits</p>
    </div>
    <div><button>Let's do it!</button></div>
    </div>
    <div>
        <p>That means we evaluate the first {trying} dates and then pick the next best date!</p>
    </div>
    </div>
  );
};

export default GraphInit;
