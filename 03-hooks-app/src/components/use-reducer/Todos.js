import React from 'react';
import AddTodo from './todo-components/AddTodo';
import TodoList from './todo-components/TodoList';
import useTodo from '../../hooks/useTodo';
import './style.css';

function Todos() {

    const [ todos, dispatch, description, handleChange, reset ] = useTodo();
    
    const handleDelete = (todoId) => {
        const action = { type: 'delete', payload: todoId }
        dispatch(action);
    }

    const handleToggle = (todoId) => {
        const action = { type: 'toggle', payload: todoId }
        dispatch(action);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!description.trim())
            return;
        const newTodo = { id: new Date().getTime(), desc: description, done: false }
        const action = { type: 'add', payload: newTodo }
        dispatch(action);
        reset();
    }

    return (
        <div>
            <h1>Todos: { todos.length }</h1>
            <hr/>
            <div className='row'>
                <TodoList handleToggle={ handleToggle } handleDelete={ handleDelete } todos={ todos }/>
                <AddTodo handleChange={ handleChange } handleSubmit={ handleSubmit } description={ description }/>
            </div>
        </div>
    );
}

export default Todos;