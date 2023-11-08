import { useRef } from 'react';
import '../Layout.css'
import { useContext } from 'react';
import CartContext from '../../Store/cart-context';
import findItem from '../../Helpers/findItem';
const AddQuantity = () =>{
    const quantity = useRef(1);
    const ctx = useContext(CartContext);
    const handleSubmit = (e) => {
        e.preventDefault();
        const qty =quantity.current.value;
        let itemFound=false;
        const itemId = e.target.parentElement.previousSibling.id;
        //searching for item if already in the cart
        const item = findItem(itemId)[0];
        ctx.items.forEach((element) => {
            if(element.id==itemId){
                element.qty= parseInt(element.qty) + +qty;
                itemFound=true
            }
        });
        if(!itemFound){
            ctx.addItem({...item,qty:qty})
        }
        // console.log((item.price)*qty)
        ctx.addTotal((item.price)*qty);
        // console.log(ctx.totalAmount);
        
    }

    return (
        <div className='container-fluid'>
            <form onSubmit={(handleSubmit)} className='add-form float-end'>
                <div className='text-center input-div'>
                    <label htmlFor="quantity"><strong className='pe-2'>Quantity</strong></label>
                    <input ref={quantity} min={1} defaultValue={1} className='w-25' type="number" id="quantity"/>
                </div>
                <div className='text-center'>
                    <button className="btn btn-sm add">+Add</button>
                </div>
            </form>
        </div>
    )
}
export default AddQuantity;