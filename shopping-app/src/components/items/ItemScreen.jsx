import React from 'react';
import { Outlet, useParams } from 'react-router-dom';
import useFetchProductsById from '../../hooks/useFetchProductsById';

import cart from '../../assets/icons/add-to-cart.png';
import fav from '../../assets/icons/add-to-fav.png';
import Section from '../home/Section';

function ItemScreen() {

  const { productId } = useParams();
  const [ product, loading ] = useFetchProductsById(productId);

  return (
    <div className='item-screen'>
      {
        loading ?
        <div className='item-screen__data'>
          Loading
        </div> :
        <div className='item-screen__data'>
          <h1>{ product.title }</h1>
          <p>{ product.category }</p>
          <img src={ product.image } alt="" />
          <p>{ product.description }</p>
          <p>{ product.rating.rate }</p>
          <p>{ product.price }</p>
        </div>
      }
      <div className="item-screen__buttons">
        <input type="image" src={ cart } />
        <input type="image" src={ fav } />
      </div>

      <div className="item-screen__sections">
        <Section title='People also bought' />
        <Section title={`More on `}/>
        <Section title='Related' />
      </div>

    </div> 
  );
}

export default ItemScreen;