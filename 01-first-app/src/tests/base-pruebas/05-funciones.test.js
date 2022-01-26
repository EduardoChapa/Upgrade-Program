import { getUser, getActiveUser } from "../../base-pruebas/05-funciones";

describe('Testing with objects', () => {
    const user = {
        uid: 'ABC123',
        username: 'Pedro99'
    }

    const activeUser = getActiveUser(user.username);

    test('Must be equal to user', () => {
        expect(getUser()).toEqual(user);
    });

    test('Must be equal to user2', () => {
        expect(getActiveUser('Pedro99')).toEqual({ uid: 'ABC567', username: 'Pedro99' });
    });
});