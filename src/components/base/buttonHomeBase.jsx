import { Box } from '@mui/material';
import Button from '@mui/material/Button';
import { grey } from "@mui/material/colors";
import { createTheme, ThemeProvider } from '@mui/material/styles';

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

export default function ButtonHomeBase({onClick, id, className, defaultValue}){
    return (
        <Box 
        component="div"
        sx={{ '&.MuiBox-root': { margin: "5px", width: '20%' } }}
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
                    sx={{ "&.MuiButtonBase-root" : { m: 1 }}}
                >{defaultValue}
                </Button>
            </ThemeProvider>
        </Box>
    );
}