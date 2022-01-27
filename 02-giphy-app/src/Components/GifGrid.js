import React, { useEffect, useState } from 'react';
import GridItem from './GridItem';
import getGifs from '../helpers/getGifs';

function GifGrid({ searchTerm }) {

    const [images, setImages] = useState([]);

    useEffect(() => {
        getGifs(searchTerm)
        .then((gif) => {
            setImages(gif);
        });
    }, [searchTerm]);

    return(
        <div id='container'>
            <h3>{ searchTerm }</h3>
                { images.map(gif => <GridItem key={ gif.id } gif={ gif }/>) }
        </div>
    );
}

export default GifGrid;