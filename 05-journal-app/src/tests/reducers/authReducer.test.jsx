import authReducer from "../../reducers/authReducer";
import types from "../../types/types";

describe('Testing authReducer', () => {
  test('should login correctly', () => {
    const initialState = { }
    const action = {
      type: types.login,
      payload: {
        uid: 'Yes',
        displayName: 'Ricardio'
      }
    }
    const state = authReducer(initialState, action);

    expect(state).toEqual({
      uid: 'Yes',
      name: 'Ricardio'
    });
  });
  
  test('should logout correctly', () => {
    const initialState = { };
    const action = { type: types.logout }
    const state = authReducer(initialState, action);

    expect(state).toEqual({ });
  });
  
  test('state should not change', () => {
    const initialState = { };
    const action = { type: 'sasasasasa' }
    const state = authReducer(initialState, action);

    expect(state).toEqual(initialState);
  });
});