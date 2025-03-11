// import React from "react";
// import {Grid } from "@mui/material";
// import FilterSidebar from "../../Components/Additional/FilterSidebar";
// import ProductList from "../../Components/Additional/ProductList";
// import Bar from "../../Components/Additional/Bar";


// function Filter() {
//     return (
// <>

//           <Grid container spacing={2}>
//             <Grid item xs={12} sm={3}>
//               <FilterSidebar />
//             </Grid>
//             <Grid item xs={12} sm={9}>
//               <ProductList />
//             </Grid>
//           </Grid>
//           <Bar greyText='Footwear' bgColor="#F5F5F5" breadCrumbs={false}/>
// </>
//           )
//   }
  
//   export default Filter;
import Filter from "../../Pages/Categories/CategoryFilter";

export default function Footwear() {
    return <Filter category="footwear" />;
}
