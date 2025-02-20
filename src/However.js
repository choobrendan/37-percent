import React, { useState } from "react";
import Explanation from "./Explanation";
const However = ({ global, setGlobal, type, setType }) => {
  const randomNumber = (max, min, except) => {
    let num = Math.floor(Math.random() * (max - min + 1)) + min;
    return num === except ? randomNumber(max, min, except) : num;
  };
  const rand1 = randomNumber(0, 10, -1);
  const rand2 = randomNumber(0, 10, rand1);
  const [currentDiv, setCurrentDiv] = useState(0);
  const dateList=Array.from({ length: 10 }, (_, index) => index)
  .sort(() => Math.random() - 0.5)
  console.log(dateList)
  const showNextDiv = () => {
    setCurrentDiv(currentDiv + 1);
  };
  const showSkip = () => {
    setCurrentDiv(-1);
  };
  return (
    <div style={{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center", width:"750px",height:"350px"}}>
      {currentDiv === 0 && (
        <div className="div1"  style={{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"space-between", width:"750px",height:"350px",}}>
          <p>
            Cool! Let's say there are 10 candidates for you to go on a date
            with.
          </p>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "10px",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {Array.from({ length: 10 }, (_, index) => index)
              .sort(() => Math.random() - 0.5)
              .map((index) => (
                <div
                  key={index}
                  style={{ flex: "0 0 18%", textAlign: "center" }}
                >
                  <img
                    style={{ height: "100px", width: "100px" }}
                    src={require(`./images/guy/guy-${index}.png`)}
                    alt={`guy-${index}`}
                  />
                </div>
              ))}
          </div>
          <div style={{ height:"75px", display:"flex"}}>
            <button style={{width:"300px", height:"100%"}} onClick={showNextDiv}>
              A bit excessive but sure, go on
            </button>
            <button onClick={showSkip} style={{width:"300px",  height:"100%"}}>
              I know where we're heading, can we just skip to the fun part?{" "}
            </button>
          </div>
        </div>
      )}

      {currentDiv === 1 && (
        <div className="div2" style={{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"space-between", width:"750px",height:"350px"}}>
          <p>We want to try and pick the best choice for us!</p>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img src={require(`./images/main/main-happy.png`)} />
            <img
              style={{ width: "50px", height: "50px" }}
              src={require("./images/others/heart.webp")}
            />
            <img src={require(`./images/both/both.png`)} />
          </div>
          <button onClick={showNextDiv}>Understandable</button>
        </div>
      )}

      {currentDiv === 2 && (
        <div className="div3" style={{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"space-between", width:"750px", height:"350px"}} >
          <p>
            However, once you went on a date with someone and moved on to the
            next person, you can't go back, even if the last person seemed
            better!
          </p>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              width:"100%"
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "flex-end",
                marginRight: "50px",
              }}
            >
              <img
                style={{ width: "100px", height: "100px" }}
                src={require(`./images/main/main-concerned.png`)}
              />
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                 
                }}
              >
                <p style={{fontSize:"16px"}}>53% compatibility</p>
                <img
                  style={{ width: "100px", height: "100px" }}
                  src={require(`./images/guy/guy-${rand1}.png`)}
                />
              </div>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "flex-end",
                marginRight: "50px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                }}
              >
                <img
                  style={{ width: "60px", height: "60px", marginBottom:"60px" }}
                  src={require(`./images/guy/guy-${rand1}-throw.png`)}
                />
              </div>
              <img
                style={{ width: "100px", height: "100px" }}
                src={require(`./images/main/main-throwing.png`)}
              />
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "flex-end",
                position: "relative",
                
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  // position: "absolute"
                }}
              >
                <img
                  style={{
                    width: "60px",
                    height: "60px",
                    display: "flex",
                    position: "relative",
                    bottom: "75px",
                    left:"10px"
                  }}
                  src={require(`./images/guy/guy-${rand1}.png`)}
                />
              </div>
              <div>
                <img
                  style={{
                    width: "90px",
                    height: "90px",
                    display: "flex",
                    position: "absolute",
                    top: "-20px",
                    left:"-2px"
                  }}
                  src={require(`./images/others/think.png`)}
                ></img>
              </div>
              <img
                style={{ width: "100px", height: "100px", marginRight:"-15px" }}
                src={require(`./images/main/main-sad.png`)}
              />
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <p  style={{fontSize:"16px"}}> 20% compatibility</p>
                <img
                  style={{ width: "100px", height: "100px" }}
                  src={require(`./images/guy/guy-${rand2}.png`)}
                />
              </div>
            </div>
          </div>
          <button onClick={showNextDiv}>That sucks :/</button>
        </div>
      )}
      {currentDiv === 3 && (
        <div className="div4" style={{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"space-between", width:"750px", height:"350px"}} >
          <p>So, what is our strategy to get the optimum date?</p>
          <img
                // style={{ width: "150px", height: "150px" }}
                src={require(`./images/main/main-concerned.png`)}
              />
          <button onClick={showNextDiv}>Let's find out!</button>
        </div>
      )}
      {currentDiv === 4 && (
        <div className="div5" style={{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"space-between", width:"750px", height:"350px"}} >
          <p>
            For <a href="https://youtu.be/d6iQrh2TK98?t=808">math reasons</a>{" "}
            I'm too lazy to explain, we should:{" "}
          </p>
          <Explanation dateList={dateList}></Explanation>
          <button onClick={showNextDiv}>Does it always work?</button>
        </div>
      )}
      {currentDiv >= 5 && (
        <div className="div5" style={{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"space-between", width:"750px", height:"350px"}}>
          <p>Well, let's look at this visualisation to prove our point!</p>
          <img
            style={{}}
            src={require(`./images/main/main-happy.png`)}
            alt="Main Happy"
          />
          <button style={{width:"100px"}}onClick={() => setGlobal("init")}>Yay!</button>
        </div>
      )}
      {currentDiv === -1 && (
        <div className="div5" style={{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"space-between", width:"750px", height:"350px"}}>
          <p>
            Cool! You've known about this, let's skip to the customisations!
          </p>
          <img
            src={require(`./images/main/main-happy.png`)}
            alt="Main Happy"
          />
          <button onClick={() => setGlobal("CustomInit")}>Yay!</button>
        </div>
      )}
    </div>
  );
};

export default However;
