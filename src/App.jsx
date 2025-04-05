import React from "react";
import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";
import { Provider } from "react-redux";
import { store } from "../src/Stores/Stores";
import AppRoutes from "./Routes/Routes";

const theme = createTheme({
  palette: {
    
    primary: {
      main: "rgba(0, 0, 0, 0.87)",
      light: "#00000070",
      brown: "#9B775C",
    },
  },
  typography: {
    fontFamily: "Poppins, sans-serif",
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        "::-webkit-scrollbar": {
          width: "6px",
        },
        "::-webkit-scrollbar-thumb": {
          backgroundColor: "lightgrey",
          borderRadius: "4px",
        },
        "::-webkit-scrollbar-track": {
          background: "#f8f8f8",
        },
      },
    },
  },
});

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppRoutes />
      </ThemeProvider>
    </Provider>
  );
}

export default App;
