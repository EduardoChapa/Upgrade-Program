import { mount } from 'enzyme';
import { MemoryRouter, Route, Routes } from "react-router-dom";
import AuthContext from "../../../auth/authContext";
import LoginScreen from "../../../components/login/LoginScreen";
import types from '../../../types/types';

const mockNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockNavigate
}));

describe('Testing LoginScreen component', () => {

    const contextValue = {
        user: {logged: false},
        dispatch: jest.fn()
    }

    const wrapper = mount(
        <AuthContext.Provider value={ contextValue }>
            <MemoryRouter initialEntries={['/login']}>
                <Routes>
                    <Route path='/login' element={ <LoginScreen /> }/>
                </Routes>
            </MemoryRouter>
        </AuthContext.Provider>
    );

    test('should display correctly', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('should call dispatch and navigate', () => {
        const handleClick = wrapper.find('button').prop('onClick');
        handleClick();
        expect(contextValue.dispatch).toHaveBeenCalledWith({
            type: types.login,
            payload: { name: 'Luluis' }
        });

        expect(mockNavigate).toHaveBeenCalledWith( '/marvel', { replace: true } );
        
        localStorage.setItem('lastPath', '/dc');
        
        handleClick();

        expect(mockNavigate).toHaveBeenCalledWith( '/dc', { replace: true } );
    });
});