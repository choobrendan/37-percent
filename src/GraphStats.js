import React, { useRef, useEffect } from "react";
import Chart from "chart.js/auto";

const GraphStats = ({ simulations, lowerLimit, upperLimit }) => {
  // Calculate statistics
  const successes = simulations.filter((sim) => sim.bestNonTrying > sim.maxTrying).length;
  const successRate = (successes / simulations.length * 100).toFixed(1);

  const tryingValues = simulations.map((sim) => sim.maxTrying);
  const avgTrying = (tryingValues.reduce((a, b) => a + b, 0) / simulations.length).toFixed(1);

  const nonTryingValues = simulations.map((sim) => sim.bestNonTrying);
  const avgNonTrying = (nonTryingValues.reduce((a, b) => a + b, 0) / simulations.length).toFixed(1);

  const improvements = simulations
    .map((sim) => sim.bestNonTrying - sim.maxTrying)
    .filter((imp) => imp > 0);
  const avgImprovement =
    improvements.length > 0
      ? (improvements.reduce((a, b) => a + b, 0) / improvements.length).toFixed(1)
      : 0;

  // Create histogram data
  const createHistogram = (values1, values2, label1, label2, canvasRef) => {
    if (!canvasRef.current) return;

    // Clean up previous chart if it exists
    const previousChart = Chart.getChart(canvasRef.current);
    if (previousChart) {
      previousChart.destroy();
    }

    const ctx = canvasRef.current.getContext("2d");

    // Generate histogram data for both datasets
    const histogramData1 = Array(upperLimit + 1 - lowerLimit).fill(0);
    const histogramData2 = Array(upperLimit + 1 - lowerLimit).fill(0);

    values1.forEach(value => {
      if (value >= lowerLimit && value <= upperLimit) {
        histogramData1[value - lowerLimit]++;
      }
    });

    values2.forEach(value => {
      if (value >= lowerLimit && value <= upperLimit) {
        histogramData2[value - lowerLimit]++;
      }
    });

    new Chart(ctx, {
      type: "bar",
      data: {
        labels: Array.from({ length: upperLimit + 1 - lowerLimit }, (_, idx) => idx + lowerLimit),
        datasets: [
          {
            label: label1,
            data: histogramData1,
            backgroundColor: "rgba(255, 99, 132, 0.6)", // Red for bestNonTrying
            borderColor: "rgba(255, 99, 132, 1)",
            borderWidth: 1,
          },
          {
            label: label2,
            data: histogramData2,
            backgroundColor: "rgba(54, 162, 235, 0.6)", // Blue for maxTrying
            borderColor: "rgba(54, 162, 235, 1)",
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          y: { beginAtZero: true },
        },
      },
    });
  };

  // Refs for histograms
  const comparisonHistogramRef = useRef(null);

  useEffect(() => {
    // Initialize the combined chart for Trial and Post-Trial Maximum comparison
    createHistogram(tryingValues, nonTryingValues, "Trial Phase Maximum", "Post-Trial Maximum", comparisonHistogramRef);

    // Cleanup charts on component unmount or when the data changes
    return () => {
      if (comparisonHistogramRef.current) {
        const chartInstance = Chart.getChart(comparisonHistogramRef.current);
        if (chartInstance) {
          chartInstance.destroy();
        }
      }
    };
  }, [simulations, lowerLimit, upperLimit]); // Re-run when simulations or limits change

  return (
    <div className="simulation-stats">
      <h2>Simulation Results ({simulations.length} runs)</h2>
<div style={{display:"flex"}}>
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

      <div style={{ height:"300px"}}className="histograms">
        <div className="histogram">
          <h3>Trial vs Post-Trial Maximum Distribution</h3>
          <canvas ref={comparisonHistogramRef} />
        </div>
      </div>
      </div>
    </div>
  );
};

export default GraphStats;
