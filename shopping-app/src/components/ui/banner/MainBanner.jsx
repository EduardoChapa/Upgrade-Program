import React from 'react';
import useBannerSlider from '../../../hooks/useBannerSlider';
import useFetchAllProducts from '../../../hooks/useFetchAllProucts';
import ArrowButton from '../buttons/ArrowButton';

function MainBanner() {

  const [products, loading] = useFetchAllProducts('https://fakestoreapi.com/products');

  const [ currentItem, nextItem, previousItem ] = useBannerSlider(products);

  return (
    <div className='ui-banner'>
      {
        loading ? 
        <div className="ui-banner-loading-container"><div className="ui-loading"></div></div>
        :
        <>
          <ArrowButton left action={ previousItem } />
          <div className="ui-banner-item">
            <img className='ui-banner-item-img' src={ products[currentItem].image } alt="" />
          </div>
          <ArrowButton action={ nextItem } />
        </>
      }
    </div>
  );
}

export default MainBanner;