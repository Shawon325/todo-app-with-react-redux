import { configureStore } from '@reduxjs/toolkit';

import todoReducer from './slices/todo/todoSlice';
import navbarReducer from './slices/todo/navbarSlice';

export default configureStore({
  reducer: {
    todo: todoReducer,
    navbar: navbarReducer,
  },
})