import { configureStore } from "@reduxjs/toolkit";
import { editSlice } from "../editslice"; // Remove .js extension

const store = configureStore({
  reducer: {
    edit: editSlice.reducer,
  },
});

console.log(store.getState());
export default store;
