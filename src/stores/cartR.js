import { createSlice } from '@reduxjs/toolkit';
import { omit } from 'lodash';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {items: {}},
  reducers: {
    addToCart(state, action) {
      const product = action.payload;
      if (state.items[product.id]) {
        state.items[product.id].quantity += 1;
      } else {
        state.items[product.id] = { ...product, quantity: 1 };
      }
    },
    removeFromCart(state, action) {
      const product = action.payload;
      if (state.items[product.id].quantity <= 1) {
        state.items = omit(state.items, [product.id]);
      } else {
        state.items[product.id].quantity -= 1;
      }
    }
  }
});

// Extract the action creators and reducer

export const { addToCart, removeFromCart } = cartSlice.actions;
const cartReducer = cartSlice.reducer;

export default cartReducer;


// slice creates an action creator of the same name as the reducer method