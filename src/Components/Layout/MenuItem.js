import './Layout.css'
const MenuItem = (props) =>{
   return(
    <div className="menu-item">
        <h4>{props.name}</h4>
        <i>{props.desc}</i><br></br>
        <strong>Rs. {props.price}</strong>
        <hr></hr>
    </div>
   )
}
export default MenuItem;