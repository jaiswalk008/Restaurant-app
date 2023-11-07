// Backdrop.js
import React from 'react';
import './Cart.css';    

const CartModalBackdrop = ({ click }) => {
  return <div className="backdrop" onClick={click}></div>;
};

export default CartModalBackdrop;
