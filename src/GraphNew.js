import React, { useState, useEffect, useRef } from "react";
import "./GraphNew.css";

const GraphNew = ({
  dates,
  showBars,
  setShowBars,
  currentIndex,
  setCurrentIndex,
  onRefreshComplete,
  onDoneComplete,
  listItemCount,
  setListItemCount,
  global,
  setGlobal,
  reset,
  changeCustom
}) => {
  const hasRefreshed = useRef(false); // Track if the component has refreshed
  const prevIndex = useRef(currentIndex);



  let listItems = [
    { message: "You date the first person", dateIndex: 0 },
    {
      message:
        "Then you dump them and note your compatibility is " + dates[0] + "%",
      dateIndex: 0,
    },
    {
      message:
        "You do the same for the 2nd person, noting them at " + dates[1] + "%",
      dateIndex: 1,
    },
    { message: "The 3rd date clocks in at " + dates[2] + "%", dateIndex: 1 },
    {
      message: "And lastly the 4th's compatibility is " + dates[3] + "%",
      dateIndex: 1,
    },
    {
      message:
        "This makes person " +
        (dates.indexOf(Math.max(...dates.slice(0, 4))) + 1) +
        " the most suitable date so far at " +
        Math.max(...dates.slice(0, 4)) +
        "%",
      dateIndex: 0,
    },
  ];
  for (let i = 5; i <= 10; i++) {
    if (dates[i - 1] < Math.max(...dates.slice(0, 4))) {
      listItems.push({
        message:
          "Person " +
          i +
          " is at " +
          dates[i - 1] +
          "%, lower than our threshold, so we reject them and move on.",
        dateIndex: 1,
      });
    } else {
      listItems.push({
        message:
          "Cool! Person " +
          i +
          " is more compatible at " +
          dates[i - 1] +
          "%, so we ask them on a second date!",
        dateIndex: 1,
      });
      if (Math.max(...dates.slice(i, 10)) > dates[i-1]) {
        listItems.push({
          message:
            "However, there was a better option with date number " +
            (dates.indexOf(Math.max(...dates.slice(i ))) + 1) +
            " being at " +
            Math.max(...dates.slice(i )) +
            "%. \n It's fine though, you lost only " +
            (Math.max(...dates.slice(i )) - dates[i-1]) +
            "%, not too bad!",
          dateIndex: 0,
        });
      }
      break;
    }

    if (i === 10) {
      listItems.push({
        message:
          "Well, guess it didn't work out in this simulation, math is not always perfect. :/ Let's try again to see if we can find success!",
        dateIndex: 0,
      });
    }
  }
  // Use useEffect to update showBars after currentIndex changes

  useEffect(() => {
    setListItemCount(listItems.length);

    if (!hasRefreshed.current) {
      onRefreshComplete(); // Call refresh complete only once
      hasRefreshed.current = true; // Mark as refreshed
      if (currentIndex > prevIndex.current) {
        if (currentIndex + 1 === listItems.length && Math.max(...dates.slice(showBars.bars, 10)) > dates[showBars.bars+1]) {
          setShowBars((prevState) =>({ ...prevState,bars:10, skipped:true})
  )} else {
          setShowBars((prevState) => ({
            ...prevState,
            bars: prevState.bars + listItems[currentIndex].dateIndex,
          }));
        }
      } else if (currentIndex < prevIndex.current ) {
        if (showBars.skipped===true) {
          setShowBars((prevState) =>({ ...prevState,bars: currentIndex-2, skipped:false}))
        } else {
          setShowBars((prevState) =>({ ...prevState,bars: prevState.bars - listItems[currentIndex + 1].dateIndex})

          );
        }
      }
      
    }

    prevIndex.current = currentIndex;
  }, [currentIndex]);

  const nextItem = () => {
    hasRefreshed.current = false; // Reset refresh flag
    setCurrentIndex((prevIndex) => (prevIndex + 1) % listItems.length);
    onDoneComplete(); // Call done complete
  };

  const prevItem = () => {
    hasRefreshed.current = false; // Reset refresh flag
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + listItems.length) % listItems.length
    );
    onDoneComplete(); // Call done complete
  };

  // Handle swipe functionality (for mobile/touch)
  const handleSwipe = (event) => {
    const touchStart = event.touches[0].clientX;
    let touchEnd;

    const swipeMove = (e) => {
      touchEnd = e.touches[0].clientX;
    };

    const swipeEnd = () => {
      if (touchStart - touchEnd > 50) {
        nextItem();
      } else if (touchEnd - touchStart > 50) {
        prevItem();
      }
      document.removeEventListener("touchmove", swipeMove);
      document.removeEventListener("touchend", swipeEnd);
    };

    document.addEventListener("touchmove", swipeMove);
    document.addEventListener("touchend", swipeEnd);
  };

  return (
    <div>
{global === "init"&&(
  <div>
  <div
    className="carousel"
    style={{ display: "flex", width: "100%" }}
    onTouchStart={handleSwipe} // For swipe event
  >
    <div
      className="carousel-controls"
      style={{
        display: "flex",
        width: "100%",
        justifyContent: "space-between",
      }}
    >
      <button
        disabled={currentIndex === 0}
        className="arrow"
        onClick={prevItem}
      >
        &lt;
      </button>
      <p>{listItems[currentIndex].message}</p>
      <button
        disabled={listItemCount - 1 === currentIndex}
        className="arrow"
        onClick={nextItem}
      >
        &gt;
      </button>
    </div>
  </div>
  { currentIndex+1===listItems.length && ( <div>
    <button onClick={reset}>
      <p>Let's try again!</p>
    </button>
    <button onClick={changeCustom}>
      <p>Got it? <br></br>Let's do a custom simulation!</p>
    </button>
  </div>)}

  </div>
)}
</div>
  );
};

export default GraphNew;
