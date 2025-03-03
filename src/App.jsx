import React from "react";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import AboutUs from "../src/Pages/AboutUs";

const theme = createTheme({
  palette: {
    background: {
      default: "#f8f8f8",
    },
  },
  typography: {
    fontFamily: "Arial, sans-serif",
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AboutUs />
    </ThemeProvider>
  );
}

export default App;
