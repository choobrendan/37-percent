import React, { useRef, useEffect } from "react";
import Chart from "chart.js/auto";

const GraphStats = ({ simulations, lowerLimit, upperLimit }) => {
  // Calculate statistics
  const successes = simulations.filter(
    (sim) => sim.bestNonTrying > sim.maxTrying
  ).length;
  const successRate = ((successes / simulations.length) * 100).toFixed(1);

  const tryingValues = simulations.map((sim) => sim.maxTrying);
  const avgTrying = (
    tryingValues.reduce((a, b) => a + b, 0) / simulations.length
  ).toFixed(1);

  const nonTryingValues = simulations.map((sim) => sim.bestNonTrying);
  const avgNonTrying = (
    nonTryingValues.reduce((a, b) => a + b, 0) / simulations.length
  ).toFixed(1);

  const improvements = simulations
    .map((sim) => sim.bestNonTrying - sim.maxTrying)
    .filter((imp) => imp > 0);
  const avgImprovement =
    improvements.length > 0
      ? (improvements.reduce((a, b) => a + b, 0) / improvements.length).toFixed(
          1
        )
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

    values1.forEach((value) => {
      if (value >= lowerLimit && value <= upperLimit) {
        histogramData1[value - lowerLimit]++;
      }
    });

    values2.forEach((value) => {
      if (value >= lowerLimit && value <= upperLimit) {
        histogramData2[value - lowerLimit]++;
      }
    });

    new Chart(ctx, {
      type: "bar",
      data: {
        labels: Array.from(
          { length: upperLimit + 1 - lowerLimit },
          (_, idx) => idx + lowerLimit
        ),
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
        responsive: true,
        maintainAspectRatio: false,
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
    createHistogram(
      tryingValues,
      nonTryingValues,
      "Trial Phase Maximum",
      "Post-Trial Maximum",
      comparisonHistogramRef,
    );

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
      
      <div style={{ display: "flex" }}>
        <div className="stats-grid" style={{maxWidth:"300px"}}>
        <h2>Simulation Results ({simulations.length} runs)</h2>
          <div className="stat-box">
            <p style={{ fontSize: "20px" }}>
              {" "}
              Percentage of times we found a better partner after trying period
            </p>
            <div className="stat-value">
              <h2 style={{ marginTop: "2px", marginBottom: "8px" }}>
                ={successRate}%
              </h2>
            </div>
          </div>

          <div className="stat-box">
            <p style={{ fontSize: "20px" }}>
              Average best compatibility during evaluation phase
            </p>
            <div className="stat-value">
              <h2 style={{ marginTop: "2px", marginBottom: "8px" }}>
                ={avgTrying}%
              </h2>
            </div>
          </div>

          <div className="stat-box">
            <p style={{ fontSize: "20px" }}>
              Average best compatibility found after evaluation phase
            </p>
            <div className="stat-value">
              <h2 style={{ marginTop: "2px", marginBottom: "8px" }}>
                ={avgNonTrying}%
              </h2>
            </div>
          </div>

          <div className="stat-box">
            <p style={{ fontSize: "20px" }}>
              Average improvement when better partner was found
            </p>
            <div className="stat-value">
              <h2 style={{ marginTop: "2px", marginBottom: "8px" }}>
                ={avgImprovement}%
              </h2>
            </div>
          </div>
        </div>

        <div className="histograms">
          <div className="histogram">
            <h2 style={{fontSize:"20px"}}> Trial vs Post-Trial Maximum Distribution</h2>
            <canvas  style={{ height: "300px", maxHeight:"300px" }}  ref={comparisonHistogramRef} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GraphStats;
