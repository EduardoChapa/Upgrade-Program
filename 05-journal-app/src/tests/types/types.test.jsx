import types from "../../types/types";

describe('Testing types', () => {
  test('should be equal to the types object', () => {
    expect(types).toEqual({
      login: '[Auth] Login',
      logout: '[Auth] Logout',
    
      uiSetError: '[UI] Set Error',
      uiRemoveError: '[UI] Remover Error',
    
      uiStartLoading: '[UI] Start Loading',
      uiFinishLoading: '[UI] Finish Loading',
    
      notesAddNew: '[Notes] New Note',
      notesActive: '[Notes] Set Active Note',
      notesLoad: '[Notes] Load Notes',
      notesUpdate: '[Notes] Note Updated',
      notesFileUrl: '[Notes] Imae URL Updated',
      notesDelete: '[Notes] Note Deleted',
      notesLogoutCleaning: '[Notes] Logout Cleaning'
    });
  });
});