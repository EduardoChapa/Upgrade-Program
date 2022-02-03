import React from 'react';
import { mount } from 'enzyme';
import LoginScreen from '../../components/use-context/LoginScreen';
import UserContext from '../../components/use-context/UserContext';

describe('Testing LoginScreen component', () => {

    const setUser = jest.fn();

    const wrapper = mount(
        <UserContext.Provider value={{ setUser }} >
            <LoginScreen />
        </UserContext.Provider>
    );

    test('should display correctly', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('should call setUser with the expected argument', () => {
        wrapper.find('button').simulate('click');

        expect(setUser).toHaveReturnedWith({ id: 999, name: 'Pete', email: 'sample@mail.com' });
    });
});