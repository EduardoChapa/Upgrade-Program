import React from 'react';
import './Card.css';
import PropTypes from 'prop-types';

const Card = ({name, message, image}) => {
    return (
        <div id='card'>
            <img src={image} alt='Profile'></img>
            <div id='container'>
                <h3>{name}</h3>
                <p>
                    {message}
                </p>
            </div>
        </div>
    );
}

Card.propTypes = {
    message: PropTypes.string,
    image: PropTypes.string,
    name: PropTypes.string
}

Card.defaultProps = {
    message: 'This is a React component',
    image: 'https://www.w3schools.com/howto/img_avatar2.png',
    name: 'Jane'
}

export default Card;