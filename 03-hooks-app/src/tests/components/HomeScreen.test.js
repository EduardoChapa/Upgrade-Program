import React from 'react';
import { shallow, mount } from 'enzyme';
import HomeScreen from '../../components/use-context/HomeScreen';
import UserContext from '../../components/use-context/UserContext';

describe('Testing HomeScreen component', () => {

    const user = {
        name: 'Ricardio',
        email: 'sample@mail.com'
    };

    const wrapper = mount(
        <UserContext.Provider value={ { user } } >
            <HomeScreen />
        </UserContext.Provider>
    );

    test('should display correctly ', () => {
        expect(wrapper).toMatchSnapshot();
    });
});