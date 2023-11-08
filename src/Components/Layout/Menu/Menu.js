import MenuItem from "./MenuItem"
import "../Layout.css"
import { menuItems } from "../../Helpers/MenuItems"
const Menu = () =>{
    
    return (
        <div className="menu container">
            {menuItems.map((element) => {
                return <MenuItem key={element.id} id={element.id} name={element.name} desc={element.desc} price={element.price} />
            })}
        </div>
    )
}
export default Menu;