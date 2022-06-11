import React, {useContext} from 'react';
import './checkoutItem.scss'
import {CardContext} from "../../contexts/card-context";

const CheckoutItem = ({cardItem}) => {
    const {name, imageUrl, price, quantity} = cardItem
    const {clearItemFromCard, addItemsToCard, removeItemsFromCard} = useContext(CardContext);
    const clearItemHandler = () => clearItemFromCard(cardItem)
    const addItemHandler = () => addItemsToCard(cardItem)
    const removeItemHandler = () => removeItemsFromCard(cardItem)

    return (
        <div className='checkoutItem'>
            <div className="checkoutItem__imgContainer">
                <img
                    alt={name}
                    src={imageUrl}
                    className="checkoutItem__img"
                />
            </div>
            <span className="checkoutItem__name">{name}</span>
            <div className="checkoutItem__quantityWrapper">
                <span className="checkoutItem__arrow" onClick={removeItemHandler}>
                    &#10094;
                </span>
                <span className="checkoutItem__quantity">
                    {quantity}
                </span>

                <span className="checkoutItem__arrow" onClick={addItemHandler}>
                    &#10095;
                </span>

            </div>
            <span className="checkoutItem__price">{price}</span>
            <div className="checkoutItem__removeBtnWrapper">
                <span
                    className="checkoutItem__removeBtn"
                    onClick={clearItemHandler}>
                    &#10005;
                </span>
            </div>
        </div>
    );
};

export default CheckoutItem;
