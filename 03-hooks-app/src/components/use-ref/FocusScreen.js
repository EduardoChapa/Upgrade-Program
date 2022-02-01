import React, { useRef } from 'react';

export const FocusScreen = () => {

    const inputRef = useRef();

    const handleClick = (e) => {
        inputRef.current.select();
    }

    return (
        <div>
            <h1>WOaaaaaaaaaaa!!!</h1>
            <hr/>
                <input 
                    ref={ inputRef }
                    type='text'
                    placeholder='Name'
                    className='form-control'/>
                <button
                    className='btn btn-primary mt-5'
                    onClick={ handleClick }>
                    Focus
                </button>
        </div>
    );
};
