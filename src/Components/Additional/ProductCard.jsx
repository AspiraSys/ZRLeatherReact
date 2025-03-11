import React, { useState } from "react";
import { Card, CardMedia, CardContent, Typography, Button, IconButton, Box, Chip } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import SearchIcon from "@mui/icons-material/Search";
import ShareIcon from "@mui/icons-material/Share";

const ProductCard = ({ product }) => {
  const [showIcons, setShowIcons] = useState(false);

  return (
    <Card
      sx={{
        maxWidth: 300,
        borderRadius: "16px",
        boxShadow: 3,
        padding: "10px",
        position: "relative",
        fontFamily: "Poppins",
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
          }}
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
        height="200"
        image={product.image}
        alt={product.name}
        sx={{ borderRadius: "8px" }}
        onError={(e) => (e.target.src = "/fallback-image.png")}
      />

      <CardContent sx={{ textAlign: "left" }}>
        
        <Typography variant="h6" fontWeight={700} sx={{ color: "#000", fontSize: "18px" }}>
          {product.name}
        </Typography>

    
        <Typography variant="h6" fontWeight={700} sx={{ color: "#000", fontFamily: "Poppins" }}>
          ₹{product.price}
        </Typography>

       
        <Box display="flex" alignItems="center" justifyContent="space-between" my={1}>
          <Box display="flex" alignItems="center">
            {[...Array(5)].map((_, index) => (
              <Typography key={index} sx={{ color: "#FFC107", fontSize: "15px" }}>
                ⭐
              </Typography>
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
          <Button
            variant="outlined"
            sx={{
              flex: 1,
              marginRight: "8px",
              borderColor: "#D2B48C",
              color: "#9B7355",
              fontWeight: 600,
              borderRadius: "8px",
              fontSize: "9px",
            }}
          >
            Buy Now
          </Button>
          <Button
            variant="outlined"
            sx={{
              flex: 1,
              borderColor: "#D2B48C",
              color: "#9B7355",
              fontWeight: 600,
              borderRadius: "8px",
              fontSize: "9px",
            }}
          >
            Add to cart
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default ProductCard;