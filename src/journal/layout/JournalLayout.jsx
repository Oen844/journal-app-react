import { Box } from '@mui/system'
import React from 'react';

const draweWidth = 240;

export const JournalLayout = ({children}) => {
    return (
        <Box sx={{ display: 'flex' }}>


            <Box
                component='main'
                sx={{ flexGrow: 1, p:3}}
            >
                
                {children}

            </Box>

        </Box>
    )
}
