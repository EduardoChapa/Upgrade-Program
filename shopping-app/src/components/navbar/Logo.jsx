import React from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/icons/logo.png';

function Logo() {

  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/');
  }

  return (
    <div className='logo pointer' onClick={ handleClick }>
      <img src={ logo } alt="Shopper Hunter"/>
      <div className="logo__text">
        <p>Shopper</p>
        <p>Hunter</p>
      </div>
    </div>
  );
}

export default Logo;