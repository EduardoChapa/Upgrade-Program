import React from 'react';
import { useSearchParams } from 'react-router-dom';
import useFetchAllProducts from '../../hooks/useFetchAllProucts';
import ItemCard from './ItemCard';

function ItemGrid() {

  const [ params ] = useSearchParams();
  const q = params.get('q');
  const [ products, loading ] = useFetchAllProducts();

  return (
    <div className="item-grid">
      <h1>{ q }</h1>
      <div className='item-grid__grid'>
        {
          loading ?
          <p>Loading...</p> :
          products.map(product => (
            <ItemCard
              key={ product.id }
              id={ product.id }
              title={ product.title }
              image={ product.image }
              rating={ product.rating.rate }
              price={ product.price }
            />
          ))
        }
      </div>
    </div>
  );
}

export default ItemGrid;