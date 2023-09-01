import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "../features/todoSlice";
import userSlice from "../features/userSlice";

export const store = configureStore({
  reducer: {
    user: userSlice,
    todo: todoSlice,
  },
});
