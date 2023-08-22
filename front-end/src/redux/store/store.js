import { configureStore } from "@reduxjs/toolkit";
import editReducer from "../editslice"; // Import the editReducer object
import authReducer from "../updateAuthSlice";
import userReducer from "../userSlice";

const store = configureStore({
  reducer: {
    edit: editReducer,
    auth: authReducer,
    user: userReducer,
  },
});

export default store;
