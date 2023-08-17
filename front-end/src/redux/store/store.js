import { configureStore } from "@reduxjs/toolkit";
import editReducer from "../editslice"; // Import the editReducer object
import authReducer from "../updateAuthSlice";

const store = configureStore({
  reducer: {
    edit: editReducer,
    auth: authReducer,
  },
});

export default store;
