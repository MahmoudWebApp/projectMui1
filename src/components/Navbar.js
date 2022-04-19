import React, { useState } from "react";
import DropdownMenu from "./DropdownMenu";
import DrawerComponent from "./DrawerComponent";
import {
  Toolbar,
  IconButton,
  Typography,
  Button,
  Badge,
} from "@mui/material";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import MenuIcon from "@mui/icons-material/Menu";
import { Box } from "@mui/system";
const Navbar = ({matches}) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [openDrawer, setOpenDrawer] = useState(false);
  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
    console.log(e.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const openMenu = Boolean(anchorEl);
  return (
    <>
      <Box elevation={0} sx={{ backgroundColor: "white" ,position:"fixed",width:"100%"}}>
        <Toolbar>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: "100%",
              padding: "15px 0px",
            }}
            component="div"
          >
            <Box>
              <IconButton>
                <ShoppingBagIcon sx={{ fontSize: "2.4rem" }} />
              </IconButton>
            </Box>
            {matches ? (
              <DrawerComponent
                openDrawer={openDrawer}
                setOpenDrawer={setOpenDrawer}
              />
            ) : (
              <Box sx={{ display: "flex" }}>
                <Typography
                  sx={{
                    marginRight: "20px",
                    cursor: "pointer",
                    color: "#616161",
                  }}
                >
                  Home
                </Typography>
                <Typography
                  sx={{
                    marginRight: "20px",
                    cursor: "pointer",
                    color: "#616161",
                  }}
                >
                  Brand
                </Typography>
                <Typography
                  sx={{
                    marginRight: "20px",
                    cursor: "pointer",
                    color: "#616161",
                  }}
                  aria-controls={openMenu ? "basic-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={openMenu ? "true" : undefined}
                  onClick={handleClick}
                >
                  Categories
                </Typography>
                <DropdownMenu
                  id="basic-menu"
                  items={[
                    { title: "Men" },
                    { title: "Women" },
                    { title: "Phones" },
                    { title: "Accessories" },
                    { title: "Others" },
                  ]}
                  anchorEl={anchorEl}
                  open={openMenu}
                  onClose={handleClose}
                />
                <Typography
                  sx={{
                    marginRight: "20px",
                    cursor: "pointer",
                    color: "#616161",
                  }}
                >
                  Men
                </Typography>
                <Typography
                  sx={{
                    marginRight: "20px",
                    cursor: "pointer",
                    color: "#616161",
                  }}
                >
                  Women
                </Typography>
                <Typography
                  sx={{
                    marginRight: "20px",
                    cursor: "pointer",
                    color: "#616161",
                  }}
                >
                  FAQ
                </Typography>
              </Box>
            )}
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Button
                sx={{ bgcolor: "#ff4081" }}
                disableElevation
                variant="contained"
              >
                Account
              </Button>
              {matches ? (
                <IconButton onClick={()=>setOpenDrawer(true)}>
                  <MenuIcon />
                </IconButton>
              ) : (
                <IconButton>
                  <Badge badgeContent={4} color="primary">
                    <ShoppingBasketIcon color="action" />
                  </Badge>
                </IconButton>
              )}
            </Box>
          </Box>
        </Toolbar>
      </Box>
    </>
  );
};

export default Navbar;
