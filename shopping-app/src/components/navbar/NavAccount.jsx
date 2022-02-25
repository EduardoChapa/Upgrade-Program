import React from 'react';
import { Link } from 'react-router-dom';

import cart from '../../assets/icons/cart.png';

function AccountButtons() {

  return (
    <div className='navbar-account-links'>
      <ul className='navbar-account-links'>
        <Link className='navbar-account-links-item' to='account/orders'>Orders</Link>
        <Link className='navbar-account-links-item' to='account/favorites'>Favorites</Link>
        <Link className='navbar-account-links-item' to='cart'><img className='navbar-account-links-cart' src={ cart } alt="" /><span className='navbar-account-links-cart-number'>{0}</span></Link>
        <Link className='navbar-account-links-item' to='account/details'><img className='navbar-account-links-profile' src="https://stickerly.pstatic.net/sticker_pack/5JWfS9bSZXyrXbWzAOeYg/B6F7KL/2/57451cd5-dcc0-41de-b2ea-e67a705f7d32.png" alt="Profile"/></Link>
      </ul>
    </div>
  )
}

export default AccountButtons;