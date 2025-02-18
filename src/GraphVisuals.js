import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";
import annotationPlugin from "chartjs-plugin-annotation"; // Import the annotation plugin

const GraphVisuals = ({
  count,
  trying,
  dates,
  currentIndex,
  showBars,
  listItemCount,
  setListItemCount
}) => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null); // Ref to store the chart instance
console.log(showBars,"SHOWBARS")
  // Register the annotation plugin
  Chart.register(annotationPlugin);
  useEffect(() => {
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }
    let visibleDates = new Array(10);
    visibleDates = [
      ...dates.slice(0, showBars + 1),
      ...visibleDates.slice(showBars, 9),
    ];

    const ctx = chartRef.current.getContext("2d");

    // Set background colors based on the "trying" prop
    const backgroundColors = visibleDates.map((_, index) => {
      return index < trying
        ? "rgba(255, 99, 132, 0.6)"
        : "rgba(54, 162, 235, 0.6)";
    });

    // Calculate the highest value in the first "trying" elements (if visible)
    const tryingValues = dates.slice(0, trying);
    const maxTryingValue =
      Math.max(...tryingValues);

    // Calculate the highest value in the remaining elements (if visible)
    const nonTryingValues = dates.slice(trying);
    const maxNonTryingValue =
    nonTryingValues.find(
        (value) => value > maxTryingValue
      );
    // Find the first value in nonTryingValues that is higher than maxTryingValue (if it exists)
    let firstBestNonTryingValue=null
    if(maxNonTryingValue!=null){
        let x=Math.max(...nonTryingValues.slice(((nonTryingValues.indexOf(maxNonTryingValue))+1),nonTryingValues.length))

     x>maxNonTryingValue ? firstBestNonTryingValue= x :firstBestNonTryingValue= null 
    }



    console.log(nonTryingValues,"max" )
    console.log(maxNonTryingValue,"maxNon" )
    console.log(dates)
    console.log(firstBestNonTryingValue,"non")
    // Create a new chart instance
    chartInstance.current = new Chart(ctx, {
      type: "bar",
      data: {
        labels: Array.from(
          { length: visibleDates.length },
          (_, i) => `${i + 1}`
        ),
        datasets: [
          {
            data: visibleDates,
            backgroundColor: backgroundColors,
            borderColor: "black",
            borderWidth: 0,
          },
        ],
      },
      options: {
        legend: {
          display: false,
        },
        tooltips: {
          enabled: false,
        },
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            labels: {},
          },
          // Add annotations for the highest values
          annotation: {
            annotations: {
              ...(currentIndex >= 5 &&
                maxTryingValue !== null && {
                  maxTryingLine: {
                    type: "line",
                    yMin: maxTryingValue,
                    yMax: maxTryingValue,
                    borderColor: "red",
                    borderWidth: 2,
                    borderDash: [5, 5], // Dashed line
                    label: {
                      content: `Max Trying: ${maxTryingValue}`,
                      enabled: true,
                      position: "end",
                      backgroundColor: "red",
                      color: "white",
                      font: {
                        size: 12,
                        weight: "bold",
                      },
                    },
                  },
                }),
                
              ...(currentIndex>=(dates.indexOf(Math.max(...nonTryingValues)))+2&& maxNonTryingValue !== null && {
                maxNonTryingLine: {
                  type: "line",
                  yMin: maxNonTryingValue,
                  yMax: maxNonTryingValue,
                  borderColor: "blue",
                  borderWidth: 2,
                  borderDash: [5, 5], // Dashed line
                  label: {
                    content: `Max Non-Trying: ${maxNonTryingValue}`,
                    enabled: true,
                    position: "end",
                    backgroundColor: "blue",
                    color: "white",
                    font: {
                      size: 12,
                      weight: "bold",
                    },
                  },
                },
              }),
              ...(currentIndex===listItemCount && firstBestNonTryingValue && {
                firstBestNonTryingLine: {
                  type: "line",
                  yMin: firstBestNonTryingValue,
                  yMax: firstBestNonTryingValue,
                  borderColor: "green",
                  borderWidth: 2,
                  borderDash: [5, 5], // Dashed line
                  label: {
                    content: `First Best Non-Trying: ${firstBestNonTryingValue}`,
                    enabled: true,
                    position: "end",
                    backgroundColor: "green",
                    color: "white",
                    font: {
                      size: 12,
                      weight: "bold",
                    },
                  },
                },
              }),
            },
          },
        },
        scales: {
          y: {
            beginAtZero: true,
            grid: {
              display: false, // Hide y-axis grid lines
            },
            ticks: {
              font: {
                family: "Study Case", // Specify your custom font here
                size: 14, // Font size (optional)
                weight: "normal", // Font weight (optional)
                style: "normal", // Font style (optional)
              },
            },
          },
          x: {
            grid: {
              display: false, // Hide x-axis grid lines
            },
            ticks: {
              font: {
                family: "Study Case", // Specify your custom font here
                size: 14, // Font size (optional)
                weight: "normal", // Font weight (optional)
                style: "normal", // Font style (optional)
              },
            },
          },
        },
      },
    });

    // Cleanup function to destroy the chart when the component unmounts
    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
        
      }
    };
  }, [count, trying, dates, currentIndex]); // Re-run effect when "count", "trying", "dates", or "currentIndex" changes

  return (
    <div style={{ height: "300px", maxWidth: "50%", minWidth: "300px" }}>
      <canvas ref={chartRef}></canvas>
    </div>
  );
};

export default GraphVisuals;
