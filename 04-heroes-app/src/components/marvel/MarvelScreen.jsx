import React from 'react';
import HeroList from '../hero/HeroList';

function MarvelScreen() {
    return <div>
        <h1>Marvel!</h1>
        <hr/>
        <HeroList publisher={ 'Marvel Comics' }/>
    </div>;
}

export default MarvelScreen;
