import { useDispatch, useSelector } from 'react-redux';
import { LogoutOutlined, TurnedInNot } from '@mui/icons-material'
import { Drawer, Box, Toolbar, Typography, Divider, List, ListItem, ListItemButton, ListItemIcon, Grid, ListItemText, IconButton } from '@mui/material'
import React, { useEffect } from 'react'
import { SideBarItem } from './SideBarItem';
import { deleteNavbar, showNavBar } from '../../store/journal';

export const SideBar = ({ drawerWidth = 240 }) => {

    const { displayName } = useSelector(state => state.auth);
    const { notes, navaBar } = useSelector(state => state.journal);
    const dispatch = useDispatch();
    
    const noShowNav = () => {
        dispatch(showNavBar());
        
    }
    

    return (
        <Box
            component='nav'
            sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        >
            <Drawer
                variant='permanent'
                open
                sx={{
                    display: { xs: 'block' },
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth }
                }}
            >
                <Toolbar >
                    <Typography variant='h6' noWrap component='div' >
                        {displayName}
                        <IconButton
                            color='inherit'
                            onClick={noShowNav}
                        >
                            <LogoutOutlined />
                        </IconButton>
                    </Typography>
                </Toolbar>
                <Divider />
                <List>
                    {
                        notes.map(note => (
                            <SideBarItem key={note.id} {...note}

                            />
                        ))
                    }
                </List>
            </Drawer>
        </Box>
    )
}
