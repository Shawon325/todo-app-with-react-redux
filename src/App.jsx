// Libraries
import React from "react";
import { Provider } from "react-redux";

import store from "./store";

import Todo from "./components/Todo/Todo";
import { BrowserRouter } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Todo />
      </Provider>
    </BrowserRouter>
  );
}
