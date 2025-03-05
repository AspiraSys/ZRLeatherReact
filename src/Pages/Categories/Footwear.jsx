import React from "react";
import {Grid } from "@mui/material";
import FilterSidebar from "../../Components/Additional/FilterSidebar";
import ProductList from "../../Components/Additional/ProductList";



function Filter() {
    return (

          <Grid container spacing={2}>
            <Grid item xs={12} sm={3}>
              <FilterSidebar />
            </Grid>
            <Grid item xs={12} sm={9}>
              <ProductList />
            </Grid>
          </Grid>
          )
  }
  
  export default Filter;