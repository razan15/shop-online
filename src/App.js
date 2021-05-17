import React from "react";
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from './components/Header';
import Nav from './components/Nav';
import Home from './components/Home';
import Contact from './components/Contact';
import Main from './components/Main';
import Cart from './components/Cart';
import Signin from './components/Signin';
import Footer from './components/Footer';
import items from './items';
import { useState } from 'react';
import SocialFollow from "./components/SocialFollow";

function App() {
 ;
  const {products} = items;
  const [cartItems, setCartItems] = useState([]);
  const onAdd = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
        if (exist) {
          setCartItems(
            cartItems.map((x) =>
            x.id === product.id ? {
              ...exist, qty: exist.qty + 1} : x)
          );
        }
        else {
          setCartItems([...cartItems,
          { ...product, qty: 1 }]);
        }
  };
  const onRemove = (product) => {
    const exist = cartItems.find(
      (x) => x.id === product.id);
          if (exist.qty === 1) {
            setCartItems(cartItems.filter((x) => x.id !== product.id));
          }
          else {
              setCartItems(
                cartItems.map((x) =>
                  x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
                )
              );
          }
  };

  return (
    <div className="App">
      <Header></Header>
      <Router>
        <Nav countCartItems={cartItems.length}></Nav>
            <Switch>
                <Route path="/main" exact component={() =>
                    <Main products={products}
                        onAdd={onAdd}title={'Props through component'}/>} />
                <Route path="/" exact component={() =>
                    <Home />} />
                <Route path="/contact" exact component={() =>
                    <Contact />} />
                <Route path="/cart" exact component={() =>
                    <Cart cartItems={cartItems}
                        onAdd={onAdd}
                        onRemove={onRemove} title={'Props through component'}/>} />
                <Route path="/signin" exact component={() =>
                    <Signin />} />
              
            </Switch>
      </Router>

            <div className="photo">
            </div>
            <SocialFollow />
      <Footer />
      
    </div>
  );
}

export default App;

