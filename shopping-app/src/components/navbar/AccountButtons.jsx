import React from 'react';
import { useNavigate } from 'react-router-dom';

import cart from '../../assets/icons/cart.png';

function AccountButtons() {

  const navigate = useNavigate();

  const handleOrdersClick = (e) => {
    e.preventDefault();
    navigate('account/orders');
    console.log('Orders clicked!');
  }
  
  const handleFavoritesClick = (e) => {
    e.preventDefault();
    navigate('account/favorites');
    console.log('Favorites clicked!');
  }
  
  const handleCartClick = (e) => {
    e.preventDefault();
    navigate('cart');
    console.log('Cart clicked!');
  }

  const handleProfileClick = (e) => {
    e.preventDefault();
    navigate('account/details');
    console.log('Account clicked!');
  }

  return (
    <div className='account-buttons'>
      <ul className='account-buttons__buttons'>
        <li className='pointer' onClick={ handleOrdersClick }>Orders</li>
        <li className='pointer' onClick={ handleFavoritesClick }>Favorites</li>
        <li className='pointer' onClick={ handleCartClick }><img className='account-buttons__cart' src={ cart } alt="" /><span className='account-buttons__cart-number'>{1}</span></li>
        <li><img className='account-buttons__profile pointer' src="https://stickerly.pstatic.net/sticker_pack/5JWfS9bSZXyrXbWzAOeYg/B6F7KL/2/57451cd5-dcc0-41de-b2ea-e67a705f7d32.png" alt="Profile" onClick={ handleProfileClick }/></li>
      </ul>
    </div>
  )
}

export default AccountButtons;