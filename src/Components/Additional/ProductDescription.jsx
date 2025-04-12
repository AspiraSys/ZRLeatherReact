import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  Box,
  Typography,
  Button,
  CardMedia,
  IconButton,
  Rating,
  LinearProgress,
  Avatar,
  styled,
  Grid, 
  useMediaQuery,
  useTheme,
  Paper,
  Divider,
} from "@mui/material";
import {  } from '@mui/material';
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import images from "../../Utils/Images";
import data from "../../Stores/Reducers/Data/ProductDescription.json";
import allProducts from "../../Stores/Reducers/Data/Products.json";
import ProductCard from "../../Components/Additional/ProductCard";
import CustomButton from "../../Components/Additional/GlobalButton";
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import LoopOutlinedIcon from '@mui/icons-material/LoopOutlined';
import SecurityOutlinedIcon from '@mui/icons-material/SecurityOutlined';


const RatingsReviews = ({ ratings }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        alignItems: "center",
        justifyContent: "space-between",
        mt: 4,
        gap: 4,
      }}
    >
      <Box textAlign="left" minWidth={200}>
        <Typography variant="h6" fontWeight={700}>
          Ratings & Reviews
        </Typography>
        <Typography
          variant="h4"
          fontWeight={700}
          display="flex"
          alignItems="center"
        >
          {ratings.averageRating} <StarIcon fontSize="large" sx={{ ml: 0.5 }} />
        </Typography>
        <Typography variant="body2" color="gray">
          {ratings.totalRatings} ratings & {ratings.totalReviews} reviews
        </Typography>
      </Box>
      <Box width={{ xs: "100%", md: "60%" }}>
        {[5, 4, 3, 2, 1].map((star) => (
          <Box key={star} display="flex" alignItems="center" gap={1.5} mb={1}>
            <Typography variant="body2" fontWeight={600} sx={{ minWidth: 25 }}>
              {star}★
            </Typography>
            <LinearProgress
              variant="determinate"
              value={
                (ratings.starDistribution[star] / ratings.totalRatings) * 100
              }
              sx={{
                flexGrow: 1,
                height: 10,
                borderRadius: 5,
                backgroundColor: "#ddd",
                "& .MuiLinearProgress-bar": {
                  backgroundColor:
                    star === 5
                      ? "green"
                      : star === 4
                        ? "green"
                        : star === 3
                          ? "#6ea204"
                          : star === 2
                            ? "yellow"
                            : "red",
                },
              }}
            />
          </Box>
        ))}
      </Box>
    </Box>
  );
};

const TabButton = styled(Button)(({ theme, active }) => ({
  backgroundColor: active ? "#fff" : "#f0f0f0",
  color: "#000",
  borderRadius: "4px 4px 0 0",
  padding: "10px 20px",
  textTransform: "none",
  fontWeight: active ? 600 : 400,
  "&:hover": {
    backgroundColor: active ? "#fff" : "#e0e0e0",
  },
  borderBottom: active ? "none" : "1px solid #ddd",
  boxShadow: active ? "none" : "none",
}));

