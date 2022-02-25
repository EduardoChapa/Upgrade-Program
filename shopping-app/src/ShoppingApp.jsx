import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './components/footer/Footer';
import NavBar from './components/navbar/NavBar';

function ShoppingApp() {

  return (
    <div className="shopping-app">
      <div className="shopping-app-navbar">
        <NavBar />
      </div>
      <Outlet />
      <Footer />
    </div>
  );
}

export default ShoppingApp;