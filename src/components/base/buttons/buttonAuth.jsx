import { Box } from '@mui/material';
import { grey } from "@mui/material/colors";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Button from '@mui/material/Button';

const theme = createTheme({
    palette: {
        primary: {
            main: grey[700],
          },
    },
    typography: {
        useNextVariants: true,
    },
});

export default function ButtonAuthBase({onClick, id, className, defaultValue}){
    return (
        <Box 
        component="div"
        sx={{ '&.MuiBox-root': { marginTop: "5px", width: '100%' } }}
        noValidate
        autoComplete="off">
            <ThemeProvider theme={theme}>
                <Button variant="outlined"
                    fullWidth
                    size="small"
                    className={className}
                    id={id}
                    onClick={onClick}
                    title={defaultValue}
                    sx={{ "&.MuiButtonBase-root" : { m: 0 }}}
                >{defaultValue}
                </Button>
            </ThemeProvider>
        </Box>
    );
}