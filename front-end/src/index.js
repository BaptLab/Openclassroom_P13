import React from "react";
import ReactDOM from "react-dom/client";
import Routing from "./Routing";
import { Provider } from "react-redux";
import store from "./redux/store/store"; // Import the default export

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Routing />
    </Provider>
  </React.StrictMode>
);
