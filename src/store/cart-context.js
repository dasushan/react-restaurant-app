import React from 'react'

//CartContext is a global object / global store
const CartContext = React.createContext({
    items: [],
    totalAmount: 0,
    addItem: (item) => {},
    removeItem: (id) => {}
})

export default CartContext;