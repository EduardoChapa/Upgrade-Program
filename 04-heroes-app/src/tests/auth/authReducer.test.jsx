import authReducer from "../../auth/authReducer";
import types from "../../types/types";

describe('Testing authreducer', () => {
    test('should return the default state', () => {
        const state = authReducer({ logged: false }, { });
        expect(state).toEqual({ logged: false });
    });
    test('should authenticate and display the user name', () => {
        const action = {
            type: types.login,
            payload: { name: 'Lulu' }
        };
        const state = authReducer({ logged: false }, action);
        expect(state).toEqual({ logged: true, name: 'Lulu' });
    });
    test('should delete user name and set logged to false', () => {
        const action = { type: types.logout };
        const state = authReducer({ logged: true, name: 'Eldritch' }, action);
        expect(state).toEqual({ logged: false });
    });
})