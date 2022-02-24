import React from 'react';
import { Outlet } from 'react-router-dom';

function Items() {
  return (
    <div>
      <Outlet />
    </div>
  );
}

export default Items;