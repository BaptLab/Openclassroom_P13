import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: { token: undefined, firstName: "" },
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
    },
    setUserName: (state, action) => {
      state.firstName = action.payload;
      console.log(state.firstName);
    },
    clearToken: (state) => {
      state.token = undefined;
    },
  },
});

export const { setToken, setUserName, clearToken } = authSlice.actions;

export default authSlice.reducer;
