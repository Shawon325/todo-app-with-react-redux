import { createSlice } from "@reduxjs/toolkit";

export const navbarSlice = createSlice({
  name: 'navbar',

  initialState: {
    navButton: 1,
  },

  reducers: {
    changeNavbarButton: (state, action) => {
      state.navButton = action.payload;
    },
  },
});

export const { changeNavbarButton } = navbarSlice.actions;

export default navbarSlice.reducer;