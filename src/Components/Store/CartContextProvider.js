import { useState } from "react";
import CartContext from "./cart-context";

const CartContextProvider = (props) =>{
    const [items , setItems] = useState([]);
    const [total,setTotal] = useState(0);
    const addItemToCartHandler = item => {
        const updatedItems = [...items , item];
        setItems(updatedItems);
    };
    const addTotal=(amount) =>{
        setTotal(total+amount);
    }
    const removeItemFromHandler = item => {
        
    };
    
    const cartContext ={
        items:items,
        totalAmount:total,
        addTotal:addTotal,
        addItem : addItemToCartHandler,
        removeItem: removeItemFromHandler,
    }
    return <CartContext.Provider value={cartContext}>{props.children}</CartContext.Provider>
}
export default CartContextProvider;