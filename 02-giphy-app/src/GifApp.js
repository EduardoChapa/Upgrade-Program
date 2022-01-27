import React, { useState } from 'react';

import Search from './Components/Search';
import Categories from './Components/Categories';

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