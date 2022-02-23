import React from 'react';
import ItemCard from '../items/ItemCard';
import ArrowButton from '../buttons/ArrowButton';
import useFetchProducts from '../../hooks/useFetchProucts';

function Section({title}) {

  const [ products, loading ] = useFetchProducts('https://fakestoreapi.com/products?limit=5');

  return (
    <div className='section'>
      <div className="section__title">
        <h1>{ title }</h1>
      </div>
      <div className="section__item-list">
        {
          loading ?
          <p>Loading...</p>
          :
          products.map(product => (
            <ItemCard key={ product.id } title={ product.title } image={ product.image } rating={ product.rating.rate } price={ product.price }/>
          ))
        }
        <ArrowButton />
      </div>
    </div>
  );
}

export default Section;