import MenuItem from "./MenuItem"
import "./Layout.css"
const Menu = () =>{
    const menuItems = [
        {name:"MARGHERITA" , desc:"A hugely popular margherita, with a deliciously tangy single cheese topping",price:250},
        {name:"Peppy Paneer" , desc:"Chunky paneer with crisp capsicum and spicy red pepper - quite a mouthful!",price:259},
        {name:"MEXICAN GREEN WAVE" , desc:"A pizza loaded with crunchy onions, crisp capsicum, juicy tomatoes and jalapeno with a liberal sprinkling of exotic Mexican herbs.",price:350},
        {name:"DELUXE VEGGIE" , desc:"The onions, the capsicum, those delectable mushrooms - with paneer and golden corn to top it all.",price:400},
        {name:"CHEESE N CORN" , desc:"Cheese I Golden Corn | Cheese n Corn Pizza",price:200},
        {name:"INDI TANDOORI PANEER" , desc:"It is hot. It is spicy. It is oh-so-Indian. Tandoori paneer with capsicum I red paprika I mint mayo",price:450},
        {name:"VEGGIE PARADISE" , desc:"Goldern Corn, Black Olives, Capsicum & Red Paprika",price:359},
    ]
    return (
        <div className="menu container">
            {menuItems.map((element) => {
                return <MenuItem key={element.name} name={element.name} desc={element.desc} price={element.price} />
            })}
        </div>
    )
}
export default Menu;