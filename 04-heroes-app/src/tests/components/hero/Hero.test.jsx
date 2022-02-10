import { MemoryRouter, Route, Routes } from "react-router-dom";
import Hero from "../../../components/hero/Hero";
import { mount } from 'enzyme';

const mockNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockNavigate
}));

describe('Testing Hero component', () => {
    test('should not display the Hero component if there is no hero in the URL', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={['/hero']}>
                <Routes>
                    <Route path='/hero' element={ <Hero /> }/>
                    <Route path='/' element={ <h1>No hero page</h1> }/>
                </Routes>
            </MemoryRouter>
        );
        expect(wrapper.find('h1').text().trim()).toBe('No hero page');
    });

    test('should display the Hero component if there is a hero in the URL', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={['/hero/marvel-spider']}>
                <Routes>
                    <Route path='/hero:heroId' element={ <Hero /> }/>
                    <Route path='/' element={ <h1>No hero page</h1> }/>
                </Routes>
            </MemoryRouter>
        );
        expect(wrapper.find('.row').exists()).toBe(true);
    });
    
    test('should go back to the last screen', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={['/hero/marvel-spider']}>
                <Routes>
                    <Route path='/hero:heroId' element={ <Hero /> }/>
                    <Route path='/' element={ <h1>No hero page</h1> }/>
                </Routes>
            </MemoryRouter>
        );
        console.log(wrapper.html);
        wrapper.find('button').simulate('click');
        expect();
    });
    
    test('should display the no hero found screen', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={['/hero/marvel-spider']}>
                <Routes>
                    <Route path='/hero:heroId' element={ <Hero /> }/>
                    <Route path='/' element={ <h1>No hero page</h1> }/>
                </Routes>
            </MemoryRouter>
        );
        expect(wrapper.text()).toBe('No hero page');
    });
});