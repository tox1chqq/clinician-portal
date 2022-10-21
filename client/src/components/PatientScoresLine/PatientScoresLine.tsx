import { FC } from 'react'
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
import { Divider, Grid, Typography } from '@mui/material'
import { severityValue } from '../../constants/constants'
import * as dayjs from 'dayjs'

ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels, ...registerables)

interface IPatientScoresLine {
    patient: any
}

export const PatientScoresLine: FC<IPatientScoresLine> = ({ patient }) => {
    const data = {
        labels: patient.wellbeing.map((day) => day.date),
        datasets: [
            {
                label: 'Physical Wellbeing',
                data: patient.wellbeing.map((day) => day.day_wellbeing),
                backgroundColor: '#FFF',
                borderWidth: 2,
                barPercentage: 0.25,
                borderColor: '#FF5492',
                pointBackgroundColor: '#FF5492',
            },
            {
                label: 'Mood',
                data: patient.wellbeing.map((day) => day.day_mood),
                backgroundColor: '#FFF',
                borderWidth: 2,
                barPercentage: 0.25,
                borderColor: '#FFAE63',
                pointBackgroundColor: '#FFAE63',
            },
        ],
    }

    return (
        <PanelLayout>
            <Grid container sx={{ height: '300px' }}>
                <Grid item xs={9} xl={10}>
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
                                    min: 0,
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
                                            return value
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
                                    align: 'end',
                                    labels: {
                                        usePointStyle: true,
                                        boxHeight: 5,
                                        padding: 0,
                                    },
                                },
                                datalabels: {
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
                                            return String(
                                                tooltipItem.formattedValue
                                            )
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
                                            return 'Mental State:'
                                        },
                                        beforeFooter(
                                            tooltipItems: Item[]
                                        ): string | string[] {
                                            return 'Symptoms:'
                                        },
                                        footer(
                                            tooltipItems: Item[]
                                        ): string | string[] {
                                            return patient.wellbeing
                                                .find(
                                                    (day) =>
                                                        day.date ===
                                                        tooltipItems[0].label
                                                )
                                                .symptoms.map(
                                                    (sym) => `${sym.name}`
                                                )
                                        },
                                    },
                                },
                                title: {
                                    text: 'Physical Wellbeing and Mood',
                                    display: true,
                                    align: 'start',
                                    color: '#041029',
                                    font: {
                                        size: 14,
                                        weight: '700',
                                    },
                                    padding: {
                                        top: 15,
                                        bottom: 0,
                                    },
                                },
                            },
                            maintainAspectRatio: false,
                        }}
                    />
                </Grid>
                <Grid item xs={3} xl={2}>
                    <Grid container flexDirection="column">
                        <Grid item sx={{ padding: '24px 32px' }}>
                            <Typography
                                component="h4"
                                variant="h4"
                                fontSize="14px"
                                fontWeight="700"
                                color="patientMainText"
                                sx={{ marginBottom: '4px' }}
                            >
                                Physical Wellbeing
                            </Typography>
                            <Typography
                                fontSize="12px"
                                color="patientSemiText"
                                sx={{ marginBottom: '8px' }}
                            >
                                Average score
                            </Typography>
                            <Typography
                                component="h3"
                                variant="h3"
                                fontSize="24px"
                                fontWeight="700"
                                color="physicalCircle"
                                lineHeight="36px"
                            >
                                {(
                                    patient.wellbeing.reduce(
                                        (prev, current) => {
                                            return prev + current.day_wellbeing
                                        },
                                        0
                                    ) / patient.wellbeing.length
                                ).toFixed(1)}
                            </Typography>
                        </Grid>
                        <Divider sx={{ width: '60%', margin: '0 auto' }} />
                        <Grid item sx={{ padding: '24px 32px' }}>
                            <Typography
                                component="h4"
                                variant="h4"
                                fontSize="14px"
                                fontWeight="700"
                                color="patientMainText"
                                sx={{ marginBottom: '4px' }}
                            >
                                Mood
                            </Typography>
                            <Typography
                                fontSize="12px"
                                color="patientSemiText"
                                sx={{ marginBottom: '8px' }}
                            >
                                Average score
                            </Typography>
                            <Typography
                                component="h3"
                                variant="h3"
                                fontSize="24px"
                                fontWeight="700"
                                color="moodCircle"
                                lineHeight="36px"
                            >
                                {(
                                    patient.wellbeing.reduce(
                                        (prev, current) => {
                                            return prev + current.day_mood
                                        },
                                        0
                                    ) / patient.wellbeing.length
                                ).toFixed(1)}
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </PanelLayout>
    )
}
