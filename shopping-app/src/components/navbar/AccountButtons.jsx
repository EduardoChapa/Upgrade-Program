import React from 'react';
import { Link } from 'react-router-dom';

import cart from '../../assets/icons/cart.png';

function AccountButtons() {

  return (
    <div className='account-buttons'>
      <ul className='account-buttons__buttons'>
        <Link className='account-buttons__buttons__button' to='account/orders'>Orders</Link>
        <Link className='account-buttons__buttons__button' to='account/favorites'>Favorites</Link>
        <Link className='account-buttons__buttons__button' to='cart'><img className='account-buttons__cart' src={ cart } alt="" /><span className='account-buttons__cart-number'>{0}</span></Link>
        <Link className='account-buttons__buttons__button' to='account/details'><img className='account-buttons__profile' src="https://stickerly.pstatic.net/sticker_pack/5JWfS9bSZXyrXbWzAOeYg/B6F7KL/2/57451cd5-dcc0-41de-b2ea-e67a705f7d32.png" alt="Profile"/></Link>
      </ul>
    </div>
  )
}

export default AccountButtons;