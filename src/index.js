import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { ChakraProvider } from "@chakra-ui/react";

import App from "./App";
import store from "./app/store";

import "antd/dist/reset.css";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ChakraProvider>
    <Router>
      <Provider store={store}>
        <App />
      </Provider>
    </Router>
  </ChakraProvider>
);
