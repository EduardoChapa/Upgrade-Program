import React from 'react';
import { Outlet } from 'react-router-dom';

function AccountScreen() {
  return (
    <div>
      <p>Profile Screen!</p>
      <Outlet />
    </div>
  );
}

export default AccountScreen;