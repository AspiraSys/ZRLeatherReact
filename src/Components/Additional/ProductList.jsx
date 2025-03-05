import React from "react";
import { useSelector } from "react-redux";
import { Grid } from "@mui/material";
import ProductCard from "../../Components/Additional/ProductCard";

const ProductList = () => {
  const products = useSelector((state) => state.products.products); // Correct state path
  const selectedHighlight = useSelector((state) => state.filters.highlight);

  // Filtered products ko handle karenge
  const filteredProducts = selectedHighlight === "All"
    ? products
    : products.filter((product) => product.highlight === selectedHighlight);

  return (
    <Grid container spacing={2} sx={{ padding: "20px" }}>
      {filteredProducts.length > 0 ? (
        filteredProducts.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
            <ProductCard product={product} />
          </Grid>
        ))
      ) : (
        <p style={{ textAlign: "center", width: "100%" }}>No products found.</p>
      )}
    </Grid>
  );
};

export default ProductList;
