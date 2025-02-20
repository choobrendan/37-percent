import React, { useEffect, useRef } from 'react';

const Home = ({global, setGlobal, type, setType}) => {



return(
<div style={{display: "contents"}}>
      <p>Hey there!</p>
      <img src={require('.//images/main/main-happy.png')} alt="haha "></img>
      <p>Are you looking to get a date next valentines?</p>
      <div style={{display: "flex",width:"300px",justifyContent: "space-between"}}>
      <button style={{width:"140px" }} onClick={()=>setType("love")} type="button">Yeah!!</button>
      <button style={{width:"140px" }} onClick={()=>setType("job")} type="button">Errr not really...</button>
      </div>
</div>

);

}


export default Home;