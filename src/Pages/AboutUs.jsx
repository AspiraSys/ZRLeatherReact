import React from "react";
import {
  Box,
  Typography,
  Container,
  Card,
  CardMedia,
  CardContent,
  CircularProgress,
} from "@mui/material";
import { styled } from "@mui/system";
import { TbTargetArrow } from "react-icons/tb";
import { HiOutlineLightBulb } from "react-icons/hi";
import Bar from "../Components/Additional/Bar";
import Grid from "@mui/material/Grid2";


const Banner = styled(Box)({
  backgroundImage: "url(src/assets/images/AboutUs-banner.png)",
  backgroundSize: "cover",
  backgroundPosition: "center",
  height: "250px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "white",
  fontSize: "2rem",
  fontWeight: "bold",
  fontFamily: "Poppins, serif",
});

const SectionTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 600,
  fontFamily: "Poppins",
  marginBottom: theme.spacing(1),
}));

const Divider = styled(Box)({
  width: "100px",
  height: "4px",
  backgroundColor: "#9B7355",
  margin: "0 auto 24px",
});

const CircleStat = ({ progress, label, subLabel }) => (
  <Box
    sx={{
      position: "relative",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      mx: { xs: 0, md: 2 },
      my: { xs: 3, md: 0 },
    }}
  >
    <CircularProgress
      variant="determinate"
      value={100}
      size={200}
      thickness={4}
      sx={{ color: "#DCC9BD" }}
    />
    <CircularProgress
      variant="determinate"
      value={progress}
      size={200}
      thickness={4}
      sx={{
        position: "absolute",
        color: "#9B7355",
      }}
    />
    <Box sx={{ position: "absolute", textAlign: "center" }}>
      <Typography
        variant="h5"
        component="div"
        sx={{ fontWeight: "bold", fontFamily: "Poppins" }}
      >
        {label}
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ fontFamily: "Poppins" }}>
        {subLabel}
      </Typography>
    </Box>
  </Box>
);

