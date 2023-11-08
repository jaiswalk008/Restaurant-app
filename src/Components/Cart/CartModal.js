import './Cart.css'
import { useContext, useEffect, useState } from 'react';
import CartContext from '../Store/cart-context';
const CartModal = (props) =>{
    const ctx  = useContext(CartContext);
   
    return (
        <div className="modal">
            <div className="modal-content">
                {ctx.items.map((element) => {
                    return (
                    <div key={element.id}>
                        <span>{element.name} x {element.qty}</span>
                        <span className='float-end'>Rs. {element.price*element.qty}</span>
                    </div>
                    )
                })}
               
                <hr></hr>
                <div className='fs-4 mt-2'>
                    <strong>Total amount</strong>
                    <strong className='float-end'>Rs. {ctx.totalAmount}</strong>
                </div>
                <div className='d-flex justify-content-end mt-3'>
                    <button onClick={props.click} className="btn close me-2 ">Close</button>
                    <button className="btn order">Order</button>
                </div>
            </div>
        </div>
    )
}
export default CartModal;