import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { styled } from "@mui/material/styles";

const CustomToolBar = styled(Toolbar)(({ theme }) => ({
  // backgroundColor: theme.globalColor, //can also customize components using theme variables
}));

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1, width: 1, mb: 4 }}>
      <AppBar position="static">
        <CustomToolBar>
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
          <Button component={Link} to="/login" color="inherit">
            Login
          </Button>
          <Button component={Link} to="/signup" color="inherit">
            Signup
          </Button>
          <Button component={Link} to="/jobs" color="inherit">
            Jobs
          </Button>
        </CustomToolBar>
      </AppBar>
    </Box>
  );
}
