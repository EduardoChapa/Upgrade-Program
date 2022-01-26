import { getHeroeByIdAsync } from "../../base-pruebas/09-promesas";
import heroes from '../../data/heroes';

describe('Testing with promises', () => {
    test('should return Batman', (done) => {
        const id = 1;
        const expected = heroes[0];
        
        getHeroeByIdAsync(id)
        .then(hero => {
            expect(hero).toBe(expected);
            done();
        });
    });

    test('should return an error', (done) => {
        const id = 15;
        const expected = 'No se pudo encontrar el héroe';

        getHeroeByIdAsync(id)
        .catch(hero => {
            console.log(hero);
            expect(hero).toBe(expected);
            done();
        });
    });
});