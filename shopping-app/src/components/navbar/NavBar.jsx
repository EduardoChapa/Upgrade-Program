import React, { useState } from 'react'
import AccountButtons from './AccountButtons';
import Logo from './Logo';
import NavButtons from './NavButtons';
import SearchBar from './SearchBar';
import SideMenuToggle from './SideMenuToggle';

function NavBar({ toggleSidemenu }) {

  return (
    <div className="navbar">
      <div className="navbar__top">
        <Logo />
        <SearchBar />
        <AccountButtons name={'Ricardio'} />
      </div>
      <div className="navbar__bottom">
        <NavButtons />
      </div>
    </div>
  )
}

export default NavBar;