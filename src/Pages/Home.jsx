import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Typography, Grid, Container } from "@mui/material";
import HomeAdvBanner from "../Components/Extendable/HomeAdvBanner";
import ProductCard from "../Components/Additional/ProductCard";
import images from "../Utils/Images";
import productData from "../Stores/Reducers/Data/Products.json";
import { FaStar, FaMobileAlt, FaShieldAlt } from "react-icons/fa";
import BannerSlider from "../Components/Extendable/BannerSlider";

function Home() {
  const navigate = useNavigate();
  const {
    popular, bags, classybelts,
    gallery1, gallery2, gallery3, gallery4, gallery5, gallery6
  } = images;

  const [newArrivals, setNewArrivals] = useState([]);
  const [bestSellers, setBestSellers] = useState([]);

  useEffect(() => {
    const filteredNewArrivals = productData
      .filter(product => product.highlight === "New Arrival")
      .slice(0, 4);

    const filteredBestSellers = productData
      .filter(product => product.highlight === "Best Sellers")
      .slice(0, 4);

    setNewArrivals(filteredNewArrivals);
    setBestSellers(filteredBestSellers);
  }, []);

  const popularCategories = [
    {
      title: "Leather Boots",
      subTitle: "Collection 2018",
      image: popular,
      buttonText: "Shop now",
      bgColor: "#d2c2c8"
    },
    {
      title: "Leather Bags",
      subTitle: "Collection 2018",
      image: bags,
      buttonText: "Shop now",
      bgColor: "#c4b7ab"
    },
    {
      title: "Leather Products",
      subTitle: "Collection 2018",
      image: classybelts,
      buttonText: "Shop now",
      bgColor: "#e5e0da"
    }
  ];

  const featureIcons = {
    quality: <FaStar size={32} color="white" />,
    design: <FaMobileAlt size={32} color="white" />,
    durability: <FaShieldAlt size={32} color="white" />
  };

  const features = [
    {
      title: "Premium Quality Leather",
      description: "Made from the finest leather for lasting durability and rich texture.",
      icon: featureIcons.quality
    },
    {
      title: "Sleek and Stylish Designs",
      description: "Elegantly crafted for any occasion, blending style and function.",
      icon: featureIcons.design
    },
    {
      title: "Built to Last",
      description: "Handcrafted with precision for enduring strength and timeless appeal.",
      icon: featureIcons.durability
    }
  ];

  const imageBoxStyle = {
    height: { xs: 250, sm: 300, md: 350 },
    overflow: "hidden",
    borderRadius: 1,
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.08)",
  };

  const imgStyle = {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    transition: "transform 0.3s ease",
    "&:hover": {
      transform: "scale(1.05)",
    },
  };


  return (
    <>
    <BannerSlider/>
      <Container maxWidth="lg" sx={{ my: { xs: 2, md: 4 } }}>
        <Typography
          variant="h4"
          component="h2"
          align="center"
          sx={{
            mb: { xs: 2, md: 4 },
            color: "#8B735A",
            fontWeight: 500,
            fontSize: { xs: "1.5rem", md: "2rem" }
          }}
        >
          Popular Categories
        </Typography>

        <Grid container spacing={{ xs: 2, md: 3 }}>
          {popularCategories.map((category, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Box
                sx={{
                  height: { xs: 180, md: 220 },
                  position: "relative",
                  overflow: "hidden",
                  borderRadius: 1,
                  boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)"
                }}
              >
                <Box
                  sx={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: "#f2f2f2",
                  }}
                >
                  <Box
                    sx={{
                      position: "absolute",
                      top: 0,
                      right: -60,
                      bottom: 0,
                      width: "60%",
                      background: category.bgColor,
                      transform: "skewX(-15deg)",
                      transformOrigin: "top right",
                      marginLeft: "-30px",
                    }}
                  />
                </Box>

                <Box
                  sx={{
                    position: "relative",
                    left: 0,
                    top: 0,
                    width: { xs: "45%", md: "50%" },
                    height: "100%",
                    p: { xs: 2, md: 3 },
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    zIndex: 1,
                  }}
                >
                  <Typography
                    variant="h6"
                    component="h3"
                    sx={{
                      fontWeight: "bold",
                      mb: 0.5,
                      fontSize: { xs: "0.9rem", sm: "1rem", md: "1.25rem" }
                    }}
                  >
                    {category.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      mb: 2,
                      fontSize: { xs: "0.75rem", md: "0.875rem" }
                    }}
                  >
                    {category.subTitle}
                  </Typography>
                  <Box
                    component="a"
                    href="#"
                    sx={{
                      color: "black",
                      textDecoration: "underline",
                      fontSize: { xs: "0.75rem", md: "0.875rem" },
                      cursor: "pointer",
                      fontWeight: 500,
                      display: "inline-block"
                    }}
                  >
                    {category.buttonText}
                  </Box>
                </Box>

                <Box
                  sx={{
                    position: "absolute",
                    right: 0,
                    top: 0,
                    width: { xs: "55%", md: "50%" },
                    height: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    zIndex: 1,
                  }}
                >
                  <Box
                    component="img"
                    src={category.image}
                    alt={category.title}
                    sx={{
                      maxWidth: "100%",
                      maxHeight: "80%",
                      objectFit: "contain",
                      filter: "drop-shadow(0px 10px 8px rgba(0, 0, 0, 0.60))"
                    }}
                  />
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>

        <Box sx={{ mt: { xs: 3, md: 4 }, mb: { xs: 2, md: 4 } }}>
          <Typography
            variant="h4"
            component="h2"
            align="center"
            sx={{
              color: "black",
              fontWeight: 500,
              mb: 1,
              fontSize: { xs: "1.5rem", md: "2rem" }
            }}
          >
            New Arrivals
          </Typography>

          <Box
            sx={{
              width: { xs: 100, md: 150 },
              height: 3,
              background: "#8B735A",
              mx: "auto",
              mb: 3
            }}
          />

          <Typography
            variant="body1"
            align="center"
            sx={{
              color: "#8B735A",
              mb: { xs: 3, md: 5 },
              fontSize: { xs: "0.875rem", md: "1rem" }
            }}
          >
            Looking for the latest trends in leather shoes and accessories?
          </Typography>

          <Grid container spacing={{ xs: 2, md: 3 }}>
            {newArrivals.map((product) => (
              <Grid item xs={6} sm={6} md={3} key={product.id}>
                <ProductCard
                  product={{
                    id: product.id,
                    name: product.name,
                    price: product.price,
                    image: images[product.image],
                    highlight: product.highlight,
                    availability: product.availability,
                    rating: product.rating,
                    category: product.category
                  }}
                />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>

      <HomeAdvBanner />

      <Container maxWidth="lg">
        <Box sx={{ mt: { xs: 4, md: 8 }, mb: { xs: 3, md: 4 } }}>
          <Typography
            variant="h4"
            component="h2"
            align="center"
            sx={{
              fontWeight: 500,
              mb: 1,
              fontSize: { xs: "1.5rem", md: "2rem" }
            }}
          >
            Our Best-Selling Leather Products
          </Typography>

          <Box
            sx={{
              width: { xs: 100, md: 150 },
              height: 3,
              background: "#8B735A",
              mx: "auto",
              mb: { xs: 3, md: 5 }
            }}
          />

          <Grid container spacing={{ xs: 2, md: 3 }}>
            {bestSellers.map((product) => (
              <Grid item xs={6} sm={6} md={3} key={product.id}>
                <ProductCard
                  product={{
                    id: product.id,
                    name: product.name,
                    price: product.price,
                    image: images[product.image],
                    highlight: product.highlight,
                    availability: product.availability,
                    rating: product.rating,
                    category: product.category
                  }}
                />
              </Grid>
            ))}
          </Grid>
        </Box>

        <Box sx={{ mt: { xs: 6, md: 10 }, mb: { xs: 4, md: 6 } }}>
          <Typography
            variant="h4"
            component="h2"
            align="center"
            sx={{
              fontWeight: 500,
              mb: 1,
              fontSize: { xs: "1.5rem", md: "2rem" }
            }}
          >
            Why Our Products
          </Typography>

          <Box
            sx={{
              width: { xs: 100, md: 150 },
              height: 3,
              background: "#8B735A",
              mx: "auto",
              mb: { xs: 4, md: 6 }
            }}
          />

          <Grid container spacing={{ xs: 3, md: 4 }}>
            {features.map((feature, index) => (
              <Grid item xs={12} sm={4} md={4} key={index} sx={{ position: "relative" }}>
                {index < features.length - 1 && (
                  <Box
                    sx={{
                      display: { xs: 'none', md: 'block' },
                      position: 'absolute',
                      right: 0,
                      top: '10%',
                      height: '100%',
                      width: 1.5,
                      backgroundColor: '#8B735A'
                    }}
                  />
                )}

                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    textAlign: "center",
                  }}
                >
                  <Box
                    sx={{
                      width: { xs: 70, md: 80 },
                      height: { xs: 70, md: 80 },
                      borderRadius: "50%",
                      backgroundColor: "#B89B80",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      mb: 2
                    }}
                  >
                    {feature.icon}
                  </Box>

                  <Typography
                    variant="h6"
                    component="h3"
                    sx={{
                      color: "#8B735A",
                      fontWeight: 600,
                      mb: 1,
                      fontSize: { xs: "1.1rem", md: "1.25rem" }
                    }}
                  >
                    {feature.title}
                  </Typography>

                  <Typography
                    variant="body2"
                    sx={{
                      color: "#666",
                      maxWidth: { xs: "90%", md: "80%" },
                      mx: "auto",
                      fontSize: { xs: "0.8rem", md: "0.875rem" }
                    }}
                  >
                    {feature.description}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>

      <Box sx={{ py: 5 }}>  
        <Typography
          variant="h4"
          component="h2"
          align="center"
          sx={{
            color: "black",
            fontWeight: 600,
            mb: 1,
            fontSize: { xs: "1.5rem", md: "2rem" }
          }}
        >
          Elegant Craftsmanship Showcase
        </Typography>

        <Box
          sx={{
            width: { xs: 150, md: 200 },
            height: 3,
            background: "#8B735A",
            mx: "auto",
            mb: { xs: 3, md: 5 }
          }}
        />
        <Box sx={{ 
          display: 'grid', 
          gridTemplateColumns: { xs: '1fr', md: '4fr 3fr 5fr' },
          gridGap: '16px',
          maxWidth: "1200px", 
          mx: "auto" 
        }}>
          <Box sx={{
            ...imageBoxStyle,
            height: '100%',
          }}>
            <Box
              component="img"
              src={gallery1}
              alt="Leather Belts"
              sx={{
                ...imgStyle,
                height: '100%',
                objectFit: 'cover'
              }}
            />
          </Box>

          <Box sx={{ 
            display: 'grid',
            gridTemplateRows: '1fr 1fr',
            gridGap: '16px',
            height: '100%'
          }}>
            <Box sx={{ 
              ...imageBoxStyle,
              height: '100%'
            }}>
              <Box 
                component="img" 
                src={gallery2} 
                alt="Leather Handbag" 
                sx={{
                  ...imgStyle,
                  height: '100%',
                  objectFit: 'cover'
                }} 
              />
            </Box>
            <Box sx={{ 
              ...imageBoxStyle,
              height: '100%'
            }}>
              <Box 
                component="img" 
                src={gallery3} 
                alt="Premium Shoes" 
                sx={{
                  ...imgStyle,
                  height: '100%',
                  objectFit: 'cover'
                }} 
              />
            </Box>
          </Box>

          <Box sx={{ 
            display: 'grid',
            gridTemplateRows: '1fr 1fr',
            gridGap: '16px',
            height: '100%'
          }}>
            <Box sx={{ 
              ...imageBoxStyle,
              height: '100%'
            }}>
              <Box 
                component="img" 
                src={gallery4} 
                alt="Wallets" 
                sx={{
                  ...imgStyle,
                  height: '100%',
                  objectFit: 'cover'
                }} 
              />
            </Box>
            <Box sx={{ 
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gridGap: '16px',
              height: '100%'
            }}>
              <Box sx={{ 
                ...imageBoxStyle,
                height: '100%'
              }}>
                <Box 
                  component="img" 
                  src={gallery5} 
                  alt="Brown Loafer" 
                  sx={{
                    ...imgStyle,
                    height: '100%',
                    objectFit: 'cover'
                  }} 
                />
              </Box>
              <Box sx={{ 
                ...imageBoxStyle,
                height: '100%'
              }}>
                <Box 
                  component="img" 
                  src={gallery6} 
                  alt="Beige Loafer" 
                  sx={{
                    ...imgStyle,
                    height: '100%',
                    objectFit: 'cover'
                  }} 
                />
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default Home;