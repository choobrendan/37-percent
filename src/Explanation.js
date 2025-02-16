import React, { useState } from "react";

const Explanation = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const listItems = [
    "Test out the first 37% options",
    "Reject these options and note the best so far",
    "Continue choosing until an option is better than the first 37%!"
  ];

  // Next item in the carousel
  const nextItem = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % listItems.length);
  };

  // Previous item in the carousel
  const prevItem = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + listItems.length) % listItems.length
    );
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
    <div
      className="carousel" style={{display:"flex",width:"100%"}}
      onTouchStart={handleSwipe} // For swipe event
    >
        <div className="carousel-controls" style={{display:"flex",width:"100%", justifyContent:"space-between"}}>
          <button onClick={prevItem}>←</button>
          <p>{listItems[currentIndex]}</p>
          <button onClick={nextItem}>→</button>
        </div>

    </div>
  );
};

export default Explanation;
