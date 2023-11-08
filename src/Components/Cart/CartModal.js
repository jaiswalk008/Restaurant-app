import './Cart.css'
import { useContext, useEffect, useState } from 'react';
import CartContext from '../Store/cart-context';
const CartModal = (props) =>{
    const ctx  = useContext(CartContext);
    // const [qty,setQty] = useState()
    const increaseQuantity =(e) =>{
        ctx.items.forEach((item) =>{
            if(item.id==e.target.id){
                item.qty++;
                ctx.addTotal(item.price);
            }
        })
    }
    const decreaseQuantity =(e) =>{
        ctx.items.forEach((item,index) =>{
            if(item.id==e.target.id){
                item.qty==1 ? ctx.items.splice(index,1) : item.qty--;
                ctx.addTotal(-item.price);
            }
        })
    }
    return (
        <div className="modal">
            <div className="modal-content">
                {ctx.items.map((element) => {
                    return (
                        <>
                            <div className='d-flex justify-content-between' key={element.id}>
                                <div>
                                    <span>{element.name} x {element.qty}</span><br></br>
                                    <strong style={{color: 'rgb(154, 56, 56)'}}>Rs. {element.price*element.qty}</strong>    
                                </div>
                                <div className='float-end'>
                                    <button id={element.id} onClick={increaseQuantity} className='increase'>+</button>
                                    <button id={element.id} onClick={decreaseQuantity} className='decrease'>-</button>
                                </div>

                            </div>
                            <hr></hr>
                        </>
                   
                    )
                })}
               
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