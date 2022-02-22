import React from 'react';

function SideMenu({ visible }) {
  return (
    <div className={ visible? "sidemenu animate__animated animate__slideInLeft": "sidemenu animate__animated animate__slideOutLeft" }>
      SideMenu!
    </div>
  )
}

export default SideMenu;