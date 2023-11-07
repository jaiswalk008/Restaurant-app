import '../Layout.css'
import AddQuantity from './AddQuantity';
const MenuItem = (props) =>{
   return(
    <div className="menu-item">
        <div>
            <h4>{props.name}</h4>
            <i>{props.desc}</i><br></br>
            <strong className='price'>Rs. {props.price}</strong>
        </div>
        <AddQuantity/>
        <hr></hr>
    </div>
   )
}
export default MenuItem;