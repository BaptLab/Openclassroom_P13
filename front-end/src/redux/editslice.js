import { createSlice } from "@reduxjs/toolkit";

export const editSlice = createSlice({
  name: "edit",
  initialState: {
    visibility: false,
  },
  reducers: {
    show: (state) => {
      state.visibility = true;
    },
    hide: (state) => {
      state.visibility = false;
    },
  },
});

export const { show, hide } = editSlice.actions;

export default editSlice.reducer;
