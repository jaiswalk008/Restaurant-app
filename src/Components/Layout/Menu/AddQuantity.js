import { useRef } from 'react';
import '../Layout.css'
const AddQuantity = (props) =>{
    const quantity = useRef(1);
    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent form submission
        // Do something with the quantity value (e.g., pass it to a parent component)
        console.log(quantity.current.value);
    }

    return (
        <div className='container-fluid'>
            <form onSubmit={(handleSubmit)} className='add-form float-end'>
                <div className='text-center input-div'>
                    <label htmlFor="quantity"><strong className='pe-2'>Quantity</strong></label>
                    <input ref={quantity} min={1} defaultValue={1} className='w-25' type="number" id="quantity"></input>
                </div>
                <div className='text-center'>
                    <button className="btn btn-sm add">+Add</button>
                </div>
            </form>
        </div>
    )
}
export default AddQuantity;