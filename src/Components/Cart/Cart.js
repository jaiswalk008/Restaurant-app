import { useContext, useState ,useEffect} from 'react';
import {createPortal} from 'react-dom'
import './Cart.css'
import CartModal from './CartModal';
// import CartContext from '../Store/cart-context';

const Cart = ({totalItems,total}) => {
    const [showModal  , setShowModal] = useState(false);
    
    const modalHandler = () =>{
        setShowModal(!showModal)
    }
    
    return (
        <div>
            <button className="btn cart-button btn-danger" onClick={modalHandler}>
                🛒 Your Cart <span className="cart-value">{totalItems}</span></button>
            {showModal && createPortal(<CartModal click={modalHandler} total={total}/> , document.getElementById('modal-area'))}
        </div>
    )
}
export default Cart;