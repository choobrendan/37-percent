import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const GraphVisuals = () => {


    const chartRef = useRef(null);

    useEffect(() => {
        let len = 10;
        let dates = Array.from({ length: len }, () => Math.floor(Math.random() * 100));

        const ctx = chartRef.current.getContext('2d');

        const myChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: Array.from({ length: len }, (_, i) => `${i + 1}`),
                datasets: [{
                    data: dates,
                    backgroundColor: 'black',
                    borderColor: 'black',
                    borderWidth: 0
                }]
            },
            options: {
                legend: {
                    display: false
                 },
                 tooltips: {
                    enabled: false
                 },
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        labels: {}
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        grid: {
                            display: false, // Hide y-axis grid lines
                        },
                        ticks: {
                            font: {
                                family: 'Study Case', // Specify your custom font here
                                size: 14, // Font size (optional)
                                weight: 'normal', // Font weight (optional)
                                style: 'normal' // Font style (optional)
                            }
                        }
                    },
                    x: {
                        grid: {
                            display: false, // Hide x-axis grid lines
                        },
                        ticks: {
                            font: {
                                family: 'Study Case', // Specify your custom font here
                                size: 14, // Font size (optional)
                                weight: 'normal', // Font weight (optional)
                                style: 'normal' // Font style (optional)
                            }
                        }
                    }
                }
            }
        });
        

        return () => {
            myChart.destroy();
        };
    }, []);

    return (
        <div style={{ height: "400px", maxWidth:"50%", minWidth:"300px" }}>
            <canvas ref={chartRef}></canvas>
        </div>
    );
}

export default GraphVisuals