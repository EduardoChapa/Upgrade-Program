import React from 'react';
import { Link } from 'react-router-dom';

function FootSection() {
  return (
    <ul className='footer-section'>
      <li className='footer-section-item'><Link to='/'>Lorem, ipsum.</Link></li>
      <li className='footer-section-item'><Link to='/'>Lorem, ipsum.</Link></li>
      <li className='footer-section-item'><Link to='/'>Lorem, ipsum.</Link></li>
      <li className='footer-section-item'><Link to='/'>Lorem, ipsum.</Link></li>
      <li className='footer-section-item'><Link to='/'>Lorem, ipsum.</Link></li>
    </ul>
  );
}

export default FootSection;