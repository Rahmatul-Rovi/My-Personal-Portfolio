import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />, // Eita hobe main frame
    children: [
      {
        path: "/",
        element: <Home />, // Home page e shob section thakbe
      },
    ],
  },
]);

export default router;