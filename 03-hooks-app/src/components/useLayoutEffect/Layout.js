import React, { useLayoutEffect, useRef, useState } from 'react';
import useCounter from '../../hooks/useCounter';
import useFetch from '../../hooks/useFetch';
import './layout.css';

function Layout() {

    const { counter, increment } = useCounter(1);

    const [boxSize, setBoxSize] = useState({});

    const { data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${ counter }`);

    const { quote, author } = !!data && data[0];

    const pTag = useRef();

    useLayoutEffect(() => {
        setBoxSize(pTag.current.getBoundingClientRect());
    },
    [quote]);

    return(
        <>
            <h1>Funny Quotes</h1>
            <hr/>
            <blockquote className='blockquote text-left'>
                <p className='mb-0' ref={ pTag }>{ quote }</p>
                <br/>
                <footer className='blockquote-footer'>{ author }</footer>
            </blockquote>

            <pre>
                { JSON.stringify(boxSize, null, 3 ) }
            </pre>

            <button 
                className='btn btn-primary'
                onClick={ increment }
            >
                Next
            </button>
        </>
    );
}

export default Layout;