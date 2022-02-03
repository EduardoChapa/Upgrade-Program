import React from 'react';
import { shallow } from 'enzyme';
import TodoListItem from '../../components/use-reducer/todo-components/TodoListItem';
import todos from '../fixtures/todos';



describe('Testing TodoListItem component', () => {

    const handleDelete = jest.fn();
    const handleToggle = jest.fn();
    const wrapper = shallow(<TodoListItem todo={ todos[0] } index={ 0 } handleDelete={ handleDelete } handleToggle={ handleToggle }/>);

    test('should display correctly', () => {
        expect(wrapper).toMatchSnapshot();
    });
    
    test('should call handleDelete', () => {
        wrapper.find('button').simulate('click');
        expect(handleDelete).toHaveBeenCalledWith(todos[0].id);
    });

    test('should call handleToggle', () => {
        wrapper.find('p').simulate('click');
        expect(handleToggle).toHaveBeenCalledWith(todos[0].id);
    });

    test('should display the correct text', () => {
        const p = wrapper.find('p');
        expect(p.text()).toBe(`${ 1 }. ${ todos[0].desc }`);
    });
    
    test('should have class complete', () => {
        const todo = todos[0];
        todo.done = true
        const wrapper = shallow(<TodoListItem todo={ todo } />);
        expect(wrapper.find('p').hasClass('done')).toBe(true);
    });
});