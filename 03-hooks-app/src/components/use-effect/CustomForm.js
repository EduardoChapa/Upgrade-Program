import React, { useState } from 'react';
import useForm from '../../hooks/useForm';

function CustomForm() {
    const [formState, handleChange] = useForm({
        name: '',
        email: '',
        password: ''
    });

    const { name, email, password } = formState;    

    return(
        <>
            <h1>Form with custom hook</h1>
            <hr/>
            <div id='form-group'>
                <input type='text' name='name' value={ name } className='formControl' placeholder='Name' autoComplete='off' onChange={ handleChange }/>
                <br/>
                <input type='text' name='email' value={ email } className='formControl' placeholder='Email' autoComplete='off' onChange={ handleChange }/>
                <br/>
                <input type='text' name='password' value={ password } className='formControl' placeholder='Password' autoComplete='off' onChange={ handleChange }/>
            </div>
        </>
    );
}

export default CustomForm;