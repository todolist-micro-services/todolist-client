import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Landing } from "@pages/landing";
import { Error } from "@pages/error";
import { Login } from "@pages/login";
import { Home } from "@pages/home";
import { Settings } from "@pages/settings";
import styles from "./styles.module.scss";
import { useLogin } from "@core/viewModels";
import React from "react";
import { removeSession, retrieveSession, setSession } from "@utils/sessions.ts";

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
  const { isRequestSuccess, token } = useLogin();

  React.useEffect(() => {
    isRequestSuccess && removeSession("todolist-access-token");
    isRequestSuccess &&
      setSession("todolist-access-token", token.token, new Date("2042"));
  }, [isRequestSuccess]);

  return !retrieveSession("todolist-access-token") ? (
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
