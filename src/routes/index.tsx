import { useRoutes } from "react-router-dom";
import { Paths } from "./paths";
import HomePage from "../pages/HomePage/HomePage";
import Events from "../pages/events/Events";
import MenuPage from "../pages/Menu/MenuPage";
import About from "../pages/About/About";

export const Router = () => {
  return useRoutes([
    {
      path: "/",
      children: [
        { path: Paths.Home, element: <HomePage /> },
        { path: Paths.Events, element: <Events /> },
        { path: Paths.MenuPage, element: <MenuPage /> },
        { path: Paths.About, element: <About /> },
      ],
    },
  ]);
};
