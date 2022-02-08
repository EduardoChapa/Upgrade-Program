import React from 'react';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import getHeroById from '../selectors/getHeroeById';

import 'animate.css';

function Hero() {

    const { heroId }= useParams();

    const hero = getHeroById(heroId);

    const navigate = useNavigate();

    const { 
        id,
        superhero,
        publisher,
        alter_ego,
        first_appearence,
        characters
    } = hero;

    if(!hero) return <Navigate to='/' />
    
    const imgPath = `/assets/${id}.jpg`;

    const handleReturn = () => {
        navigate(-1);
    }

    return <div className='row mt-5'>
        <div className='col-4 animate__animated animate__fadeInLeft'>
            <img className='img-thumbnail' src={imgPath} alt={superhero} />
        </div>

        <div className='col-8 animate__animated animate__fadeInRight'>
            <h3>{hero.superhero}</h3>
            <ul className='list-group list-group-flush'>
                <li className='list-group-item'><b>Alter Ego: </b>{alter_ego}</li>
                <li className='list-group-item'><b>Publisher: </b>{publisher}</li>
                <li className='list-group-item'><b>First Appearence: </b>{first_appearence}</li>
            </ul>

            <h5 className='mt-3'>Characters</h5>
            <p>{characters}</p>

            <button className='btn btn-outline-info' onClick={ handleReturn }>
                Back
            </button>
        </div>
    </div>;
}

export default Hero;
