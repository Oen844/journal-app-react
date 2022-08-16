import { MailOutline } from '@mui/icons-material'
import { Typography } from '@mui/material'
import React from 'react'
import { JournalLayout } from '../layout/JournalLayout'
import { NothingSelectedView } from '../view/NothingSelectedView'

export const JournalPage = () => {
  return (

    <JournalLayout>

      {/* <Typography>Adipisicing mollit aute laborum exercitation reprehenderit.</Typography> */}

      <NothingSelectedView/>
      
    </JournalLayout>

  )
}
