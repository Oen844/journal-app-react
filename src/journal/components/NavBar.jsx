import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { LogoutOutlined, MenuOutlined } from '@mui/icons-material'
import { AppBar, Grid, IconButton, Toolbar, Typography } from '@mui/material'
import { startLogout } from '../../store/auth/thunks'
import { deleteNavbar, showNavBar } from '../../store/journal'

export const NavBar = ({ drawerWidth = 240 }) => {
    
    const dispatch = useDispatch(status => status.journal)
    const { navaBar } = useSelector(state => state.journal);

    const onLogout = () => {
        dispatch( startLogout() );
    }
    const showSlideBar = () => {
        if(navaBar == false) return dispatch(showNavBar());

        dispatch(deleteNavbar());   
    }
    
    

    return (
        <AppBar
             position='fixed'
            sx={{
                width: { sm: `calc(100% - ${drawerWidth}px)` },
                ml: { sm: `${drawerWidth}px` }
            }}
        >
            <Toolbar>
                <IconButton
                    color='inherit'
                    edge='start'
                    sx={{ mr: 2 }}
                    onClick = {showSlideBar}
                >
                    <MenuOutlined />
                </IconButton>

                <Grid container direction='row' justifyContent='space-between' alignItems="center">
                    <Typography variant='h6' noWrap component='div'> JournalApp</Typography>

                    <IconButton color='error' onClick={onLogout}>
                        <LogoutOutlined />
                    </IconButton>

                </Grid>

            </Toolbar>

        </AppBar>
    )
}
