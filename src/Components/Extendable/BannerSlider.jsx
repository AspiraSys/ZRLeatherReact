import React from 'react';
import { Box, Button, Typography, useMediaQuery, useTheme } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';
import images from '../../Utils/Images';
import CustomButton from "../../Components/Additional/GlobalButton";

const BannerSlide = ({ title, subtitle, description, desktopImage, tabletImage, mobileImage, reverse }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'lg'));

  const displayImage = isMobile ? mobileImage : isTablet ? tabletImage : desktopImage;

  return (
    <Box
      display="flex"
      flexDirection={{
        xs: 'column',
        lg: reverse ? 'row-reverse' : 'row',
      }}
      alignItems="center"
      justifyContent="space-between"
      sx={{
        backgroundColor: '#F6EDE3',
        position: 'relative',
        overflow: 'hidden',
        minHeight: { xs: 'auto', sm: '500px', lg: '600px' },
        padding: { xs: '2rem 0', md: 0 }
      }}
    >
      <Box
        position="relative"
        sx={{
          mb: { xs: 4, lg: 0 },
          width: { xs: '100%', lg: '50%' },
          display: 'flex',
          justifyContent: { xs: 'center', lg: reverse ? 'flex-end' : 'flex-start' },
          padding: 0,
          height: { xs: '250px', sm: '350px', md: '450px', lg: '600px' },
        }}
      >
        <Box
          component="img"
          src={displayImage}
          alt="Leather product showcase"
          sx={{
            maxWidth: '100%',
            width: { xs: 'auto', lg: 'auto' },
            height: '100%',
            objectFit: 'contain',
            objectPosition: { xs: 'center', lg: reverse ? 'right bottom' : 'left bottom' },
            margin: 0,
          }}
        />
      </Box>

      <Box
        maxWidth={{ xs: '100%', lg: '50%' }}
        width="100%"
        display="flex"
        flexDirection="column"
        alignItems={{ xs: 'center', lg: 'flex-start' }}
        textAlign={{ xs: 'center', lg: 'left' }}
        sx={{
          px: { xs: 3, sm: 4, md: 6 },
          pl: { lg: reverse ? 6 : 8 },
          pr: { lg: reverse ? 8 : 6 },
          mb: { xs: 4, lg: 0 },
          order: { xs: 2, lg: 'unset' },
          maxWidth: { xs: '100%', sm: '80%', md: '70%', lg: '50%' },
        }}
      >
        <Typography
          variant="subtitle1"
          sx={{
            color: 'primary.main',
            fontWeight: 600,
            fontSize: { xs: '0.9rem', sm: '1rem', md: '1.1rem' }
          }}
          gutterBottom
        >
          {subtitle}
        </Typography>

        <Typography
          variant="h4"
          sx={{
            fontWeight: 700,
            lineHeight: 1.3,
            fontSize: { xs: '1.4rem', sm: '1.6rem', md: '1.8rem' },
            letterSpacing: 1,
            marginBottom: { xs: 2, md: 3 }
          }}
        >
          {title}
        </Typography>

        <Typography
          variant="body1"
          sx={{
            color: 'text.secondary',
            fontWeight: 400,
            fontSize: { xs: '0.9rem', sm: '1rem', md: '1.1rem' },
            marginBottom: { xs: 3, md: 4 },
          }}
        >
          {description}
        </Typography>

        <CustomButton
          text="Explore More"
          borderColor="#987760"
          fontColor="#987760"
          fontSize="4px"
          padding={3.5}
          hoverStyles={{ backgroundColor: "#987760", color: "white" }}
          swipeHover={true}
          removeBorder={true}
          to='/categories/footwear'
        />
      </Box>
    </Box>
  );
};

const bannerSlides = [
  {
    title: "Discover the Art of Fine Leather Craftsmanship",
    subtitle: "Luxury Meets Durability",
    description:
      "Discover the beauty of authentic leather, where every product is a masterpiece, tailored for those who value quality and style.",
    desktopImage: images.slider1,
    tabletImage: images.classboots,
    mobileImage: images.classboots,
  },
  {
    title: "Handcrafted Leather Accessories",
    subtitle: "Timeless Elegance",
    description:
      "Each piece tells a story of tradition and excellence, designed to complement your lifestyle with sophistication and practical luxury.",
    desktopImage: images.slider2,
    tabletImage: images.classybags,
    mobileImage: images.classybags,
  },
  {
    title: "Premium Materials, Exceptional Quality",
    subtitle: "Built to Last",
    description:
      "Our artisans select only the finest leathers and materials, ensuring each product ages beautifully and withstands the test of time.",
    desktopImage: images.slider3,
    tabletImage: images.classwallets,
    mobileImage: images.classwallets,
  },
  {
    title: "Personalized Leather Collections",
    subtitle: "Uniquely Yours",
    description:
      "Express your individuality with our customizable leather goods, where traditional craftsmanship meets your personal style.",
    desktopImage: images.slider4,
    tabletImage: images.classybelts,
    mobileImage: images.classybelts,
  },
];

const BannerSlider = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box sx={{ position: 'relative', width: '100%', overflow: 'hidden' }}>
      <Swiper
        pagination={{
          clickable: true,
          dynamicBullets: isMobile,
        }}
        modules={[Pagination, Autoplay]}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop={true}
        style={{
          '--swiper-pagination-color': theme.palette.primary.main,
          '--swiper-pagination-bullet-inactive-color': '#999999',
          '--swiper-pagination-bullet-inactive-opacity': '0.5',
          '--swiper-pagination-bullet-size': isMobile ? '8px' : '10px',
          '--swiper-pagination-bullet-horizontal-gap': '6px'
        }}
        className="banner-slider"
      >
        {bannerSlides.map((slide, index) => (
          <SwiperSlide key={index}>
            <BannerSlide
              {...slide}
              reverse={index % 2 !== 0}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <style jsx global>{`
        .banner-slider {
          width: 100% !important;
        }
        
        .banner-slider .swiper-pagination {
          position: absolute;
          bottom: 20px !important;
          left: 0 !important;
          width: 100% !important;
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 10;
        }
        
        @media (max-width: 600px) {
          .banner-slider .swiper-pagination {
            bottom: 10px !important;
          }
        }
        
        @media (min-width: 601px) and (max-width: 1200px) {
          .banner-slider .swiper-pagination {
            bottom: 15px !important;
          }
        }
      `}</style>
    </Box>
  );
};

export default BannerSlider;