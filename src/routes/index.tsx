import { useRoutes } from "react-router-dom";
import { Paths } from "./paths";
import HomePage from "../pages/HomePage/HomePage";
import Events from "../pages/events/Events";

export const Router = () => {
  return useRoutes([
    {
      path: "/",
      children: [
        { path: Paths.Home, element: <HomePage /> },
        { path: Paths.Events, element: <Events /> },
      ],
    },
  ]);
};
