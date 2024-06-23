import React, { useState } from 'react';
import { AppBar, Box, Typography, Container, Toolbar, Tooltip, IconButton, Avatar, Menu, MenuItem, Button } from '@mui/material';
import { useCookies } from 'react-cookie';


const Dashboard = () => {
    const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];
    const roles = ['Directors', 'Actors', 'MusicDir', 'Singers'];

    const [anchorElUser, setAnchorElUser] = useState(null);
    const [cookies, setCookies, removeCookies] = useCookies('userDetails');

    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget)
    }
    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };
    return (
        <div>
            <>
                <AppBar>
                    <Container>
                        <Toolbar>

                            <Box sx={{ flexGrow: 1, display: 'flex' }}>
                                {roles.map(role => (
                                    <Button sx={{ my: 2, color: 'white', display: 'block' }}>
                                        {role}
                                    </Button>
                                ))}
                            </Box>

                            <Typography sx={{ marginLeft: 'auto', mx:2 }}>Hello Mr.{cookies['userDetails']}</Typography>

                            <Box sx={{ flexGrow: 0 }}>
                                <Tooltip title="Open settings">
                                    <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                        <Avatar alt="Remy Sharp" src="" />
                                    </IconButton>
                                </Tooltip>
                                <Menu
                                    sx={{ mt: '45px' }}
                                    id="menu-appbar"
                                    anchorEl={anchorElUser}
                                    open={Boolean(anchorElUser)}

                                    anchorOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                    keepMounted
                                    transformOrigin={{
                                        vertical: 'top',
                                        horizontal: 'left',
                                    }}
                                    onClose={handleCloseUserMenu}
                                >
                                    {settings.map((setting) => (
                                        <MenuItem key={setting} onClick={handleCloseUserMenu}>
                                            <Typography textAlign="center">{setting}</Typography>
                                        </MenuItem>
                                    ))}
                                </Menu>
                            </Box>

                        </Toolbar>
                    </Container>
                </AppBar>
            </>
        </div >
    )
}

export default Dashboard