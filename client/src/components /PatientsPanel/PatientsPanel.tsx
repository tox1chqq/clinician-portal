import { FC } from "react";
import { PanelLayout, PatientsChart } from "../index";
import { Grid, Typography } from "@mui/material";
import logo from "../../assests/images/patients-panel.svg";
import { mockData } from "../../mockData";
import { ListPoint } from "../ListPoint/ListPoint";

export const PatientsPanel: FC = () => {
  return (
    <PanelLayout>
      <Grid container alignItems="center" sx={{ paddingTop: "12px" }}>
        <img src={logo} />
        <Typography
          component="h6"
          variant="h6"
          sx={{
            fontSize: "14px",
            fontWeight: 700,
            color: "mainTextColor",
            marginLeft: "16px",
          }}
        >
          Patients
        </Typography>
      </Grid>
      <Grid container spacing={2} sx={{ paddingBottom: "12px" }}>
        <Grid item xs={6}>
          <Grid container>
            <Typography
              sx={{
                paddingTop: "16px",
                color: "mainTextColor",
                fontSize: "14px",
              }}
            >
              This statistic shows the total number of patients and the sex
              distribution
            </Typography>
          </Grid>
          <Grid container sx={{ paddingTop: "40px", marginBottom: "35px" }}>
            <Grid
              item
              xs={6}
              sx={{
                padding: "6px 16px",
                border: "1px dashed",
                borderColor: "dashedBorder",
                display: "flex",
                borderRadius: "8px",
                alignItems: "center",
              }}
            >
              <Typography
                component="h6"
                variant="h6"
                sx={{
                  paddingRight: "20px",
                  color: "semiColor",
                  fontSize: "32px",
                  fontWeight: 700,
                  lineHeight: "44px",
                }}
              >
                {mockData.length}
              </Typography>
              <Typography sx={{ fontSize: "14px", color: "mainTextColor" }}>
                Total Number
              </Typography>
            </Grid>
          </Grid>
          <Grid
            xs={10}
            sx={{ display: "flex", justifyContent: "space-between" }}
          >
            <ListPoint total={20} value={9} color="semiColor" text="Male" />
            <ListPoint
              total={20}
              value={11}
              color="femaleColor"
              text="Female"
            />
          </Grid>
        </Grid>
        <Grid item xs={6} sx={{ display: "flex", alignItems: "flex-end" }}>
          <PatientsChart />
        </Grid>
      </Grid>
    </PanelLayout>
  );
};
