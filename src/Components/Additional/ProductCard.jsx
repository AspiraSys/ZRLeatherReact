import React, { useState } from "react";
import { Card, Box, Typography, IconButton, Chip, Zoom } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import SearchIcon from "@mui/icons-material/Search";
import ShareIcon from "@mui/icons-material/Share";
import StarIcon from "@mui/icons-material/Star";
import CustomButton from "../../Components/Additional/GlobalButton";

const ProductCard = ({ product }) => {
  const [showIcons, setShowIcons] = useState(false);

  return (
    <Card
      sx={{
        width: "100%",
        height: "100%",
        borderRadius: "16px",
        boxShadow: 3,
        position: "relative",
        fontFamily: "Poppins",
        border: "1px solid rgba(131, 129, 129, 0.39)",
        display: "flex",
        flexDirection: "column",
        transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
        "&:hover": {
          transform: "translateY(-5px)",
          boxShadow: 6
        }
      }}
    >
      {/* Wishlist and Action Icons */}
      <Box sx={{ position: "absolute", top: 10, right: 10, zIndex: 2 }}>
        <IconButton
          onClick={() => setShowIcons(!showIcons)}
          sx={{
            background: "#fff",
            width: 32,
            height: 32,
            boxShadow: 2,
            "&:hover": {
              backgroundColor: "white"
            }
          }}
          disableRipple
        >
          <FavoriteBorderIcon sx={{ color: "#000", fontSize: 20 }} />
        </IconButton>

        <Box sx={{ position: "relative" }}>
          <Zoom in={showIcons} timeout={300}>
            <Box
              sx={{
                display: showIcons ? "flex" : "none",
                flexDirection: "column",
                position: "absolute",
                top: 10,
                right: 0,
                gap: 0.8,
                zIndex: 2
              }}
            >
              <IconButton
                sx={{
                  background: "#fff",
                  width: 32,
                  height: 32,
                  boxShadow: 2,
                }}
              >
                <SearchIcon sx={{ color: "#000", fontSize: 20 }} />
              </IconButton>
              <IconButton
                sx={{
                  background: "#fff",
                  width: 32,
                  height: 32,
                  boxShadow: 2,
                }}
              >
                <ShareIcon sx={{ color: "#000", fontSize: 20 }} />
              </IconButton>
            </Box>
          </Zoom>
        </Box>
      </Box>

      {/* Product Image */}
      <Box sx={{ position: "relative", pt: "100%" }}>
        <Box
          component="img"
          src={product.image}
          alt={product.name}
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            borderTopLeftRadius: "16px",
            borderTopRightRadius: "16px",
          }}
        />
      </Box>

      {/* Product Details */}
      <Box
        sx={{
          p: { xs: 1.5, sm: 2, md: 2.5 },
          flexGrow: 1,
          display: "flex",
          flexDirection: "column"
        }}
      >
        {/* Product Name */}
        <Typography
          variant="h6"
          fontWeight={700}
          fontSize={{ xs: "15px", sm: "16px", md: "17px", lg: "18px" }}
          sx={{
            color: "#000",
            overflow: "hidden",
            textOverflow: "ellipsis",
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            height: { xs: "48px", md: "52px" }
          }}
        >
          {product.name}
        </Typography>

        {/* Product Price */}
        <Typography
          fontWeight={700}
          fontSize={{ xs: "15px", sm: "15px", md: "16px" }}
          sx={{ color: "#000", mt: 1 }}
        >
          ₹{product.price}
        </Typography>

        {/* Rating and Highlight Badge */}
        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          mt={1}
          mb={1.5}
          flexWrap={{ xs: "wrap", sm: "wrap", md: "nowrap", lg: "nowrap" }}
          gap={1}
        >
          {/* Star Rating */}
          <Box display="flex" alignItems="center" gap={0.3}>
            {[...Array(5)].map((_, index) => (
              <StarIcon
                key={index}
                sx={{
                  color: index < product.rating ? "#FFC107" : "#ccc",
                  fontSize: { xs: "16px", sm: "16px", md: "17px" }
                }}
              />
            ))}
          </Box>
          
          {/* Highlight Badge */}
          <Chip
            label={product.highlight}
            sx={{
              backgroundColor: "#4CAF50",
              color: "#fff",
              fontWeight: 400,
              fontSize: "12px",
              borderRadius: "15px",
              height: "24px",
              minWidth: { xs: "80px", sm: "80px", md: "50px" }
            }}
          />
        </Box>

        {/* Action Buttons */}
        <Box
          display="flex"
          justifyContent="space-between"
          mt="auto"
          flexDirection={{ xs: "column", sm: "column", md: "row", lg: "row" }}
          gap={1}
        >
          <CustomButton
            text="Buy Now"
            borderColor="#987760"
            fontColor="#987760"
            padding={{ xs: 1.5, sm: 2, md: 1.5, lg: 2, xl: 3 }}
            hoverStyles={{ backgroundColor: "#987760", color: "white" }}
            swipeHover={true}
            removeBorder={true}
            to={`/product/${product.id}`}
            sx={{ 
              fontSize: { xs: "13px", sm: "13px", md: "12px", lg: "10px" },
              flex: { md: 1 }
            }}
          />

          <CustomButton
            text="Add to cart"
            borderColor="#987760"
            fontColor="#987760"
            padding={{ xs: 1.5, sm: 2, md: 1.5, lg: 2, xl: 3 }}
            hoverStyles={{ backgroundColor: "#987760", color: "white" }}
            swipeHover={true}
            removeBorder={true}
            to="/cart"
            sx={{ 
              fontSize: { xs: "13px", sm: "13px", md: "12px", lg: "14px" },
              flex: { md: 1 }
            }}
          />
        </Box>
      </Box>
    </Card>
  );
};

export default ProductCard;