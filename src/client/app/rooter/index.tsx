import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Landing } from "@pages/landing";
import { Error } from "@pages/error";
import { Login } from "@pages/login";
import { Home } from "@pages/home";
import { Settings } from "@pages/settings";

const publicRouter = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
    errorElement: <Error />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/settings",
    element: <Settings />,
  },
]);

const privateRouter = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
    errorElement: <Error />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/settings",
    element: <Settings />,
  },
]);
function Rooter() {
  return true ? (
    <RouterProvider router={publicRouter} />
  ) : (
    <RouterProvider router={privateRouter} />
  );
}

export { Rooter };
