import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../assets/icons/logo.png';

function Logo() {

  return (
      <Link className='logo' to='/'>
        <img src={ logo } alt="Shopper Hunter"/>
        <div className="logo__text">
          <p>Shopper</p>
          <p>Hunter</p>
        </div>
      </Link>
  );
}

export default Logo;