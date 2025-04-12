import { Box, Button, Container, Typography, useTheme } from '@mui/material';
import { styled } from '@mui/system';
import images from '../../Utils/Images';

const HomeAdvBanner = () => {
  const theme = useTheme();

  return (
    <Container
      maxWidth={false}
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(135deg, rgba(243,233,225,0.9) 0%, rgba(222,207,195,0.9) 100%)',
        position: 'relative',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0,0,0,0.05)',
        },
      }}
    >
      <Box width={'30%'}>

        <img src={images.bags1} />
      </Box>  
      <Box
        sx={{
          position: 'relative',
          zIndex: 1,
          textAlign: 'left',
          color: theme.palette.text.primary,
          px: 2,
          maxWidth: 800,
        }}
      >
        <Typography
          variant="h1"
          sx={{
            fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4.5rem' },
            fontWeight: 700,
            letterSpacing: '0.1em',
            mb: 2,
          }}
        >
          Fresh Collection
        </Typography>
        
        <Typography
          variant="subtitle1"
          sx={{
            fontSize: { xs: '1.1rem', md: '1.25rem' },
            mb: 4,
            letterSpacing: '0.05em',
            fontStyle: 'italic',
          }}
        >
          Where Craft Becomes a Masterpiece.
        </Typography>

        <Typography
          variant="body1"
          sx={{
            fontSize: { xs: '1rem', md: '1.1rem' },
            mb: 4,
            lineHeight: 1.6,
            maxWidth: 600,
           
          }}
        >
          Rediscover your style with our exclusive designs that seamlessly blend comfort, elegance, and modern trends.
        </Typography>

        <Button
          variant="contained"
          size="large"
          sx={{
            px: 6,
            py: 1.5,
            fontSize: '1.1rem',
            backgroundColor: theme.palette.common.black,
            '&:hover': {
              backgroundColor: theme.palette.grey[800],
            },
          }}
        >
          Explore More
        </Button>
      </Box>
    </Container>
  );
};

export default HomeAdvBanner;