import { FC } from "react";
import { Divider, Grid, IconButton, Tooltip, Typography } from "@mui/material";
import licence from "../../assests/images/lisence.png";
import center from "../../assests/images/center.png";
import InfoIcon from "@mui/icons-material/Info";
import {
  MedicationPanel,
  MoodPanel,
  PatientsPanel,
  PhysicalWellbeingPanel,
  ResponseRatePanel,
  SymptomPanel,
  TooltipContent,
} from "../../components ";

export const Home: FC = () => {
  const doctorName = "Edward";

  return (
    <Grid item xs={11} sx={{ padding: "18px 20px 20px 0" }}>
      <Grid
        container
        justifyContent="space-between"
        alignItems="center"
        sx={{ marginBottom: "25px" }}
      >
        <Typography
          variant="h3"
          component="h2"
          sx={{ color: "mainTextColor", fontSize: "24px", fontWeight: "700" }}
        >
          Hi, {doctorName}, welcome back!
        </Typography>
        <Grid item sx={{ display: "flex", alignItems: "center" }}>
          <img src={licence} alt="Licence" />
          <Divider
            orientation="vertical"
            sx={{ margin: "3px 6px", borderColor: "dividerColor" }}
            flexItem
            variant="middle"
          />
          <img src={center} alt="Center" />
          <Tooltip title={<TooltipContent />}>
            <IconButton sx={{ padding: 0, marginLeft: "17px" }}>
              <InfoIcon fontSize="small" />
            </IconButton>
          </Tooltip>
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item sx={{ paddingTop: "0 !important" }} xs={6}>
          <PatientsPanel />
        </Grid>
        <Grid item xs={6} sx={{ paddingTop: "0 !important" }}>
          <PhysicalWellbeingPanel />
          <MoodPanel />
          <MedicationPanel />
        </Grid>
        <Grid item xs={6} sx={{ paddingTop: "0 !important" }}>
          <ResponseRatePanel />
        </Grid>
        <Grid item xs={6} sx={{ paddingTop: "0 !important" }}>
          <SymptomPanel />
        </Grid>
      </Grid>
    </Grid>
  );
};
