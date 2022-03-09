import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
  name: 'todo',

  initialState: {
    task: {
      task: '',
      status: false,
    },
    editIndex: null,
    tasks: [],
  },

  reducers: {
    changeTask: (state, action) => {
      state.task.task = action.payload;
    },

    resetTask: (state) => {
      state.task.task = '';
    },

    editTask: (state, action) => {
      state.task = state.tasks[action.payload];
      state.editIndex = action.payload;
    },

    createTask: (state, action) => {
      state.tasks.push(action.payload);
    },

    updateTask: (state, action) => {
      state.tasks[state.editIndex] = action.payload;
    },

    deleteTask: (state, action) => {
      state.tasks.splice(action.payload, 1);
    },

    changeTaskStatus: (state, action) => {
      state.tasks[action.payload].status = !state.tasks[action.payload].status;
    },
  },
});

export const {
  changeTask,
  resetTask,
  editTask,
  createTask,
  updateTask,
  deleteTask,
  changeTaskStatus,
} = todoSlice.actions;

export default todoSlice.reducer;