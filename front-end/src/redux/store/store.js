import { configureStore } from "@reduxjs/toolkit";
import { editSlice } from "../editslice"; // Remove .js extension
import { authUpdateSlice } from "./updateAuthSlice";
const store = configureStore({
  reducer: {
    edit: editSlice.reducer,
    auth: authUpdateSlice.reducer,
  },
});

export default store;
