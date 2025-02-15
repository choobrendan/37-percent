import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const Graph = () => {
    const chartRef = useRef(null);

    useEffect(() => {
        let len = 20;
        let dates = Array.from({ length: len }, () => Math.floor(Math.random() * 100));

        const ctx = chartRef.current.getContext('2d');

        const myChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: Array.from({ length: len }, (_, i) => `${i + 1}`),
                datasets: [{
                    label: 'Random Data',
                    data: dates,
                    backgroundColor: 'black',
                    borderColor: 'black',
                    borderWidth: 0
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });


        return () => {
            myChart.destroy();
        };
    }, []);

    return (
        <div style={{height: "400px"}} >
            <canvas  ref={chartRef}></canvas>
        </div>
    );
};

export default Graph;