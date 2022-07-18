import React from "react";
import "../styles/header.css";
import Logo from "../images/logo.svg";
import AvatarLogo from "../images/avatar.png";

import {
  Box,
  Tooltip,
  IconButton,
  Avatar,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";
import { Link, useHistory } from "react-router-dom";

const Header = () => {
  const history = useHistory();
  const handleLogout = () => {
    localStorage?.clear();
    history.push("/");
  };

  const settings = [
    {
      name: "Profile",
      handleClick: null,
    },

    {
      name: "Logout",
      handleClick: handleLogout,
    },
  ];
  const menu = [
    {
      name: "Dashboard",
      path: "/dashboard",
    },
    {
      name: "Product",
      path: "/product",
    },
    {
      name: "Pricing",
      path: "/pricing",
    },
  ];
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  return (
    <header className="header-container d-flex justify-between">
      <Link to="/" className="header-left cursor-pointer">
        <img src={Logo} alt="logo" width={110} className="main-logo" />
      </Link>
      <div className="header-right d-flex">
        {menu?.map((menu) => {
          return (
            <div>
              <Link to={menu?.path} className="menu-item" key={menu?.path}>
                {menu?.name}
              </Link>
            </div>
          );
        })}
        <Box sx={{ flexGrow: 0 }}>
          <Tooltip title="Open settings">
            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
              <Avatar alt="Remy Sharp" src={AvatarLogo} />
            </IconButton>
          </Tooltip>
          <Menu
            sx={{ mt: "45px" }}
            id="menu-appbar"
            anchorEl={anchorElUser}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={Boolean(anchorElUser)}
            onClose={handleCloseUserMenu}
          >
            {settings.map((setting) => (
              <MenuItem
                key={setting?.name}
                onClick={() => setting?.handleClick()}
              >
                <Typography textAlign="center">{setting?.name}</Typography>
              </MenuItem>
            ))}
          </Menu>
        </Box>
      </div>
    </header>
  );
};

export default Header;
