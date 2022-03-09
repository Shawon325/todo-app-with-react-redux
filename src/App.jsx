// Libraries
import React from "react";
import { Provider } from "react-redux";

import store from "./store";

import Todo from "./components/Todo/Todo";

export default function App() {
  return (
    <Provider store={store}>
      <Todo />
    </Provider>
  );
}
