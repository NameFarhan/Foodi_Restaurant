import { useTheme } from "@emotion/react";
import {
  Box,
  Button,
  Grid,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  TextField,
  InputAdornment,
  Menu,
  MenuItem,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import ContactButton from "../Componenets/ContactButton";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown"; // Import the arrow icon
import React, { useState } from "react";

const Navbar = () => {
  const theme = useTheme();
  const [openDrawer, setOpenDrawer] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [menuAnchorEl, setMenuAnchorEl] = useState(null);

  const handleDrawerToggle = () => {
    setOpenDrawer(!openDrawer);
  };
  const handleServicesClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
    setMenuAnchorEl(null);
  };

  const handleMenuClick = (event) => {
    setMenuAnchorEl(event.currentTarget);
  };
  const handleStopPropagation = (event) => {
    event.stopPropagation(); // Stop the click event from propagating to the drawer
  };
  return (
    <>
      <Box
        sx={{
          padding: {
            mobile: "3vh 1vw", // mobile
            tablet: "3vh 1vw", // tablet
            laptop: "3vh 6vw", // laptop
          },
        }}
      >
        <Grid container alignItems="center" spacing={2}>
          <Grid
            item
            mobile={6} // mobile
            laptop={3} // laptop
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Box
              sx={{
                position: {
                  mobile: "relative",
                  laptop: "static",
                },
                right: {
                  mobile: "30px",
                  tablet: "144px",
                },
              }}
            >
              <Typography sx={{ fontWeight: "700" }}>
                <Typography
                  sx={{
                    display: "inline-block",
                    color: "#fff",
                    backgroundColor: "#39DB4A",
                    padding: "2px 5px",
                    borderRadius: "8px",
                    fontWeight: "1000",
                  }}
                >
                  F
                </Typography>
                OODI
              </Typography>
            </Box>
          </Grid>

          {/* Hide buttons on mobile and tablet screens */}
          <Grid
            item
            mobile={6} // mobile
            laptop={6} // laptop
            display={{
              mobile: "none",
              laptop: "flex",
            }}
            justifyContent="center"
            alignItems="center"
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <Button
                sx={{
                  color: "#000",
                  fontSize: "14px",
                  textTransform: "none",
                  "&:hover": {
                    color: "#39DB4A",
                  },
                }}
              >
                Home
              </Button>

              {/* Menu Button with Dropdown */}
              <Button
                sx={{
                  color: "#000",
                  fontSize: "14px",
                  textTransform: "none",
                  "&:hover": {
                    color: "#39DB4A",
                  },
                }}
                onClick={handleMenuClick}
                endIcon={<ArrowDropDownIcon sx={{color:'#39DB4A'}} />} // Add the arrow icon here

              >
                Menu
              </Button>
              <Menu
                anchorEl={menuAnchorEl}
                open={Boolean(menuAnchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>Menu Item 1</MenuItem>
                <MenuItem onClick={handleClose}>Menu Item 2</MenuItem>
              </Menu>

              {/* Services Button with Dropdown */}
              <Button
                sx={{
                  color: "#000",
                  fontSize: "14px",
                  textTransform: "none",
                  "&:hover": {
                    color: "#39DB4A",
                  },
                }}
                onClick={handleServicesClick}
                endIcon={<ArrowDropDownIcon sx={{color:'#39DB4A'}} />} // Add the arrow icon here
              >
                Services
              </Button>
              <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>Service 1</MenuItem>
                <MenuItem onClick={handleClose}>Service 2</MenuItem>
              </Menu>

              <Button
                sx={{
                  color: "#000",
                  fontSize: "14px",
                  textTransform: "none",
                  "&:hover": {
                    color: "#39DB4A",
                  },
                }}
              >
                Offer
              </Button>
            </Box>
          </Grid>
          <Grid
            item
            mobile={6} // mobile
            laptop={3} // laptop
            display={{
              mobile: "none",
              laptop: "flex",
            }}
            justifyContent="center"
            alignItems="center"
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: "30px" }}>
              <SearchIcon />
              <ShoppingBagIcon sx={{ position: "relative", bottom: "2px" }} />
              <ContactButton />
            </Box>
          </Grid>

          {/* Hamburger Icon for Mobile and Tablet */}
          <Grid
            item
            mobile={6}
            display={{
              mobile: "flex",
              laptop: "none", // hidden on laptop and larger
            }}
            justifyContent="flex-end"
            alignItems="center"
          >
            <IconButton onClick={handleDrawerToggle} color="inherit">
              <MenuIcon />
            </IconButton>
          </Grid>
        </Grid>

        {/* Drawer for Mobile and Tablet Navigation */}
        <Drawer anchor="right" open={openDrawer} onClose={handleDrawerToggle}>
          <Box
            sx={{
              width: 200,
            }}
            role="presentation"
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <Button
                sx={{
                  color: "#000",
                  fontSize: "14px",
                  textTransform: "none",
                  "&:hover": {
                    color: "#39DB4A",
                  },
                }}
                onClick={handleDrawerToggle}
              >
                Home
              </Button>

              {/* Menu Button with Dropdown */}
              <Button
                sx={{
                  color: "#000",
                  fontSize: "14px",
                  textTransform: "none",
                  "&:hover": {
                    color: "#39DB4A",
                  },
                }}
                onClick={handleMenuClick}
                endIcon={<ArrowDropDownIcon sx={{color:'#39DB4A'}} />} // Add the arrow icon here
              >
                Menu
              </Button>
              <Menu
                anchorEl={menuAnchorEl}
                open={Boolean(menuAnchorEl)}
                onClose={handleClose}
                onClick={handleStopPropagation} // Prevent drawer close on clicking dropdown
              >
                <MenuItem
                  onClick={() => {
                    handleClose();
                    handleDrawerToggle();
                  }}
                >
                  Menu Item 1
                </MenuItem>
                <MenuItem
                  onClick={() => {
                    handleClose();
                    handleDrawerToggle();
                  }}
                >
                  Menu Item 2
                </MenuItem>
              </Menu>

              {/* Services Button with Dropdown */}
              <Button
                onClick={handleServicesClick}
                endIcon={<ArrowDropDownIcon sx={{color:'#39DB4A'}} />} // Add the arrow icon here
                sx={{
                  color: "#000",
                  fontSize: "14px",
                  textTransform: "none",
                  "&:hover": {
                    color: "#39DB4A",
                  },
                }}
              >
                Services
              </Button>
              <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleClose}
                onClick={handleStopPropagation} // Prevent drawer close on clicking dropdown
              >
                <MenuItem
                  onClick={() => {
                    handleClose();
                    handleDrawerToggle();
                  }}
                >
                  Service 1
                </MenuItem>
                <MenuItem
                  onClick={() => {
                    handleClose();
                    handleDrawerToggle();
                  }}
                >
                  Service 2
                </MenuItem>
              </Menu>

              <Button
                sx={{
                  color: "#000",
                  fontSize: "14px",
                  textTransform: "none",
                  "&:hover": {
                    color: "#39DB4A",
                  },
                }}
                onClick={handleDrawerToggle}
              >
                Offer
              </Button>
            </Box>
          </Box>
        </Drawer>
      </Box>
    </>
  );
};

export default Navbar;
