import { CartItem } from "./../types/index";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

type CartItemId = CartItem["itemId"]

interface CartSliceState {
  cartItems: Array<CartItem>;
}

const initialState: CartSliceState = {
  cartItems: [],
};

export const cartSlice = createSlice({
  name: "cart",

  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartItem>) => {
      const index = state.cartItems.findIndex((cartItem) => cartItem.itemId == action.payload.itemId);
      if (index > -1) state.cartItems[index].quantity += action.payload.quantity;
      else state.cartItems.push(action.payload);
    },

    clearCartItem:(state, action: PayloadAction<CartItemId>) => {
      state.cartItems = state.cartItems.filter(cartItem => cartItem.itemId !== action.payload)
    }
  },
});

export const { addToCart, clearCartItem } = cartSlice.actions;

const cartReducer = cartSlice.reducer

export default cartReducer;
