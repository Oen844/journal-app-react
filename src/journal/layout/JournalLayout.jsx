import { Box } from '@mui/system'
import React from 'react'
import { NavBar } from '../components';

const drawerWidht = 4640;

export const JournalLayout = ({children}) => {
    return (
        <Box sx={{ display: 'flex' }}>

            <NavBar drawerWidht={drawerWidht} />

            <Box
                component='main'
                sx={{ flexGrow: 1, p:3}}
            >
                
                {children}

            </Box>

        </Box>
    )
}
