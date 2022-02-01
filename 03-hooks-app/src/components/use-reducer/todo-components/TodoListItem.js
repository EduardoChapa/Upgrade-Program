import React from 'react';

function TodoListItem({ todo, index, handleToggle, handleDelete }) {
    return (
        <li key={ todo.id } className='list-group-item'>
            <p className={ `${ todo.done && 'done' }` } onClick={ () => handleToggle(todo.id) }>
                { index + 1 }. { todo.desc }
            </p>
            <button className='btn btn-danger' onClick={ () => handleDelete(todo.id) }>
                Delete
            </button>
        </li>
    );
}

export default TodoListItem;
