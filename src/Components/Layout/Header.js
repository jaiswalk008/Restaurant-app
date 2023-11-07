import Cart from '../Cart/Cart';
import './Layout.css'
const Header = () =>{
    return (
        <>
            <nav className="header">
                <h1><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzJUbVeo54US84XD82FvvD20BU_3ri7-TjGXv87bE&s' alt="logo"></img>Pizza Mania</h1>
                <Cart/>
            </nav>
            <img className='header-image' src={require('./Header-image.jpg')} alt='pizza mania Header' />

        </>
    );
}
export default Header;