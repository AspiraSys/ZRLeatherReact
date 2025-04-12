import React, { useState } from "react";
import { Card, CardMedia, CardContent, Typography, IconButton, Box, Chip } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import SearchIcon from "@mui/icons-material/Search";
import ShareIcon from "@mui/icons-material/Share";
import CustomButton from "../../Components/Additional/GlobalButton";
import { useNavigate } from "react-router-dom";
import StarIcon from "@mui/icons-material/Star";


const ProductCard = ({ product }) => {
  const [showIcons, setShowIcons] = useState(false);
  const navigate = useNavigate();

  return (
    <Card
      sx={{
        maxWidth: 300,
        borderRadius: "16px",
        boxShadow: 3,
        /* padding: "10px",*/
        position: "relative",
        fontFamily: "Poppins",
        border: "1px solid rgba(131, 129, 129, 0.39)"
      }}
    >
      <Box sx={{ position: "absolute", top: 10, right: 10 }}>
        <IconButton
          onClick={() => setShowIcons(!showIcons)}
          sx={{
            background: "#fff",
            top: 4,
            right: 4,
            width: 32,
            height: 32,
            boxShadow: 2,
            '&:hover': {
              backgroundColor: 'white'
            }
          }}
          disableRipple
        >
          <FavoriteBorderIcon sx={{ color: "#000", fontSize: 20 }} />
        </IconButton>

        {/* Dropdown Icons */}
        {showIcons && (
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              position: "absolute",
              top: 42,
              right: 5,
              gap: 0.8,
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
        )}
      </Box>

      <CardMedia
        component="img"
        height="292"
        image={product.image}
        alt={product.name}
        sx={{
          borderTopLeftRadius: "16px",
          borderTopRightRadius: "16px",
          borderBottomLeftRadius: "0px",
          borderBottomRightRadius: "0px",
        }}  
        // onError={(e) => {
        //   e.target.src = "/fallback-image.png";
        // }}
      />

      <CardContent sx={{ textAlign: "left" }}>
        <Typography variant="h6" fontWeight={700} sx={{ color: "#000", fontSize: "18px" }}>
          {product.name}
        </Typography>

        <Typography variant="h6" fontWeight={700} sx={{ color: "#000", fontFamily: "Poppins" }}>
          ₹{product.price}
        </Typography>

        <Box display="flex" alignItems="center" justifyContent="space-between" my={1}>
          <Box display="flex" alignItems="center" gap={0.3}>
            {[...Array(5)].map((_, index) => (
              <StarIcon
                key={index}
                sx={{ color: index < product.rating ? "#FFC107" : "#ccc", fontSize: "18px" }}
              />
            ))}
          </Box>
          <Chip
            label={product.highlight}
            sx={{
              backgroundColor: "#4CAF50",
              color: "#fff",
              fontWeight: 400,
              borderRadius: "15px",
            }}
          />
        </Box>


        {/* Buttons */}
        <Box display="flex" justifyContent="space-between" mt={2}>
          <CustomButton
            text="Buy Now"
            borderColor="#987760"
            fontColor="#987760"
            padding={3.5}
            hoverStyles={{ backgroundColor: "#987760", color: "white" }}
            swipeHover={true}
            removeBorder={true}
            to='/ProductDescription'

          />
          <CustomButton
            text="Add to cart"
            borderColor="#987760"
            fontColor="#987760"
            hoverStyles={{ backgroundColor: "#987760", color: "white" }}
            swipeHover={true}
            removeBorder={true}
            to='/cart'
          />
        </Box>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
