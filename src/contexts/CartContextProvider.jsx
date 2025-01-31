import React, { createContext, useContext, useState } from 'react'

export const CartContext = createContext()

const getTotalPrice = (cart) => {
    let total = 0 
    cart.forEach(item => {
    total += item.product.price * item.quantity
    })
    return total
}

const getTotalQuantity = (cart) => {
    let total = 0 
    cart.forEach(item => {
    total += item.quantity
    })
    return total
}


const CartContextProvider = ({ children }) => {
    const [cart, setCart] = useState([])
    const totalQuantity = getTotalQuantity(cart)
    const totalPrice = getTotalPrice(cart)

    const addToCart = (product) => {
        const item = cart.find(cartItem => cartItem.product.id === product.id)

        item 
        ? item.quantity++
        : setCart(state => [...state, { product, quantity: 1}])
    }
    
    const removeOne = (productyId) => {
        const item = cart.find(cartItem => cartItem.product.id === product.id)

        let newCart = [...cart]

        item.quantity <= 1
        ? newCart = state.cart.filter(item => item.product.id !== productyId)
        : item.quantity --
        
        setCart(newCart)
    }

    const removeItem = (productId) => {
        setCart(state => state.filter(item => item.product.id !== productId))
    }

    const clearCart = () => {
        setCart([])
    }
    

    const values = {
        cart,
        totalQuantity,
        totalPrice,
        addToCart,
        removeOne,
        removeItem,
        clearCart
    }


  return (
    <CartContext.Provider value={ values }>
        { children }
    </CartContext.Provider>
  )
}

export default CartContextProvider

export const useCart = () => {
    const context = useContext(CartContext)
    if(!context) throw new Error('useCaty cannot be used outside CartContextProvider')

        return context
    }
