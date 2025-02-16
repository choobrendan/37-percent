import React, { useState } from "react";
import Explanation from "./Explanation"
const However = () => {
  const [currentDiv, setCurrentDiv] = useState(0);
  const showNextDiv = () => {
    setCurrentDiv(currentDiv + 1);
  };
  return (
    <div>
      {currentDiv === 0 && (
        <div className="div1">
          <p>
            Cool! Let's say there are 10 candidates for you to go on a date
            with.
          </p>
          <button onClick={showNextDiv}>A bit excessive but sure, go on</button>
          <button>
            I know where we're heading, can we just skip to the fun part?{" "}
          </button>
        </div>
      )}

      {currentDiv === 1 && (
        <div className="div2">
          <p>We want to try and pick the best choice for us!</p>
          <button onClick={showNextDiv}>Understandable</button>
        </div>
      )}

      {currentDiv === 2 && (
        <div className="div3">
          <p>
            However, once you went on a date with someone and moved on to the
            next person, you can't go back, even if the last person seemed
            better!
          </p>
          <button onClick={showNextDiv}>That sucks :/</button>
        </div>
      )}
      {currentDiv === 3 && (
        <div className="div4">
          <p>So, what is our strategy to get the optimum date?</p>
          <button onClick={showNextDiv}>Let's find out!</button>
        </div>
      )}
      {currentDiv === 4 && (
        <div className="div5">
          <p>
            For <a href="https://youtu.be/d6iQrh2TK98?t=808">math reasons</a>{" "}
            I'm too lazy to explain, we should:{" "}
          </p>
          <Explanation></Explanation>
          <button onClick={showNextDiv}>Does it always work?</button>
        </div>
      )}
      {currentDiv >= 5 && (
        <div>
          <p>Well, let's look at this visualisation to prove our point!</p>
          <button onClick={showNextDiv}>Yay!</button>
        </div>
      )}
    </div>
  );
};

export default However;
