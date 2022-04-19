import { Grid, Box, Typography, Rating } from "@mui/material";
import { productList } from "../dataProduct";
const ProductList = () => {
  return (
    <Grid container spacing={2} sx={{ mb: 5 }}>
      {productList &&
        productList.map((product) => (
          <Grid item md={3} xs={6}>
            <Box component="img" src={product.imageUrl} sx={{ width: "100% " ,height:"300px"}} />
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              {product.title}
            </Typography>
            <Typography variant="body2">{product.description}</Typography>
            <Typography
              variant="h5"
              sx={{ fontWeight: "bold", color: "#ff6d00" }}
            >
              $90
            </Typography>
            <Typography variant="subtitle2" sx={{ color: "gray" }}>
              ${product.price} for shipping
            </Typography>
            {/* Rating Warp */}
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Rating name="half-rating" defaultValue={product.rating} precision={0.5} />
              <Typography>{product.rating}</Typography>
            </Box>
          </Grid>
        ))}
     
    </Grid>
  );
};

export default ProductList;
