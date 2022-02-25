import React from 'react';
import arrow_right from '../../../assets/icons/arrow-right.png';
import arrow_left from '../../../assets/icons/arrow-left.png';

function ArrowButton({ left, action }) {
  return (
    <div className='ui-button-arrow' onClick={ action }>
      <img src={ left? arrow_left : arrow_right} alt="" />
    </div>
  );
}

export default ArrowButton;