import React, { useState } from 'react';

function Counter() {

    const [counter, setCounter] = useState({ counter1: 0, counter2: 0 });

    const { counter1, counter2 } = counter;

    const addOneToOne = () => {
        setCounter({
            ...counter,
            counter1: counter1 + 1
        });
    }
    return (
        <>
            <h1>Counter: { counter1 }</h1>
            <hr/>
            <button className='btn btn-primary' onClick={ addOneToOne }>
                +1
            </button>
        </>
    );
}

export default Counter;