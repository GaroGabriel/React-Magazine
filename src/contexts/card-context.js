import {createContext, useState} from "react";

export const CardContext = createContext({
    isCardOpen:false,
    setIsCardOpen:()=>null
})


export const CardProvider = ({children}) => {
    const [isCardOpen, setIsCardOpen] = useState(false)
    const value = {isCardOpen, setIsCardOpen}


    return (<CardContext.Provider value={value}>
        {children}
    </CardContext.Provider>)
}
