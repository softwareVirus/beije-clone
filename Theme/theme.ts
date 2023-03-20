import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: [
      "Gordita"
    ].join(","),
    body1: {
      lineHeight: '1.625rem',
      letterSpacing: '-0.01em',
      color: 'rgba(0, 0, 0, 0.9)',
      cursor: 'pointer',
      whiteSpace: 'nowrap',
      verticalAlign: 'middle',
      height: '26.8px',
      hover: {
        borderBottom: "1px solid rgba(0, 0, 0, 0.9)",
        transition: "all 0.5s ease 0s",
      }
    }
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 552,
      md: 852,
      lg: 1152,
      xl: 2300,
    },
  }
});

export default theme;
