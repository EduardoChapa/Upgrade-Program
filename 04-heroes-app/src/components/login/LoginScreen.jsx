import React from 'react';
import { useNavigate } from 'react-router-dom';

function LoginScreen() {

    const navigate = useNavigate();

    const handleSubmit = () => {
        navigate('/marvel', {
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