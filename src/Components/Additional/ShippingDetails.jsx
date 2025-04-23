import { IoArrowBack } from "react-icons/io5";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Container, Typography, Box, Paper, useTheme, useMediaQuery } from "@mui/material";
import Grid from "@mui/material/Grid";
import images from '../../Utils/Images';
import data from "../../Stores/Reducers/Data/ProductDescription.json";
import DynamicForm from './DynamicForm'; 

export default function ShippingDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const [product, setProduct] = useState(null);
  const [priceDetails, setPriceDetails] = useState({
    price: 0,
    discount: "0%",
    deliveryCharges: "Free",
    totalAmount: 0,
    savings: 0
  });

  const shippingFields = [
    { name: "name", label: "Name:", placeholder: "Enter your name", required: true },
    { name: "emailAddress", label: "Email Address", placeholder: "Enter your email", required: true, type: "email" },
    { name: "mobileNumber", label: "Mobile Number:", placeholder: "Enter your mobile number", required: true },
    { name: "fullAddress", label: "Full Address:", placeholder: "Enter Your Address", required: true, multiline: true, rows: 2 },
    { name: "deliveryAddress", label: "Delivery Address:", placeholder: "Enter Your Address", required: true, multiline: true, rows: 2 },
    { name: "city", label: "City*", placeholder: "Enter your City", required: true, halfWidth: true },
    { name: "pinCode", label: "Pin code*", placeholder: "000-000", required: true, halfWidth: true },
    { name: "district", label: "District*", placeholder: "Enter your District", required: true }
  ];

  useEffect(() => {
    const foundProduct = data.products.find(p => p.id === parseInt(id || 1));
    if (foundProduct) {
      setProduct(foundProduct);
      const price = foundProduct.originalPrice;
      const discountedPrice = foundProduct.price;
      const discountPercentage = Math.round(((price - discountedPrice) / price) * 100);
      const savings = price - discountedPrice;
      setPriceDetails({
        price: price,
        discount: `${discountPercentage}%`,
        deliveryCharges: "Free",
        totalAmount: discountedPrice,
        savings: savings
      });
    }
  }, [id]);

  const handleFormSubmit = (formData) => {
    navigate(`/ShippingDetails2/${id}`, { state: formData });
  };

  return (
    <Container sx={{ my: { xs: 2, sm: 3, md: 4 } }}>
      <Box sx={{ display: "flex", alignItems: "center", gap: 2, pb: { xs: 2, sm: 3 } }}>
        <IoArrowBack onClick={() => navigate(-1)} cursor="pointer" size={isMobile ? 24 : 32} />
        <Typography variant={isMobile ? "h6" : "h5"} fontWeight="600">
          Shipping details
        </Typography>
      </Box>

      <Grid container spacing={{ xs: 2, sm: 3 }}>
        <Grid item xs={12} md={7}>
          <DynamicForm 
            fields={shippingFields}
            buttonText="Confirm Order"
            onSubmit={handleFormSubmit}
          />
        </Grid>

        <Grid item xs={12} md={5}>
          {product && (
            <Box
              sx={{
                position: { xs: "static", md: "sticky" },
                top: { md: "20px" },
                width: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                mt: { xs: 2, md: 0 },
              }}
            >
              <Box
                sx={{
                  width: "100%",
                  bgcolor: "#f5f5f5",
                  borderTopLeftRadius: "8px",
                  borderTopRightRadius: "8px",
                  overflow: "hidden",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  p: { xs: 1.5, sm: 2 },
                }}
              >
                <img
                  src={images[product.image]}
                  alt={product.name}
                  style={{
                    width: "100%",
                    maxWidth: "280px",
                    height: "auto",
                    objectFit: "contain",
                  }}
                />
              </Box>

              <Paper
                elevation={0}
                sx={{
                  width: "100%",
                  p: { xs: 2, sm: 2.5 },
                  border: "1px solid #e0e0e0",
                  borderTop: "none",
                  borderBottomLeftRadius: "8px",
                  borderBottomRightRadius: "8px",
                }}
              >
                <Typography variant="h6" fontWeight={600} sx={{ mb: 2 }}>
                  Price details
                </Typography>

                <Box sx={{ 
                  borderTop: '1px solid #e0e0e0', 
                  borderBottom: '1px solid #e0e0e0',
                  py: 1
                }}>
                  <Box sx={{ display: "flex", justifyContent: "space-between", mb: 1.5 }}>
                    <Typography color="text.secondary">Price</Typography>
                    <Typography fontWeight={500}>₹{priceDetails.price}</Typography>
                  </Box>

                  <Box sx={{ display: "flex", justifyContent: "space-between", mb: 1.5 }}>
                    <Typography color="text.secondary">Discount</Typography>
                    <Typography fontWeight={500}>{priceDetails.discount}</Typography>
                  </Box>

                  <Box sx={{ display: "flex", justifyContent: "space-between", mb: 1.5 }}>
                    <Typography color="text.secondary">Delivery Charges</Typography>
                    <Typography fontWeight={500} color="success.main">
                      {priceDetails.deliveryCharges}
                    </Typography>
                  </Box>
                </Box>

                <Box sx={{ display: "flex", justifyContent: "space-between", mt: 2, mb: 1 }}>
                  <Typography fontWeight={600}>Total Amount</Typography>
                  <Typography fontWeight={600}>₹{priceDetails.totalAmount}</Typography>
                </Box>

                <Typography color="success.main" fontWeight={500}>
                  You will save ₹{priceDetails.savings} on this order
                </Typography>
              </Paper>
            </Box>
          )}
        </Grid>
      </Grid>
    </Container>
  );
}