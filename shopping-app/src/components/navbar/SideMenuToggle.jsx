import React from 'react'
import toggle from '../../assets/icons/toggle.png';

function SideMenuToggle({ toggleSidemenu }) {

  const handleClick = () => {
    toggleSidemenu();
  }

  return (
    <div className='navbar__toggle pointer'>
      <img className='' src={ toggle } alt="Toggle" onClick={ handleClick }/>
    </div>
  )
}

export default SideMenuToggle;