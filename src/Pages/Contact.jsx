import React, { useEffect, useState } from "react";
import Bar from "../Components/Additional/Bar";
import DynamicForm from "../Components/Additional/DynamicForm";
import Grid from "@mui/material/Grid2";
import { MdEmail } from "react-icons/md";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaPhoneAlt, FaStore } from "react-icons/fa";
import { Box, Container, Paper, Typography } from "@mui/material";
import SocialMediaIcons from "../Components/Additional/SocialMediaIcons";
import ResponsiveIcon from "../Components/Additional/ResponsiveIcon";
import images from "../Utils/Images";

const formFields = [
  {
    label: "Name",
    type: "text",
    placeholder: "Enter your name",
    required: true,
  },
  {
    label: "Email Address",
    type: "email",
    placeholder: "Enter your email",
    required: true,
  },
  {
    label: "Mobile Number",
    type: "tel",
    placeholder: "Mobile Number",
    required: true,
  },
  {
    label: "Full Address",
    type: "text",
    placeholder: "Enter Your Address",
    required: true,
  },
  {
    label: "Message",
    type: "text",
    placeholder: "Type here...",
    multiline: true,
    rows: 4,
  },
];

const iconCardData = [
  {
    icon: <ResponsiveIcon Icon={MdEmail} />,
    title: "Email",
    text: "zrleather01@gmail.com",
  },
  {
    icon: <ResponsiveIcon Icon={IoLogoWhatsapp} />,
    title: "Whats-app",
    text: "+91 965874320",
  },
  {
    icon: <ResponsiveIcon Icon={FaPhoneAlt} />,
    title: "Phone",
    text: "04174 242052",
  },
  {
    icon: <ResponsiveIcon Icon={FaStore} />,
    title: "Shop",
    text: "Demo City - 001 000",
  },
];

export default function Contact() {
  const [height, setHeight] = useState(260);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 576) setHeight(200); // Mobile
      else if (window.innerWidth < 768) setHeight(200); // Tablet
      else setHeight(260);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <Bar contactText="Contact Us" bgColor="#CFBBAD" />
      <Container sx={{ my: 4 }}>
        <Grid
          container
          spacing={{lg:0,md:4,sm:0,xs:0}}
          sx={{ px: { sm: 0,md:0 }, rowGap: { lg: 6, md: 6, sm: 3, xs: 3 } ,justifyContent:'center'}}
        >
          {/* Left Section - Contact Info */}
          <Grid
            size={{ lg: 6, md: 6, xs: 12 }}
            sx={{ order: { lg: 1, md: 1, sm: 2, xs: 2 } }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 3,
                pr: { lg: 8, md: 0, sm: 0 },
              }}
            >
              <Grid
                container
             rowSpacing={{lg:3,sm:2,xs:2}}
             columnSpacing={2}
              >
                {iconCardData.map((card, index) => (
                  <Grid key={index} size={{ xs: 6 }}>
                    <Paper
                      sx={{
                        px: 0,
                        py: { lg: 6, md: 5, sm: 4, xs: 3 },
                        textAlign: "center",
                        borderRadius: { lg: 5, md: 5, sm: 3, xs: 3 },
                        boxShadow: "none",
                        bgcolor: "rgba(236, 228, 222, 1)",
                      }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "center",
                          mb: 1,
                        }}
                      >
                        {card.icon}
                      </Box>
                      <Typography
                        variant="h6"
                        fontWeight={600}
                        sx={{ fontSize: { lg: 20, md: 20, xs: 15, sm: 15 } }}
                      >
                        {card.title}
                      </Typography>
                      <Typography
                        variant="body1"
                        sx={{
                          whiteSpace: "pre-line",
                          fontSize: { lg: 16, md: 16, xs: 13, sm: 13 },
                        }}
                      >
                        {card.text}
                      </Typography>
                    </Paper>
                  </Grid>
                ))}
              </Grid>

              <Box
                sx={{
                  borderRadius: 2,
                  overflow: "hidden",
                  boxShadow: " rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px",
                }}
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62255.08385047803!2d78.67924623052326!3d12.78222871064216!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bad08e1a0958fdf%3A0x61389b9026ec19f5!2sAmbur%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1741617527100!5m2!1sen!2sin"
                  style={{ border: 0 }}
                  width="100%"
                  height={height}
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
              </Box>
            </Box>
          </Grid>

          {/* Right Section - Contact Form */}
          <Grid
            size={{ lg: 6, md: 6, xs: 12 }}
            sx={{ order: { sm: 1, lg: 2, md: 2, xs: 1 } }}
          >
            <DynamicForm fields={formFields} />
          </Grid>
        </Grid>
      </Container>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <Typography
          variant="h5"
          fontWeight="600"
          pb={{ lg: 3, md: 2, sm: 2, xs: 2 }}
          pt={{ lg: 3, md: 1, sm: 0, xs: 0 }}
        >
          Stay Connected
        </Typography>
      </Box>
      <SocialMediaIcons />
      <Box sx={{ backgroundColor: "#765D4B" }} my={{lg:8,md:8,sm:4,xs:4}} px={{lg:5,md:3,sm:1,xs:1}} py={{lg:5,md:5,sm:3,xs:2}}>
        <ImageGrid />
      </Box>
    </>
  );
}

function ImageGrid() {
  return (
    <Container sx={{ textAlign: "center" }}>
      <Box>
        <Typography color="white" fontWeight='600' sx={{ fontSize: { xs: "23px", sm: "23px", md: "28px", lg: "28px" }}}>
          Your Style, Our Challenge
        </Typography>
        <Typography variant="body1" color="white" pt={2} fontSize={18} sx={{width:{lg:'60%'},margin:'auto'}}>
          We love challenges—big or small! Explore timeless leather designs
          crafted to match your unique needs.
        </Typography>
      </Box>
      <Box className='gridImageContainer'
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: {lg:0.5,sm:1.2,xs:1.2,md:0.5},
          pt: {lg:7,md:4,sm:2,xs:2},
        }}
      >
        {Object.values(images)
          .slice(6,11)
          .map((image, index,array) => (
            <Box
              key={index}
              sx={{
                width: { lg: "16.66%", md: "19%", sm: "20%", xs: "48%" },
                height:{lg:'191px',md:'160px',sm:'150px',xs:'150px'},
                overflow: "hidden",
                display: {
                  sm: index === array.length - 1 ? "none" : "block",   xs: index === array.length - 1 ? "none" : "block" ,lg:'block',md:'block'
                },
                transition: "width 0.4s ease-in-out",
                "&:hover": {
                  width: { lg: "21.66%" },
                },
              }}
            >
              <img
                src={image}
                alt={`footwear ${index + 1}`}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </Box>
          ))}
      </Box>
    </Container>
  );
}

