import React, { useContext } from 'react';
import UserContext from './UserContext';

function HomeScreen() {

    const { user } = useContext(UserContext);

    return (
        <div>
            <h1>Home Screen</h1>
            <hr/>

            <pre>
                { JSON.stringify(user, null, 3) }
            </pre>
        </div>
    );
}

export default HomeScreen;
