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
      fontSize: '1.75rem',
      color: 'rgba(0, 0, 0, 0.9)',
      lineHeight: '130%',
      letterSpacing: '-0.0175em'
    },
    body2: {
      fontWeight: 400,
      fontSize: '0.875rem',
      lineHeight: '1.375rem',
      color: 'rgba(0, 0, 0, 0.6)',
      display: 'flex'
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
          height:3
        }
      }
    },
    MuiTab: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          color:'rgba(0, 0, 0, 0.6)',
          flex: '1 1 0px',
          fontWeight: 500,
          letterSpacing: '-0.03em'
        }
      }
    },
    MuiButton: {
      styleOverrides: {
        contained: {
          textTransform: 'none',
          width: '100%',
          lineHeight: '162%',
          borderRadius: '64px',
          padding: '12px 22px 10px',
          fontSize:'1rem'
        },
        text: {
          borderRadius: '64px',
          textTransform: 'none',
          padding: '10px 0px 8px',
          fontSize: '0.875rem',
          lineHeight: '171%',
          letterSpacing: '-0.01em'
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
