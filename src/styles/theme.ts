import { createTheme } from '@mui/material';

export const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#fff',
        },
        secondary: {
            main: 'rgba(255, 255, 255, 0.7)',
        },
    },
    typography: {
        fontFamily: `"Roboto Mono", "Courier New", "Courier", monospace`,
    },
});
