import React, {useContext} from 'react';
import './cardDropDown.scss'
import Button from "../Button/Button";
import {CardContext} from "../../contexts/card-context";
import CardItem from "../cardItem/CardItem";
import {useNavigate} from "react-router-dom";

const CardDropDown = () => {
    const {cardItems} = useContext(CardContext)
    const navigate = useNavigate()
    const goToCheckout = () => {
      navigate('/checkout')
    }
    return (
        <div className='cardDropDown'>
            <div className="cardDropDown__items">
                {cardItems.length ? cardItems.map(item => <CardItem cardItem={item}
                                                                    key={item.id}/>) : 'Your Card is empty'}
            </div>
            <Button onClick={goToCheckout}>GO TO CHECKOUT</Button>
        </div>
    );
};

export default CardDropDown;
