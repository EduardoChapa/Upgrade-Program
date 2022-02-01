import React from 'react';

console.log('Hi Hello');

const initialState = [
    {
        id: 1,
        todo: 'Finish React course',
        done: false
    }
]

function todoReducer(state = initialState, action) {
    if(action?.type === 'add') {
        state = [
            ...state,
            action.payload
        ];
    }

    return state
}

let todos = todoReducer();

const newTodo = {
    id: 2,
    todo: 'Funny',
    done: false
}

const action = {
    type: 'add',
    payload: newTodo
}

todos = todoReducer(todos, action);

console.log(todos);