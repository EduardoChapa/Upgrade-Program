import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ShoppingApp from '../ShoppingApp';
import Favorites from '../components/account/Favorites';
import OrderHistory from '../components/account/OrderHistory';
import Cart from '../components/cart/Cart';
import ItemGrid from '../components/items/ItemGrid';
import HomeScreen from '../components/home/HomeScreen';
import AccountScreen from '../components/account/AccountScreen';
import AccountDetails from '../components/account/AccountDetails';

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <ShoppingApp /> } >
          <Route path='*' element={ <HomeScreen /> } />
          <Route path='/' element={ <HomeScreen /> } />
          <Route path='items' element={ <ItemGrid /> } />
          <Route path='account' element={ <AccountScreen /> } >
            <Route path='details' element={ <AccountDetails /> } />
            <Route path='orders' element={ <OrderHistory /> } />
            <Route path='favorites' element={ <Favorites /> } />
          </Route>
          <Route path='cart' element={ <Cart /> } />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;