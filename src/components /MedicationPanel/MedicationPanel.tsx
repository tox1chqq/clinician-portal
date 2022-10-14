import {Grid, Typography} from "@mui/material";
import {LineProgress, PanelLayout} from "../index";
import {ListPoint} from "../ListPoint/ListPoint";

export const MedicationPanel = () => {
    let data = [
        {
            name: 'Ibrutinib',
            value: 40,
            color: '#5A6ACF'
        },
        {
            name: 'Аcalabrutinib',
            value: 37,
            color: '#8593ED'
        },
        {
            name: 'Zanubrutinib',
            value: 13,
            color: '#C7CEFF'
        },
        {
            name: 'Other',
            value: 10,
            color: '#EEEFF5'
        }
    ]


    return <PanelLayout>
        <Grid container sx={{padding:'10px 0px'}}>
            <Grid container alignItems='center' justifyContent='space-between' sx={{marginBottom:'15px'}}>
                <Typography fontSize={14} fontWeight={"bold"}>Medication</Typography>
                <LineProgress data={data}/>
            </Grid>
            <Grid container justifyContent='space-between'>
                {data.map(item => <ListPoint key={item.name} total={100} value={item.value} text={item.name} color={item.color}/>)}
            </Grid>
        </Grid>
    </PanelLayout>
}