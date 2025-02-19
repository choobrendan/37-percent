import React, { useEffect, useRef } from "react";

const GraphPictures = ({ currentIndex, rand ,dates}) => {
  console.log(dates.indexOf(Math.max(...dates.slice(0,4))));
  rand.current.slice(1, 10).map((i, index) => console.log(i, "aaa", index));
  return (
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
                src={require(`./images/guy/guy-${rand.current[index + 2]}.png`)}
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
                src={require(`./images/guy/guy-${rand.current[index + 3]}.png`)}
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
              src={require(`./images/guy/guy-${rand.current[3]}-throw.png`)}
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
                src={require(`./images/guy/guy-${rand.current[index + 4]}.png`)}
                alt={`Guy ${index}`}
              />
            ))} 
          </div>
        </div>
      )}
      {currentIndex === 5 && (
              <div>
                <img src={require(`./images/guy/guy-${dates.indexOf(Math.max(...dates.slice(0,4)))+1}.png`)} ></img>
              </div>
            )}
    </div>
  );
};

export default GraphPictures;
