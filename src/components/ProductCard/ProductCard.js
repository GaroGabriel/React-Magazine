import React from 'react';
import './ProductCard.scss'
import Button from "../Button/Button";

const ProductCard = ({product}) => {
    const {name,price,imageUrl} = product
    return (
        <div className='productCard'>
            <img className='productCard__img' src={imageUrl} alt={name}/>
            <div className="productCard__footer">
                <span className="productCard__name">
{name}
                </span>
                <span className="productCard__price">
{price}
                </span>
            </div>
            <Button
                buttonType='inverted'
                type='button'
            >ADD TO CARD</Button>
        </div>
    );
};

export default ProductCard;
