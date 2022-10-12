import {createTheme} from "@mui/material";

declare module '@mui/material/styles' {
    interface  PaletteOptions {
        mainBackground: string,
        mainTextColor: string,
        secondaryTextColor: string,
        logoTextColor: string,
        dividerColor: string
    }
}


export const theme = createTheme({
    palette:{
        mainBackground: '#F9F9FB',
        mainTextColor: '#272543',
        secondaryTextColor: '#A1A0AF',
        logoTextColor: '#6960D7',
        dividerColor: '#B94700'
    },
    components: {
        MuiTooltip: {
            styleOverrides: {
                tooltip: {
                    background:'transparent'
                }
            }
        }
    }
})