import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import GraphInit from './GraphInit';
import GraphVisuals from './GraphVisuals';
const Graph = () => {


    return(
        <div>

            <GraphInit></GraphInit>
            <GraphVisuals></GraphVisuals>
        </div>
    )
};

export default Graph;