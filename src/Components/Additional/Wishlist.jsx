import React from 'react';
import {
  Box,
  Typography,
  Button,
  Grid,
  Alert,
  Container
} from '@mui/material';
import ProductCard from "../../Components/Additional/ProductCard"; 
import { useWishlist } from '../../Context/WishlistContext';
import CustomButton from '../Additional/GlobalButton';

const Wishlist = () => {
  const { wishlistItems, clearWishlist } = useWishlist();

  return (
    <Container maxWidth="xl">
      <Box sx={{ display: 'flex', flexDirection: 'column', p: 2, mx: 'auto' }}>
        <Box sx={{ textAlign: 'center', mb: 4 }}>
          <Typography
            variant="h4"
            component="h1"
            fontWeight="bold"
            marginBottom="0"
            gutterBottom
          >
            Wish list
          </Typography>

          <Box
            sx={{
              width: '85px',
              height: '4px',
              backgroundColor: '#a18168', 
              borderRadius: '2px',
              mx: 'auto',
              mb: 1.5
            }}
          />

          <Typography variant="body1" color="text.secondary">
            Your wish-list is waiting! Grab your favorites before they're gone!
          </Typography>
        </Box>

        {wishlistItems.length === 0 && (
          <Box textAlign="center" py={5}>
            <Alert severity="info" sx={{ mt: 3, mb: 3 }}>
              Your wishlist is empty. Browse our products and add your favorites!
            </Alert>
            <CustomButton
              text="Continue Shopping"
              borderColor="#987760"
              fontColor="#987760"
              padding={2}
              hoverStyles={{ backgroundColor: "#987760", color: "white" }}
              swipeHover={true}
              removeBorder={true}
              to="/Categories/footwear" 
            />
          </Box>
        )}

        {wishlistItems.length > 0 && (
          <>
            <Box 
              display="flex" 
              justifyContent="flex-end" 
              mb={2}
            >
              <Button
                variant="outlined"
                color="error"
                onClick={clearWishlist}
                sx={{ 
                  borderRadius: '8px',
                  textTransform: 'none',
                }}
              >
                Clear Wishlist
              </Button>
            </Box>
            
            <Grid container spacing={3}>
              {wishlistItems.map((item) => (
                <Grid item xs={12} sm={6} md={4} lg={3} key={item.id}>
                  <ProductCard product={item} />
                </Grid>
              ))}
            </Grid>
            
            <Box display="flex" justifyContent="center" mt={5}>
              <CustomButton
                text="Continue Shopping"
                borderColor="#987760"
                fontColor="#987760"
                padding={2}
                hoverStyles={{ backgroundColor: "#987760", color: "white" }}
                swipeHover={true}
                removeBorder={true}
                to="/Categories/footwear"
              />
            </Box>
          </>
        )}
      </Box>
    </Container>
  );
};

export default Wishlist;