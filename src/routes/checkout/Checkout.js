import React, {useContext} from 'react';
import './checkout.scss'
import {CardContext} from "../../contexts/card-context";
import CheckoutItem from "../../components/checkoutItem/CheckoutItem";
import {useParams} from "react-router-dom";

const checkoutItems = ['Product','Description', 'Quantity','Price','Remove']

const Checkout = () => {
    const {cardItems,cardTotal} = useContext(CardContext)

    return (
        <div className='container checkout'>
            <div className="checkout__header">
                <ul className="checkout__list">
                    {checkoutItems.map((checkoutItem,key)=>{
                        return(
                            <li key={key} className="checkout__item">
                                {checkoutItem}
                            </li>
                        )
                    })}
                </ul>
            </div>
            {
                cardItems.map(cardItem => {
                    return (
                       <CheckoutItem
                           key={cardItem.id}
                           cardItem={cardItem}
                       />

                    )
                })
            }
            <span className="checkout__total">Total:${cardTotal}</span>
        </div>
    );
};

export default Checkout;
