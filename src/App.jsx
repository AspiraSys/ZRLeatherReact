import React from "react";
import { ThemeProvider, createTheme, CssBaseline, Grid } from "@mui/material";
import { Provider } from "react-redux";
import { store } from "../src/Stores/Stores";
import Filter from "../src/Pages/Categories/Footwear"
// import AboutUs from "../src/Pages/AboutUs"

const theme = createTheme({
  palette: {
    background: { default: "#f8f8f8" },
  },
  typography: {
    fontFamily: "Poppins, sans-serif",
  },
});

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
      </ThemeProvider>
      <Filter />
      {/* <AboutUs /> */}
    </Provider>
  );
}

export default App;
