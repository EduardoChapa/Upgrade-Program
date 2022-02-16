import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { newNote, startLoadingNotes } from '../../actions/notes';
import { db } from '../../firebase/firebase-config';
import types from '../../types/types';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);
const initialState = {
  auth: { uid: 'TEST'}
};

let store = mockStore(initialState);

describe('Testing notes actions', () => {

  beforeEach(() => {
    store = mockStore(initialState);
  });

  test('should create a new note', async () => {
    await store.dispatch(newNote());
    const actions = store.getActions();

    expect(actions[0]).toEqual({
      type: types.notesActive,
      payload: {
        body: "",
        date: expect.any(Number),
        id: expect.any(String),
        title: "",
      }
    });
    
    expect(actions[1]).toEqual({
      type: types.notesAddNew,
      payload: {
        body: "",
        date: expect.any(Number),
        id: expect.any(String),
        title: "",
      }
    });

    const id = actions[0].payload.id;

    db.doc(`${ initialState.auth.uid }/journal/notes/${ id }`).delete();
  });

  test('should load the notes', async () => {
    await store.dispatch(startLoadingNotes('TEST'));
    const actions = store.getActions();
    console.log(actions);
  });
});