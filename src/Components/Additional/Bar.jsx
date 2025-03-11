import React from "react";
import PropTypes from "prop-types";
import CustomButton from "./GlobalButton";
import { AppBar, Box, Typography, styled } from "@mui/material";
import Breadcrumbs from "@mui/material/Breadcrumbs";
const BreadcrumbText = styled(Typography)(({ theme }) => ({
  fontSize: 17,
  color: theme.palette.primary.light,
  fontWeight: 500,
}));

export default function Bar({
  bgColor = "",
  contactText = "",
  buttonBarText = "",
  greyText = "",
  breadCrumbs = false,
  breadText1 = "",
  breadText2 = "",
  breadText3 = "",
}) {
  return (
    <AppBar
      position="static"
      sx={{
        p: breadCrumbs ? 1.5 : {lg:3, md: 3, xs: 2,sm:2 },
        backgroundColor: bgColor,
        maxWidth: "100%",
        my: { xs: 2, sm: 4 },
        boxShadow: "none",
      }}
    >
      {contactText && (
        <Typography
          variant="h5"
          align="center"
          fontSize={{ lg:28, md: 28, xs: 20,sm:22 }}
          sx={{ fontWeight: 500 }}
        >
          {contactText}
        </Typography>
      )}
      {buttonBarText && (
        <Box
          sx={{
            display: "flex",
            width: { lg: "95%", md: "100%" },
            justifyContent: "space-between",
            px: { lg: 3, md: 2 },
            margin: "auto",
          }}
        >
          <Typography fontSize={{ lg:22, md: 22, xs: 18,sm:20 }} sx={{ fontWeight: 500 }}>
            {buttonBarText}
          </Typography>
          <CustomButton text="Shop Now" fontColor="white" borderColor='white' hoverStyles={{backgroundColor:'white',color:'#987760'}}/>
        </Box>
      )}
      {greyText && (
        <Typography
          variant="h5"
          color="black"
          margin="auto"
          fontWeight="500"
          sx={{ fontSize: "1.8rem" }}
        >
          {greyText}
        </Typography>
      )}
      {breadCrumbs && (
        <Breadcrumbs
          aria-label="breadcrumb"
          sx={{
            justifyContent: "center",
            display: "flex",
            pt: 1,
            fontWeight: 500,
          }}
        >
          <BreadcrumbText>{breadText1}</BreadcrumbText>
          <BreadcrumbText>{breadText2}</BreadcrumbText>
          <BreadcrumbText>{breadText3}</BreadcrumbText>
        </Breadcrumbs>
      )}
    </AppBar>
  );
}
Bar.propTypes = {
  bgColor: PropTypes.string,
  contactText: PropTypes.string,
  buttonBarText: PropTypes.string,
  greyText: PropTypes.string,
  breadCrumbs: PropTypes.bool,
  breadText1: PropTypes.string,
  breadText2: PropTypes.string,
  breadText3: PropTypes.string,
};
