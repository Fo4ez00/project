import { configureStore } from '@reduxjs/toolkit';
import menuReducer from '../pages/MenuSlice';
import cartReducer from "../pages/CartSlice";

const store = configureStore({
  reducer: {
    menu: menuReducer,
    cart: cartReducer,
  },
});

export default store;