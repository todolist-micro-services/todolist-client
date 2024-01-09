import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Landing } from "@pages/landing";
import { Error } from "@pages/error";
import { Login } from "@pages/login";
import { Home } from "@pages/home";
import { Settings } from "@pages/settings";
import styles from "./styles.module.scss";
import { useLogin } from "@core/viewModels";
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
    if (isRequestSuccess) {
      removeSession("todolist-access-token");
      setSession("todolist-access-token", token.token, new Date("2042"));
    }
  }, [isRequestSuccess]);

  const isAuthenticated = retrieveSession("todolist-access-token");

  return (
    <div className={styles.rooter}>
      <RouterProvider router={isAuthenticated ? privateRouter : publicRouter} />
    </div>
  );
}

export { Rooter };
