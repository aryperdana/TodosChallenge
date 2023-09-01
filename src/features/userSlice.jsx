import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    name: "test",
  },
  reducers: {
    update: (state, action) => {
      console.log(state);
      state.name = action.payload.name;
    },
  },
});

export const { update } = userSlice.actions;
export default userSlice.reducer;
