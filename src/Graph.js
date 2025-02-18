import React, { useState, useRef, useEffect } from "react";
import GraphInit from "./GraphInit";
import GraphVisuals from "./GraphVisuals";
import GraphNew from "./GraphNew.js";

const Graph = () => {
  const [showBars, setShowBars] = useState(0);
  const [count, setCount] = useState(10);
  const [trying, setTrying] = useState(Math.ceil(count * 0.37));
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isGraphNewReady, setIsGraphNewReady] = useState(false);
  const [listItemCount, setListItemCount] = useState(0);
  // Initialize `dates` with useRef, so it won't get reset on re-renders.
  const dates = useRef(Array.from({ length: count }, () => Math.floor(Math.random() * 100)));
  const handleGraphNewRefreshComplete = () => {
    console.log("okok",showBars)
    setIsGraphNewReady(true);
  };
  const handleGraphNewLoadComplete = () => {
    console.log("okok",showBars)
    setIsGraphNewReady(false);
  };
  // // Optionally, update the value of `dates` if `count` changes.
  // useEffect(() => {
  //   dates.current = Array.from({ length: count }, () => Math.floor(Math.random() * 100));
  // }, [count]);

  return (
    <div>
      <GraphInit
        count={count}
        setCount={setCount}
        trying={trying}
        setTrying={setTrying}
        currentIndex={currentIndex}
        setCurrentIndex={setCurrentIndex}
      ></GraphInit>
      {isGraphNewReady && (
        <GraphVisuals
          count={count}
          trying={trying}
          dates={dates.current}
          showBars={showBars}
          setShowBars={setShowBars}
          listItemCount={listItemCount} setListItemCount={setListItemCount}
          
        />
      )}

      <GraphNew
        dates={dates.current} 
        showBars={showBars}
        setShowBars={setShowBars}
        currentIndex={currentIndex}
        setCurrentIndex={setCurrentIndex}
        onRefreshComplete={handleGraphNewRefreshComplete} 
        onDoneComplete={handleGraphNewLoadComplete} 
        listItemCount={listItemCount} setListItemCount={setListItemCount}
      ></GraphNew>
    </div>
  );
};

export default Graph;
