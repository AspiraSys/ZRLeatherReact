import DynamicForm from "./DynamicForm";
import { Container, Typography, Box } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { IoArrowBack } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

export default function ShippingDetails() {
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
      multiline: true,
      rows: 3,
    },
    {
      label: "Delivery Address",
      type: "text",
      placeholder: "Enter Your Address",
      required: true,
      multiline: true,
      rows: 3,
    },
    { label: "CityPinCodeGroup" },
    {
      label: "District",
      type: "text",
      placeholder: "Enter your district",
      required: true,
    },
  ];
  const navigate = useNavigate();
  return (
    <>
      <Container sx={{ my: 4 }}>
        <Box
          sx={{
            display: "inlineFlex",
            justifyContent: "start",
            alignItems: "center",
            gap: 2.5,
            pb:3
          }}
        >
          <IoArrowBack
            onClick={() => navigate(-1)}
            cursor="pointer"
            size={32}
          />
          <Typography variant="h5" fontWeight="600">
            Shipping details
          </Typography>
        </Box>
        <Grid
          container
          spacing={{ lg: 0, md: 4, sm: 0, xs: 0 }}
          sx={{
            px: { sm: 0, md: 0 },
            rowGap: { lg: 6, md: 6, sm: 3, xs: 3 },
            justifyContent: "center",
          }}
        >
          {/* Left Section - Form */}
          <Grid
            size={{ lg: 6, md: 6, xs: 12 }}
            sx={{ order: { sm: 2, lg: 1, md: 1, xs: 2 } }}
          >
            <DynamicForm fields={formFields} buttonText="Confirm Order" navigate={true}/>
          </Grid>

          {/* Right Section -details about the product*/}
          <Grid
            size={{ lg: 6, md: 6, xs: 12 }}
            sx={{ order: { lg: 2, md: 2, sm: 1, xs: 1 } }}
          >
          <Typography variant="h4">I am price details</Typography>
          </Grid>
        </Grid>
      </Container>
      ;
    </>
  );
}
