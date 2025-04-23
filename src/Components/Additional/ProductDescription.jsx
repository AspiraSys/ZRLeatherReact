import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
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
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import LoopOutlinedIcon from '@mui/icons-material/LoopOutlined';
import SecurityOutlinedIcon from '@mui/icons-material/SecurityOutlined';
import images from "../../Utils/Images";
import data from "../../Stores/Reducers/Data/ProductDescription.json";
import CustomButton from "../../Components/Additional/GlobalButton";
import ProductCard from "../../Components/Additional/ProductCard";

const mergeProductWithCommonData = (product) => {
  if (product && product.commonDataReference && data[product.commonDataReference]) {
    const commonData = data[product.commonDataReference];
    return {
      ...product,
      reviews: commonData.reviews || [],
      faq: commonData.faq || [],
      detailedDescription: commonData.detailedDescription || {},
    };
  }
  return product;
};

const RatingsReviews = ({ ratings }) => {
  return (
    <Box
      sx={{
        display: "flex", flexDirection: { xs: "column", md: "row" }, alignItems: "center", justifyContent: "space-between", mt: 4, gap: 4,
      }}>
      <Box textAlign="left" minWidth={200}>
        <Typography variant="h6" fontWeight={700}>
          Ratings & Reviews
        </Typography>
        <Typography variant="h4" fontWeight={700} display="flex" alignItems="center" >
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
            <LinearProgress variant="determinate" value={(ratings.starDistribution[star] / ratings.totalRatings) * 100}
              sx={{
                flexGrow: 1, height: 10, borderRadius: 5, backgroundColor: "#ddd", "& .MuiLinearProgress-bar": {
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

  const renderReviewsContent = () => {
    if (!product.reviews || product.reviews.length === 0) {
      return (
        <Box sx={{ p: 3 }}>
          <Typography>No reviews available for this product.</Typography>
        </Box>
      );
    }

    return (
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
                flexDirection: { xs: "column", sm: "row" },
                justifyContent: "space-between",
                mb: 2,
              }}
            >
              <Box sx={{ display: "flex" }}>
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
    );
  };

  const renderFAQContent = () => {
    if (!product.faq || product.faq.length === 0) {
      return (
        <Box sx={{ p: 3 }}>
          <Typography>No FAQs available for this product.</Typography>
        </Box>
      );
    }

    return (
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
  };

  const renderDetailedDescription = () => {
    if (!product.detailedDescription || Object.keys(product.detailedDescription).length === 0) {
      return (
        <Box sx={{ p: 3 }}>
          <Typography>No detailed description available for this product.</Typography>
        </Box>
      );
    }

    return (
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
  };

  return (
    <Box sx={{ mt: 4 }}>
      <Box
        sx={{
          display: "flex",
          mb: 0,
          flexDirection: { xs: "column", sm: "row" },
        }}
      >
        <TabButton
          active={activeTab === "reviews" ? 1 : 0}
          onClick={() => handleTabChange("reviews")}
          sx={{ width: { xs: "100%", sm: "auto" }, mb: { xs: 1, sm: 0 } }}
        >
          Reviews & Feedback
        </TabButton>
        <TabButton
          active={activeTab === "faq" ? 1 : 0}
          onClick={() => handleTabChange("faq")}
          sx={{ width: { xs: "100%", sm: "auto" }, mb: { xs: 1, sm: 0 } }}
        >
          FAQ's
        </TabButton>
        <TabButton
          active={activeTab === "detailed" ? 1 : 0}
          onClick={() => handleTabChange("detailed")}
          sx={{ width: { xs: "100%", sm: "auto" }, mb: { xs: 1, sm: 0 } }}
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
          width: "100%",
        }}
      >
        {activeTab === "reviews" && renderReviewsContent()}
        {activeTab === "faq" && renderFAQContent()}
        {activeTab === "detailed" && renderDetailedDescription()}
      </Box>
    </Box>
  );
};

const ProductInfoSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Paper
      elevation={0}
      sx={{
        py: 3,
        px: 2,
        borderTop: '1px solid #ddd',
        borderBottom: '1px solid #ddd',
        backgroundColor: 'transparent',
      }}
    >
      <Box sx={{ maxWidth: '1200px', mx: 'auto', width: '100%' }}>
        <Grid container spacing={2} alignItems="center" columns={{ xs: 12, sm: 12, md: 12 }}>
          <Grid item xs={12} sm={4}>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 2,
                justifyContent: isMobile ? 'flex-start' : 'center',
                textAlign: 'left',
              }}
            >
              <LocalShippingOutlinedIcon sx={{ color: '#9c8569', fontSize: 32 }} />
              <Box>
                <Typography variant="subtitle1" sx={{ fontWeight: 600, color: '#9c8569' }}>
                  Free Shipping
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  Free shipping on order above ₹500
                </Typography>
              </Box>
            </Box>
            {isMobile && <Divider sx={{ my: 2 }} />}
          </Grid>

          <Grid item xs={12} sm={4}>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 2,
                justifyContent: isMobile ? 'flex-start' : 'center',
                textAlign: 'left',
                borderLeft: { sm: '1px solid #ddd' },
                borderRight: { sm: '1px solid #ddd' },
                px: { sm: 2 },
              }}
            >
              <LoopOutlinedIcon sx={{ color: '#9c8569', fontSize: 32 }} />
              <Box>
                <Typography variant="subtitle1" sx={{ fontWeight: 600, color: '#9c8569' }}>
                  Free Return
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  Free return in 24 hour after purchasing
                </Typography>
              </Box>
            </Box>
            {isMobile && <Divider sx={{ my: 2 }} />}
          </Grid>

          <Grid item xs={12} sm={4}>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 2,
                justifyContent: isMobile ? 'flex-start' : 'center',
                textAlign: 'left',
              }}
            >
              <SecurityOutlinedIcon sx={{ color: '#9c8569', fontSize: 32 }} />
              <Box>
                <Typography variant="subtitle1" sx={{ fontWeight: 600, color: '#9c8569' }}>
                  100% Secure
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  Secure payments & private security network.
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Paper>
  );
};

