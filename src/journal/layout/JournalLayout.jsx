import { Toolbar } from '@mui/material';
import { Box } from '@mui/system'
import React from 'react'
import { useSelector } from 'react-redux';
import { NavBar, SideBar } from '../components';

const drawerWidht = 4640;

export const JournalLayout = ({ children }) => {
    const { navaBar } = useSelector(state => state.journal);

    return (
        <Box sx={{ display: 'flex' }} className='animate__animated animate__fadeIn animate__faster'>

            <NavBar drawerWidht={drawerWidht} />
            {
                (!navaBar)
                    ? <SideBar drawerWidht={drawerWidht} />
                    : ''
            }

            {/* <SideBar drawerWidht={ drawerWidht } /> */}

            <Box
                component='main'
                sx={{ flexGrow: 1, p: 3 }}
            >

                <Toolbar />
                {children}

            </Box>

        </Box>
    )
}
