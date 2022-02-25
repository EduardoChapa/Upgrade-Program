import React from 'react';
import ItemCard from '../items/ItemCard';
import ArrowButton from './buttons/ArrowButton';
import useFetchProductsBySection from '../../hooks/useFetchProductsBySection';
import Loading from './Loading';

function Section({ title, uri }) {

  const [ products, loading ] = useFetchProductsBySection(uri);

  return (
    <section className='ui-section'>
      <div className="ui-section-title">
        <h1>{ title }</h1>
      </div>
      <div className="ui-section-body">
        <div className="ui-section-body-list">
          {
            loading ?
            <Loading />
            :
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
        <ArrowButton />
      </div>
    </section>
  );
}

export default Section;