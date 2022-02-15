import Swal from 'sweetalert2';
import { db } from '../firebase/firebase-config';
import { fileUpload } from '../helpers/fileUpload';
import { loadNotes } from '../helpers/loadNotes';
import types from '../types/types';

export function newNote() {
  return async (dispatch, getState) => {
    const { uid } = getState().auth;
    const newNote = {
      title: '',
      body: '',
      date: new Date().getTime()
    }
    const doc = await db.collection(`${ uid }/journal/notes`).add(newNote);
    dispatch(activeNote(doc.id, newNote));
    dispatch(addNewNote(doc.id, newNote));
  }
}

export function addNewNote(id, note) {
  return {
    type: types.notesAddNew,
    payload: {
      id,
      ...note
    }
  }
}

export function activeNote(id, note) {
  return ({
    type: types.notesActive,
    payload: {
      id,
      ...note
    }
  })
}

export function setNotes(notes) {
  return {
    type: types.notesLoad,
    payload: notes
  }
}

export function startLoadingNotes(uid) {
  return async (dispatch) => {
    const notes = await loadNotes(uid);
    dispatch(setNotes(notes));
  }
}

export function saveNote(note) {
  return async (dispatch, getState) => {
    const { uid } = getState().auth;
    if (!note.url)
      delete note.url;
    const noteToSave = { ...note }
    delete noteToSave.id;
    await db.doc(`${uid}/journal/notes/${note.id}`).update(noteToSave);
    dispatch(refreshNote(note.id, noteToSave));
  }
}

export function refreshNote(id, note) {
  return {
    type: types.notesUpdate,
    payload: { id, note: { id, ...note } }
  }
}

export function uploadImage(file) {
  return async (dispatch, getState) => {
    const { active } = getState().notes;
    
    Swal.fire({
      title: 'Uploading your image',
      text: 'Please wait...',
      allowOutsideClick: false,
      didOpen: () => {
        Swal.showLoading();
      }
    });

    const fileUrl = await fileUpload(file);
    active.url = fileUrl;
    dispatch(saveNote(active));
    Swal.close();
  }
}

export function startDeletingNote(id) {
  return async (dispatch, getState) => {
    const uid = getState().auth.uid;
    await db.doc(`${ uid }/journal/notes/${ id }`).delete();

    dispatch(deleteNote(id));
  }
}

export function deleteNote(id) {
  return {
    type: types.notesDelete,
    payload: id
  }
}

export function noteLogout() {
  return {
    type: types.notesLogoutCleaning
  }
}

