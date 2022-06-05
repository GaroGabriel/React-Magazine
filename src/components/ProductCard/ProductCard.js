import React, {useContext} from 'react';
import './ProductCard.scss'
import Button from "../Button/Button";
import {CardContext} from "../../contexts/card-context";

const ProductCard = ({product}) => {
    const {name, price, imageUrl} = product
    const {addItemsToCard} = useContext(CardContext)
    const addProductToCardHandler = () => addItemsToCard(product)
    return (
        <div className='productCard'>
            <img className='productCard__img' src={imageUrl} alt={name}/>
            <div className="productCard__footer">
                <span className="productCard__name">
{name}
                </span>
                <span className="productCard__price">
${price}
                </span>
            </div>
            <Button
                buttonType='inverted'
                type='button'
                onClick={addProductToCardHandler}
            >ADD TO CARD</Button>
        </div>
    );
};

export default ProductCard;
