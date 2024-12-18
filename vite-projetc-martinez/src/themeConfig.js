// src/theme/customTheme.js
import { createTheme } from "@mui/material";

export const customTheme = createTheme({
  palette: {
    primary: { main: "#A02334", light: "#E85A7D" },
    secondary: { main: "#FFAD60" },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "30px",
          textTransform: "none",
          fontWeight: "bold",
        },
      },
    },
  },
});
