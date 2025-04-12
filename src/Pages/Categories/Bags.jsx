import React from "react";
import { Grid, Typography, Button, Box } from "@mui/material";
import Bar from '../../Components/Additional/Bar'
import FilterSidebar from "../../Components/Additional/FilterSidebar";
import ProductList from "../../Components/Additional/ProductList";
import Marquee from "react-fast-marquee";
import images from "../../Utils/Images";

export default function Bags() {
    return (
        <div>
            <Bar greyText='Leather Bags' bgColor="#F5F5F5" breadCrumbs={true} breadText1='Sling bags' breadText2='School bags' breadText3='Work bags' />


            <Grid container spacing={2} sx={{ marginTop: "20px" }}>
                <Grid item xs={12} sm={3}>
                    <FilterSidebar category="bags" />
                </Grid>

                <Grid item xs={12} sm={9}>
                    <Marquee gradient={false} speed={50} style={{ background: "#A78870", color: "#fff", padding: "10px 0" }}>
                        Up to 30% to 50% Exclusive offer on leather bags &nbsp; ● &nbsp; Up to 30% to 50% Exclusive offer on leather bags &nbsp; ● &nbsp; Up to 30% to 50% Exclusive offer on leather bags
                    </Marquee>

                    <Box
                        sx={{
                            background: "#F2EAE2",
                            display: "flex",
                            flexDirection: { xs: "column", md: "row" }, 
                            alignItems: "center",
                            padding: "20px",
                            paddingTop:"0",
                            gap: "20px", 
                        }}
                    >
                        <Box
                            component="img"
                            src={images.bagsbanner}
                            alt="Leather Bags Banner"
                            sx={{
                                width: { xs: "100%", md: "40%" }, 
                                borderRadius: "10px"
                            }}
                        />

                        <Box sx={{ textAlign: { xs: "center", md: "left" }, paddingLeft: { md: "20px" } }}>
                            <Typography
                                variant="h4"
                                sx={{
                                    fontWeight: "600",
                                    color: "black",
                                    fontSize:"45px",
                                }}
                            >
                                Luxury Leather Bags Now Up to <span style={{ color: "#A78870" }}>50%</span> OFF!
                            </Typography>

                            <Typography sx={{ marginTop: "10px", color: "black",fontSize:"22px", marginRight: "50px",}}>
                                Upgrade your style with our exclusive leather bags! Enjoy up to 30% to 50% OFF – shop now and save big!
                            </Typography>

                            <Button
                                variant="outlined"
                                sx={{
                                    marginTop: "15px",
                                    borderColor: "#A78870",
                                    color: "#A78870",
                                    '&:hover': { backgroundColor: "#A78870", color: "#fff" }
                                }}
                            >
                                Show More
                            </Button>
                        </Box>
                    </Box>

                    <ProductList category="bags" />
                </Grid>

            </Grid>
        </div>
    );
}

