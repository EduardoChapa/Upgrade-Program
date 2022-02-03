import React from 'react';
import { shallow } from 'enzyme';
import AddTodo from '../../components/use-reducer/todo-components/AddTodo';

describe('Testing AddTodo component', () => {
    const wrapper = shallow(<AddTodo />);

    test('should display correctly', () => {
        expect(wrapper).toMatchSnapshot();
    });
});