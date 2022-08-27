import { AddOutlined, MailOutline } from '@mui/icons-material'
import { IconButton, Typography } from '@mui/material'
import React from 'react'
import { useDispatch } from 'react-redux'
import { startNewNote } from '../../store/journal'
import { JournalLayout } from '../layout/JournalLayout'
import { NoteView } from '../view/NoteView'
import { NothingSelectedView } from '../view/NothingSelectedView'

export const JournalPage = () => {

  const dispatch = useDispatch();


  const onClickNewNote = () => {

    dispatch(startNewNote());

  }




  return (

    <JournalLayout>

      {/* <Typography>Adipisicing mollit aute laborum exercitation reprehenderit.</Typography> */}

      <NothingSelectedView />
      {/* <NoteView/> */}
      <IconButton
        onClick={onClickNewNote}
        size='large'
        sx={{
          color: 'white',
          backgroundColor: 'error.main',
          ':hover': { backgroundColor: 'error.main', opacity: 0.9 },
          position: 'fixed',
          right: 50,
          bottom: 50
        }}
      >
        <AddOutlined sx={{ fontSize: 30 }} />

      </IconButton>

    </JournalLayout>

  )
}
