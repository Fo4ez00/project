import { createSlice } from '@reduxjs/toolkit';

const menuSlice = createSlice({
  name: 'menu',
  initialState: {
    menuData: [],
    error: null,
  },
  reducers: {
    fetchSuccess: (state, action) => {
      state.menuData = Array.isArray(action.payload) ? [...action.payload] : [];
      state.error = null;
    },
    fetchError: (state, action) => {
      state.menuData = [];
      state.error = action.payload;
    },
  },
});

export const { fetchSuccess, fetchError } = menuSlice.actions;
export default menuSlice.reducer;