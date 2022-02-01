import React from 'react';
import TodoListItem from './TodoListItem';

function TodoList({ handleToggle, handleDelete, todos}) {
    return (
        <div className='col-7'>
            <ul className='list-group list-group-flush'>
                { todos.map((todo, i) => <TodoListItem key={ i } todo={ todo } index={ i } handleToggle={ handleToggle } handleDelete={ handleDelete } /> ) }
            </ul>
        </div>
    );
}

export default TodoList;