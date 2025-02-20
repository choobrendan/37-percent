import React, { useEffect, useRef } from "react";

const GraphPictures = ({ currentIndex, rand, dates, showBars }) => {
  console.log(showBars);
  console.log(Math.max(...dates.slice(0, 4)));
  console.log(Math.max(...dates.slice(5)));
      // Calculate the highest value in the first "trying" elements (if visible)
      const tryingValues = dates.slice(0, 4);
      const maxTryingValue = Math.max(...tryingValues);
  
      // Calculate the highest value in the remaining elements (if visible)
      const nonTryingValues = dates.slice(4);
      const maxNonTryingValue = nonTryingValues.find(
        (value) => value > maxTryingValue
      );
  
      // Find the first value in nonTryingValues that is higher than maxTryingValue (if it exists)
      let firstBestNonTryingValue = null;
      if (maxNonTryingValue != null) {
        let x = Math.max(
          ...nonTryingValues.slice(
            nonTryingValues.indexOf(maxNonTryingValue) + 1,
            nonTryingValues.length
          )
        );
  
        x > maxNonTryingValue
          ? (firstBestNonTryingValue = x)
          : (firstBestNonTryingValue = null);
      }
  
  return (
    <div style={{ height: "300px",alignContent:"center"}}>
      <div>
      {currentIndex === 0 && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "relative",
          }}
        >
          <img
            style={{ width: "150px", height: "150px" }}
            src={require(`./images/main/main-happy.png`)}
            alt="Main Happy"
          />

          <div
            style={{
              position: "relative",
              width: "150px",
              height: "150px",
              perspective: "400px",
            }}
          >
            {rand.current.map((i, index) => (
              <img
                key={i}
                style={{
                  position: "absolute",
                  width: "150px",
                  height: "150px",
                  transform: `translateX(${index * 120}px) translateY(${
                    index * -100
                  }px) translateZ(-${index * 200}px)`,
                  transformOrigin: "bottom center",
                  transformStyle: "preserve-3d",
                  opacity: `${1 - index * 0.2}`,
                }}
                src={require(`./images/guy/guy-${rand.current[index]}.png`)}
                alt={`Guy ${index}`}
              />
            ))}
          </div>
        </div>
      )}

      {currentIndex === 1 && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "relative",
          }}
        >
          <div>
            <img
              style={{ width: "70px", height: "70px" }}
              src={require(`./images/guy/guy-${rand.current[0]}-throw.png`)}
              alt={`Guy ${1} Throwing`}
            />
          </div>
          <img
            style={{ width: "150px", height: "150px", marginRight: "-20px" }}
            src={require(`./images/main/main-throwing.png`)}
            alt="Main Throwing"
          />
          <div
            style={{
              position: "relative",
              width: "150px",
              height: "150px",
              perspective: "400px", // Adjust for stronger/weaker depth
            }}
          >
            {rand.current.slice(1, 10).map((i, index) => (
              <img
                key={i}
                style={{
                  position: "absolute",
                  width: "150px",
                  height: "150px",
                  transform: `translateX(${index * 120}px) translateY(${
                    index * -100
                  }px) translateZ(-${index * 200}px)`,
                  transformOrigin: "bottom center",
                  transformStyle: "preserve-3d",
                  opacity: `${1 - index * 0.2}`,
                }}
                src={require(`./images/guy/guy-${rand.current[index + 1]}.png`)}
                alt={`Guy ${index}`}
              />
            ))}
          </div>
        </div>
      )}
      {currentIndex === 2 && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "relative",
          }}
        >
          <img
            style={{ width: "150px", height: "150px" }}
            src={require(`./images/main/main-happy.png`)}
            alt="Main Happy"
          />

          <div
            style={{
              position: "relative",
              width: "150px",
              height: "150px",
              perspective: "400px", // Adjust for stronger/weaker depth
            }}
          >
            {rand.current.slice(2, 10).map((i, index) => (
              <img
                key={i}
                style={{
                  position: "absolute",
                  width: "150px",
                  height: "150px",
                  transform: `translateX(${index * 120}px) translateY(${
                    index * -100
                  }px) translateZ(-${index * 200}px)`,
                  transformOrigin: "bottom center",
                  transformStyle: "preserve-3d",
                  opacity: `${1 - index * 0.2}`,
                }}
                src={require(`./images/guy/guy-${rand.current[index + 1]}.png`)}
                alt={`Guy ${index}`}
              />
            ))}
          </div>
        </div>
      )}
      {currentIndex === 3 && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "relative",
          }}
        >
          <div>
            <img
              style={{ width: "70px", height: "70px" }}
              src={require(`./images/guy/guy-${rand.current[1]}-throw.png`)}
              alt={`Guy ${1} Throwing`}
            />
          </div>
          <img
            style={{ width: "150px", height: "150px", marginRight: "-20px" }}
            src={require(`./images/main/main-throwing.png`)}
            alt="Main Throwing"
          />
          <div
            style={{
              position: "relative",
              width: "150px",
              height: "150px",
              perspective: "400px", // Adjust for stronger/weaker depth
            }}
          >
            {rand.current.slice(3, 10).map((i, index) => (
              <img
                key={i}
                style={{
                  position: "absolute",
                  width: "150px",
                  height: "150px",
                  transform: `translateX(${index * 120}px) translateY(${
                    index * -100
                  }px) translateZ(-${index * 200}px)`,
                  transformOrigin: "bottom center",
                  transformStyle: "preserve-3d",
                  opacity: `${1 - index * 0.2}`,
                }}
                src={require(`./images/guy/guy-${rand.current[index + 2]}.png`)}
                alt={`Guy ${index}`}
              />
            ))}
          </div>
        </div>
      )}
      {currentIndex === 4 && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "relative",
          }}
        >
          <div>
            <img
              style={{ width: "70px", height: "70px" }}
              src={require(`./images/guy/guy-${rand.current[2]}-throw.png`)}
              alt={`Guy ${1} Throwing`}
            />
          </div>
          <img
            style={{ width: "150px", height: "150px", marginRight: "-20px" }}
            src={require(`./images/main/main-throwing.png`)}
            alt="Main Throwing"
          />
          <div
            style={{
              position: "relative",
              width: "150px",
              height: "150px",
              perspective: "400px", // Adjust for stronger/weaker depth
            }}
          >
            {rand.current.slice(4, 10).map((i, index) => (
              <img
                key={i}
                style={{
                  position: "absolute",
                  width: "150px",
                  height: "150px",
                  transform: `translateX(${index * 120}px) translateY(${
                    index * -100
                  }px) translateZ(-${index * 200}px)`,
                  transformOrigin: "bottom center",
                  transformStyle: "preserve-3d",
                  opacity: `${1 - index * 0.2}`,
                }}
                src={require(`./images/guy/guy-${rand.current[index + 3]}.png`)}
                alt={`Guy ${index}`}
              />
            ))}
          </div>
        </div>
      )}
      {currentIndex === 5 && (
        <div>
          <img
            src={require(`./images/guy/guy-${
              rand.current[dates.indexOf(Math.max(...dates.slice(0, 4)))]
            }.png`)}
          ></img>
        </div>
      )}
      {(currentIndex > 5 &&
        currentIndex !== 12 &&
        !(
          (currentIndex >=
            dates.indexOf(
              Math.max(
                dates
                  .slice(5)
                  .find((value) => value > Math.max(...dates.slice(0, 4)))
              )
            ) +
              2 &&
            dates
              .slice(4)
              .find((value) => value > Math.max(...dates.slice(0, 4))) !==
              null &&
            dates
              .slice(4)
              .find((value) => value > Math.max(...dates.slice(0, 4))) !==
              undefined) ||
          showBars.skipped === true
        )) && !((showBars.skipped === true &&
          firstBestNonTryingValue !== undefined &&
          global === "init"))&& (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "relative",
          }}
        >
          <div>
            <img
              style={{ width: "70px", height: "70px" }}
              src={require(`./images/guy/guy-${
                rand.current[currentIndex - 3]
              }-throw.png`)}
              alt={`Guy ${1} Throwing`}
            />
          </div>
          <img
            style={{ width: "150px", height: "150px", marginRight: "-20px" }}
            src={require(`./images/main/main-throwing.png`)}
            alt="Main Throwing"
          />
          <div
            style={{
              position: "relative",
              width: "150px",
              height: "150px",
              perspective: "400px", // Adjust for stronger/weaker depth
            }}
          >
            {rand.current.slice(currentIndex - 2).map((i, index) => (
              <img
                key={i}
                style={{
                  position: "absolute",
                  width: "150px",
                  height: "150px",
                  transform: `translateX(${index * 120}px) translateY(${
                    index * -100
                  }px) translateZ(-${index * 200}px)`,
                  transformOrigin: "bottom center",
                  transformStyle: "preserve-3d",
                  opacity: `${1 - index * 0.2}`,
                }}
                src={require(`./images/guy/guy-${
                  rand.current[index + currentIndex - 2]
                }.png`)}
                alt={`Guy ${index}`}
              />
            ))}
          </div>
        </div>
      )}
      
      
      {Math.max(...dates.slice(0, 4)) > Math.max(...dates.slice(5)) &&
        currentIndex === 12 && (
          <div>
            <img
              // style={{ width: "150px", height: "150px" }}
              src={require(`./images/main/main-sad.png`)}
            />
          </div>
        )}
      
      
      
      {((currentIndex >=
                dates.indexOf(Math.max(maxNonTryingValue)) + 2 &&
                maxNonTryingValue !== null &&
                maxNonTryingValue !== undefined) ||
                showBars.skipped === true) && !(showBars.skipped === true &&
                  firstBestNonTryingValue !== undefined )&& (

          <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "relative",
          }}
        >
          <img
            style={{ width: "150px", height: "150px" }}
            src={require(`./images/main/main-happy.png`)}
            alt="Main Happy"
          />
          <img
            style={{ width: "50px", height: "50px" }}
            src={require("./images/others/heart.webp")}
            alt="Heart"
          />
          <div
            style={{
              position: "relative",
              width: "150px",
              height: "150px",
              perspective: "400px",
            }}
          >
          <img
            style={{ width: "150px", height: "150px" }}
            src={require(`./images/guy/guy-${rand.current[currentIndex-2]}.png`)}
            alt="Main Happy"
          />
          </div>
        </div>
      )}



      {(showBars.skipped === true &&
                firstBestNonTryingValue !== undefined &&
                global === "init")&& (
        <div>
          <p>AAAAAreruthAAA</p>
        </div>
      )}
      </div>
    </div>
  );
};

export default GraphPictures;
