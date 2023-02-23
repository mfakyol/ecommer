import cartReducer from "./cartSlice";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export type IRootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
