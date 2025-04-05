import React from "react";
import {
  Box,
  Typography,
  Container,
  Card,
  CardMedia,
  CardContent,
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
  margin: "0 auto",
  marginBottom: "24px",
});

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
      image: "src/assets/images/about-3.png",
    },
  ];

  return (
    <>
      <Box>
        <Banner>
          <Typography variant={"h4"} fontWeight="600">
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
                fontWeight: "600",
              }}
            >
              <span style={{ color: "#A78870", borderRadius: "2px" }}>
                Our Legacy:
              </span>{" "}
              Built on Quality, Styled with Passion
            </Typography>
            <Box
              sx={{
                width: "180px",
                height: "4px",
                backgroundColor: "#9B7355",
                mb: 2,
              }}
            ></Box>
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
              We are a dedicated team committed to crafting premium leather
              products that blend timeless elegance with exceptional durability.
              Each item is meticulously handcrafted using the finest materials
              and techniques, ensuring superior quality and sustainability in
              every detail.
            </Typography>
          </Grid>

          <Grid size={{ xs: 12, md: 6 }} sx={{ p: { xs: 3, md: 5 } }}>
            <Card
              sx={{
                backgroundColor: "transparent",
                boxShadow: "none",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <CardMedia
                component="img"
                image="src/assets/images/aboutus.png"
                alt="Leather Shoes"
                sx={{
                  maxWidth: "80%",
                  height: "auto",
                  width: { xs: "80%", md: "100%" },
                }}
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
            {features.map((item, index) => (
              <Grid size={{ xs: 12, md: 4, sm: 6 }} key={index}>
                <Card
                  sx={{
                    boxShadow: 3,
                    borderRadius: 2,
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  <CardMedia
                    component="img"
                    height="500"
                    image={item.image}
                    alt={item.title}
                  />
                  <CardContent
                    sx={{
                      position: "absolute",
                      bottom: "10%",
                      left: "10%",
                      color: "white",
                      textAlign: "left",
                      p: 2,
                    }}
                  >
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: "bold",
                        fontFamily: "Poppins",
                        fontSize: "30px",
                      }}
                    >
                      {item.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        mt: 1,
                        fontFamily: "Poppins",
                        fontSize: "20px",
                        fontWeight: "500",
                      }}
                    >
                      {item.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>


      {/* card and round container */}
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
        <SectionTitle variant="h4" align="center" sx={{textTransform:'capitalize',textAlign:'left'}}>
          what we stand for
          </SectionTitle>
          <Box
              sx={{
                width: "200px",
                height: "4px",
                backgroundColor: "#9B7355",
                mb: 2,
              }}
            ></Box>
           <Typography fontSize={16} color="text.secondary">
            We envision becoming a globally recognized brand synonymous with luxury, craftsmanship, and sustainability
            in the leather industry. Our goal is to redefine elegance and durability by creating premium leather
            products.
          </Typography>
        </Box>
      </Box>
    </Box>

      {/* bar component */}
      <Bar
        bgColor="#987760"
        buttonBarText="Get a discount on customized design"
      />
    </>
  );
};

export default AboutUs;
