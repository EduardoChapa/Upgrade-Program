import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from './components/navbar/NavBar';
import SideMenu from './components/sidemenu/SideMenu';

function ShoppingApp() {

  const [showSidemenu, setShowSidemenu] = useState(false);

  const toggleSidemenu = () => {
    setShowSidemenu(!showSidemenu);
  }

  return (
    <div className="shopping-app">
      <div className="shopping-app__navbar">
        <NavBar toggleSidemenu={ toggleSidemenu }/>
      </div>
      <div className="shoppingapp__sidemenu">
        <SideMenu visible={ showSidemenu }/>
      </div>
      <Outlet />
    </div>
  );
}

export default ShoppingApp;