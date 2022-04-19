import React from "react";
import { Grid, Typography, Box } from "@mui/material";

const DesktopCategories = () => {
  return (
    <Grid
      container
      spacing={2}
      justify="space-between"
      alignItems="center"
      sx={{ border: "1px solid #e0e0e0", mt: 8, mb: 4 }}
    >
      <Grid
        item
        md={1}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Box component="img" src="image/babysitter.png" height="50px" />
        <Typography>Babysitter</Typography>
      </Grid>
      <Grid
        item
        md={1}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Box component="img" src="image/movie.png" height="50px" />
        <Typography>Movies</Typography>
      </Grid>
      <Grid
        item
        md={1}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Box component="img" src="image/fitness.png" height="50px" />
        <Typography>fitness</Typography>
      </Grid>
      <Grid
        item
        md={1}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Box component="img" src="image/sports.png" height="50px" />
        <Typography>Sports</Typography>
      </Grid>
      <Grid
        item
        md={1}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Box component="img" src="image/clothes.png" height="50px" />
        <Typography>Clothes</Typography>
      </Grid>

      <Grid
        item
        md={1}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Box component="img" src="image/pets.png" height="50px" />
        <Typography>Pets</Typography>
      </Grid>
      <Grid
        item
        md={1}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Box component="img" src="image/music.png" height="50px" />
        <Typography>Music</Typography>
      </Grid>
      <Grid
        item
        md={1}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Box component="img" src="image/kitchen.png" height="50px" />
        <Typography>Kitchen</Typography>
      </Grid>
      <Grid
        item
        md={1}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Box component="img" src="image/travel.png" height="50px" />
        <Typography>Travel</Typography>
      </Grid>
      <Grid
        item
        md={1}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Box component="img" src="image/electrical.png" height="50px" />
        <Typography>Electrical</Typography>
      </Grid>
      <Grid
        item
        md={1}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Box component="img" src="image/power.png" height="50px" />
        <Typography>Power</Typography>
      </Grid>
      <Grid
        item
        md={1}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Box component="img" src="image/babysitter.png" height="50px" />
        <Typography>Babysitter</Typography>
      </Grid>
    </Grid>
  );
};

export default DesktopCategories;
