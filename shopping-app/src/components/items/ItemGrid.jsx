import React from 'react';
import useFetchProducts from '../../hooks/useFetchProucts';
import ItemCard from './ItemCard';

function ItemGrid() {

  const [ products, loading ] = useFetchProducts('https://fakestoreapi.com/products');

  return (
    <div className="item-grid">
      <div className='item-grid__grid'>
        {
          loading ?
          <p>Loading...</p> :
          products.map(product => (
            <ItemCard key={ product.id } title={ product.title } image={ product.image } rating={ product.rating.rate } price={ product.price }/>
          ))
        }
      </div>
      <div className="item-grid__nav-buttons">

      </div>
    </div>
  );
}

export default ItemGrid;