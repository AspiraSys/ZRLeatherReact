import React, { useState } from "react";
import { Grid, IconButton, Drawer, useMediaQuery, useTheme, Box } from "@mui/material";
import FilterSidebar from "../../Components/Additional/FilterSidebar";
import ProductList from "../../Components/Additional/ProductList";
import { FiFilter } from "react-icons/fi";

function Filter({ category }) {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

    const toggleMobileFilter = () => {
        setMobileFilterOpen(!mobileFilterOpen);
    };

    return (
        <Box sx={{ position: 'relative', padding: { xs: '10px', sm: '20px' } }}>
            {isMobile && (
                <Box sx={{ 
                    display: 'flex', 
                    justifyContent: 'flex-end', 
                    marginBottom: 2,
                    position: 'sticky',
                    top: 0,
                    zIndex: 99
                }}>
                    <IconButton 
                        onClick={toggleMobileFilter}
                        sx={{ 
                            backgroundColor: '#A78870', 
                            color: 'white',
                            '&:hover': {
                                backgroundColor: '#8a6d5a',
                            }
                        }}
                    >
                        <FiFilter />
                    </IconButton>
                </Box>
            )}

            <Grid container spacing={2}>
                {!isMobile && (
                    <Grid item xs={12} sm={4} md={3} lg={2.5}>
                        <Box sx={{ 
                            position: { md: 'sticky' },
                            top: { md: '20px' },
                            height: { md: 'calc(100vh - 40px)' },
                            overflowY: { md: 'auto' }
                        }}>
                            <FilterSidebar category={category} />
                        </Box>
                    </Grid>
                )}

                <Grid item xs={12} sm={!isMobile ? 8 : 12} md={!isMobile ? 9 : 12} lg={!isMobile ? 9.5 : 12}>
                    <ProductList category={category} />
                </Grid>
            </Grid>

            <Drawer
                anchor="left"
                open={mobileFilterOpen}
                onClose={toggleMobileFilter}
            >
                <Box sx={{ width: 280 }}>
                    <FilterSidebar category={category} />
                </Box>
            </Drawer>
        </Box>
    );
}

export default Filter;