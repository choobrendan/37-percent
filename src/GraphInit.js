import React, { useState, useEffect } from "react";
import "./GraphInit.css";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
const GraphInit = ({
  count,
  trying,
  setCount,
  setTrying,
  global,
  setGlobal,
  changeShow,
  lowerLimit,
  setLowerLimit,
  upperLimit,
  setUpperLimit,
  isToggled,
  setIsToggled,
  times,
  setTimes,
  runSimulations 
}) => {


  const [error, setError] = useState("");

  const handleLowerChange = (e) => {
    const value = Number(e.target.value);
    if (value < upperLimit) {
      setLowerLimit(value);
    }
  };

  // Function to handle the change for the upper limit
  const handleUpperChange = (e) => {
    const value = Number(e.target.value);
    if (value > lowerLimit) {
      setUpperLimit(value);
    }
  };
  const handleToggle = () => {
    setIsToggled((prevState) => !prevState);
  };
  const handleInputChange = (event) => {
    const value = event.target.value;

    // Allow empty input (deleting the whole number)
    if (value === "") {
      setTimes(null); // Reset the input value when empty
      setError(""); // Clear any errors
      return;
    }

    const numberValue = parseInt(value, 10);

    // Check if the value is a valid number and within the valid range
    if (!isNaN(numberValue) && numberValue >= 0 && numberValue <= 1000000) {
      setTimes(numberValue);
      setError(""); // Clear any errors
    } else {
      setError("Please enter a number between 10 and 1 million.");
    }
  };

  const minCount = 10;
  const maxCount = 30;
  const increaseCount = () => {
    if (count < maxCount) {
      setCount((prevCount) => prevCount + 1);
    }
  };

  const decreaseCount = () => {
    if (count > minCount) {
      setCount((prevCount) => prevCount - 1);
    }
  };

  useEffect(() => {
    setTrying(Math.ceil(count * 0.37));
  }, [count]);

  const columns = Math.ceil((Math.sqrt(count) * 3) / 4);

  const boxStyle = {
    display: "grid",
    gridTemplateColumns: `repeat(${columns}, 1fr)`,
    gridTemplateRows: `repeat(${Math.ceil(count / columns)}, 1fr)`,
    gap: "10px", // space between circles
    width: "150px", // width of the box
    height: "200px", // height of the box
    border: "2px solid #000",
    padding: "5px",
    alignItems: "center",
    justifyItems: "center",
  };

  const circleStyle = {
    width: "20px",
    height: "20px",
    borderRadius: "50%",
  };

  const circles = Array.from({ length: count }, (_, index) => {
    const isDifferentColor = index < trying; // Modify this condition based on how many circles should have the different color
    const circleColor = isDifferentColor ? "#e74c3c" : "#3498db"; // Use a different color for the first `n` circles

    return (
      <div
        key={index}
        style={{ ...circleStyle, backgroundColor: circleColor }}
      ></div>
    );
  });

  return (
    <div>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            maxWidth: "300px",
          }}
        >
          <div
            style={{
              textAlign: "center",
              display: "flex",
              alignItems: "center",
            }}
          >
            <div style={{ display: "flex" }}>
              <p>I want to try </p>
            </div>
            <div style={{ marginLeft: "5px", marginRight: "5px" }}>
              <button
                className="arrow"
                style={{ fontSize: "32px", position: "relative", top: "12px" }}
                onClick={increaseCount}
                disabled={count >= maxCount}
              >
                ^
              </button>

              <p>{count}</p>
              <button
                className="arrow"
                style={{
                  fontSize: "30px",
                  position: "relative",
                  bottom: "16px",
                }}
                onClick={decreaseCount}
                disabled={count <= minCount}
              >
                ⌄
              </button>
            </div>

            <p>dates</p>
          </div>
          <div>
            <p>
              That means we evaluate the first {trying} dates ({count}*0.37≈
              {trying}) and then pick the next best!
            </p>
          </div>
        </div>
        <div style={boxStyle}>{circles}</div>
      </div>
      <div
        style={{ display: "flex", alignItems: "center", paddingTop: "20px" }}
      >
        <p>I want to the range to be between</p>
        <label style={{ paddingLeft: "10px" }}>
          <input
            style={{
              fontFamily: "Study Case",
              fontSize: "24px",
              textAlign: "center",
              width: "50px",
              display: "inline-block",
              padding: "2px",
            }}
            type="number"
            value={lowerLimit}
            onChange={handleLowerChange}
            min="0"
            max={upperLimit - 1} // Ensure lower is always less than upper
          />
        </label>
        <p>% and</p>
        <label style={{ paddingLeft: "10px" }}>
          <input
            style={{
              fontFamily: "Study Case",
              fontSize: "24px",
              textAlign: "center",
              width: "50px",
              display: "inline-block",
              padding: "2px",
            }}
            type="number"
            value={upperLimit}
            onChange={handleUpperChange}
            min={lowerLimit + 1} // Ensure upper is always greater than lower
            max="100"
          />
        </label><p>%</p>
      </div>
      <div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: " space-between",
            minHeight: "60px",
            paddingTop: "20px",
          }}
        >
          <div>
            {isToggled ? (
              <p>I want to see one simulation with its results</p>
            ) : (
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <p>I want to simulate</p>{" "}
                <div style={{ padding: "10px" }}>
                  <input
                    type="text"
                    value={times}
                    onChange={handleInputChange}
                    style={{
                      fontFamily: "Study Case",
                      fontSize: "24px",
                      textAlign: "center",
                      width: "80px",
                      display: "inline-block",
                      padding: "2px",
                    }}
                  />
                </div>
                <p> times</p>
              </div>
            )}
          </div>
          <label>
            <FormControlLabel
              checked={isToggled}
              onChange={handleToggle}
              control={
                <Switch
                  defaultChecked
                  size="large"
                  sx={{
                    "& .MuiSwitch-thumb": {
                      color: "#cccccc",
                      backgroundColor: "#cccccc",
                    },
                    "& .MuiSwitch-track": {
                      color: "#cccccc",
                      backgroundColor: "#cccccc",
                    },
                  }}
                />
              }
            />
          </label>
        </div>
      </div>
      <div
        style={{ display: "flex", justifyContent: "center", padding: "20px" }}
      >
        <div>
        <button onClick={() => { 
  if (isToggled) {
    changeShow();
  }
  else{
  runSimulations();
  }
}}>Let's do it!</button>
        </div>
      </div>
    </div>
  );
};

export default GraphInit;
