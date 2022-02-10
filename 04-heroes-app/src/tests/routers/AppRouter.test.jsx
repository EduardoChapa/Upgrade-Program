import AppRouter from "../../routers/AppRouter";
import { mount } from 'enzyme';
import AuthContext from "../../auth/authContext";

describe('Testing AppRouter', () => {
    const contextValue = { user: { logged: false } };

    test('should display the login screen if the user is not logged in', () => {
        const wrapper = mount(
            <AuthContext.Provider value={ contextValue }>
                <AppRouter />
            </AuthContext.Provider>
        );
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('h1').text().trim()).toBe('Login!');
    });
    
    test('should display the Marvel screen if the user is logged', () => {
        const contextValue = { user: { name: 'Pepedro', logged: true } };
        const wrapper = mount(
            <AuthContext.Provider value={ contextValue }>
                <AppRouter />
            </AuthContext.Provider>
        );
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('h1').text().trim()).toBe('Marvel!');
        expect(wrapper.find('span').text().trim()).toBe(contextValue.user.name);
    });
});