import {FC} from "react";
import { Bar } from "react-chartjs-2";
import {ArcElement, Chart as ChartJS, Legend, registerables, Tooltip} from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";
import {callback} from "chart.js/types/helpers";

ChartJS.register(
    ArcElement,
    Tooltip,
    Legend,
    ChartDataLabels,
    ...registerables
);


export const PatientSymptomChart:FC = ({}) => {
    const data = {
        labels: ["Male", "Female"],
        datasets: [
            {
                label: "",
                data: [10, 20],
                backgroundColor: ["#6960D7", "#E0DDFF"],
                borderWidth: 1,
            },
        ],
    };

    return    <Bar
        data={data}
        height={210}
        options={{
            scales: {
                y: {
                    min: 0,
                    max: 100,
                    ticks: {
                        stepSize:  20,
                        callback: function (value) {
                            return value + "%";
                        },
                    },
                },
                x: {
                    grid: {
                        display: false,
                    },
                },
            },
            plugins: {
                legend: {
                    display: false,
                },
                datalabels: {},
            },
        }}
    />

}
