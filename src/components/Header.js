import React from "react";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";

const Header = ({matches}) => {
  return (
    <Box
    className='header'
    >
      <Box
        component="div"
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          height: "100vh",
        }}
      >
        <Typography
          sx={{ fontFamily: "'Eagle Lake'", fontWeight: "400", color: "#fff" }}
          variant={matches?"h5":"h2"}
        >
          Find Your New Favorite
        </Typography>
        <Typography
          sx={{ fontFamily: "'Eagle Lake'", fontWeight: "400", color: "#eee" }}
          variant={matches?"h6":"h3"}
        >
          Collection at Winter
        </Typography>
        <Typography
          sx={{ fontFamily: "'Eagle Lake'", fontWeight: "400", color: "#eee" }}
          variant={matches?"body2":"h4"}
        >
          sale 2022
        </Typography>
      </Box>
    </Box>
  );
};

export default Header;
