import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
function SearchBar() {

  const navigate = useNavigate();

  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (e) => {
    e.preventDefault();
    setSearchTerm(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/items?q=${searchTerm}&type=search`);
    setSearchTerm('');
  }

  return (
    <form className='navbar-search' onSubmit={ handleSubmit }>
      <input type="text" placeholder='Search for an item...' value={ searchTerm } onChange={ handleInputChange }/>
    </form>
  )
}

export default SearchBar;