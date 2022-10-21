import { FC, useEffect, useMemo, useState } from 'react'
import { Box, Grid, Typography } from '@mui/material'
import { useNavigate, useParams } from 'react-router-dom'
import PatientsPortalApi from '../../services/services'
import { IPatient } from '../../types'
import { PatientSymptomChart } from '../../components/PatientSymptomChart/PatientSymptomChart'
import { PatientLineChart } from '../../components/PatientLineChart/PatientLineChart'
import { PatientScoresLine } from '../../components/PatientScoresLine/PatientScoresLine'

export const Patient: FC = () => {
    const { id } = useParams()
    const [patient, setPatient] = useState<IPatient | undefined>(undefined)
    const navigate = useNavigate()

    const handleGoToPatients = () => {
        navigate(`/patients`)
    }

    useEffect(() => {
        ;(async () => {
            const result = await PatientsPortalApi.fetchPatientInfo(id)
            setPatient(result)
        })()
    }, [id])

    const symptomsInfo = useMemo(() => {
        if (patient) {
            let sympoms = new Map()

            patient.wellbeing.map((day) => {
                day.symptoms.map((sympom) => {
                    if (sympoms.has(sympom.name)) {
                        sympoms.set(sympom.name, sympoms.get(sympom.name) + 1)
                    } else {
                        sympoms.set(sympom.name, 1)
                    }
                })
            })

            return Object.fromEntries(sympoms)
        }
        return null
    }, [patient])

    return (
        <>
            {patient && (
                <Grid item xs={11} sx={{ padding: '18px 20px 20px 0' }}>
                    <Grid
                        container
                        alignItems="center"
                        sx={{ marginBottom: '20px' }}
                    >
                        <Typography
                            variant="h3"
                            component="h3"
                            color="mainGrey"
                            fontSize="14px"
                            sx={{ cursor: 'pointer' }}
                            onClick={() => handleGoToPatients()}
                        >
                            All Patients
                        </Typography>
                        <Box
                            component="span"
                            sx={{
                                paddingLeft: '5px',
                                color: 'logoTextColor',
                                fontWeight: '700',
                                fontSize: '14px',
                            }}
                        >
                            {'< ' + patient.fullName}
                        </Box>
                    </Grid>
                    <Typography
                        variant="h3"
                        component="h3"
                        color="mainTextColor"
                        fontWeight="700"
                        fontSize="18px"
                        sx={{ marginBottom: '15px' }}
                    >
                        Symptoms
                    </Typography>
                    <Grid container spacing={2}>
                        <Grid item xs={6}>
                            <PatientSymptomChart symptomsInfo={symptomsInfo} />
                        </Grid>
                        <Grid item xs={6}>
                            <PatientLineChart patient={patient} />
                        </Grid>
                        <Grid item xs={12} sx={{ paddingTop: '0 !important' }}>
                            <Typography
                                variant="h3"
                                component="h3"
                                color="mainTextColor"
                                fontWeight="700"
                                fontSize="18px"
                                sx={{ marginBottom: '15px' }}
                            >
                                Patient Scores
                            </Typography>
                            <PatientScoresLine patient={patient} />
                        </Grid>
                    </Grid>
                </Grid>
            )}
        </>
    )
}
