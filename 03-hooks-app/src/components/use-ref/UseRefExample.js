import React, { useState } from 'react';
import MultipleCustomHooks from '../use-fetch/MultipleCustomHooks';

function UseRefExample() {

    const [show, setShow] = useState(false);

    return(
        <div>
            <h1>useRef Example</h1>
            <hr />
            { show && <MultipleCustomHooks /> }
            <br/>
            <button
                className='btn btn-primary mt-5'
                onClick={ () => { setShow(!show) } }>
                Show/Hide
            </button>
        </div>
    );
}

export default UseRefExample;