import './Cart.css'
const CartModal = ({click}) =>{
    return (
        <div className="modal">
            <div className="modal-content">
                <div>
                    <span>Margherita x 2</span>
                    <span className='float-end'>Rs. 250</span>
                </div>
                <hr></hr>
                <div className='fs-4 mt-2'>
                    <strong>Total amount</strong>
                    <strong className='float-end'>Rs. 250</strong>
                </div>
                <div className='d-flex justify-content-end mt-3'>
                    <button onClick={click} className="btn close me-2 ">Close</button>
                    <button className="btn order">Order</button>
                </div>
            </div>
        </div>
    )
}
export default CartModal;