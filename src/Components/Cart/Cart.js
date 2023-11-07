import { useState } from 'react';
import {createPortal} from 'react-dom'
import './Cart.css'
import CartModal from './CartModal';
import CartModalBackdrop from './CartModalBackdrop';

const Cart = () => {
    const [showModal  , setShowModal] = useState(false);
    const modalHandler = () =>{
        setShowModal(!showModal)
    }
    return (
        <div>
            <button className="btn cart-button btn-danger" onClick={modalHandler}>
                🛒 Your Cart <span className="cart-value">0</span></button>
            
            {showModal && createPortal(<CartModal click={modalHandler}/> , document.getElementById('modal-area'))}
            {showModal && createPortal(<CartModalBackdrop click={modalHandler}/> , document.getElementById('modal-backdrop'))}
        </div>
    )
}
export default Cart;