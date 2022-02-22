import React from 'react'
import { useState } from 'react';

function SearchBar() {

  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (e) => {
    e.preventDefault();
    setSearchTerm(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Searching ${searchTerm}!`);
  }

  return (
    <form className='navbar__search' onSubmit={ handleSubmit }>
      <input type="text" placeholder='Search for an item...' value={ searchTerm } onChange={ handleInputChange }/>
    </form>
  )
}

export default SearchBar;