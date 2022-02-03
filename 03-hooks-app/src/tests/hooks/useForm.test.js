import useForm from "../../hooks/useForm";
import { renderHook } from '@testing-library/react-hooks';
import { act } from "react-dom/test-utils";

describe('Testing useForm hook', () => {
    const initialForm = {
        name: 'Thomas',
        email: 'sample@sample.com'
    };

    test('Should return a default form', () => {
        const { result } = renderHook(() => useForm());
        const [ formValues, handleChange, reset ] = result.current;
        expect(formValues).toEqual({ name: '', email: '' });
    });
    
    test('Should change the value of the form', () => {
        const { result } = renderHook(() => useForm());
        const [initialForm, handleChange, reset ] = result.current;
        const newValues = { target: { name: 'name', value: 'Ricardio' } };
        act(() => { handleChange(newValues); });
        const [ formValues ] = result.current;
        expect(formValues).toEqual({ ...initialForm, name: 'Ricardio'});
    });
    
    test('Should reset the value of the form', () => {
        const { result } = renderHook(() => useForm());
        const [initialForm, handleChange, reset ] = result.current;
        const newValues = { target: { name: 'name', value: 'Ricardio' } };
        act(() => {
            handleChange(newValues);
            reset();
        });
        const [ formValues ] = result.current;
        expect(formValues).toEqual(initialForm);
    });
});