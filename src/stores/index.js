// import { combineReducers, createStore, applyMiddleware } from "redux";
// import  thunk from 'redux-thunk';

// import cartReducers from "./cart";
// import categoriesReducer from "./categories";

// const reducer = combineReducers({
//   cart: cartReducers,
//   categories: categoriesReducer
// })

// let store = createStore(reducer, applyMiddleware(thunk));

// export default store;

import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartR';
import categoriesReducer from './categoriesR';

// Create and configure the store
const store = configureStore({
  reducer: {
    cart: cartReducer,
    categories: categoriesReducer
  }
});

export default store;
