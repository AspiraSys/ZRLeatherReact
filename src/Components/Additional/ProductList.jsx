import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Grid, CircularProgress } from "@mui/material";
import ProductCard from "../../Components/Additional/ProductCard";
import { setProducts } from "../../Stores/Reducers/productSlice";
import images from "../../Utils/Images";
import productData from "../../Stores/Reducers/Data/products.json";

const ProductList = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);

  const {
    highlight,
    availability,
    style,
    categories,
    priceRange,
  } = useSelector((state) => state.filters);

  useEffect(() => {
    dispatch(setProducts(productData));
    console.log("Filters State:", { highlight, availability, style, categories, priceRange });
  }, [dispatch, highlight, availability, style, categories, priceRange]);

  const updatedProducts = products.map((product) => ({
    ...product,
    image: images[product.image] || "",
  }));

  let filteredProducts = updatedProducts.filter((product) => {
    if (highlight !== "All" && product.highlight !== highlight) return false;

    if (availability !== "All" && product.availability !== availability) return false;

    if (style !== "All" && product.style !== style) return false;

    if (categories !== "All" && product.category !== categories) return false;

    return true;
  });

  if (priceRange === "High to Low") {
    filteredProducts.sort((a, b) => b.price - a.price);
  } else if (priceRange === "Low to High") {
    filteredProducts.sort((a, b) => a.price - b.price);
  }

  return (
    <Grid container spacing={2} sx={{ padding: "20px" }}>
      {products.length === 0 ? (
        <CircularProgress sx={{ margin: "auto" }} />
      ) : filteredProducts.length > 0 ? (
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
