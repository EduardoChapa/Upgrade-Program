import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginScreen from '../components/login/LoginScreen';
import { NavBar } from '../components/ui/NavBar';
import DashboardRouter from './DashboardRouter';

function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/login' element={ <LoginScreen /> }/>
                <Route path='/*' element={ <DashboardRouter /> } />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter;
