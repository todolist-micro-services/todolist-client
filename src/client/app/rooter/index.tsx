import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Landing } from "@pages/landing";
import { Error } from "@pages/error";
import { Login } from "@pages/login";
import { Home } from "@pages/home";
import { Settings } from "@pages/settings";
import styles from "./styles.module.scss";

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
    <div className={styles.rooter}>
      <RouterProvider router={publicRouter} />
    </div>
  ) : (
    <div className={styles.rooter}>
      <RouterProvider router={privateRouter} />
    </div>
  );
}

export { Rooter };
