import React from 'react';
import { shallow } from 'enzyme';
import UseRefExample from '../../components/use-ref/UseRefExample';

describe('Testing UseRefExample', () => {

    const wrapper = shallow(<UseRefExample />);

    test('should display correctly', () => {
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('MultipleCustomHooks').exists()).toBe(false);
    });
    
    test('should display correctly', () => {
        wrapper.find('button').simulate('click');
        expect(wrapper.find('MultipleCustomHooks').exists()).toBe(true);
    });
});

