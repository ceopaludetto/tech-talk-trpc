import { createTheme } from "@mui/material";

const borderRadius = 6;

export const theme = createTheme({
  shape: { borderRadius },
  palette: {
    mode: "dark",
    primary: { main: "#c4b5fd" },
    background: {
      default: "#000",
    },
  },
  typography: {
    fontFamily: "Poppins",
    fontWeightBold: 700,
    fontWeightMedium: 500,
    fontWeightRegular: 400,
    fontWeightLight: 300,
  },
  components: {
    MuiFilledInput: {
      styleOverrides: {
        root: {
          borderRadius,
          overflow: "hidden",
        },
        underline: {
          "&::before": { display: "none" },
        },
      },
    },
    MuiPaper: {
      defaultProps: {
        elevation: 0,
      },
      styleOverrides: {
        root: {
          boxShadow: "inset 0 1px 0 0 rgb(255 255 255 / 5%)",
        },
      },
    },
  },
});
