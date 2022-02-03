import { renderHook } from '@testing-library/react-hooks';
import { act } from 'react-dom/test-utils';
import useCounter from '../../hooks/useCounter';


describe('Testing useCounter hook', () => {
    test('should return default values', () => {
        const { result } = renderHook(() => useCounter());

        console.log(result.current);

        expect(result.current.counter).toBe(0);
        expect(typeof result.current.increment).toBe('function');
        expect(typeof result.current.decrement).toBe('function');
        expect(typeof result.current.reset).toBe('function');
    });

    test('should increment the counter by 1', () => {
        const { result } = renderHook(() => useCounter());
        const { increment } = result.current;

        act( () =>  increment() );

        const { counter } = result.current;
        expect( counter ).toBe(1);
    });

    test('should decrement the counter by 1', () => {
        const { result } = renderHook(() => useCounter());
        const { decrement } = result.current;

        act( () =>  decrement() );

        const { counter } = result.current;
        expect( counter ).toBe(-1);
    });

    test('should reset the counter to 0', () => {
        const { result } = renderHook(() => useCounter());
        const { increment, reset } = result.current;

        act( () =>  {
            increment();
            reset()
        });

        const { counter } = result.current;
        expect( counter ).toBe(0);
    });
});
