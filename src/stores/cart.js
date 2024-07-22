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
      if (state.items[product.id]) {
        // let newState = { ...state };

        // newState.items[product.id].quantity += 1;
        // return newState;
        return {
          ...state,
          items: {
            ...state.items,
            [product.id]: {
              ...state.items[product.id],
              quantity: state.items[product.id].quantity + 1
            }
          }
        } // immutable state
      } else {
        // let newState = { ...state };

        // newState.items[product.id] = {
        //   ...product,
        //   quantity: 1
        // };
        // return newState;

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

export default cartReducers;

// mutable and immutable