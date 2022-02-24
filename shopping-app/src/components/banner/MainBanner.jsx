import React from 'react';
import useBannerSlider from '../../hooks/useBannerSlider';
import useFetchAllProducts from '../../hooks/useFetchAllProucts';
import ArrowButton from '../buttons/ArrowButton';
import BannerItem from './BannerItem';

function MainBanner() {

  const [products, loading, error] = useFetchAllProducts('https://fakestoreapi.com/products');

  const [ currentItem, nextItem, previousItem ] = useBannerSlider(products);

  return (
    <div className='banner'>
      <ArrowButton left action={ previousItem } />
      {
        loading ?
        <div className="banner__loading-container"><div className="banner__loading"></div></div>
        :
        <BannerItem img={ products[currentItem].image } tittle={ products[currentItem].tittle }/>
      }
      <ArrowButton action={ nextItem } />
    </div>
  );
}

export default MainBanner;