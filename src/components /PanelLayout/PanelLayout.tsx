import {Grid} from "@mui/material";
import React, {FC} from "react";

interface IPanelLayout  {
    children: React.ReactNode
}

export const PanelLayout:FC<IPanelLayout> = ({children}) => {
    return <Grid item xs={6} sx={{backgroundColor:'mainBackground', borderRadius: '10px'}}>
        {children}
    </Grid>
}