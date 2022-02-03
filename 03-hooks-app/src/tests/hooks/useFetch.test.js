import { renderHook } from "@testing-library/react-hooks";
import useFetch from "../../hooks/useFetch";

describe('Testing useFetch hook', () => {
    test('should return default information', () => {
        let counter = 1;
        const url = `https://www.breakingbadapi.com/api/quotes/${ counter }`;
        const { result } = renderHook(() => useFetch(url));

        const { data, loading, error } = result.current;

        expect(data).toBe(null);
        expect(loading).toBe(true);
        expect(error).toBe(null);
    });

    test('should return correct information', async () => {
        let counter = 1;
        const url = `https://www.breakingbadapi.com/api/quotes/${ counter }`;
        const { result, waitForNextUpdate } = renderHook(() => useFetch(url));

        await waitForNextUpdate();

        const { data, loading, error } = result.current;

        expect(data.length).toBe(1);
    });

    test('should return correct information', async () => {
        const url = `https://reqres.in/apid/users?page=2`;
        const { result, waitForNextUpdate } = renderHook(() => useFetch(url));
        await waitForNextUpdate();
        const { data, loading, error } = result.current;
        expect(data).toBe(null);
        expect(loading).toBe(null);
        expect(error).toBe('Something went wrong');
    });
});