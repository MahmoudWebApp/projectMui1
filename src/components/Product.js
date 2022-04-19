import React from "react";
import { Box } from "@mui/system";
import { Grid, Typography, Button } from "@mui/material";
import DesktopCategories from "./DesktopCategories";
import MobileCategories from "./MobileCategories";
import ProductList from "./ProductList";

const Product = ({ matches }) => {
  return (
    <Box sx={{ minHeight: "60vh", mr: 2, ml: 2, mt: -20 }}>
      <Grid container sx={{ mb: 4 }} spacing={2}>
        <Grid
          item
          md={6}
          sx={{
            display: "flex",
            flexDirection: { xs: "column", lg: "row" },
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            component="img"
            src="image/man.png"
            sx={{ width: { xs: "100%", lg: "40%" } ,height:{xs:"350px" ,lg:"100%"}}}
          />
          <Box sx={{ pl: "10px", mt: { lg: 20, xs: 2 } }}>
            <Typography sx={{ fontWeight: "bold" }} variant="h6">
              Winter suits 2021
            </Typography>
            <Typography>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos,
              laborum nobis magnam minima.
            </Typography>
            <Typography
              sx={{ fontWeight: "bold", color: "#ff4081" }}
              variant="h6"
            >
              $520.00
            </Typography>
            <Button variant="outlined" size="medium">
              add to cart
            </Button>
          </Box>
        </Grid>
        <Grid
          item
          md={6}
          sx={{
            display: "flex",
            flexDirection: { xs: "column", lg: "row" },
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            component="img"
            src="/image/girl.png"
            sx={{ width: { xs: "100%", lg: "40%" },height:{xs:"350px" ,lg:"100%"} }}
          />
          <Box sx={{ pl: "10px", mt: { lg: 20, xs: 2 } }}>
            <Typography sx={{ fontWeight: "bold" }} variant="h6">
              Winter suits 2021
            </Typography>
            <Typography>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos,
              laborum nobis magnam minima.
            </Typography>
            <Typography
              sx={{ fontWeight: "bold", color: "#ff4081" }}
              variant="h6"
            >
              $520.00
            </Typography>
            <Button variant="outlined" size="medium">
              add to cart
            </Button>
          </Box>
        </Grid>
      </Grid>
      {/* Categories list */}
      {matches ? <MobileCategories /> : <DesktopCategories />}
      {/* Product List */}
      <ProductList />
    </Box>
  );
};

export default Product;
