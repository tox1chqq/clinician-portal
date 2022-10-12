import {FC} from "react";
import {PanelLayout} from "../PanelLayout/PanelLayout";
import {Grid} from "@mui/material";
import logo from '../../assests/images/patients-panel.svg'

export const PatientsPanel:FC = () => {
    return <PanelLayout>
            <Grid container>
                <img src={logo}/>
            </Grid>
    </PanelLayout>
}