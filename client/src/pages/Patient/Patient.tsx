import {FC, useEffect, useMemo, useState} from "react";
import { Box, Grid, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import PatientsPortalApi from "../../services/services";
import { IPatient } from "../../types";
import {PatientSymptomChart} from "../../components /PatientSymptomChart/PatientSymptomChart";

export const Patient: FC = () => {
  const { id } = useParams();
  const [patient, setPatient] = useState<IPatient | undefined>(undefined);

  useEffect(() => {
    (async () => {
      const result = await PatientsPortalApi.fetchPatientInfo(id);
      setPatient(result);
    })();
  }, [id]);

  const symptomsInfo = useMemo(() => {
      if (patient){
          let sympoms = new Map()
          let arr = []

          patient.wellbeing.map(day => {
              day.symptoms.map(sympom => {
                  if(sympoms.has(sympom.name)){
                      sympoms.set(sympom.name, sympoms.get(sympom.name) + 1)
                  }else {
                      sympoms.set(sympom.name, 1)
                  }
              })
          })

          for (let [key, value] of sympoms) {
              arr = [...arr, { name: key, value}];
          }

         return arr
      }
  },[patient])

  return (
      <>
          {patient &&  <Grid item xs={11} sx={{ padding: "18px 20px 20px 0" }}>
              <Grid container alignItems="center" sx={{ marginBottom: "20px" }}>
                  <Typography
                      variant="h3"
                      component="h3"
                      color="mainTextColor"
                      fontSize="14px"
                  >
                      All Patients <Box component="span">{"< " + patient.fullName}</Box>
                  </Typography>
              </Grid>
              <Grid container>
                  <Typography
                      variant="h3"
                      component="h3"
                      color="mainTextColor"
                      fontWeight="700"
                      fontSize="18px"
                  >
                      Symptoms
                  </Typography>
              </Grid>
              <Grid container spacing={2}>
                  <Grid item xs={6} sx={{ paddingTop: "0 !important" }}>
                      <PatientSymptomChart/>
                  </Grid>
                  <Grid item xs={6} sx={{ paddingTop: "0 !important" }}></Grid>
                  <Grid item xs={12} sx={{ paddingTop: "0 !important" }}></Grid>
              </Grid>
          </Grid>}
      </>
  );
};
