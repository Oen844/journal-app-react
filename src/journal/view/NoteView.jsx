import { SaveOutlined } from '@mui/icons-material'
import { Button, Grid, TextField, Typography } from '@mui/material'
import React, { useEffect, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useForm } from '../../hooks/useForm'
import { setActiveNote, startSaveNote } from '../../store/journal'
import { ImageGallery } from '../components'

export const NoteView = () => {

    const dispach = useDispatch();
    const { active: note } = useSelector(state => state.journal);

    const { body, title, date, onInputChange, formState } = useForm(note);
    const dateString = useMemo(() => {
        const newDate = new Date(date);
        return newDate.toUTCString();
    }, [date]);

    useEffect(() => {
        dispach(setActiveNote(formState))
    }, [formState])

    const onSaveNote = () => {
        dispach( startSaveNote() );
    }


    return (
        <Grid
            container
            className='animate__animated animate__fadeIn animate__faster'
            direction='row'
            justifyContent='space-between'
        >
            <Grid item>
                <Typography fontSize={39} fontWeight='light' >{dateString}</Typography>
            </Grid>
            <Grid item>
                <Button
                    onClick={ onSaveNote }
                    color='primary'
                >
                    <SaveOutlined sx={{ fontSize: 30, mr: 1 }} />
                    Guardar
                </Button>
            </Grid>
            <Grid container>
                <TextField
                    type='text'
                    variant='filled'
                    fullWidth
                    placeholder='Ingrese un título'
                    label='Título'
                    sx={{ border: 'none', mb: 1 }}
                    name="title"
                    value={title}
                    onChange={onInputChange}
                />
                <TextField
                    type='text'
                    variant='filled'
                    fullWidth
                    multiline
                    placeholder='¿Que sucedio en el dia de hoy?'
                    minRows={5}
                    name="body"
                    value={body}
                    onChange={onInputChange}
                />
            </Grid>

            {/* image gallery */}
            <ImageGallery />

        </Grid>
    )
}
