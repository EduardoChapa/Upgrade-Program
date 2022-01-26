import getSaludo from '../../base-pruebas/02-template-string';

describe('Testing template string file', () => {
    test('This must be "Hola, Eduardo"', () => {
        const name = 'Eduardo';
        const result = getSaludo(name);
        expect(result).toBe(`Hola, ${name}`);
    })
});