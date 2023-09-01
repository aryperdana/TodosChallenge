import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todo",
  initialState: [],
  reducers: {
    addTodo: (state, action) => {
      state.push(action.payload);
    },
    deleteTodo: (state, action) => {
      const { index } = action.payload;

      return state.filter((_, i) => index !== i);
    },
    updateStatusTodo: (state, action) => {
      console.log(action.payload.index);
      state[action.payload.index] = action.payload;
    },
  },
});

export const { addTodo, deleteTodo, updateStatusTodo } = todoSlice.actions;
export default todoSlice.reducer;
