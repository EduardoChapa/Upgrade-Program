import React, { useState } from 'react'
import AccountButtons from './AccountButtons';
import Logo from './Logo';
import SearchBar from './SearchBar';
import SideMenuToggle from './SideMenuToggle';

function NavBar({ toggleSidemenu }) {

  return (
    <div className="navbar">
      <SideMenuToggle toggleSidemenu={ toggleSidemenu }/>
      <Logo />
      <SearchBar />
      <AccountButtons name={'Ricardio'} />
    </div>
  )
}

export default NavBar;