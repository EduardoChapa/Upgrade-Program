import React, { useEffect } from 'react';

function Message() {

    const mouseMove = () => {
        console.log(':(');
    }

    useEffect(() => {
        window.addEventListener('mousemove', mouseMove);
      
        return () => {
            window.removeEventListener('mousemove', mouseMove);
        };
      }, []);

    window.addEventListener('mousemove', mouseMove)

    
    
    return(
        <h1>Cool</h1>
    );
}

export default Message;