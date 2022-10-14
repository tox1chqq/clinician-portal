import React from 'react';
import {Chart as ChartJS, ArcElement, Tooltip, Legend,registerables} from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { Bar } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend,ChartDataLabels, ...registerables);

export const PatientsChart = () => {
    const data = {
        labels: ['Male', 'Female'],
        datasets: [
            {
                label: '',
                data: [9,11],
                backgroundColor: [
                    '#6960D7',
                    '#E0DDFF'
                ],
                borderWidth: 1,
            },
        ],
    };

    return <Bar data={data} height={210} options={{
            scales:{
                    y:{
                        min:0,
                        max: 100,
                        ticks:{
                            stepSize:50,
                            callback: function(value) {
                                return value + "%"
                            }
                        }
                    },
                x:{
                  grid:{
                      display:false,
                  }
                },
            },
        plugins:{
                legend:{
                    display: false
                },
            datalabels:{

            }
        }
    }}/>;
}