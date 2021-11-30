import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Link, useHistory } from "react-router-dom";

export default function BasicMenu({ text, action }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const history = useHistory();
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (path) => {
    setAnchorEl(null);
    console.log("fd");
    history.push(path);
  };

  return (
    <div>
      <Button
        id="basic-button"
        sx={{ color: "inherit" }}
        aria-controls="basic-menu"
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        {text}
      </Button>

      {text === "Login" ? (
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          <MenuItem onClick={(e) => handleClose("/login")}>Employee</MenuItem>
          <MenuItem onClick={(e) => handleClose("/elogin")}>Employer</MenuItem>
        </Menu>
      ) : (
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          <MenuItem onClick={(e) => handleClose("/signup")}>Employee</MenuItem>
          <MenuItem onClick={(e) => handleClose("/esignup")}>Employer</MenuItem>
        </Menu>
      )}
    </div>
  );
}
