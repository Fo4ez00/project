import { configureStore } from '@reduxjs/toolkit';
import menuReducer from '../pages/MenuSlice';

const store = configureStore({
  reducer: {
    menu: menuReducer,
  },
});

export default store;