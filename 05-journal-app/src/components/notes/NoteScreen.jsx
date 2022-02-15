import React, { useEffect, useRef } from 'react'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { activeNote, startDeletingNote } from '../../actions/notes';
import { useForm } from '../../hooks/useForm';
import NotesAppBar from './NotesAppBar';

function NoteScreen() {

  const dispatch = useDispatch();
  const { active: note } = useSelector(state => state.notes);
  const [formValues, handleInputChange, reset] = useForm(note);
  const { body, title, id } = formValues;
  const activeId = useRef(note.id);

  const handleDelete = () => {
    dispatch(startDeletingNote(id));
  }

  useEffect(() => {
    if (note.id !== activeId.current) {
      reset(note);
      activeId.current = note.id;
    }
  }, [note, reset]);

  useEffect(() => {
    dispatch(activeNote(formValues.id, { ...formValues }));
  }, [formValues, dispatch]);
  
  return (
    <div className="notes__main-content">
      <NotesAppBar />
      <div className="notes__content">
          <input type="text" placeholder='Title' name='title' className='notes__title-input' autoComplete='off' value={ title } onChange={ handleInputChange }/>
          <textarea className='notes__textarea' placeholder="What's on your mind" name='body' value={ body } onChange={ handleInputChange }/>

          {
            (note.url)
            &&
            <div className="notes__image">
              <img src={note.url} alt="Plankton" />
            </div>
          }
      </div>

      <button className="btn btn-danger" onClick={ handleDelete }>Delete</button>
    </div>
  )
}

export default NoteScreen;