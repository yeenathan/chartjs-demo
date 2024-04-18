import { Bar } from "react-chartjs-2"

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
} from 'chart.js';

import { useState, useEffect } from 'react';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
)

export default function BarChart() {
    const [chartData, setChartData] = useState({
        datasets: []
    });
    const [chartOptions, setChartOptions] = useState({});

    useEffect(() => {
        setChartData({
            labels: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
            datasets: [
                {
                    label: 'Data 1',
                    data: [10,6,15,20,12,4,5],
                    borderColor: 'rgb(53, 162, 235)',
                    backgroundColor: 'rgba(23, 12, 235, 0.4)'
                },
                {
                    label: 'Data 2',
                    data: [2,6,15,20,12,9,15],
                    borderColor: 'rgb(53, 162, 235)',
                    backgroundColor: 'rgba(53, 162, 25, 0.4)'
                },
                {
                    label: 'Data 3',
                    data: [20,6,15,25,12,4,9],
                    borderColor: 'rgb(53, 162, 235)',
                    backgroundColor: 'rgba(153, 162, 150, 0.4)'
                }
            ]
        });

        setChartOptions({
            indexAxis: 'y',
            plugins: {
                legend: {
                    position: 'top'
                },
                title: {
                    display: true,
                    text: 'Daily Revenue'
                },
                maintainAspectRatio: false,
                responsive: true

            }
        })

    })



  return (
    <>
    <div>
        <Bar data={chartData} options={chartOptions} style={{width: "500px" , height: "300px"}}/>
    </div>
    </>
    
  )
}
