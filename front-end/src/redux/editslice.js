import { createSlice } from "@reduxjs/toolkit";

export const editSlice = createSlice({
  name: "edit",
  initialState: {
    visibility: false,
  },
  reducers: {
    display: (state) => {
      state.visibility = true;
    },
    hide: (state) => {
      state.visibility = false;
    },
  },
});

export const { display, hide } = editSlice.actions;

export default editSlice.reducer;
