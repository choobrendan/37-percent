import React, { useRef, useEffect } from "react";
import Chart from 'chart.js/auto';

const GraphStats = ({ simulations, lowerLimit, upperLimit }) => {
    console.log(simulations)
  // Calculate statistics
  const successes = simulations.filter(sim => sim.bestNonTrying > sim.maxTrying).length;
  const successRate = (successes / simulations.length * 100).toFixed(1);
  
  const tryingValues = simulations.map(sim => sim.maxTrying);
  const avgTrying = (tryingValues.reduce((a, b) => a + b, 0) / simulations.length).toFixed(1);
  
  const nonTryingValues = simulations.map(sim => sim.bestNonTrying);
  const avgNonTrying = (nonTryingValues.reduce((a, b) => a + b, 0) / simulations.length).toFixed(1);
  
  const improvements = simulations.map(sim => sim.bestNonTrying - sim.maxTrying)
                            .filter(imp => imp > 0);
  const avgImprovement = improvements.length > 0 
    ? (improvements.reduce((a, b) => a + b, 0) / improvements.length).toFixed(1)
    : 0;
    const chartRef = useRef(null);
  // Create histogram data
  const createHistogram = (values, label) => {
    

      if (!chartRef.current) return;
      
      const ctx = chartRef.current.getContext('2d');
      const ranges = Array.from({length: 10}, (_, i) => ({
        min: lowerLimit + i*(upperLimit - lowerLimit)/10,
        max: lowerLimit + (i+1)*(upperLimit - lowerLimit)/10
      }));
      
      new Chart(ctx, {
        type: 'bar',
        data: {
          labels: ranges.map(r => `${Math.floor(r.min)}-${Math.floor(r.max)}`),
          datasets: [{
            label: label,
            data: ranges.map(range => 
              values.filter(v => v >= range.min && v < range.max).length
            ),
            backgroundColor: 'rgba(54, 162, 235, 0.6)'
          }]
        },
        options: {
          scales: {
            y: { beginAtZero: true }
          }
        }
      });


    return <canvas ref={chartRef} />;
  };

  return (
    <div className="simulation-stats">
      <h2>Simulation Results ({simulations.length} runs)</h2>
      
      <div className="stats-grid">
        <div className="stat-box">
          <h3>Success Rate</h3>
          <div className="stat-value">{successRate}%</div>
          <p>Percentage of times found better partner after trial period</p>
        </div>

        <div className="stat-box">
          <h3>Average Maximum During Trial</h3>
          <div className="stat-value">{avgTrying}%</div>
          <p>Average best compatibility during evaluation phase</p>
        </div>

        <div className="stat-box">
          <h3>Average Maximum After Trial</h3>
          <div className="stat-value">{avgNonTrying}%</div>
          <p>Average best compatibility found after evaluation phase</p>
        </div>

        <div className="stat-box">
          <h3>Average Improvement</h3>
          <div className="stat-value">{avgImprovement}%</div>
          <p>Average improvement when better partner was found</p>
        </div>
      </div>

      <div className="histograms">
        <div className="histogram">
          <h3>Trial Phase Maximum Distribution</h3>
          {createHistogram(tryingValues, 'Trial Phase Maximum')}
        </div>
        
        <div className="histogram">
          <h3>Post-Trial Maximum Distribution</h3>
          {createHistogram(nonTryingValues, 'Post-Trial Maximum')}
        </div>
      </div>
    </div>
  );
};

export default GraphStats;