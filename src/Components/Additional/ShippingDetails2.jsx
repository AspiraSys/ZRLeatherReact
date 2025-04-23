import { IoArrowBack } from "react-icons/io5";
import { useEffect, useState } from "react";
import { useNavigate, useLocation, useParams } from "react-router-dom";
import { Container, Typography, Box, Paper, Divider, Button, TextField } from "@mui/material";
import Grid from "@mui/material/Grid";
import images from '../../Utils/Images';
import data from "../../Stores/Reducers/Data/ProductDescription.json";

export default function ShippingDetails2() {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const shippingData = location.state;

  const [step, setStep] = useState(1);
  const [editMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState({});

  const [product, setProduct] = useState(null);
  const [priceDetails, setPriceDetails] = useState({
    price: 0,
    discount: 0,
    deliveryCharges: "Free",
    totalAmount: 0,
    savings: 0
  });

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

  useEffect(() => {
    if (shippingData) setFormData(shippingData);
  }, [shippingData]);

  const handleInputChange = (key, value) => {
    setFormData(prev => ({ ...prev, [key]: value }));
  };

  const formatLabel = (key) => {
    return key.replace(/([A-Z])/g, " $1").replace(/^./, str => str.toUpperCase());
  };

  const handleDoneEdit = () => {
    setEditMode(false);
  }

  const handleConfirmOrder = () => {
    navigate("/orderconfirmation");
  }

  return (
    <Container sx={{ my: 4 }}>
      <Box sx={{ display: "flex", alignItems: "center", gap: 2.5, pb: 3 }}>
        <IoArrowBack onClick={() => navigate(-1)} cursor="pointer" size={32} />
        <Typography variant="h5" fontWeight="600">
          Shipping Details
        </Typography>
      </Box>

      <Grid container spacing={3}>
        {/* Left Side */}
        <Grid item xs={12} md={7}>
          <Paper sx={{ p: 3, border: "1px solid #e0e0e0", borderRadius: "8px", minHeight: "450px" }}>
            <Box sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}>
              <Typography variant="h6" fontWeight={600}>
                Delivery Address
              </Typography>
              {!editMode ? (
                <Button size="small" onClick={() => setEditMode(true)}>
                  Edit
                </Button>
              ) : (
                <Button size="small" onClick={handleDoneEdit}>
                  Done
                </Button>
              )}
            </Box>
            <Divider sx={{ mb: 2 }} />

            {!editMode ? (
              Object.entries(formData).map(([key, value]) => (
                <Box key={key} sx={{ display: "flex", justifyContent: "space-between", mb: 1.5 }}>
                  <Typography fontWeight={500}>{formatLabel(key)}</Typography>
                  <Typography color="text.secondary">{value}</Typography>
                </Box>
              ))
            ) : (
              Object.entries(formData).map(([key, value]) => (
                <TextField
                  key={key}
                  label={formatLabel(key)}
                  value={value}
                  onChange={(e) => handleInputChange(key, e.target.value)}
                  fullWidth
                  margin="normal"
                  size="small"
                />
              ))
            )}

            <Divider sx={{ my: 3 }} />

            <Typography variant="h6" fontWeight={600} sx={{ mb: 2 }}>
              Order Summary
            </Typography>

            {product && (
              <>
                <Typography variant="body1" fontWeight={500}>
                  {product?.name}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ my: 1 }}>
                  ₹{priceDetails.totalAmount} - {priceDetails.deliveryCharges}
                </Typography>
              </>
            )}

            {step === 1 && (
              <Button variant="contained" fullWidth sx={{ mt: 4 }} onClick={() => setStep(2)}>
                Continue
              </Button>
            )}

            {step === 2 && (
              <Button variant="contained" fullWidth sx={{ mt: 4 }} onClick={() => setStep(3)}>
                Continue to Payment
              </Button>
            )}

            {step === 3 && (
              <>
                <Divider sx={{ my: 3 }} />
                <Typography variant="h6" fontWeight={600} sx={{ mb: 2 }}>
                  Payment Method
                </Typography>
                <Button variant="outlined" fullWidth sx={{ mb: 2 }}>
                  Cash on Delivery
                </Button>
                <Button variant="outlined" fullWidth sx={{ mb: 2 }}>
                  GPay
                </Button>
                <Button variant="outlined" fullWidth>
                  PhonePe
                </Button>
                <Button variant="contained" fullWidth sx={{ mt: 4 }} onClick={handleConfirmOrder}>
                  Confirm Order
                </Button>
              </>
            )}
          </Paper>
        </Grid>

        <Grid item xs={12} md={5}>
          {product && (
            <Box
              sx={{
                position: { md: "sticky" },
                top: { md: "20px" },
                width: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
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
                  p: 2,
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
                  p: 2.5,
                  border: "1px solid #e0e0e0",
                  borderTop: "none",
                  borderBottomLeftRadius: "8px",
                  borderBottomRightRadius: "8px",
                }}
              >
                <Typography variant="h6" fontWeight={600} sx={{ mb: 2 }}>
                  Price Details
                </Typography>

                <Divider sx={{ mb: 2 }} />

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

                <Divider sx={{ my: 2 }} />

                <Box sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}>
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
