import { getHeroeById, getHeroesByOwner } from "../../base-pruebas/08-imp-exp";
import heroes from '../../data/heroes';

describe('Testing with imports and exports', () => {
    const id = 1;

    const hero = heroes.find(h => h.id === id);

    test('Should return Batman', () => {
        expect(getHeroeById(1)).toEqual(hero);
    });
    
});