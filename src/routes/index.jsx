import { createBrowserRouter } from "react-router";
import App from "../App.jsx";
import Register from "../auth/Register.jsx";
import Login from "../auth/Login.jsx";
import Home from "../home/Home.jsx";
import About from "../common/About.jsx";
import { Component } from "react";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "about",
        Component: About,
      },
    ],
  },
]);

export default router;
