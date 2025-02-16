import React, { useEffect, useRef } from 'react';
import However from "./However"
const Love = () => {
    return(
        <div >
            <p>Interesting! Who are you looking for?</p>
            <div>
            <button type="button">A guy</button>
            <button type="button">A girl</button>
            <button type="button">Both 👀</button>
            </div>
            <div><p style={{fontSize:"12px"}}s>
                Disclaimer: All hypothetical guys and/or girls are 18 and above if you are older than 18 and otherwise if you are younger than 18 (or whatever age your country's age of consent is)
                </p></div>
                <However></However>
        </div>

    );
}


export default Love;