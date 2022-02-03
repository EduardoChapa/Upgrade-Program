import React from 'react';
import { shallow } from 'enzyme';
import TodoList from '../../components/use-reducer/todo-components/TodoList';
import todos from '../fixtures/todos';

describe('Testing TodoList component', () => {

    const handleDelete = jest.fn();
    const handleToggle = jest.fn();
    const wrapper = shallow(<TodoList todos={ todos } handleDelete={ handleDelete } handleToggle={ handleToggle }/>);

    test('should display correctly', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('should have two TodoItemList components', () => {
        expect(wrapper.find('TodoListItem').length).toBe(todos.length);
        expect(wrapper.find('TodoListItem').at(0).prop('handleDelete')).toEqual(expect.any(Function));
    });
});