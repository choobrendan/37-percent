import React, { useState ,useEffect} from "react";

const Explanation = ({dateList,type}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const listItems = [
    "Test out the first 37% options. (10*37%≈4)",
    "Reject these options and note the best so far",
    "Continue choosing until an option is better than the first 37%! (we date person no.7)"
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
      className="carousel" style={{display:"flex",width:"100%",flexDirection:"column"}}
      onTouchStart={handleSwipe} // For swipe event
    >
      <div>
      {currentIndex===0&&( <div
  style={{
    display: "flex",
    flexWrap: "wrap",
    gap: "10px",
    alignItems: "center",
    justifyContent: "center",
  }}
>
  {dateList
    .map((index, i) => (
      
<div
  key={index}
  style={{
    flex: "0 0 18%",
    textAlign: "center",
    // Adjusting opacity based on `i` (you can enable it if needed)
    // opacity: i >= 4 ? 0.25 : 1,
    filter: i < 4 
      ? "invert(46%) sepia(15%) saturate(3224%) hue-rotate(323deg) brightness(88%) contrast(106%)"
      : "invert(50%) sepia(91%) saturate(434%) hue-rotate(165deg) brightness(89%) contrast(91%)",
  }}
>
        <img
          style={{ height: "100px", width: "100px" }}
          src={require(`./images/${type}/${type}-${index}.png`)}
          alt={`${type}-${index}`}
        />
      </div>
    ))}
</div>)}
{currentIndex===1&&( <div
  style={{
    display: "flex",
    flexWrap: "wrap",
    gap: "10px",
    alignItems: "center",
    justifyContent: "center",
  }}
>
  {dateList
    .map((index, i) => (
      <div
  key={index}
  style={{
    flex: "0 0 18%",
    textAlign: "center",
    // Adjusting opacity based on `i` (you can enable it if needed)
    opacity: i >= 4 || i===2 ? 1 : 0.2,
    filter: i < 4 
      ? "invert(46%) sepia(15%) saturate(3224%) hue-rotate(323deg) brightness(88%) contrast(106%)"
      : "invert(50%) sepia(91%) saturate(434%) hue-rotate(165deg) brightness(89%) contrast(91%)",
  }}
>
        <img
          style={{ height: "100px", width: "100px" }}
          src={require(`./images/${type}/${type}-${index}.png`)}
          alt={`${type}-${index}`}
        />
      </div>
    ))}
</div>)}
{currentIndex===2&&( <div
  style={{
    display: "flex",
    flexWrap: "wrap",
    gap: "10px",
    alignItems: "center",
    justifyContent: "center",
  }}
>
  {dateList
    .map((index, i) => (
      <div
  key={index}
  style={{
    flex: "0 0 18%",
    textAlign: "center",
    // Adjusting opacity based on `i` (you can enable it if needed)
    opacity: (i === 2 || i === 6) ? 1 : 0.2,
    filter: i < 4 
      ? "invert(46%) sepia(15%) saturate(3224%) hue-rotate(323deg) brightness(88%) contrast(106%)"
      : "invert(50%) sepia(91%) saturate(434%) hue-rotate(165deg) brightness(89%) contrast(91%)",
  }}
>
        <img
          style={{ height: "100px", width: "100px" }}
          src={require(`./images/${type}/${type}-${index}.png`)}
          alt={`${type}-${index}`}
        />
      </div>
    ))}
</div>)}
      </div>
        <div className="carousel-controls" style={{display:"flex",width:"100%", alignItems:"center",justifyContent:"space-between",textAlign:"center"}}>
          <button onClick={prevItem}>←</button>
          <p >{listItems[currentIndex]}</p>
          <button onClick={nextItem}>→</button>
        </div>

    </div>
  );
};

export default Explanation;
