import React from 'react';
import useCounter from '../../hooks/useCounter';
import useFetch from '../../hooks/useFetch';

function MultipleCustomHooks() {

    const { counter, increment } = useCounter(1);

    const { data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${ counter }`);

    const { quote, author } = !!data && data[0];

    return(
        <>
            <h1>Funny Quotes</h1>
            <hr/>
            <blockquote className='blockquote text-left'>
                <p className='mb-0'>{ quote }</p>
                <br/>
                <footer className='blockquote-footer'>{ author }</footer>
            </blockquote>
            <button 
                className='btn btn-primary'
                onClick={ increment }>
                Next
            </button>
        </>
    );
}

export default MultipleCustomHooks;