const AboutUs = () => {
  const features = [
    {
      title: "Premium Leather Selection",
      description:
        "We source the finest quality leather from trusted suppliers, ensuring durability and texture.",
      image: "src/assets/images/about-1.png",
    },
    {
      title: "Expert Craftsmanship",
      description:
        "Our skilled artisans meticulously handcraft each piece, blending traditional techniques.",
      image: "src/assets/images/about-2.png",
    },
    {
      title: "Quality Assurance",
      description:
        "Every product undergoes rigorous quality checks to maintain the highest standards.",
      image: "src/assets/images/about3.png",
    },
  ];

  return (
    <>
      <Banner>
        <Typography variant="h4" fontWeight="600">
          About Us
        </Typography>
      </Banner>

      <Grid container alignItems="center" sx={{ p: { xs: 3, md: 5 } }}>
        <Grid size={{ xs: 12, md: 6 }} sx={{ p: { xs: 3, md: 5 } }}>
          <Typography
            variant="h4"
            gutterBottom
            sx={{
              fontSize: { xs: "32px", md: "40px" },
              fontFamily: "Poppins",
              fontWeight: 600,
            }}
          >
            <span style={{ color: "#A78870" }}>Our Legacy:</span> Built on Quality, Styled with Passion
          </Typography>
          <Box sx={{ width: "180px", height: "4px", backgroundColor: "#9B7355", mb: 2 }} />
          <Typography
            variant="body1"
            sx={{
              color: "#00000070",
              fontFamily: "Poppins",
              textAlign: "justify",
              fontWeight: 500,
              fontSize: { xs: "18px", md: "22px" },
            }}
          >
            We are a dedicated team committed to crafting premium leather products that blend timeless
            elegance with exceptional durability. Each item is meticulously handcrafted using the finest
            materials and techniques, ensuring superior quality and sustainability in every detail.
          </Typography>
        </Grid>
        <Grid size={{ xs: 12, md: 6 }} sx={{ p: { xs: 3, md: 5 } }}>
          <Card sx={{ backgroundColor: "transparent", boxShadow: "none", display: "flex", justifyContent: "center" }}>
            <CardMedia
              component="img"
              image="src/assets/images/aboutus.png"
              alt="Leather Products"
              sx={{ maxWidth: "80%", height: "auto", width: { xs: "80%", md: "100%" } }}
            />
          </Card>
        </Grid>
      </Grid>

      <Container sx={{ py: 5 }}>
        <SectionTitle variant="h4" align="center">
          How We Make Our Products
        </SectionTitle>
        <Divider />
        <Grid container spacing={3}>
          {features.map((item, idx) => (
            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={idx}>
              <Card sx={{ boxShadow: 3, borderRadius: 2, position: "relative", overflow: "hidden" }}>
                <CardMedia component="img" height="500" image={item.image} alt={item.title} />
                <CardContent
                  sx={{
                    position: "absolute",
                    bottom: "10%",
                    left: "10%",
                    color: "white",
                    p: 2,
                  }}
                >
                  <Typography variant="h6" sx={{ fontWeight: "bold", fontFamily: "Poppins", fontSize: 30 }}>
                    {item.title}
                  </Typography>
                  <Typography variant="body2" sx={{ mt: 1, fontFamily: "Poppins", fontSize: 20, fontWeight: 500 }}>
                    {item.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>




      <Box
  sx={{
    backgroundColor: "#f5f1ed", 
    p: { xs: "30px 16px", sm: "40px 20px", md: "60px 40px" },
    position: "relative",
    overflow: "hidden",
    mt: { xs: 3, sm: 4, md: 5 },
    mb: { xs: 3, sm: 4, md: 5 },
  }}
>
  <Box
    sx={{
      position: "absolute",
      left: { xs: "-20%", sm: "-15%", md: "-10%" },
      top: "-20%", 
      width: { xs: "60%", sm: "50%", md: "40%" }, 
      height: "120%", 
      backgroundColor: "#d8c7b8", 
      borderRadius: "50%",
      zIndex: 0,
      display: { xs: "none", sm: "block" }, 
    }}
  />
  
  <Box sx={{ 
    display: "flex", 
    flexDirection: { xs: "column", md: "row" }, 
    gap: { xs: 4, sm: 5, md: 6 },
    position: "relative", 
    zIndex: 1 
  }}>
    <Box sx={{ 
      flex: { xs: "1 1 auto", md: "0 0 50%" },
      width: { xs: "100%", md: "50%" },
      display: "flex", 
      flexDirection: "column", 
      gap: { xs: 3, sm: 4 },
      position: "relative",
      pl: { md: 4 },
    }}>
      <Card 
        sx={{ 
          borderRadius: 2, 
          boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.08)", 
          overflow: "visible",
          position: "relative",
          p: { xs: 2, sm: 3 },
          bgcolor: "white",
          width: { xs: "90%", sm: "80%", md: "70%" }, 
          ml: "auto", 
          mr: 0,
        }}
      >
        <Box
          sx={{
            position: "absolute",
            left: { xs: "-60px", sm: "-80px", md: "-100px" },
            top: "50%",
            transform: "translateY(-50%)",
            width: { xs: 80, sm: 110, md: 140 },
            height: { xs: 80, sm: 110, md: 140 },
            backgroundColor: "white",
            borderRadius: "50%",
            display: { xs: "none", sm: "flex" }, 
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.1)",
            zIndex: 2,
          }}
        >
          <TbTargetArrow size="60%" color="#A56A43" />
        </Box>
        
        <Box sx={{ ml: { xs: 0, sm: 6 } }}>
          <Typography variant="h5" fontWeight="bold" color="#A56A43" sx={{ mb: 1, fontSize: { xs: 18, sm: 20, md: 22 } }}>
            Our Mission
          </Typography>
          <Typography fontSize={{ xs: 13, sm: 14 }} color="text.secondary" lineHeight={1.6}>
            We use ethically sourced materials and expert craftsmanship to create durable, stylish leather goods, 
            offering sophisticated designs that elevate lifestyles while promoting sustainability.
          </Typography>
        </Box>
      </Card>
      
      <Card 
        sx={{ 
          borderRadius: 2, 
          boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.08)", 
          overflow: "visible",
          position: "relative",
          p: { xs: 2, sm: 3 },
          bgcolor: "white",
          width: { xs: "90%", sm: "80%", md: "70%" },
          ml: 0,
          mr: "auto",
        }}
      >
        <Box sx={{ mr: { xs: 0, sm: 6 } }}>
          <Typography variant="h5" fontWeight="bold" color="#A56A43" sx={{ mb: 1, fontSize: { xs: 18, sm: 20, md: 22 } }}>
            Our Vision
          </Typography>
          <Typography fontSize={{ xs: 13, sm: 14 }} color="text.secondary" lineHeight={1.6}>
            We aim to be a globally recognized brand for excellence in leather craftsmanship, redefining 
            luxury with high-quality, Eco-friendly products while preserving traditional artistry and 
            ensuring customer satisfaction.
          </Typography>
        </Box>
        
        <Box
          sx={{
            position: "absolute",
            right: { xs: "-60px", sm: "-80px", md: "-100px" },
            top: "50%",
            transform: "translateY(-50%)",
            width: { xs: 80, sm: 110, md: 140 },
            height: { xs: 80, sm: 110, md: 140 },
            backgroundColor: "white",
            borderRadius: "50%",
            display: { xs: "none", sm: "flex" },
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.1)",
            zIndex: 2,
          }}
        >
          <HiOutlineLightBulb size="60%" color="#A56A43" />
        </Box>
      </Card>
    </Box>

    <Box sx={{ 
      flex: { xs: "1 1 auto", md: "1 1 50%" },
      display: "flex", 
      flexDirection: "column", 
      justifyContent: "center",
      pl: { xs: 0, sm: 2, md: 4 },
      mt: { xs: 3, md: 0 }
    }}>
      <Typography 
        variant="h4" 
        sx={{ 
          fontWeight: "600", 
          color: "#333",
          mb: 2,
          fontSize: { xs: 24, sm: 28, md: 32 }
        }}
      >
        What We Stand For
      </Typography>
      
      <Box sx={{ 
        width: { xs: 120, sm: 150, md: 170 }, 
        height: 3, 
        backgroundColor: "#9B7355", 
        mb: { xs: 3, md: 4 } 
      }} />
      
      <Typography 
        sx={{ 
          color: "#666", 
          fontSize: { xs: 14, sm: 15, md: 16 }, 
          lineHeight: 1.7,
          maxWidth: "550px" 
        }}
      >
        We envision becoming a globally recognized brand synonymous with luxury, craftsmanship, and 
        sustainability in the leather industry. Our goal is to redefine elegance and durability by 
        creating premium leather products that stand the test of time.
      </Typography>
    </Box>
  </Box>
</Box>






      <Bar bgColor="#987760" buttonBarText="Get a discount on customized design" />

      <Box sx={{ py: 8, textAlign: "center" }}>
        <Typography
          variant="h4"
          component="h4"
          sx={{ fontWeight: 600, fontFamily: "Poppins", fontSize: { xs: "2rem", md: "h3" }, mb: 2 }}
        >
          Why Choose Us
        </Typography>
        <Box sx={{ width: 180, height: 4, backgroundColor: "#9B7355", mx: "auto", mb: 6 }} />
        <Container maxWidth="lg">
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              justifyContent: "center",
              alignItems: "center",
              gap: { xs: 4, md: 6 },
              mb: 6,
            }}
          >
            <CircleStat progress={75} label="75%" subLabel="of Excellent reviews" />
            <CircleStat progress={90} label="10k" subLabel="More Sales" />
            <CircleStat progress={100} label="200+" subLabel="Happy Customers" />
          </Box>
          <Typography
            sx={{
              maxWidth: 900,
              mx: "auto",
              color: "rgba(0,0,0,0.45)",
              fontFamily: "Poppins",
              fontSize: { xs: "1rem", md: "1.2rem" },
              fontWeight: 500,
              lineHeight: 1.6,
            }}
          >
            We offer durability, timeless designs, and unmatched craftsmanship to ensure your satisfaction.
            Choose us for excellence in every detail!
          </Typography>
        </Container>
      </Box>
    </>
  );
};

export default AboutUs;
