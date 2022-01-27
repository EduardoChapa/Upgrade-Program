import React from 'react';

import GridItemStyle from '../styles/GridItemStyle.css';

function GridItem({ gif }) {
    return (
        <div id='gif-container'>
            <img src={ gif.url } alt={ gif.title }></img>
            <div id='text-container'>
            <h4>{ gif.title }</h4>
            </div>
        </div>
    );
}

export default GridItem;