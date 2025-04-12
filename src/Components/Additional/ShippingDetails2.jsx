import { IoArrowBack } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { Container, Typography, Box } from "@mui/material";
export default function ShippingDetails2()
{
    const navigate = useNavigate();
    return(
        <>
        
      
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

        <Typography variant='h1'>i am shipping details 2</Typography>
        </>
    )
}