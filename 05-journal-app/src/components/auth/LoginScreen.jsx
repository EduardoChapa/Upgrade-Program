import React from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { googleLogin, emailPasswordLogin } from '../../actions/auth';
import { setError } from '../../actions/ui';
import { useForm } from '../../hooks/useForm';

function LoginScreen() {

  const dispatch = useDispatch();
  const { loading } = useSelector(state => state.ui);

  const [formValues, handleInputChange] = useForm({
    email: 'sample@mail.com',
    password: '1111'
  });

  const { email, password } = formValues;

  const formIsValid = () => {
    if (email.length === 0 || password.length === 0) {
      dispatch(setError('Please fill all the data'));
      return false;
    }
    return true;
  }

  const handleLogin = (e) => {
    e.preventDefault();
    if (formIsValid())
      dispatch(emailPasswordLogin(email, password));
  }

  const handleGoogleLogin = () => {
    dispatch(googleLogin());
  }

  return (
    <div className='animate__animated animate__fadeIn animate__faster'>
      <h3 className='auth__title'>Login</h3>
      <form onSubmit={ handleLogin }>
        <input className='auth__input' type="text" placeholder='Your email...' name='email' autoComplete='off' value={ email } onChange={ handleInputChange }/>
        <input className='auth__input' type="password" placeholder='Your password...' name='password' value={ password } onChange={ handleInputChange }/>
        <button className='btn btn-primary btn-block' type='submit' disabled={ loading }>Login</button>
        <hr/>
        <div className='auth__social-networks'>
          <p>Login with...</p>
          <div className="google-btn" onClick={handleGoogleLogin}>
            <div className="google-icon-wrapper">
              <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
            </div>
            <p className="btn-text">
              <b>Login with Google</b>
            </p>
          </div>
        </div>
        <Link className='link' to='/auth/register'>
          Create new account
        </Link>
      </form>
    </div>
  )
}

export default LoginScreen;