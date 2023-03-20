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
    },
    h3: {
      margin: 0,
      fontWeight: 500,
      fontSize: '1.725rem',
      color: 'rgba(0, 0, 0, 0.9)',
      lineHeight: '130%'
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
  },
  components: {
    MuiTabs: {
      styleOverrides: {
        scroller: {
          width: '100%'
        },
        indicator: {
          backgroundColor:'rgb(52, 49, 49) !important',
        }
      }
    },
    MuiTab: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          color:'rgb(52, 49, 49) !important',
          flex: '1 1 0px',
          fontWeight: 500,
          letterSpacing: '-0.03em'
        }
      }
    }
  },
  palette: {
    primary: {
      main: 'rgb(52, 49, 49)'
    }
  }
});

export default theme;
