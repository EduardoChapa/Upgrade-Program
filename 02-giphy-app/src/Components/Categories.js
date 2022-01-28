import React from 'react';
import GifGrid from './GifGrid';

function Categories({ searchTerm }) {

    return(
        <ul>
            { searchTerm.map(searchTerm => <GifGrid key={ searchTerm } searchTerm={ searchTerm }/>) }
        </ul>
    );
}

export default Categories