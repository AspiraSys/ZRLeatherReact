import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import { Box, Grid, Typography, TextField, Button } from '@mui/material';
import SocialMediaIcons from './SocialMediaIcons';
import images from "../../Utils/Images";

const Footer = () => {
  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ bgcolor: '#f5ebe2', py: 4, px: { xs: 2, md: 4 } }}>
        <Box sx={{ maxWidth: '1100px', mx: 'auto' }}>
          <Grid container spacing={1}>
            {/* Company Info */}
            <Grid item xs={12} sm={6} md={4} sx={{ fontSize: '25px' }}>
              <Box>
                <img 
                  src={images.logo} 
                  alt="ZR Leathers GOODS" 
                  style={{ width: '150px' }} 
                />
              </Box>
              <Typography sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2, color: '#3c3c3c', fontSize: "18px" }}>
                <FaMapMarkerAlt /> Demo street Abc colony City <br/>- 001 000
              </Typography>
              <Typography sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2, color: '#3c3c3c', fontSize: "18px" }}>
                <FaPhoneAlt /> +91 92356 54879
              </Typography>
              <Typography sx={{ display: 'flex', alignItems: 'center', gap: 1, color: '#3c3c3c', fontSize: "18px" }}>
                <FaEnvelope /> zrleathers01@gmail.com
              </Typography>
            </Grid>

            {/* Sections */}
            <Grid item xs={6} sm={3} md={2} sx={{ fontSize: '25px' }}>
              <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 5, color: '#3c3c3c' }}>
                Sections
              </Typography>
              {['Home', 'About Us', 'Categories', 'Brands', 'Contact'].map((item) => (
                <Typography 
                  key={item}
                  sx={{ mb: 3, color: '#3c3c3c', cursor: 'pointer', '&:hover': { color: '#b68c6b' }, fontSize: "18px" }}>
                  {item}
                </Typography>
              ))}
            </Grid>

            {/* Help Center */}
            <Grid item xs={6} sm={3} md={2} sx={{ fontSize: '25px'}}>
              <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 5, color: '#3c3c3c' }}>
                Help Center
              </Typography>
              {['My account', 'Wish List', 'Order', "FAQ's", 'Terms & Policy'].map((item) => (
                <Typography 
                  key={item}
                  sx={{ mb: 3, color: '#3c3c3c', cursor: 'pointer', '&:hover': { color: '#b68c6b' }, fontSize: "18px" }}>
                  {item}
                </Typography>
              ))}
            </Grid>

            {/* Newsletter */}
            <Grid item xs={12} sm={6} md={4} sx={{ fontSize: '25px' }}>
              <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 5, color: '#3c3c3c' }}>
                Follow us
              </Typography>
              <Typography sx={{ mb: 3, color: '#3c3c3c', fontSize: "18px" }}>
                Never Miss Anything From Store By Signing Up To Our Newsletter.
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, mb: 3 }}>
                <TextField
                  placeholder="Enter Your E-mail"
                  variant="outlined"
                  size="small"
                  sx={{ backgroundColor: 'white', flex: 1 }}
                />
                <Button 
                  variant="outlined" 
                  sx={{ bgcolor: 'white', color: "#b68c6b", border: "2px solid #b68c6b", '&:hover': { bgcolor: '#a47b5a', color: "white" }, width: "35%" }}>
                  Subscribe
                </Button>
              </Box>
              <Box sx={{ width: "62%" }}>
                <SocialMediaIcons />
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>

      {/* Copyright */}
      <Box sx={{ bgcolor: '#e3d5c3', color: '#3c3c3c', py: 2, textAlign: 'center', fontSize: '1rem' }}>
        All copy rights are under © 2019
      </Box>
    </Box>
  );
};

export default Footer;