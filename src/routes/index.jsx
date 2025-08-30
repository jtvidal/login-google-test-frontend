import { createBrowserRouter } from "react-router";
import App from "../App.jsx";
import Register from "../auth/Register.jsx";
import Login from "../auth/Login.jsx";
import Home from "../../home/Home.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },   
  ]}])

  export default router;