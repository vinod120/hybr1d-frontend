import React from "react";
import "../styles/header.css";
import Logo from "../images/logo.svg";
import AvatarLogo from "../images/avatar.png";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
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
import SearchIcon from "@mui/icons-material/Search";
import SeacrhDailog from "./SeacrhDailog";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(0.5, 1, 0.5, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    border: "1px solid lightgray",
    width: "100%",
    borderRadius: "8px",
    [theme.breakpoints.up("sm")]: {
      width: "15ch",
      "&:focus": {
        width: "30ch",
      },
    },
  },
}));

const Header = () => {
  const history = useHistory();

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
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
      <div className="d-flex">
        <Link to="/" className="header-left cursor-pointer mr-20">
          <img src={Logo} alt="logo" width={110} className="main-logo" />
        </Link>
        <div className="search-bar" onClick={handleClickOpen}>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
        </div>
      </div>
      <div className="header-right d-flex">
        {menu?.map((menu) => {
          return (
            <div key={menu?.path}>
              <Link to={menu?.path} className="menu-item">
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
      <SeacrhDailog open={open} handleClose={handleClose} />
    </header>
  );
};

export default Header;
