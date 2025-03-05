import React from "react";
import { ThemeProvider, createTheme, CssBaseline, Grid } from "@mui/material";
import { Provider } from "react-redux";
import { store } from "./Stores/Stores";
import FilterSidebar from "./Components/Additional/FilterSidebar";
import ProductList from "./Components/Additional/ProductList";

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
        <Grid container spacing={2}>
          <Grid item xs={12} sm={3}>
            <FilterSidebar />
          </Grid>
          <Grid item xs={12} sm={9}>
            <ProductList />
          </Grid>
        </Grid>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
