import React, { useState } from 'react';
import useCounter from '../hooks/useCounter';
import Counter from './use-state/Counter';

function CounterCustom() {

    const { state, increment, decrement } = useCounter(1);

    return (
        <>
            <h1>Counter: { state }</h1>
            <hr/>
            <button className='btn btn-primary' onClick={ () => increment() }>+1</button>
            <button className='btn btn-primary' onClick={ () => decrement() }>-1</button>
        </>
    );
}

export default CounterCustom;