import { FC, useState } from 'react'
import { Line } from 'react-chartjs-2'
import {
    ArcElement,
    Chart as ChartJS,
    Legend,
    registerables,
    Tooltip,
} from 'chart.js'
import ChartDataLabels from 'chartjs-plugin-datalabels'
import { PanelLayout } from '../PanelLayout/PanelLayout'
import { Grid, MenuItem, Select } from '@mui/material'
import { severityValue, stastusToValue } from '../../constants/constants'
import * as dayjs from 'dayjs'
import { IPatient, ISymptoms } from '../../types'
import { ListPoint } from '../ListPoint/ListPoint'

ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels, ...registerables)

interface IPatientLineChart {
    patient: IPatient
}

export const PatientLineChart: FC<IPatientLineChart> = ({ patient }) => {
    const [currentSymptom, setCurrentSymptom] = useState<ISymptoms>(
        patient.wellbeing[0].symptoms[0]
    )

    const data = {
        labels: patient.wellbeing.map((day) => day.date),
        datasets: [
            {
                data: patient.wellbeing.map((day) => {
                    if (
                        day.symptoms.find(
                            (item) => item.name === currentSymptom.name
                        )
                    ) {
                        return stastusToValue[
                            day.symptoms
                                .find(
                                    (item) => item.name === currentSymptom.name
                                )
                                ?.status.replace(/\s/g, '')
                        ]
                    }
                    return 2
                }),
                backgroundColor: '#FFF',
                borderWidth: 2,
                barPercentage: 0.25,
                borderColor: '#4EAAFF',
            },
        ],
    }
    return (
        <PanelLayout>
            <Grid container sx={{ height: '250px', position: 'relative' }}>
                <Line
                    data={data}
                    options={{
                        elements: {
                            point: {
                                radius: 3,
                                borderWidth: 6,
                                hoverRadius: 7,
                                hoverBorderWidth: 5,
                                hoverBackgroundColor: '#fff',
                            },
                        },
                        scales: {
                            y: {
                                min: 2,
                                max: 10,
                                grid: {
                                    drawBorder: false,
                                    borderDash: [5, 5],
                                    borderColor: '#D9D8E8',
                                },
                                ticks: {
                                    font: {
                                        size: 12,
                                    },
                                    stepSize: 2,
                                    callback: function (value, ctx) {
                                        return severityValue[value]
                                    },
                                },
                            },
                            x: {
                                grid: {
                                    display: false,
                                },
                                ticks: {
                                    callback: function (value, ctx) {
                                        return dayjs(
                                            patient.wellbeing[value].date
                                        ).format('MMM DD')
                                    },
                                },
                            },
                        },
                        plugins: {
                            legend: {
                                display: false,
                            },
                            tooltip: {
                                displayColors: false,
                                padding: 18,
                                backgroundColor: '#FFFFFF',
                                titleColor: '#272543',
                                titleFont: {
                                    size: 16,
                                },
                                footerFont: {
                                    weight: '400',
                                    size: 16,
                                },
                                bodyFont: {
                                    size: 16,
                                    weight: '400',
                                },
                                bodyColor: '#272543',
                                footerColor: '#272543',
                                callbacks: {
                                    label(tooltipItem): string | string[] {
                                        return ''
                                    },
                                    title(
                                        tooltipItems: Item[]
                                    ): string | string[] {
                                        return dayjs(
                                            tooltipItems[0].label
                                        ).format('MMMM DD')
                                    },
                                    beforeBody(
                                        tooltipItems: Item[]
                                    ): string | string[] {
                                        return 'Severity:'
                                    },
                                    afterBody(
                                        tooltipItems: Item[]
                                    ): string | string[] {
                                        return patient.wellbeing[
                                            tooltipItems[0].dataIndex
                                        ].symptoms.find(
                                            (item) =>
                                                item.name ===
                                                currentSymptom.name
                                        ).status
                                    },
                                    beforeFooter(
                                        tooltipItems: Item[]
                                    ): string | string[] {
                                        return 'Symptoms::'
                                    },
                                    footer(
                                        tooltipItems: Item[]
                                    ): string | string[] {
                                        return currentSymptom.name
                                    },
                                },
                            },
                            datalabels: {
                                display: false,
                            },
                            title: {
                                text: 'Symptom Severity',
                                display: true,
                                align: 'start',
                                color: '#041029',
                                font: {
                                    size: 14,
                                    weight: '700',
                                },
                                padding: {
                                    bottom: 25,
                                    top: 15,
                                },
                            },
                        },
                        maintainAspectRatio: false,
                    }}
                />
                <Select
                    sx={{
                        position: 'absolute',
                        right: 0,
                        fontSize: 14,
                        '& > .MuiSelect-select': {
                            padding: '8px 24px',
                        },
                    }}
                    value={currentSymptom}
                    onChange={(event) => setCurrentSymptom(event.target.value)}
                    renderValue={(value) => (
                        <ListPoint text={value.name} color="4EAAFF" />
                    )}
                >
                    {patient.symptoms.map((symptom) => (
                        <MenuItem key={symptom.name} value={symptom}>
                            {symptom.name}
                        </MenuItem>
                    ))}
                </Select>
            </Grid>
        </PanelLayout>
    )
}
