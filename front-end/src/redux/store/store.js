import { configureStore } from "@reduxjs/toolkit";
import editReducer from "../editslice"; // Import the editReducer object
import userReducer from "../userSlice";

const store = configureStore({
  reducer: {
    edit: editReducer,
    user: userReducer,
  },
});

export default store;
