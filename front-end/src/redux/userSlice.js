// userSlice.js

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: "",
  firstName: "",
  lastName: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserToken: (state, action) => {
      state.token = action.payload;
      console.log("state TOKEN =", state.token);
    },
    setUserNames: (state, action) => {
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
    },
  },
});

export const { setUserNames, setUserToken } = userSlice.actions;
export default userSlice.reducer;
