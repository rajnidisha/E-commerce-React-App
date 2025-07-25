import { createStore } from "redux";
import { omit } from "lodash";
const ADD_TO_CART = "ADD_TO_CART";
const REMOVE_FROM_CART = "REMOVE_FROM_CART";

// action creator
export function addToCart(product) {
  return {
    type: ADD_TO_CART,
    payload: product
  }
}

export function removeFromCart(product) {
  return {
    type: REMOVE_FROM_CART,
    payload: product
  }
}

function cartReducers(state = { items: {} }, action) {
  switch (action.type) {
    case ADD_TO_CART: {
      const product = action.payload;
      console.log(state);
      // state.items[product.id].quantity += 1;
      // newState = { ...state };
      // return newState;
      if (state.items[product.id]) {
        return {
          ...state,
          items: {
            ...state.items,
            [product.id]: {
              ...state.items[product.id],
              quantity: state.items[product.id].quantity + 1
            }
          }
        }
      } else {
        return {
          ...state,
          items: {
            ...state.items,
            [product.id]: {
              ...product,
              quantity: 1
            }
          }
        }
      }
    }
    case REMOVE_FROM_CART: {
      const product = action.payload;
      if (state.items[product.id].quantity <= 1) {
        return {
          ...state,
          items: omit(state.items, [product.id])
        }
        
      } else {
        return {
          ...state,
          items: {
            ...state.items,
            [product.id]: {
              ...state.items[product.id],
              quantity: state.items[product.id].quantity - 1
            }
          }
        }
      }
    }
    default:
      return state;
  }
}

let store = createStore(cartReducers);

export default store;


//state = { items : { 1: {id: 1, } , 2: {} , 3: {}}}