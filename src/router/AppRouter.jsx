import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { AuthRoutes } from '../auth/routes/AuthRoutes'
import { JournalRoutes } from '../journal/routes/JournalRoutes'
import { CheckingAuth } from '../ui'
import {  useSelector } from 'react-redux';

export const AppRouter = () => {


    const {status} = useSelector(state => state.auth);
 

    if ( status === 'checking') {
        return <CheckingAuth/>
    }

    return (
        <Routes>


            <Route path='/auth/*' element={ <AuthRoutes/>}/>


            <Route path='/*' element={ <JournalRoutes/>}/>

            <Route />
        </Routes>
    )
}
