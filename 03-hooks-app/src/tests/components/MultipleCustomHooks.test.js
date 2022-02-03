import React from 'react';
import { shallow } from 'enzyme'
import MultipleCustomHooks from '../../components/use-fetch/MultipleCustomHooks';
import useFetch from '../../hooks/useFetch';
import useCounter from '../../hooks/useCounter';
jest.mock('../../hooks/useFetch');
jest.mock('../../hooks/useCounter');

describe('Testing MultipleCustomHooks', () => {

    useCounter.mockReturnValue({
        counter: 10,
        increment: () => {}
    });

    test('should display correctly', () => {
        useFetch.mockReturnValue({
            data: null,
            loading: true,
            error: null
        });
        const wrapper = shallow(<MultipleCustomHooks />);
        expect(wrapper).toMatchSnapshot();
    });

    test('should display correct information', () => {
        useFetch.mockReturnValue({
            data: [{
                author: 'Ricardio',
                quote: 'Hi Hello'
            }],
            loading: false,
            error: null
        });

        const wrapper = shallow(<MultipleCustomHooks />);

        expect(wrapper.find('.alert').exists()).toBe(false);
        expect(wrapper.find('.mb-0').text().trim()).toBe('Hi Hello');
        console.log(wrapper.html());
    });

});