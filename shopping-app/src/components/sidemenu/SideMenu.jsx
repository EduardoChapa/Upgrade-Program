import React from 'react';

function SideMenu({ visible }) {
  return (
    <div className={ visible? "sidemenu": "sidemenu hide" }>
      SideMenu!
    </div>
  )
}

export default SideMenu;