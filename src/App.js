import React from 'react';
import './App.css';
import Header from './Components/Layout/Header';
import Menu from './Components/Layout/Menu/Menu';
import CartContextProvider from './Components/Store/CartContextProvider';
function App() {
  return(
    <>
      <Header/>
      <Menu/>
    </>
  )

}

export default App;
