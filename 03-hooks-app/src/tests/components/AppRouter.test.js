import React from 'react';
import { mount } from 'enzyme';
import AppRouter from '../../components/use-context/AppRouter';
import UserContext from '../../components/use-context/UserContext';

describe('Testing LoginScreen component', () => {

    const user = {
        id: 1,
        name: 'Ricardio'
    }

    const wrapper = mount(
        <UserContext.Provider value={{ user }} >
            <AppRouter />
        </UserContext.Provider>
    );

    test('should display correctly', () => {
        expect(wrapper).toMatchSnapshot();
    });
});