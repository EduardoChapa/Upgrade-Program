import { upload } from '@testing-library/user-event/dist/upload';
import React from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { saveNote, uploadImage } from '../../actions/notes';

function NotesAppBar() {

  const dispatch = useDispatch(); 
  const { active } = useSelector(state => state.notes);
  
  const handleSave = () => {
    dispatch(saveNote(active));
  }

  const handleAddPicture = () => {
    document.querySelector('#file-selector').click();
  }
  
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file)
      dispatch(uploadImage(file));
  }

  return (
    <div className="notes__appbar">
      <span>11 de Febrero del 2022</span>

      <input type="file" name="file-upload" id='file-selector' style={{display: 'none'}} onChange={ handleFileChange }/>

      <div>
        <button className='btn' onClick={ handleAddPicture }>
          Picture
        </button>
        <button className='btn' onClick={ handleSave }>
          Save
        </button>
      </div>
    </div>
  )
}

export default NotesAppBar;