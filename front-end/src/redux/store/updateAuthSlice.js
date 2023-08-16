import { createSlice } from "@reduxjs/toolkit";

export const authUpdateSlice = createSlice({
  name: "auth",
  initialState: { token: undefined },
  reducers: {
    update: (state, action) => {
      console.log("token before update : ", state.token);
      state.token = action.payload;
      console.log("token bafterfore update : ", state.token);
    },
    clear: (state) => {
      state.token = undefined;
    },
  },
});

export const { update, clear } = authUpdateSlice.actions;

export default authUpdateSlice.reducer;
