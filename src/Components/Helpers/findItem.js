import { menuItems } from "./MenuItems"
const findItem = (id) =>{
    return menuItems.filter ((element) => id==element.id)
}
export default findItem;