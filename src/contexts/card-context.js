import {createContext, useEffect, useState} from "react";

const addCardItem = (cardItems, productToAdd) => {
    const existingCardItem = cardItems.find(cardItem => cardItem.id === productToAdd.id)
    if (existingCardItem) {
        return cardItems.map(cardItem => cardItem.id === productToAdd.id ?
            {...cardItem, quantity: cardItem.quantity + 1} :
            cardItem
        )
    }
    return [...cardItems, {...productToAdd, quantity: 1}]
}
const removeCardItem = (cardItems, cardItemToRemove) => {
    const existingCardItem = cardItems.find(cardItem => cardItem.id === cardItemToRemove.id)
    if (existingCardItem.quantity === 1) {
        return cardItems.filter(cardItem => cardItem.id !== cardItemToRemove.id)
    } else {
        return cardItems.map(cardItem => {
            return cardItem.id === cardItemToRemove.id ?
                {...cardItem, quantity: cardItemToRemove.quantity - 1} :
                cardItem
        })
    }
    // return [...cardItems, {...productToAdd, quantity: 1}]
}
const clearCardItem = (cardItems, cardItemToClear) => {
    return cardItems.filter(cardItem => cardItem.id !== cardItemToClear.id)
}
export const CardContext = createContext({
    isCardOpen: false,
    setIsCardOpen: () => {
    },
    cardItems: [],
    addItemsToCard: () => {
    },
    removeItemsFromCard: () => {
    },
    clearItemFromCard: () => {
    },
    cardCount: 0,
    cardTotal:0
})


export const CardProvider = ({children}) => {
    const [isCardOpen, setIsCardOpen] = useState(false)
    const [cardItems, setCardItems] = useState([])
    const [cardCount, setCardCount] = useState(0)
    const [cardTotal, setCardTotal] = useState(0)

    useEffect(() => {
        const newCardCount = cardItems.reduce((total, {quantity}) => {
            return total + quantity
        }, 0)
        setCardCount(newCardCount)
    }, [cardItems])
    useEffect(() => {
        const newCardTotal = cardItems.reduce((total, {quantity,price}) => {
            return total + quantity * price
        }, 0)
        setCardTotal(newCardTotal)
    }, [cardItems])





    const addItemsToCard = (productToAdd) => {
        setCardItems(addCardItem(cardItems, productToAdd))
    }
    const removeItemsFromCard = (cardItemToRemove) => {
        setCardItems(removeCardItem(cardItems, cardItemToRemove))
    }
    const clearItemFromCard = (cardItemToClear) => {
        setCardItems(clearCardItem(cardItems, cardItemToClear))
    }

    const value = {
        isCardOpen,
        setIsCardOpen,
        addItemsToCard,
        removeItemsFromCard,
        clearItemFromCard,
        cardItems,
        cardCount,
        cardTotal
    };


    return (<CardContext.Provider value={value}>
        {children}
    </CardContext.Provider>)
}
