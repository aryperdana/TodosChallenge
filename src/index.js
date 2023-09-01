import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import TodoHomeScreen from "./TodoHomeScreen";
import { Provider } from "react-redux";
import { store } from "./app/store";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/home",
    element: <TodoHomeScreen />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
