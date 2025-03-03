import React from "react";
import { Box, Typography, Container, Grid, Card, CardMedia, CardContent } from "@mui/material";
import { styled } from "@mui/system";

const Banner = styled(Box)({
  backgroundImage: "url(/assets/AboutUs-banner.png)",
  backgroundSize: "cover",
  backgroundPosition: "center",
  height: "250px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "white",
  fontSize: "2rem",
  fontWeight: "bold",
  fontFamily: 'Poppins, serif',
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
  margin: "0 auto",
  marginBottom: "24px",
});

const AboutUs = () => {
  const features = [
    {
      title: "Premium Leather Selection",
      description: "We source the finest quality leather from trusted suppliers, ensuring durability and texture.",
      image: "/assets/about-1.png",
    },
    {
      title: "Expert Craftsmanship",
      description: "Our skilled artisans meticulously handcraft each piece, blending traditional techniques.",
      image: "/assets/about-2.png",
    },
    {
      title: "Quality Assurance",
      description: "Every product undergoes rigorous quality checks to maintain the highest standards.",
      image: "/assets/about-3.png",
    },
  ];

  return (
    <Box sx={{ backgroundColor: "#f8f8f8" }}>
      <Banner>About Us</Banner>

      <Grid container alignItems="center" sx={{ p: { xs: 3, md: 5 } }}>
        <Grid item xs={12} md={6} sx={{ p: { xs: 3, md: 5 } }}>
          <Typography
            variant="h4"
            gutterBottom
            sx={{
              fontSize: { xs: "32px", md: "40px" },
              fontFamily: "Poppins",
              fontWeight: "600",
            }}
          >
            <span style={{ color: "#A78870", borderRadius: "2px" }}>Our Legacy:</span> Built on Quality, Styled with Passion
          </Typography>
          <Box sx={{ width: "180px", height: "4px", backgroundColor: "#9B7355", mb: 2 }}></Box>
          <Typography
            variant="body1"
            color="textSecondary"
            sx={{
              color: "#00000070",
              fontFamily: "Poppins",
              textAlign: "justify",
              fontWeight: 500,
              fontSize: { xs: "18px", md: "22px" },
            }}
          >
            We are a dedicated team committed to crafting premium leather products that blend timeless elegance with exceptional durability. Each item is meticulously handcrafted using the finest materials and techniques, ensuring superior quality and sustainability in every detail.
          </Typography>
        </Grid>

        <Grid item xs={12} md={6} sx={{ p: { xs: 3, md: 5 } }}>
          <Card sx={{ backgroundColor: "transparent", boxShadow: "none", display: "flex", justifyContent: "center" }}>
            <CardMedia component="img" image="/assets/aboutus.png" alt="Leather Shoes" sx={{ maxWidth: "80%", height: "auto", width: { xs: "80%", md: "100%" } }} />
          </Card>
        </Grid>
      </Grid>

      <Container sx={{ py: 5 }}>
        <SectionTitle variant="h4" align="center">
          How We Make Our Products
        </SectionTitle>
        <Divider />
        <Grid container spacing={3}>
          {features.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card sx={{ boxShadow: 3, borderRadius: 2, position: "relative", overflow: "hidden" }}>
                <CardMedia component="img" height="500" image={item.image} alt={item.title} />
                <CardContent sx={{ position: "absolute", bottom: "10%", left: "10%", color: "white", textAlign: "left", p: 2 }}>
                  <Typography variant="h6" sx={{ fontWeight: "bold", fontFamily: "Poppins",fontSize:"30px", }}>
                    {item.title}
                  </Typography>
                  <Typography variant="body2" sx={{ mt: 1, fontFamily: "Poppins",fontSize:"20px",fontWeight:"500" }}>
                    {item.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default AboutUs;

