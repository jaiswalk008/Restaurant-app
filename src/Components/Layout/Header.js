import Cart from '../Cart/Cart';
import { useContext, useState ,useEffect} from 'react';
import './Layout.css'
import CartContext from '../Store/cart-context';
const Header = () =>{

    const ctx = useContext(CartContext);
   
    return (
        <>
            <nav className="header">
                <h1><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzJUbVeo54US84XD82FvvD20BU_3ri7-TjGXv87bE&s' alt="logo"></img>Pizza Mania</h1>
                <Cart totalItems={ctx.items.length}/>
            </nav>
            <div style={{ position: 'relative' }}>
                <img className='header-image' src={require('../../assets/Header-image.jpg')} alt='pizza mania Header' />
                <div className='description'>
                    <h2 className='text-center mt-1'>Delicious Pizza, Delievered To You</h2>
                    <p>Choose your favorite pizza from our broad selection of avaliable pizza and enjoy a 
                        delicious pizza at your place.</p>
                    <p>All pizza are baked with high-quality ingredients,just-in-time and of course by experienced chef!</p>
                </div>
                    
            </div>

        </>
    );
}
export default Header;