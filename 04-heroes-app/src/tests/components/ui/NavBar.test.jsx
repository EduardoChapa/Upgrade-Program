import { mount } from 'enzyme';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import AuthContext from '../../../auth/authContext';
import { NavBar } from '../../../components/ui/NavBar';
import types from '../../../types/types';

const mockNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockNavigate
}));

describe('Testing NavBar component', () => {

    const contextValue = { 
        user: { name: 'Lara', logged: true },
        dispatch: jest.fn()
    }

    const wrapper = mount(
        <AuthContext.Provider value={ contextValue }>
            <MemoryRouter initialEntries={['/']}>
                <Routes>
                    <Route path='/' element={ <NavBar /> }/>
                </Routes>
            </MemoryRouter>
        </AuthContext.Provider>
    );

    test('should display correctly', () => {
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('.text-info').text().trim()).toBe(contextValue.user.name);
    });
    
    test('should logout, call navigate and dispatch with the corresponding arguments', () => {
        wrapper.find('button').prop('onClick')();
        expect(contextValue.dispatch).toHaveBeenCalledWith({ type: types.logout });
        expect(mockNavigate).toHaveBeenCalledWith('/login', { replace: true });
    });
});