import React from 'react'
import { Link } from 'react-router-dom';

function NavButtons() {
  return (
    <>
      <ul className='navbar-bottom-links'>
        <Link to='/items?type=categories' className='navbar-bottom-links-item'>Categories</Link>
        <Link to='/items?type=newest' className='navbar-bottom-links-item'>Newest</Link>
        <Link to='/items?type=hotsales' className='navbar-bottom-links-item'>Hot sales!</Link>
      </ul>
    </>
  )
}

export default NavButtons;