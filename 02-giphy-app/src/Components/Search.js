import React from 'react';
import PropTypes from 'prop-types';

function Search({ setSearchTerm }) {

    const handleSubmit = (e) => {
        e.preventDefault();
        if (e.target.search.value)
            setSearchTerm((categories) => [e.target.search.value]);
        else {
            const input = document.getElementById('search');
            input.style.borderColor = 'red';
        }
    }

    return(
        <form autoComplete='off' onSubmit={ handleSubmit }>
            <input id='search' name='search' type='text' placeholder='Search for a GIF'></input>
            <br/>
            <input type='submit' value='Search'></input>
        </form>
    );
}

Search.propTypes = {
    setSearchTerm: PropTypes.func.isRequired
};

export default Search;