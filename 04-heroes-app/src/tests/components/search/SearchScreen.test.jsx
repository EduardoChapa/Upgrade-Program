import SearchScreen from "../../../components/search/SearchScreen";
import { MemoryRouter } from "react-router-dom";
import { mount } from 'enzyme';

const mockNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockNavigate
}));

describe('Testing SearchScreen component', () => {
    test('should display correctly with default values', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={['/search']}>
                <SearchScreen />
            </MemoryRouter>    
        );
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('.alert-info').text().trim()).toBe('Search for a hero...');
    });

    test('should show batman and the input should have query value', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={['/search?q=batman']}>
                <SearchScreen />
            </MemoryRouter>    
        );
        expect(wrapper.find('input').prop('value')).toBe('batman');
    });
    
    test('should display an error when no heroes were found', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={['/search?q=ohno']}>
                <SearchScreen />
            </MemoryRouter>    
        );
        expect(wrapper.find('input').prop('value')).toBe('ohno');
        expect(wrapper.find('.alert-danger').exists()).toBe(true);       
    });

    test('should call navigate to the correct url', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={['/search?q=ohno']}>
                <SearchScreen />
            </MemoryRouter>    
        );
        wrapper.find('input').simulate('change', {
            target: {
                name: 'search',
                value: 'batman'
            }
        });
        wrapper.find('form').prop('onSubmit')({
            preventDefault: () => {}
        });
        expect(mockNavigate).toHaveBeenCalledWith('?q=batman');
    });
});