const ProductDescription = () => {
  const { id } = useParams();
  console.log("idd", id);
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [mainImage, setMainImage] = useState("");
  const [wishlist, setWishlist] = useState(false);
  const [selectedSize, setSelectedSize] = useState("");
  const [recommendedProducts, setRecommendedProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const productId = parseInt(id);

    try {
      if (data && data.products && Array.isArray(data.products)) {
        const foundProduct = data.products.find(product => product.id === productId);

        if (foundProduct) {
          const mergedProduct = mergeProductWithCommonData(foundProduct);

          setProduct(mergedProduct);
          if (images[foundProduct.image]) {
            setMainImage(images[foundProduct.image]);
          }

          if (foundProduct.sizeOptions?.length > 0) {
            setSelectedSize(foundProduct.sizeOptions[0]);
          }

          const filtered = data.products.filter(p => p.id !== productId);
          const random = filtered.sort(() => 0.5 - Math.random()).slice(0, 3);

          const mergedRecommended = random.map(p => mergeProductWithCommonData(p));
          setRecommendedProducts(mergedRecommended);
        }
      } else {
        console.error("Data structure is invalid:", data);
      }
    } catch (error) {
      console.error("Error loading product data:", error);
    } finally {
      setIsLoading(false);
    }
  }, [id]);

  useEffect(() => {
    console.log("Current product data:", product);
    console.log("Available images:", images);
  }, [product]);

  if (isLoading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', p: 5 }}>
        <Typography>Loading product information...</Typography>
      </Box>
    );
  }

  if (!product) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', p: 5 }}>
        <Typography variant="h5">Product not found. Please check the product ID.</Typography>
      </Box>
    );
  }

  const handleImageChange = (imageName) => {
    if (images[imageName]) {
      setMainImage(images[imageName]);
    } else {
      console.error(`Image not found: ${imageName}`);
    }
  };

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
          <Box sx={{ position: "relative", width: { xs: "100%", md: "45%" } }}>
            <CardMedia
              component="img"
              image={mainImage || "/api/placeholder/400/400"}
              alt={product.name}
              sx={{
                borderRadius: "8px",
                width: "100%",
                maxHeight: { xs: "350px", md: "450px" },
                objectFit: "contain",
              }}
            />
            <IconButton
              onClick={() => {
                setWishlist(!wishlist);
                navigate('/wishlist');
              }}
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

            <Box display="flex" justifyContent="center" mt={2} gap={1.5} flexWrap="wrap">
              {images[product.image] && (
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
                  onClick={() => handleImageChange(product.image)}
                />
              )}

              {product.thumbnailImages && product.thumbnailImages.map((img, index) => (
                images[img] ? (
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
                    onClick={() => handleImageChange(img)}
                  />
                ) : null
              ))}
            </Box>
          </Box>

          <Box sx={{ width: { xs: "100%", md: "55%" } }}>
            <Typography variant="h5" fontWeight={700} mb={1}>
              {product.name}
            </Typography>
            <Box display="flex" alignItems="center" gap={1} mb={2}>
              <Rating
                value={product.ratings?.averageRating || 0}
                readOnly
                precision={0.5}
                icon={<StarIcon fontSize="inherit" />}
                emptyIcon={<StarIcon fontSize="inherit" style={{ opacity: 0.55 }} />}
              />
              <Typography variant="body2">
                ({product.ratings?.totalRatings || 0} Customer Reviews)
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

            {product.sizeOptions && product.sizeOptions.length > 0 && (
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
            )}

            <Box display="flex" gap={2} mt={4} flexWrap="wrap">
              <CustomButton
                text="Buy Now"
                borderColor="#987760"
                fontColor="#987760"
                fontSize="4px"
                padding={3.5}
                hoverStyles={{ backgroundColor: "#987760", color: "white" }}
                swipeHover={true}
                removeBorder={true}
                onClick={() => {
                  console.log("Navigating to:", `/ShippingDetails/${id}`);
                  navigate(`/ShippingDetails/${id}`);
                }}
                disabled={false}
              />
              <CustomButton
                text="Add to Cart"
                borderColor="#987760"
                fontColor="#987760"
                fontSize="4px"
                hoverStyles={{ backgroundColor: "#987760", color: "white" }}
                swipeHover={true}
                removeBorder={true}
                startIcon={<ShoppingCartIcon />}
                to='/cart'
              />
            </Box>
          </Box>
        </Box>

        {product.ratings && <RatingsReviews ratings={product.ratings} />}
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
            {images.footwear11 ? (
              <img
                src={images.flashsale}
                alt="Flash Sale"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            ) : (
              <Box sx={{ bgcolor: "#f0f0f0", width: "100%", height: "100%", minHeight: 200 }}></Box>
            )}

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
              {recommendedProducts.length > 0 ? (
                recommendedProducts.map((item, index) => (
                  <ProductCard
                    key={index}
                    product={{
                      ...item,
                      image: images[item.image] || '/api/placeholder/300/300',
                    }}
                  />
                ))
              ) : (
                <Typography variant="body2">No recommendations found.</Typography>
              )}
            </Box>
          </Box>
        </Box>
        <ReviewsFeedbackSection product={product} />


      </Box>
      <ProductInfoSection />
    </>
  );
};

export default ProductDescription;