import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ShoppingApp from '../../ShoppingApp';
import ItemGrid from '../items/ItemGrid';
import HomeScreen from '../main/HomeScreen';
import ProfileScreen from '../profile/ProfileScreen';

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <ShoppingApp /> } >
          <Route path='/' element={ <HomeScreen /> } />
          <Route path='items' element={ <ItemGrid /> } />
          <Route path='profile' element={ <ProfileScreen /> } />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;