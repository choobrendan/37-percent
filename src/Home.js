import React, { useEffect, useRef,useState } from 'react';

const Home = ({global, setGlobal, type, setType}) => {
      const [clickCount, setClickCount] = useState(0);
      const [showDiv, setShowDiv] = useState(false);
    
      const handleClick = () => {
        setClickCount((prevCount) => {
          const newCount = prevCount + 1;
          if (newCount >= 10) {
            setShowDiv(true); // Show div after 10 clicks
          }
          return newCount;
        });
      };


return(
<div style={{display: "contents"}}>
      <p>Hey there!</p>
      <img src={require('.//images/main/main-happy.png')} alt="haha "></img>
      <p>Are you looking to get a date next valentines?</p>
      <div style={{display: "flex",width:"300px",justifyContent: "space-between"}}>
      <button style={{width:"140px" }} onClick={()=>setType("love")} type="button">Yeah!!</button>
      <button style={{width:"140px" }}  onClick={handleClick} type="button">Errr not really...</button>
      {showDiv && (
        <div style={{position:"absolute", bottom:"30px"}}>
          <p style={{fontSize:"6px", width:"300px"}}>Okay, okay, you're probably not looking for love or something, maybe you're in a relationship and being really really happy or you just aren't looking for one right now. Whatever. I wanted to do a function where we also look at job suitability but I'm just too lazy, maybe if you bully me into it or something then why not? Since you've read this far, just find my instagram through my github or something and dm me "you're lazy af", and if enough people do it I might consider. Have a nice day tho :D</p>
        </div>
      )}
      </div>
</div>

);

}


export default Home;