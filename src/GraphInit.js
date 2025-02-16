import React, { useState } from "react";
import "./GraphInit.css"
const GraphInit = () => {
  const [count, setCount] = useState(10); 
  const [trying, setTrying] = useState(Math.ceil(count*0.37)); 
  const minCount = 10;
  const maxCount = 30;

  const increaseCount = () => {
    if (count < maxCount) {
      setCount(count + 1);
      setTrying(Math.ceil(count*0.37));
    }
  };

  const decreaseCount = () => {
    if (count > minCount) {
      setCount(count - 1);
      setTrying(Math.ceil(count*0.37));
    }
  };

  return (
    <div>
    <div style={{ textAlign: "center", display:"flex", alignItems:"center"}}>
      <p>I want to try </p>

      <div style={{ marginLeft:"5px",marginRight:"5px",}}>
        <button style={{fontSize:"32px",  position:"relative", top:"12px"}}
          onClick={increaseCount}
          disabled={count >= maxCount}
        >
          ^
        </button>

        <p>{count}</p>
        <button style={{fontSize:"30px",  position:"relative", bottom:"16px"}}
          onClick={decreaseCount}
          disabled={count <= minCount}
        >
            ⌄
        </button>
      </div>
      <p>fruits</p>
    </div>
    <div>
        <p>That means we evaluate the first {trying} dates and then pick the next best date!</p>
    </div>
    </div>
  );
};

export default GraphInit;
