import React from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    // Link
} from "react-router-dom";
import AboutScreen from './AboutScreen';
import HomeScreen from './HomeScreen';
import LoginScreen from './LoginScreen';
import NavBar from './NavBar';

function AppRouter() {
    return (
        <Router>
            <div>
                <NavBar />
                <Routes>
                    <Route path='/' element={ <HomeScreen /> } />
                    <Route path='*' element={ <HomeScreen /> } />
                    <Route path='/login' element={ <LoginScreen /> } />
                    <Route path='/about' element={ <AboutScreen /> } />
                </Routes>
            </div>
        </Router>
    );
}

export default AppRouter;
