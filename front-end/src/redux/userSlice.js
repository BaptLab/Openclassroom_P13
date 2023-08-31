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
    },
    setUserNames: (state, action) => {
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
    },
  },
});

export const { setUserNames, setUserToken } = userSlice.actions;
export default userSlice.reducer;
