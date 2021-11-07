import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { styled } from "@mui/material/styles";

const CustomToolBar = styled(Toolbar)(({ theme }) => ({
  // backgroundColor: theme.globalColor, //can also customize components using theme variables
}));

export default function ButtonAppBar({ loggedIn, drawerWidth, setMobileOpen }) {
  const handleDrawerToggle = () => {
    setMobileOpen((mobileOpen) => !mobileOpen);
  };
  const drawerMargin = loggedIn ? drawerWidth : 0;

  return (
    // <Box sx={{ flexGrow: 1, width: 1, mb: 4 }}>
    <AppBar
      position="static"
      sx={{
        width: { sm: loggedIn ? `calc(100% - ${drawerWidth}px)` : "100%" },
        ml: { sm: `${drawerMargin}px` },
        mb: 2,
      }}
    >
      <CustomToolBar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          sx={{ mr: 2, display: { sm: "none" } }}
        >
          <MenuIcon />
        </IconButton>
        {/* <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton> */}
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Job Portal
        </Typography>
        <Button
          component={Link}
          to="/login"
          color="inherit"
          sx={{ display: loggedIn ? "none" : "inline-flex" }}
        >
          Login
        </Button>
        <Button
          component={Link}
          to="/signup"
          color="inherit"
          sx={{ display: loggedIn ? "none" : "inline-flex" }}
        >
          Signup
        </Button>
        <Button component={Link} to="/jobs" color="inherit">
          Jobs
        </Button>
        <Button
          component={Link}
          to="/profile"
          color="inherit"
          sx={{ display: !loggedIn ? "none" : "inline-flex" }}
        >
          Profile
        </Button>
        <Button
          component={Link}
          to="/settings"
          color="inherit"
          sx={{ display: !loggedIn ? "none" : "inline-flex" }}
        >
          Settings
        </Button>
      </CustomToolBar>
    </AppBar>
    // </Box>
  );
}
