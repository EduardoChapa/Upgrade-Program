import React, { useMemo } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import HeroCard from '../hero/HeroCard';
import getHeroesByName from '../selectors/getHeroesByName';
import queryString from 'query-string';

function SearchScreen() {

    const navigate = useNavigate();
    const location = useLocation();

    const { q = '' } = queryString.parse(location.search);
    
    const [ formValues, handleInputChange ] = useForm({ search: q });
    
    const { search } = formValues;
    
    const heroes = useMemo(() => getHeroesByName(q), [q]);
    
    const handleSearch = (e) => {
        e.preventDefault();
        navigate(`?q=${ search }`);
    }
    

    return <div>
        <h1>Search Screen!</h1>
        <hr/>

        <div className='row'>
            <div className='col-5'>
                <h4>Search</h4>
                <hr/>

                <form onSubmit={ handleSearch }>
                    <input type="text" placeholder='Search a hero...' className='form-control' name='search' autoComplete='off' value={ search } onChange={ handleInputChange }/>
                    <button className='btn btn-outline-primary mt-2' type='submit'>Search</button>
                </form>
            </div>

            <div className='col-7'>
                <h4>Results</h4>
                <hr/>

                {
                    (q === '') && 
                    <div className='alert alert-info'>
                        Search for a hero
                    </div>
                }

                {
                    heroes.map(hero => (
                        <HeroCard key={ hero.id } { ...hero }/>
                    ))
                }
            </div>
        </div>
    </div>
}

export default SearchScreen;
