import { useState } from "react";

const initialState = {
    cart: [],
}

const useInitialState = () => {
    const [state, setState] = useState(initialState)
    
    const addToCart = (payload) => {
        { !state.cart.includes(payload) ?
            setState({
                ...state,
                cart: [...state.cart, payload]
            }) : null
        }        
    }

    const deleteItem = (payload) => {
        setState({
            ...state,
            cart: state.cart.filter(item => item.id !== payload.id),
        })
    }

    return {
        state,
        addToCart,
        deleteItem
    }
}

export default useInitialState