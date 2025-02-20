import React, { useState, useRef, useEffect } from "react";
import GraphInit from "./GraphInit";
import GraphVisuals from "./GraphVisuals";
import GraphNew from "./GraphNew.js";
import GraphStats from "./GraphStats.js";
import GraphPictures from "./GraphPictures.js";

const Graph = ({ global, setGlobal, type }) => {
  const [showBars, setShowBars] = useState({ bars: 0, skipped: false });
  const [count, setCount] = useState(10);
  const [trying, setTrying] = useState(Math.ceil(count * 0.37));
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isGraphNewReady, setIsGraphNewReady] = useState(false);
  const [listItemCount, setListItemCount] = useState(0);
  const [lowerLimit, setLowerLimit] = useState(0);
  const [upperLimit, setUpperLimit] = useState(100);
  const [simulationResults, setSimulationResults] = useState([]);
  const [isToggled, setIsToggled] = useState(false);
  const [times, setTimes] = useState(100);

  const getRandomDates = (count, lowerLimit, upperLimit) => {
    const uniqueNumbers = new Set();

    while (uniqueNumbers.size < count) {
      const randomNumber = Math.floor(Math.random() * (upperLimit - lowerLimit) + lowerLimit);
      uniqueNumbers.add(randomNumber);
    }

    return Array.from(uniqueNumbers);
  };
  useEffect(() => {
if (global==="1"){
  setCurrentIndex(0)
}
  }, [global, type]);
  const getSeq = (type) => {
    if (type !== "both") {
      return Array.from({ length: 10 }, (_, index) => index).sort(
        () => Math.random() - 0.5
      );
    } else {
      const allNumbers = Array.from({ length: 20 }, (_, i) => i);

      for (let i = allNumbers.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [allNumbers[i], allNumbers[j]] = [allNumbers[j], allNumbers[i]];
      }
      return allNumbers.slice(0, 10);
    }
  };

  // Initialize rand with useRef
  let rand = useRef(getSeq(type));
console.log(rand)
  // Update rand.current whenever type changes
  useEffect(() => {
    rand.current = getSeq(type);
    console.log(rand.current, "RAND updated");
  }, [type]);

  // Using useRef to store the dates array
  let dates = useRef(getRandomDates(count, lowerLimit, upperLimit));
  console.log(dates);

  const reset = () => {
    dates.current = getRandomDates(count, lowerLimit, upperLimit);
    setCurrentIndex(0);
    setShowBars({ bars: 0, skipped: false });
  };

  const changeCustom = () => {
    setGlobal("CustomInit");
    dates.current = getRandomDates(count, lowerLimit, upperLimit);
    setCurrentIndex(0);
    setShowBars({ bars: 0, skipped: false });
    setListItemCount(0);
  };

  const changeShow = () => {
    setGlobal("show");
    dates.current = getRandomDates(count, lowerLimit, upperLimit);
    setCurrentIndex(0);
    setShowBars({ bars: dates.current.length, skipped: false });
    setListItemCount(0);
  };

  const changeStats = () => {
    setGlobal("Stats");
    dates.current = getRandomDates(count, lowerLimit, upperLimit);
    setCurrentIndex(0);
    setShowBars({ bars: dates.current.length, skipped: false });
    setListItemCount(0);
  };

  const handleGraphNewRefreshComplete = () => {
    setIsGraphNewReady(true);
  };

  const handleGraphNewLoadComplete = () => {
    setIsGraphNewReady(false);
  };

  const runSimulations = () => {
    const results = [];

    for (let i = 0; i < times; i++) {
      const dates = getRandomDates(count, lowerLimit, upperLimit);
      const tryingValues = dates.slice(0, trying);
      const nonTryingValues = dates.slice(trying);

      const maxTrying = Math.max(...tryingValues);
      const bestNonTrying = Math.max(...nonTryingValues);

      results.push({
        maxTrying,
        bestNonTrying,
        improvement: bestNonTrying - maxTrying,
        success: bestNonTrying > maxTrying,
      });
    }
    console.log(results);
    setSimulationResults(results);
  };

  console.log(global);

  return (
    <div>
      {(global === "CustomInit" || global === "show" || global === "Stats") && (
        <GraphInit
          count={count}
          setCount={setCount}
          trying={trying}
          setTrying={setTrying}
          currentIndex={currentIndex}
          setCurrentIndex={setCurrentIndex}
          global={global}
          setGlobal={setGlobal}
          changeShow={changeShow}
          lowerLimit={lowerLimit}
          setLowerLimit={setLowerLimit}
          upperLimit={upperLimit}
          setUpperLimit={setUpperLimit}
          times={times}
          setTimes={setTimes}
          isToggled={isToggled}
          setIsToggled={setIsToggled}
          runSimulations={runSimulations}
          changeStats={changeStats}
          setIsGraphNewReady={setIsGraphNewReady}
        ></GraphInit>
      )}
      <div style={{ display: "flex", alignItems: "flex-end" }}>
        {isGraphNewReady && global !== "CustomInit" && global !== "Stats" && global!=="1" && global!=="2" && (
          <GraphVisuals
            count={count}
            trying={trying}
            dates={dates.current}
            showBars={showBars}
            setShowBars={setShowBars}
            currentIndex={currentIndex}
            listItemCount={listItemCount}
            setListItemCount={setListItemCount}
            global={global}
            setGlobal={setGlobal}
            lowerLimit={lowerLimit}
            setLowerLimit={setLowerLimit}
            upperLimit={upperLimit}
            setUpperLimit={setUpperLimit}
          />
        )}
        {isGraphNewReady && global === "init" && (
          <GraphPictures
            currentIndex={currentIndex}
            rand={rand}
            dates={dates.current}
            showBars={showBars}
            type={type}
          />
        )}
      </div>
      {global === "init" && (
        <GraphNew
          dates={dates.current}
          showBars={showBars}
          setShowBars={setShowBars}
          currentIndex={currentIndex}
          setCurrentIndex={setCurrentIndex}
          onRefreshComplete={handleGraphNewRefreshComplete}
          onDoneComplete={handleGraphNewLoadComplete}
          listItemCount={listItemCount}
          setListItemCount={setListItemCount}
          global={global}
          setGlobal={setGlobal}
          reset={reset}
          changeCustom={changeCustom}
          changeShow={changeShow}
        ></GraphNew>
      )}
      {global === "Stats" && (
        <GraphStats
          simulations={simulationResults}
          lowerLimit={lowerLimit}
          upperLimit={upperLimit}
        />
      )}
    </div>
  );
};

export default Graph;