import React, { useEffect, useState } from 'react';
import Message from './Message';

function SimpleForm() {

    const [formState, setFormState] = useState({
        name: '',
        email: ''
    });

    const { name, email } = formState;    

    useEffect(() => {
      console.log('Name changed');
    }, [name]);

    useEffect(() => {
        console.log('Email changed');
      }, [email]);

    const handleChange = ({ target }) => {
        setFormState({
            ...formState,
            [ target.name ]: target.value,
        });
    }

    return(
        <>
            <h1>Use Effect</h1>
            <hr/>
            <div id='form-group'>
                <input type='text' name='name' value={ name } className='formControl' placeholder='Name' autoComplete='off' onChange={ handleChange }/>
                <br/>
                <input type='text' name='email' value={ email } className='formControl' placeholder='Email' autoComplete='off' onChange={ handleChange }/>

                { name === 'cool' && <Message /> }
            </div>
        </>
    );
}

export default SimpleForm;