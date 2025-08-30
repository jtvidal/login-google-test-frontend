import { createBrowserRouter } from "react-router";
import App from "../App.jsx";
import Register from "../auth/Register.jsx";
import Login from "../auth/Login.jsx";
import Home from "../home/Home.jsx";
import About from "../common/About.jsx";
import { Component } from "react";
import AuthLayout from "../layouts/AuthLayout.jsx";

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
  //Se agrega un layout para las rutas de autenticacion
  {
    path: "auth",
    Component: AuthLayout,
    children: [
      {
        path: "login",
        Component: Login,
      },
      { path: "register", Component: Register },
    ],
  },
]);

export default router;
