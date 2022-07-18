import React from 'react'
import '../styles/header.css';
import Logo from '../images/logo.svg'
import AvatarLogo from '../images/avatar.png'

import { Box, Tooltip, IconButton, Avatar, Menu, MenuItem, Typography } from "@mui/material";
const Header = () => {
    const settings = ['Profile', 'Logout'];
    const menu = ["Dashboard", "Product", "Pricing"]
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };
    return (
        <header className="header-container d-flex justify-between">
            <div className="header-left">
                <img src={Logo} alt="logo" width={110} className="main-logo" />
            </div>
            <div className="header-right d-flex">
                {
                    menu?.map((menu) => {
                        return (
                            <div className="menu-item" key={menu}>{menu}</div>
                        )
                    })
                }
                <Box sx={{ flexGrow: 0 }}>
                    <Tooltip title="Open settings">
                        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                            <Avatar alt="Remy Sharp" src={AvatarLogo} />
                        </IconButton>
                    </Tooltip>
                    <Menu
                        sx={{ mt: '45px' }}
                        id="menu-appbar"
                        anchorEl={anchorElUser}
                        anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        keepMounted
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        open={Boolean(anchorElUser)}
                        onClose={handleCloseUserMenu}
                    >
                        {settings.map((setting) => (
                            <MenuItem key={setting} onClick={handleCloseUserMenu}>
                                <Typography textAlign="center">{setting}</Typography>
                            </MenuItem>
                        ))}
                    </Menu>
                </Box>

            </div>
        </header>
    )
}

export default Header