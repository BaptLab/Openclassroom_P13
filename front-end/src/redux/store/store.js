import { configureStore } from "@reduxjs/toolkit";
import { editSlice } from "../editslice"; // Remove .js extension

const store = configureStore({
  reducer: {
    edit: editSlice.reducer,
  },
});

export default store;
