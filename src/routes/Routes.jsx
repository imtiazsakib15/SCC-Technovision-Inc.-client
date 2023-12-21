import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home/Home";
import Workspace from "../pages/Workspace/Workspace";
import Recent from "../pages/Recent/Recent";
import Login from "../pages/Login/Login";
import Templates from "../pages/Templates/Templates";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/workspace",
        element: <Workspace />,
      },
      {
        path: "/recent",
        element: <Recent />,
      },
      {
        path: "/templates",
        element: <Templates />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);

export default Router;
