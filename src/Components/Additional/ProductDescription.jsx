import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box, Typography, Button, CardMedia, IconButton, Rating, LinearProgress } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import StarIcon from "@mui/icons-material/Star";
import images from "../../Utils/Images";
import data from "../../Stores/Reducers/Data/ProductDescription.json";
import CustomButton from "../../Components/Additional/GlobalButton";

const RatingsReviews = ({ ratings }) => {
  return (
    <Box sx={{ display: "flex", flexDirection: { xs: "column", md: "row" }, alignItems: "center", justifyContent: "space-between", mt: 4, gap: 4 }}>
      <Box textAlign="left" minWidth={200}>
        <Typography variant="h6" fontWeight={700}>Ratings & Reviews</Typography>
        <Typography variant="h4" fontWeight={700} display="flex" alignItems="center">
          {ratings.averageRating} <StarIcon fontSize="large" sx={{ ml: 0.5 }} />
        </Typography>
        <Typography variant="body2" color="gray">
          {ratings.totalRatings} ratings & {ratings.totalReviews} reviews
        </Typography>
      </Box>
      <Box width={{ xs: "100%", md: "60%" }}>
        {[5, 4, 3, 2, 1].map((star) => (
          <Box key={star} display="flex" alignItems="center" gap={1.5} mb={1}>
            <Typography variant="body2" fontWeight={600} sx={{ minWidth: 25 }}>{star}★</Typography>
            <LinearProgress
              variant="determinate"
              value={(ratings.starDistribution[star] / ratings.totalRatings) * 100}
              sx={{ flexGrow: 1, height: 10, borderRadius: 5, backgroundColor: "#ddd",
                '& .MuiLinearProgress-bar': {
                  backgroundColor: star === 5 ? "green" : star === 4 ? "green" : star === 3 ? "#6ea204" : star === 2 ? "yellow" : "red",
                },
              }}
            />
          </Box>
        ))}
      </Box>
    </Box>
  );
};

const ProductDescription = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [mainImage, setMainImage] = useState("");
  const [wishlist, setWishlist] = useState(false);

  useEffect(() => {
    const foundProduct = data;
    if (foundProduct) {
      setProduct(foundProduct);
      setMainImage(images[foundProduct.image]);
    }
  }, []);

  if (!product) return <Typography>Loading...</Typography>;

  return (
    <Box sx={{ padding: "20px", maxWidth: "1200px", margin: "auto" }}>
      <Box display="flex" flexDirection={{ xs: "column", md: "row" }} gap={4}>
        <Box sx={{ position: "relative" }}>
          <CardMedia 
            component="img" 
            image={mainImage} 
            alt={product.name} 
            sx={{ borderRadius: "8px", maxWidth: "400px" }} 
          />
          <IconButton
            onClick={() => setWishlist(!wishlist)}
            sx={{
              position: "absolute",
              top: 10,
              right: 10,
              background: "#fff",
              width: 40,
              height: 40,
              boxShadow: 2,
              borderRadius: "50%",
            }}
          >
            {wishlist ? (
              <FavoriteIcon sx={{ color: "red", fontSize: 24 }} />
            ) : (
              <FavoriteBorderIcon sx={{ color: "#000", fontSize: 24 }} />
            )}
          </IconButton>
          <Box display="flex" justifyContent="center" mt={2} gap={1.5}>
            {product.thumbnailImages.map((img, index) => (
              <CardMedia
                key={index}
                component="img"
                image={images[img]}
                alt={`Thumbnail ${index}`}
                sx={{
                  width: 60,
                  height: 60,
                  cursor: "pointer",
                  borderRadius: "4px",
                  border: mainImage === images[img] ? "2px solid #987760" : "none",
                }}
                onClick={() => setMainImage(images[img])}
              />
            ))}
          </Box>
        </Box>
        <Box sx={{ width: "100%" }}>
          <Typography variant="h5" fontWeight={700} mb={1}>{product.name}</Typography>
          <Box display="flex" alignItems="center" gap={1} mb={2}>
            <Rating value={product.ratings.averageRating} readOnly precision={0.5} icon={<StarIcon fontSize="inherit" />} />
            <Typography variant="body2">(1200 Customer Reviews)</Typography>
          </Box>
          <Typography variant="h4" fontWeight={700} color="primary">
            ₹{product.price} 
            <Typography component="span" sx={{ fontSize: "18px", color: "grey", marginLeft: "10px", textDecoration: "line-through" }}>
              ₹{product.originalPrice}
            </Typography>
          </Typography>
          <Typography mt={2} sx={{ lineHeight: 1.6 }}>{product.description}</Typography>
          <Box display="flex" alignItems="center" mt={3} gap={2}>
            <Typography fontWeight={600}>Size : UK/India</Typography>
            <Box display="flex" gap={1} flexWrap="wrap">
              {product.sizeOptions.map((size) => (
                <Button key={size} variant="outlined" sx={{ borderRadius: "8px", padding: "6px 12px" }}>{size}</Button>
              ))}
            </Box>
          </Box>
          <Box display="flex" gap={2} mt={4} flexWrap="wrap">
            <CustomButton text="Buy Now" borderColor="#987760" fontColor="#987760" fontSize="4px" padding={3.5} hoverStyles={{ backgroundColor: "#987760", color: "white" }} swipeHover={true} removeBorder={true}  to='/ShippingDetails'/>
            <CustomButton text="Add to Cart" borderColor="#987760" fontColor="#987760" fontSize="4px" hoverStyles={{ backgroundColor: "#987760", color: "white" }} swipeHover={true} removeBorder={true} startIcon={<ShoppingCartIcon />} to='/cart'/>
          </Box>
        </Box>
      </Box>
      <RatingsReviews ratings={product.ratings} />
    </Box>
  );
};

export default ProductDescription;
