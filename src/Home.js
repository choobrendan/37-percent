import React, { useEffect, useRef } from 'react';

const Home = ({global, setGlobal, type, setType}) => {



return(
<div >
      <p>Hey there!</p>
      <img src={require('.//images/main/main-happy.png')} alt="haha "></img>
      <p>Are you looking to get a date next valentines?</p>
      <div>
      <button onClick={()=>setType("love")} type="button">Yeah!!</button>
      <button onClick={()=>setType("job")} type="button">Errr not really...</button>
      </div>
</div>

);

}


export default Home;