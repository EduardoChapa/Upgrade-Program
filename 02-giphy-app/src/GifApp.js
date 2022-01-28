import React, { useState } from 'react';

import Search from './components/Search';
import Categories from './components/Categories';

function GifApp() {

    const [searchTerm, setSearchTerm] = useState(['unfunny']);

    return (
        <>
            <h2>GifApp</h2>
            <Search setSearchTerm={ setSearchTerm }/>
            <hr/>
            <Categories searchTerm={ searchTerm }/>
        </>
    );
}

export default GifApp;