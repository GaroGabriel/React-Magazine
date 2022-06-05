import React, {useContext} from 'react';
import './CardIcon.scss'
import {ReactComponent as ShoppingIcon} from "../../assets/shopping-bag.svg";
import {CardContext} from "../../contexts/card-context";

const CardIcon = () => {
    const {setIsCardOpen, cardCount} = useContext(CardContext)
    const toggleIsCardOpen = () => {
        setIsCardOpen(prev => !prev)
    }


    return (
        <div
            className='cardIcon'
            onClick={toggleIsCardOpen}
        >
            <ShoppingIcon
                className='cardIcon__svg'
            />
            <span
                className='cardIcon__count'
            >
                {cardCount}
            </span>
        </div>
    );
};

export default CardIcon;