const ReviewsFeedbackSection = ({ product }) => {
  const [activeTab, setActiveTab] = useState("reviews");

  const handleTabChange = (tab) => setActiveTab(tab);

  const StarRating = ({ value }) => (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      {[...Array(5)].map((_, index) => (
        <Box
          key={index}
          sx={{ color: index < value ? "#FFD700" : "inherit", mr: 0.5 }}
        >
          {index < value ? <StarIcon /> : <StarBorderIcon />}
        </Box>
      ))}
    </Box>
  );

  const renderFAQContent = () => (
    <Box sx={{ p: 3 }}>
      {product.faq.map((item, index) => (
        <Box key={index} sx={{ mb: 3 }}>
          <Typography variant="subtitle1" fontWeight={600}>
            {item.question}
          </Typography>
          <Typography variant="body2" sx={{ mt: 1 }}>
            {item.answer}
          </Typography>
        </Box>
      ))}
    </Box>
  );

  const renderDetailedDescription = () => (
    <Box sx={{ p: 3 }}>
      {Object.entries(product.detailedDescription).map(([category, points]) => (
        <Box key={category} sx={{ mb: 3 }}>
          <Typography
            variant="subtitle1"
            fontWeight={600}
            sx={{ textTransform: "capitalize", mb: 1 }}
          >
            {category}
          </Typography>
          <ul style={{ paddingLeft: "20px", margin: 0 }}>
            {points.map((point, idx) => (
              <Typography
                component="li"
                variant="body2"
                key={idx}
                sx={{ mb: 0.5 }}
              >
                {point}
              </Typography>
            ))}
          </ul>
        </Box>
      ))}
    </Box>
  );

  return (
    <Box sx={{ mt: 4 }}>
      <Box sx={{ display: "flex", mb: 0 }}>
        <TabButton
          active={activeTab === "reviews" ? 1 : 0}
          onClick={() => handleTabChange("reviews")}
        >
          Reviews & Feedback
        </TabButton>
        <TabButton
          active={activeTab === "faq" ? 1 : 0}
          onClick={() => handleTabChange("faq")}
        >
          FAQ's
        </TabButton>
        <TabButton
          active={activeTab === "detailed" ? 1 : 0}
          onClick={() => handleTabChange("detailed")}
        >
          Detailed Description
        </TabButton>
      </Box>

      <Box
        sx={{
          border: "1px solid #ddd",
          borderRadius: "0 4px 4px 4px",
          maxHeight: "500px",
          overflowY: "auto",
          backgroundColor: "#fff",
        }}
      >
        {activeTab === "reviews" && (
          <Box>
            {product.reviews.map((review, index) => (
              <Box
                key={index}
                sx={{
                  p: 3,
                  borderBottom:
                    index < product.reviews.length - 1
                      ? "1px solid #f0f0f0"
                      : "none",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    mb: 2,
                  }}
                >
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <Avatar
                      src="/api/placeholder/50/50"
                      alt={review.name}
                      sx={{ width: 50, height: 50, mr: 2 }}
                    />
                    <Box>
                      <Typography fontWeight={600}>{review.name}</Typography>
                      <Typography variant="body2" color="text.secondary">
                        {review.date}
                      </Typography>
                    </Box>
                  </Box>
                  <StarRating value={review.rating} />
                </Box>
                <Typography variant="body1" sx={{ fontStyle: "italic" }}>
                  "{review.comment}"
                </Typography>
              </Box>
            ))}
          </Box>
        )}
        {activeTab === "faq" && renderFAQContent()}
        {activeTab === "detailed" && renderDetailedDescription()}
      </Box>
    </Box>
  );
};

