import { Grid, Typography } from '@mui/material'
import { FC, ReactNode } from 'react'

interface IListPoint {
    total?: number
    value?: number
    text: string | ReactNode
    color: string
    textColor?: string
    fontStyle?: string
}

export const ListPoint: FC<IListPoint> = ({
    textColor,
    fontStyle,
    total,
    value,
    text,
    color,
}) => {
    return (
        <Grid item sx={{ display: 'flex', alignItems: 'center' }}>
            <Grid
                sx={{
                    height: 8,
                    width: 8,
                    backgroundColor: `${color}`,
                    borderRadius: '50%',
                    marginRight: '4px',
                }}
            ></Grid>
            <Typography
                sx={{
                    color: textColor || 'mainTextColor',
                    fontSize: 14,
                    fontWeight: fontStyle || '400',
                }}
            >
                {text}
                {total && value && (
                    <span style={{ paddingLeft: 6, fontWeight: 700 }}>
                        {Math.round((value / total) * 100)}%
                    </span>
                )}
            </Typography>
        </Grid>
    )
}
