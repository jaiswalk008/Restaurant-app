import React from "react"
const CartContext = React.createContext({
    items:[],
    totalAmount:0,
    addTotal:(amount) =>{},
    addItem : (item) => {},
    removeItem: (id) => {}
})
export default CartContext;