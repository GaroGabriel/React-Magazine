import React from 'react';
import './cardItem.scss'

const CardItem = ({cardItem}) => {
    const {name, quantity, imageUrl, price} = cardItem
    return (
        <div className='cardItem'>
            <img className='cardItem__img' src={imageUrl} alt={name}/>
            <div className="cardItem__details">
                <span className="cardItem__title">{name}</span>
                <span className="cardItem__quantity">
                {quantity} x ${price}
            </span>
            </div>
        </div>
    );
};

export default CardItem;
