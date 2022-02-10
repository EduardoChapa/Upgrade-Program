import DashboardRouter from "../../routers/DashboardRouter";
import { mount } from 'enzyme';
import AuthContext from "../../auth/authContext";
import { MemoryRouter } from "react-router-dom";

describe('Testing DashboardRouter', () => {

    const contextValue = { user: { name: 'Lulu', logged: true } }

    test('should display Marvel screen correctly', () => {
        const wrapper = mount(
            <AuthContext.Provider value={ contextValue }>
                <MemoryRouter>
                    <DashboardRouter/>
                </MemoryRouter>
            </AuthContext.Provider>
        );
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('h1').text().trim()).toBe('Marvel!');
        expect(wrapper.find('.text-info').text().trim()).toBe(contextValue.user.name);
    });
    
    test('should display DC screen correctly', () => {
        const wrapper = mount(
            <AuthContext.Provider value={ contextValue }>
                <MemoryRouter initialEntries={['/dc']}>
                    <DashboardRouter/>
                </MemoryRouter>
            </AuthContext.Provider>
        );
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('h1').text().trim()).toBe('DC!');
        expect(wrapper.find('.text-info').text().trim()).toBe(contextValue.user.name);
    });
});