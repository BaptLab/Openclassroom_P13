import React from "react";
import ReactDOM from "react-dom/client";
import Routing from "./Routing";
import { Provider } from "react-redux";
import store from "./redux/store/store"; // Import the default export
import { AuthProvider } from "./context/AuthProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthProvider>
      <Provider store={store}>
        <Routing />
      </Provider>
    </AuthProvider>
  </React.StrictMode>
);
