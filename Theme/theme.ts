import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  breakpoints: {
    values: {
        xs: 0,
        sm: 552,
        md: 852,
        lg: 1152,
        xl: 2300
    }
  }
});

export default theme;