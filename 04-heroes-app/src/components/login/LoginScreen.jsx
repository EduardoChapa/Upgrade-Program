import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../../auth/authContext';
import types from '../../types/types';

function LoginScreen() {

    const { dispatch } = useContext(AuthContext);
    const navigate = useNavigate();

    const lastPath = localStorage.getItem('lastPath') || '/marvel';

    const handleSubmit = () => {
        dispatch({
            type: types.login,
            payload: { name: 'Luluis' }
        });
        navigate(lastPath, {
            replace: true
        });
    }

    return (
        <div className='container mt-5'>
            <h1>Login!</h1>
            <hr/>
            <button className='btn btn-primary' onClick={ handleSubmit }>Login</button>
        </div>
    ) 
}

export default LoginScreen;