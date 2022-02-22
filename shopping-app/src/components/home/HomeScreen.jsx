import React from 'react'
import MainBanner from '../banner/MainBanner';
import Section from './Section';

function HomeScreen() {
  return (
    <div className='homescreen'>
      <MainBanner />
      <Section title='For you'/>
      <Section title='Popular'/>
      <Section title='Hot sales'/>
      <Section title='Yeah'/>
    </div>
  );
}

export default HomeScreen;