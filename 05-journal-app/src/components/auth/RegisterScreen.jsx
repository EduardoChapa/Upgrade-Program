import React from 'react'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import validator from 'validator';
import { removeError, setError } from '../../actions/ui';
import { useSelector } from 'react-redux';
import { emailPasswordRegister } from '../../actions/auth';

function RegisterScreen() {

  const dispatch = useDispatch();
  const { msgError } = useSelector(state => state.ui);

  const [formValues, handleInputChange] = useForm({
    name: 'Ricardio Beat',
    email: 'sample@mail.com',
    password: '1111',
    password2: '1111'
  });

  const { name, email, password, password2 } = formValues;

  const handleRegister = (e) => {
    e.preventDefault();
    
    if (formIsValid()) {
      dispatch(emailPasswordRegister(email, password, name));
      console.log('All good');
    }
  }

  const formIsValid = () => {
    if (name.trim().length === 0) {
      dispatch(setError('Name is required'));
      return false;
    }
    if (!validator.isEmail(email)) {
      dispatch(setError('Email is not valid'));
      return false;
    }
    if (  password !== password2 || password.length < 5) {
      dispatch(setError('Invalid password format'));
      return false;
    }
    dispatch(removeError());
    return true;
  }

  return (
    <div className='animate__animated animate__fadeIn animate__faster'>
      <h3 className='auth__title'>Login</h3>
      <form onSubmit={ handleRegister }>
        
          { 
            msgError && 
            (
              <div className="auth__alert-error">
                { msgError }
              </div>
            )
          }
        
        <input className='auth__input' type="text" placeholder='Your name...' name='name' autoComplete='off' value={ name } onChange={ handleInputChange }/>
        <input className='auth__input' type="text" placeholder='Your email...' name='email' autoComplete='off' value={ email } onChange={ handleInputChange }/>
        <input className='auth__input' type="password" placeholder='Your password...' name='password' value={ password } onChange={ handleInputChange }/>
        <input className='auth__input' type="password" placeholder='Confirm your password...' name='password2' value={ password2 } onChange={ handleInputChange }/>
        <button className='btn btn-primary btn-block mb-5' type='submit'>Register</button>
        <Link className='link' to='/auth/login'>
          Already registered?
        </Link>
      </form>
    </div>
  )
}

export default RegisterScreen;