import { FC } from 'react'
import { Box, Grid } from '@mui/material'
import { severityStatus } from '../../constants/constants'
import { ListPoint } from '../ListPoint/ListPoint'

export const TooltipTableContent: FC = () => {
    return (
        <Grid
            container
            justifyContent="center"
            flexDirection="column"
            sx={{
                padding: '16px 24px 24px',
                boxShadow: '1px 3px 10px rgba(0, 0, 0, 0.16)',
                borderRadius: '6px',
                maxWidth: 250,
                backgroundColor: 'mainTextColor',
            }}
        >
            {severityStatus.map((status) => (
                <Box component="span" sx={{ paddingTop: '8px' }}>
                    <ListPoint
                        text={status.name}
                        color={status.color}
                        textColor="common.white"
                        fontStyle="700"
                    />
                </Box>
            ))}
        </Grid>
    )
}
