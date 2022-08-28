import { createSlice } from '@reduxjs/toolkit';

export const journalSlice = createSlice({
    name: 'journal',
    initialState: {
        isSaving: false,
        messageSaved: '',
        notes: [],
        active: null,
        //    active: {
        //     id: 'ABC123',
        //     title: '',
        //     body: '',
        //     date: 1234567,
        //     imageUrls: [], // https://foto1.jpg
        //    }
    },
    reducers: {

        savingNewNote: (state) => {
            state.isSaving = true;
            console.log('Is saving');
        },

        addNewEmpyNote: (state, action) => {
            state.notes.push( action.payload );
            state.isSaving = false;

        },
        setActiveNote: (state, action) => {
            state.active = action.payload;
            state.isSaving = false;
        },
        setNotes: (state, action) => {
            state.notes = action.payload;
        },
        setSaving: (state) => {
            state.isSaving = true;
        },
        updateNote: (state, action) => {
            state.isSaving = false;
            state.notes = state.notes.map()
        },
        deleteNoteById: (state, action) => {

        }
    }
});


// Action creators are generated for each case reducer function
export const {
    addNewEmpyNote,
    setActiveNote,
    setNotes,
    setSaving,
    updateNote,
    deleteNoteById,
    savingNewNote,
} = journalSlice.actions;