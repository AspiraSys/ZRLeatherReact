import React from 'react';
import { Box, Button, Container, Typography } from '@mui/material';
import images from '../../Utils/Images';
import CustomButton from "../../Components/Additional/GlobalButton";

const HomeAdvBanner = () => {
  return (
    <Container
      maxWidth={false}
      sx={{
        backgroundColor: '#CC9B70', 
        padding: 0,
        overflow: 'hidden',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          alignItems: 'center',
          justifyContent: 'space-between',
          width: '100%',
          minHeight: { xs: 'auto', md: '400px' },
          px: { xs: 3, sm: 5, md: 8 },
          py: { xs: 6, md: 4 },
          position: 'relative',
        }}
      >
        <Box
          sx={{
            width: { xs: '100%', md: '40%' },
            display: 'flex',
            justifyContent: 'center',
            order: { xs: 1, md: 0 },
            mb: { xs: 4, md: 0 },
          }}
        >
          <Box
            sx={{
              position: 'relative',
              width: { xs: '80%', sm: '60%', md: '90%' },
              maxWidth: '350px',
            }}
          >

            <Box
              component="img"
              src={images.fresh}
              alt="Exclusive leather shoes collection"
              sx={{
                width: '100%',
                height: 'auto',
                position: 'relative',
                zIndex: 2,
              }}
            />
          </Box>
        </Box>

        <Box
          sx={{
            width: { xs: '100%', md: '55%' },
            textAlign: { xs: 'center', md: 'left' },
            order: { xs: 0, md: 1 },
            mb: { xs: 3, md: 0 },
          }}
        >
          <Typography
            variant="subtitle1"
            sx={{
              color: '#6B300D',
              fontSize: { xs: '1rem', md: '1.6rem' },
              fontWeight: 700,
            }}
          >
            Fresh Collection
          </Typography>

          <Typography
            variant="h2"
            sx={{
              color: 'white',
              fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
              fontWeight: 500,
              lineHeight: 1.2,
              mb: 2,
            }}
          >
            Where Craft Becomes a Masterpiece.
          </Typography>

          <Typography
            variant="body1"
            sx={{
              color: '#6E260E',
              fontSize: { xs: '0.9rem', md: '1rem' },
              mb: 2,
              maxWidth: '550px',
              mx: { xs: 'auto', md: 0 },
            }}
          >
            Rediscover your style with our exclusive designs that seamlessly blend comfort,
            elegance, and modern trends.
          </Typography>

          <CustomButton
            text="Explore More"
            borderColor="#6E260E"
            fontColor="#6E260E"
            padding={{ xs: 1, md: 1 }} 
            hoverStyles={{
              backgroundColor: "#6E260E",
              borderColor: "white",
              color: "white"
            }}
            swipeHover={true}
            removeBorder={false}
            to="/categories/footwear"
            sx={{
              borderRadius: '4px',
              fontSize: { xs: "13px", md: "13px" },
              color: 'white'
            }}
          />

        </Box>
      </Box>
    </Container>
  );
};

export default HomeAdvBanner;