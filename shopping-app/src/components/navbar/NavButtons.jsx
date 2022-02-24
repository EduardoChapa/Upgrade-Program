import React from 'react'
import { Link } from 'react-router-dom';

function NavButtons() {
  return (
    <>
      <ul className='navbar__bottom__list'>
        <Link to='/' className='navbar__bottom__list__link nav-link'>Categories</Link>
        <Link to='/' className='navbar__bottom__list__link nav-link'>Newest</Link>
        <Link to='/' className='navbar__bottom__list__link nav-link'>placeholder</Link>
        <Link to='/' className='navbar__bottom__list__link nav-link'>Placeholder</Link>
        <Link to='/' className='navbar__bottom__list__link nav-link'>Placeholder</Link>
      </ul>
    </>
  )
}

export default NavButtons;