import React from 'react';

function AddTodo({ handleSubmit, handleChange, description }) {
    return (
        <div className='col-5'>
            <h4>Add todo</h4>
            <hr/>
            <form onSubmit={ handleSubmit }>
                <input 
                    type='text'
                    name='description'
                    placeholder='Description...'
                    autoComplete='off'
                    onChange={ handleChange }
                    value={ description }
                />
                <button className='btn btn-outline-primary mt-1 btn-block'>Add</button>
            </form>
        </div> 
    );
}

export default AddTodo;