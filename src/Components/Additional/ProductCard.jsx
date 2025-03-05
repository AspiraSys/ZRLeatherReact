import React from "react";
import { Card, CardMedia, CardContent, Typography, Button } from "@mui/material";

const ProductCard = ({ product }) => {
  return (
    <Card sx={{ maxWidth: 300, margin: "10px", padding: "10px" }}>
      <CardMedia component="img" height="200" image={product.image} alt={product.name} />
      <CardContent>
        <Typography variant="h6">{product.name}</Typography>
        <Typography variant="body1">₹{product.price}</Typography>
        <Button variant="contained" color="primary" sx={{ marginTop: "10px" }}>Buy Now</Button>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
