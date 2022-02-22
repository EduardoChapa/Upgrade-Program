import React from 'react';
import ItemCard from '../items/ItemCard';

import arrow from '../../assets/icons/arrow-right.png';

function Section({title}) {
  return (
    <div className='section'>
      <div className="section__title">
        <h1>{ title }</h1>
      </div>
      <div className="section__item-list">
      <ItemCard title='Jejeo' image='https://i.pinimg.com/564x/70/a4/61/70a4618c4d2b2f9c2fa2ed0d21acdc38.jpg' rating={5} price={ 50 }/>
      <ItemCard title='Jejeo' image='https://i.pinimg.com/564x/70/a4/61/70a4618c4d2b2f9c2fa2ed0d21acdc38.jpg' rating={5} price={ 50 }/>
      <ItemCard title='Jejeo' image='https://i.pinimg.com/564x/70/a4/61/70a4618c4d2b2f9c2fa2ed0d21acdc38.jpg' rating={5} price={ 50 }/>
      <ItemCard title='Jejeo' image='https://i.pinimg.com/564x/70/a4/61/70a4618c4d2b2f9c2fa2ed0d21acdc38.jpg' rating={5} price={ 50 }/>
      <ItemCard title='Jejeo' image='https://i.pinimg.com/564x/70/a4/61/70a4618c4d2b2f9c2fa2ed0d21acdc38.jpg' rating={5} price={ 50 }/>
      <div className="section__arrow pointer">
        <img src={ arrow } alt="" />
      </div>
      </div>
    </div>
  );
}

export default Section;