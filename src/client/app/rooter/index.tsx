import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Landing } from "@pages/landing";
import { Error } from "@pages/error";
import { Login } from "@pages/login";
import { Home } from "@pages/home";
import { Settings } from "@pages/settings";
import styles from "./styles.module.scss";
import { useLogin, useRegister, useUserRetrieval } from "@core/viewModels";
import { removeSession, retrieveSession, setSession } from "@utils/sessions.ts";
import { sessionName } from "@utils/constant.ts";
import { AccountConfirmation } from "@pages/accountConfirmation";

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
    path: "/accountConfirmation",
    element: <AccountConfirmation />,
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
  const { isRequestSuccess: loginSuccess, token: loginToken } = useLogin();
  const { isRequestSuccess: registerSuccess, token: registerToken } =
    useRegister();
  const { retrieveUser, isRequestPending } = useUserRetrieval();

  const createSession = (
    sessionName: string,
    token: string,
    expirationDate: Date
  ) => {
    removeSession(sessionName);
    setSession(sessionName, token, expirationDate);
  };

  React.useEffect(() => {
    if (loginSuccess) {
      createSession(
        sessionName,
        loginToken.token,
        new Date(loginToken.expiration)
      );
    }
    if (registerSuccess) {
      createSession(
        sessionName,
        registerToken.token,
        new Date(registerToken.expiration)
      );
    }
  }, [loginSuccess, registerSuccess]);

  const isAuthenticated = retrieveSession(sessionName);

  React.useEffect(() => {
    retrieveUser(isAuthenticated);
  }, []);

  if (isRequestPending)
    return (
      <div className={styles.rooter}>
        <p>pending...</p>
      </div>
    );
  return (
    <div className={styles.rooter}>
      <RouterProvider router={isAuthenticated ? privateRouter : publicRouter} />
    </div>
  );
}

export { Rooter };
