import React from 'react'
import NavAccount from './NavAccount';
import NavLogo from './NavLogo';
import NavLinks from './NavLinks';
import NavSearch from './NavSearch';

function NavBar() {

  return (
    <div className="navbar">
      <div className="navbar-top">
        <NavLogo />
        <NavSearch />
        <NavAccount name={'Ricardio'} />
      </div>
      <div className="navbar-bottom">
        <NavLinks />
      </div>
    </div>
  )
}

export default NavBar;