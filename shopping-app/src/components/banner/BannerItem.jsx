import React from 'react';

function BannerItem({img, title}) {

  const handleClick = (e) => {
    e.preventDefault();
    console.log('Banner item clicked!');
  }

  return (
    <div className='banner__item pointer' onClick={ handleClick }>
      <img src={ img } alt="Banner Item" />
    </div>
  );
}

export default BannerItem;