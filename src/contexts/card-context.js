import {createContext, useEffect, useState} from "react";

const addCardItem = (cardItems, productToAdd) => {
    const existingCardItem = cardItems.find(cardItem => cardItem.id === productToAdd.id)
    if (existingCardItem) {
        return cardItems.map(cardItem => cardItem.id === productToAdd.id ?
            {...cardItem, quantity: cardItem.quantity + 1}:
            cardItem
        )
    }
    return [...cardItems, {...productToAdd, quantity: 1}]
}

export const CardContext = createContext({
    isCardOpen: false,
    setIsCardOpen: () => {
    },
    cardItems: [],
    addItemsToCard: () => {
    },
    cardCount:0
})


export const CardProvider = ({children}) => {
    const [isCardOpen, setIsCardOpen] = useState(false)
    const [cardItems, setCardItems] = useState([])
    const [cardCount, setCardCount] = useState(0)

    useEffect(()=>{
        const newCardCount = cardItems.reduce((total, {quantity}) => {
            return total += quantity
        }, 0)
        setCardCount(newCardCount)
    },[cardItems])

    const addItemsToCard = (productToAdd) => {
        setCardItems(addCardItem(cardItems, productToAdd))
    }

    const value = {isCardOpen, setIsCardOpen,addItemsToCard, cardItems,cardCount}


    return (<CardContext.Provider value={value}>
        {children}
    </CardContext.Provider>)
}
