import React, { useContext } from 'react';
import UserContext from './UserContext';

function LoginScreen() {

    const { setUser } = useContext(UserContext);

    return (
        <div>
            <h1>Login Screen</h1>
            <hr/>
            <button onClick={ () => setUser({ id: 999, name: 'Pete', email: 'sample@mail.com' }) }>
                Add user
            </button>
        </div>
    );
}

export default LoginScreen;