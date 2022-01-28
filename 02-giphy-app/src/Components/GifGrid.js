import React, { useEffect, useState } from 'react';
import GridItem from './GridItem';
import getGifs from '../helpers/getGifs';
import useFetchGifs from '../hooks/useFetchGifs';

function GifGrid({ searchTerm }) {

    const {data: images, loading} = useFetchGifs(searchTerm);

    return(
        <div id='grid-container'>
            <h3>{ searchTerm }</h3>
            {loading && <p>Loading...</p>}
            { images.map(gif => <GridItem key={ gif.id } gif={ gif }/>) }
        </div>
    );
}

export default GifGrid;