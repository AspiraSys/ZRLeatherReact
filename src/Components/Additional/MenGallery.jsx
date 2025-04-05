
import React from "react";
import { Box, Typography, Card, CardContent } from "@mui/material";
import TargetIcon from "@mui/icons-material/TrackChanges"; // Icon for Mission
import LightbulbIcon from "@mui/icons-material/Lightbulb"; // Icon for Vision
import { TbTargetArrow } from "react-icons/tb";
import { HiOutlineLightBulb } from "react-icons/hi";

const MenGallery = () => {
  return (
    <Box
      sx={{
        backgroundColor: "rgba(149, 123, 104, 0.08)",
        padding: { xs: "40px 20px", md: "80px 120px" },
        position: "relative",
        overflow: "hidden",
        mt:{sx:3,lg:5,md:5},
        mb:{sx:3,lg:7,md:7},
      }}
    >
      {/* Large Semi-Circle Background Shape */}
      <Box
        sx={{
          position: "absolute",
          left: "-10%",
          top: "10%",
          width: "400px",
          height: "400px",
          backgroundColor: "#CFBBAD",
          borderRadius: "50%",
          transform: "translateY(-50%)",
          zIndex: 0,
        }}
      />

      <Box sx={{ display: "flex", flexWrap: "wrap", alignItems: "center", position: "relative", zIndex: 1 }}>
        {/* Left Side: Mission & Vision Cards */}
        <Box sx={{ flex: 1, display: "flex", flexDirection: "column", gap: 3 }}>
          {/* Mission Card */}
          <Card sx={{ display: "flex", alignItems: "center", padding: 2, maxWidth: "380px", boxShadow: 3,overflow:'visible' }}>
            <Box
              sx={{
                minWidth: 110,
                minHeight: 110,
                backgroundColor: "white",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: 3,
              }}
            >
              <TbTargetArrow size={75}  color="#987760"/>
            </Box>
            <CardContent>
              <Typography variant="h6" fontWeight="bold" color="#A56A43">
                Our Mission
              </Typography>
              <Typography fontSize={14} color="text.secondary">
                We use ethically sourced materials and expert craftsmanship to create durable, stylish leather goods.
              </Typography>
            </CardContent>
          </Card>

          {/* Vision Card */}
          <Card sx={{ display: "flex", alignItems: "center", padding: 2, maxWidth: "380px", boxShadow: 3 ,overflow:'visible' }}>
            <CardContent>
              <Typography variant="h6" fontWeight="bold" color="#A56A43">
                Our Vision
              </Typography>
              <Typography fontSize={14} color="text.secondary">
                We aim to be a globally recognized brand for excellence in leather craftsmanship, redefining luxury.
              </Typography>
            </CardContent>
            <Box
              sx={{
                minWidth: 110,
                minHeight:110,
                backgroundColor: "white",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: 3,
              }}
            >
              <HiOutlineLightBulb  size={75} color="#987760" />
            </Box>
          </Card>
        </Box>

        {/* Right Side: "What We Stand For" Text */}
        <Box sx={{ flex: 1, paddingLeft: { xs: 0, md: 6 }, marginTop: { xs: 4, md: 0 } }}>
          <Typography variant="h5" fontWeight="bold">
            What We Stand For
          </Typography>
          <Box sx={{ width: 50, height: 3, backgroundColor: "#A56A43", marginY: 1 }} />
          <Typography fontSize={16} color="text.secondary">
            We envision becoming a globally recognized brand synonymous with luxury, craftsmanship, and sustainability
            in the leather industry. Our goal is to redefine elegance and durability by creating premium leather
            products.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default MenGallery;



// https://randomuser.me/api/portraits/men/1.jpg