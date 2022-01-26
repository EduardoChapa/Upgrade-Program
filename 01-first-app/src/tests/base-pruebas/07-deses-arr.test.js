import { returnArray } from "../../base-pruebas/07-deses-arr";

describe('Testing with arrays', () => {
    const arr = ['ABC', 123];
    const [text, num] = returnArray();

    console.log(num);

    test('Must be equal to arr', () => {
        expect(returnArray()).toEqual(arr);
    });

    test('Must be a string', () => {
        expect(typeof num).toBe('number');
    });
    
    test('Must be a string', () => {
        expect(typeof text).toBe('string');
    });
});