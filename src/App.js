import './App.css';
import { useState } from 'react';

import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';
import CartContext from "./context/CartContext";

import { BrowserRouter, Route, Switch } from "react-router-dom";
function App() {
  const [cart, setCart] = useState({});
  //cart = {};
  function increaseQuantity(product) {
    const newCart = { ...cart };
    if (!newCart[product.id]) {
      newCart[product.id] = {
        id: product.id,
        title: product.title,
        price: product.price.value,
        quantity: 0
      }
    }
    newCart[product.id].quantity += 1;
    setCart(newCart);
  }

  function decreaseQuantity(product) {
    const newCart = { ...cart };
    if (!newCart[product.id]) return;
    newCart[product.id].quantity -= 1;
    if (newCart[product.id].quantity <= 0) {
      delete newCart[product.id];
    }
    setCart(newCart);

    // if(newCart[product.id] === 1) { delete newCart[product.id]} else { newCart[product.id] -=1}
  }

  return (
    <CartContext.Provider value={{ cart, increaseQuantity, decreaseQuantity }}>
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route
              path="/"
              exact={true}
              component={HomePage}
            />
            <Route component={NotFoundPage} />
            </Switch>
        </BrowserRouter>
        </div>
    </CartContext.Provider>

  );
}

export default App;


// props = {count: 1, key: 19}

// product = {product: {}}
// {product}
// function Products({count, key});


//
// cart = {1: { id: 1, price: 2,qty: 1} , 2: {id: 2, price:33,qty: 1} , 3: {id: 3, price:44,qty:1}, 4: {id:4, price:444 ,qty:1} }