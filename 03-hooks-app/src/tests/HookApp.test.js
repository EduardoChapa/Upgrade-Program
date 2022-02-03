import React from 'react';
import { shallow } from 'enzyme';
import HooksApp from "../HooksApp";


describe('Testing HookApp', () => {
    test('shloud display correctly', () => {
        const wrapper = shallow(<HooksApp />);
        expect(wrapper).toMatchSnapshot();
    });
});