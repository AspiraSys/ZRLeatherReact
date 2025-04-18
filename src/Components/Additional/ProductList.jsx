import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Grid, CircularProgress, Box, Container, useTheme, useMediaQuery } from "@mui/material";
import ProductCard from "../../Components/Additional/ProductCard";
import { setProducts } from "../../Stores/Reducers/productSlice";
import images from "../../Utils/Images";
import productData from "../../Stores/Reducers/Data/Products.json";

const ProductList = ({ category }) => {  
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);
  const theme = useTheme();
  
  // Custom breakpoints for more precise control
  const isExtraSmall = useMediaQuery('(max-width:500px)');
  const isSmall = useMediaQuery('(min-width:501px) and (max-width:899px)');

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
    const selectedCategory = categories !== "All" ? categories : category;

    if (selectedCategory && product.category.toLowerCase() !== selectedCategory.toLowerCase()) {
        return false;
    }

    if (highlight !== "All" && product.highlight !== highlight) return false;

    if (availability !== "All" && product.availability !== availability) return false;

    if (style !== "All" && product.style !== style) return false;

    return true;
  });

  if (priceRange === "High to Low") {
    filteredProducts.sort((a, b) => b.price - a.price);
  } else if (priceRange === "Low to High") {
    filteredProducts.sort((a, b) => a.price - b.price);
  }

  // Calculate grid size based on screen width
  const getGridSize = () => {
    if (isExtraSmall) return 12; // 1 card per row on extra small screens
    if (isSmall) return 6;       // 2 cards per row on small screens
    return 4;                    // 3 cards per row on medium and larger screens
  };

  return (
    <Container maxWidth="xl" sx={{ py: 3 }}>
      {products.length === 0 ? (
        <Box sx={{ display: 'flex', justifyContent: 'center', width: '100%', py: 8 }}>
          <CircularProgress />
        </Box>
      ) : filteredProducts.length > 0 ? (
        <Grid 
          container 
          spacing={{ xs: 2, sm: 2, md: 3 }}
          sx={{ 
            display: 'flex',
            justifyContent: { xs: 'center', sm: 'flex-start' }
          }}
        >
          {filteredProducts.map((product) => (
            <Grid 
              item 
              key={product.id} 
              xs={getGridSize()}
              sx={{
                display: 'flex',
                justifyContent: 'center'
              }}
            >
              <Box 
                sx={{ 
                  width: '100%', 
                  maxWidth: { 
                    xs: '100%', 
                    sm: '280px', 
                    md: '300px' 
                  }
                }}
              >
                <ProductCard product={product} />
              </Box>
            </Grid>
          ))}
        </Grid>
      ) : (
        <Box sx={{ textAlign: "center", width: "100%", py: 6 }}>
          No products found.
        </Box>
      )}
    </Container>
  );
}

export default ProductList;