import React from 'react'
import cart from '../../assets/icons/add-to-cart.png';
import fav from '../../assets/icons/add-to-fav.png';
import star from '../../assets/icons/star.png';
import money from '../../assets/icons/money.png';
import { useNavigate } from 'react-router-dom';

function ItemCard({ id, title, image, rating, price }) {

  const navigate = useNavigate();

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    console.log('Item added to the cart!');
  }

  const handleAddToFav = (e) => {
    e.preventDefault();
    e.stopPropagation();
    console.log('Item added to favorites!');
  }

  const handleClick = (e) => {
    e.preventDefault();
    navigate(`/items/${id}`);
  }

  return (
    <div className='item-card pointer' onClick={ handleClick }>
      <div className="item-card__img">
        <img src={image} alt={ title } />
      </div>
      <div className="item-card__body">
        <h5>{ title }</h5>
        <div className="item-card__body-bottom">
          <p><img src={ money } alt="Price" /> ${ price }</p>
          <p><img src={ star } alt="Rating" /> <span>{ rating }</span></p>
        </div>
      </div>
      <div className="item-card__buttons">
        <img className='pointer' src={ cart } alt="Add to cart" onClick={ handleAddToCart }/>
        
        <img className='pointer' src={ fav } alt="Add to favorites" onClick={ handleAddToFav }/>
      </div>
    </div>
  )
}

export default ItemCard;