const ProductDescription = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [mainImage, setMainImage] = useState("");
  const [wishlist, setWishlist] = useState(false);
  const [selectedSize, setSelectedSize] = useState("");

  useEffect(() => {
    console.log("Product data:", data); // Debug this
    let foundProduct;

    if (Array.isArray(data)) {
      foundProduct = data.find((product) => product.id === parseInt(id));
    } else {
      foundProduct = data; 
    }

    if (foundProduct) {
      setProduct(foundProduct);
      setMainImage(images[foundProduct.image]);

      if (foundProduct.sizeOptions?.length > 0) {
        setSelectedSize(foundProduct.sizeOptions[0]);
      }
    }
  }, [id]);
  



  if (!product) return <Typography>Loading...</Typography>;

  const recommendedIds = [2, 3, 4];
  const recommended = allProducts.filter((p) => recommendedIds.includes(p.id));


  return (
    <>
    <Box
      sx={{
        padding: { xs: "10px", sm: "20px" },
        maxWidth: "1200px",
        margin: "auto",
      }}
    >
      <Box display="flex" flexDirection={{ xs: "column", md: "row" }} gap={4}>
        {/* Image Section */}
        <Box sx={{ position: "relative", width: { xs: "100%", md: "45%" } }}>
          <CardMedia
            component="img"
            image={mainImage}
            alt={product.name}
            sx={{
              borderRadius: "8px",
              width: "100%",
              maxHeight: { xs: "350px", md: "450px" },
              objectFit: "contain",
            }}
          />
          <IconButton
            onClick={() => setWishlist(!wishlist)}
            sx={{
              position: "absolute",
              top: "16px",
              right: "30px",
              backgroundColor: "#fff",
              width: 40,
              height: 40,
              borderRadius: "50%",
              zIndex: 2,
              boxShadow: 2,
              "&:hover": {
                backgroundColor: "#f5f5f5",
              },
            }}
          >
            {wishlist ? (
              <FavoriteIcon sx={{ color: "red", fontSize: 24 }} />
            ) : (
              <FavoriteBorderIcon sx={{ color: "#000", fontSize: 24 }} />
            )}
          </IconButton>

          {/* Thumbnails */}
          <Box display="flex" justifyContent="center" mt={2} gap={1.5} flexWrap="wrap">
            <CardMedia
              component="img"
              image={images[product.image]}
              alt={`Main ${product.name}`}
              sx={{
                width: 60,
                height: 60,
                cursor: "pointer",
                borderRadius: "4px",
                border: mainImage === images[product.image] ? "2px solid #987760" : "none",
              }}
              onClick={() => setMainImage(images[product.image])}
            />
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

        {/* Details Section */}
        <Box sx={{ width: { xs: "100%", md: "55%" } }}>
          <Typography variant="h5" fontWeight={700} mb={1}>
            {product.name}
          </Typography>
          <Box display="flex" alignItems="center" gap={1} mb={2}>
            <Rating
              value={product.ratings.averageRating}
              readOnly
              precision={0.5}
              icon={<StarIcon fontSize="inherit" />}
              emptyIcon={<StarIcon fontSize="inherit" style={{ opacity: 0.55 }} />}
            />
            <Typography variant="body2">
              ({product.ratings.totalRatings} Customer Reviews)
            </Typography>
          </Box>
          <Typography variant="h4" fontWeight={700} color="#000">
            ₹{product.price.toLocaleString()}
            <Typography
              component="span"
              sx={{
                fontSize: "18px",
                color: "grey",
                marginLeft: "10px",
                textDecoration: "line-through",
              }}
            >
              ₹{product.originalPrice.toLocaleString()}
            </Typography>
          </Typography>
          <Typography mt={2} sx={{ lineHeight: 1.6, color: "#555" }}>
            {product.description}
          </Typography>

          <Box display="flex" alignItems="center" mt={3} gap={2} flexWrap="wrap">
            <Typography fontWeight={600}>Size : UK/India</Typography>
            <Box display="flex" gap={1} flexWrap="wrap">
              {product.sizeOptions.map((size) => (
                <Button
                  key={size}
                  variant={selectedSize === size ? "contained" : "outlined"}
                  onClick={() => setSelectedSize(size)}
                  sx={{
                    borderRadius: "8px",
                    padding: "6px 12px",
                    minWidth: "36px",
                    borderColor: "#ccc",
                    color: selectedSize === size ? "white" : "#555",
                    backgroundColor: selectedSize === size ? "#987760" : "transparent",
                    "&:hover": {
                      backgroundColor: selectedSize === size ? "#987760" : "rgba(152, 119, 96, 0.1)",
                      borderColor: "#987760",
                    },
                  }}
                >
                  {size}
                </Button>
              ))}
            </Box>
          </Box>

          <Box display="flex" gap={2} mt={4} flexWrap="wrap">
            <Button
              variant="outlined"
              sx={{
                borderColor: "#987760",
                color: "#987760",
                padding: "10px 20px",
                borderRadius: "4px",
                textTransform: "none",
                fontWeight: 600,
                "&:hover": {
                  backgroundColor: "#987760",
                  color: "white",
                  borderColor: "#987760",
                },
              }}
            >
              Buy Now
            </Button>
            <Button
              variant="outlined"
              startIcon={<ShoppingCartIcon />}
              sx={{
                borderColor: "#987760",
                color: "#987760",
                padding: "10px 20px",
                borderRadius: "4px",
                textTransform: "none",
                fontWeight: 600,
                "&:hover": {
                  backgroundColor: "#987760",
                  color: "white",
                  borderColor: "#987760",
                },
              }}
            >
              Add to Cart
            </Button>
          </Box>
        </Box>
      </Box>

      <RatingsReviews ratings={product.ratings} />
      <ReviewsFeedbackSection product={product} />
      {/* <ProductInfoSection /> */}

      <Box sx={{ display: "flex", flexDirection: { xs: "column", md: "row" }, gap: 2, mt: 6 }}>
        <Box
          sx={{
            flex: "1 1 160px",
            position: "relative",
            borderRadius: 2,
            overflow: "hidden",
            minHeight: "200px",
          }}
        >
          <img
            src={images.footwear1}
            alt="Flash Sale"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />

          <Box
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              background: "rgba(0,0,0,0.5)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              color: "#fff",
              px: 2,
              textAlign: "center",
            }}
          >
            <Typography variant="h4" fontWeight="bold" mb={1}>
              Flash Sale
            </Typography>
            <Typography variant="body1" mb={2}>
              Time-limited discounts encouraging quick purchases.
            </Typography>
            <Button
              variant="outlined"
              sx={{
                color: "#fff",
                borderColor: "#fff",
                "&:hover": { borderColor: "#fff" },
              }}
            >
              Buy Now
            </Button>
          </Box>
        </Box>

        <Box sx={{ flex: "2 1 600px" }}>
          <Typography variant="h5" fontWeight={700} mb={2}>
            Recommended For You
          </Typography>
          <Box
            sx={{
              display: "flex",
              gap: 2,
              overflowX: "auto",
              pb: 1,
              scrollSnapType: "x mandatory",
              WebkitOverflowScrolling: "touch",
            }}
          >
      
            {recommended.length > 0 ? (
              recommended.map((item, index) => (
                <ProductCard
                  key={index}
                  product={{
                    ...item,
                    image: images[item.image] || '', 
                  }}
                />
              ))
            ) : (
              <Typography variant="body2">No recommendations found.</Typography>
            )}

          </Box>
        </Box>
      </Box>
    </Box>
    <ProductInfoSection />
    </>
  );
};

const ProductInfoSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));

  return (
    <Paper elevation={0} sx={{ 
      py: 2,
      borderTop: '1px solid #e0e0e0',
      borderBottom: '1px solid #e0e0e0',
      backgroundColor: 'transparent',
      mt: 3,
      mb: 3,
    }}>
      <Grid container spacing={2}>
        {/* Free Shipping */}
        <Grid item xs={12} sm={4}>
          <Box sx={{ 
            display: 'flex',
            alignItems: 'center',
            justifyContent: isMobile ? 'flex-start' : 'center',
            flexDirection: isMobile ? 'row' : 'column',
            gap: 1,
            pb: isMobile ? 2 : 0
          }}>
            <LocalShippingOutlinedIcon 
              sx={{ 
                color: '#9c8569', 
                fontSize: isMobile ? 30 : 36,
                mr: isMobile ? 2 : 0
              }}
            />
            <Box sx={{ textAlign: isMobile ? 'left' : 'center' }}>
              <Typography variant="subtitle1" fontWeight="medium" color="#9c8569">
                Free Shipping
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Free shipping on order above ¥500
              </Typography>
            </Box>
          </Box>
          {isMobile && <Divider sx={{ mt: 2 }} />}
        </Grid>

        {/* Free Return */}
        <Grid item xs={12} sm={4}>
          <Box sx={{ 
            display: 'flex',
            alignItems: 'center',
            justifyContent: isMobile ? 'flex-start' : 'center',
            flexDirection: isMobile ? 'row' : 'column',
            gap: 1,
            pb: isMobile ? 2 : 0,
            borderLeft: { xs: 'none', sm: '1px solid #e0e0e0' },
            borderRight: { xs: 'none', sm: '1px solid #e0e0e0' },
            height: '100%'
          }}>
            <LoopOutlinedIcon 
              sx={{ 
                color: '#9c8569', 
                fontSize: isMobile ? 30 : 36,
                mr: isMobile ? 2 : 0
              }}
            />
            <Box sx={{ textAlign: isMobile ? 'left' : 'center' }}>
              <Typography variant="subtitle1" fontWeight="medium" color="#9c8569">
                Free Return
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Free return in 24 hour after purchasing
              </Typography>
            </Box>
          </Box>
          {isMobile && <Divider sx={{ mt: 2 }} />}
        </Grid>

        {/* 100% Secure */}
        <Grid item xs={12} sm={4}>
          <Box sx={{ 
            display: 'flex',
            alignItems: 'center',
            justifyContent: isMobile ? 'flex-start' : 'center',
            flexDirection: isMobile ? 'row' : 'column',
            gap: 1
          }}>
            <SecurityOutlinedIcon 
              sx={{ 
                color: '#9c8569', 
                fontSize: isMobile ? 30 : 36,
                mr: isMobile ? 2 : 0
              }}
            />
            <Box sx={{ textAlign: isMobile ? 'left' : 'center' }}>
              <Typography variant="subtitle1" fontWeight="medium" color="#9c8569">
                100% Secure
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Secure payments with private security network
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Paper>
  );
};
export default ProductDescription;
