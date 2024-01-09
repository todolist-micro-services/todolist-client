import styles from "./styles.module.scss";
import { Button, Input } from "semantic-ui-react";
import React, { useState } from "react";
import { useLogin } from "@core/viewModels";
import { removeSession, retrieveSession, setSession } from "@utils/sessions.ts";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { isRequestSuccess, isRequestPending, isRequestFailure, login, token } =
    useLogin();

  React.useEffect(() => {
    isRequestSuccess && console.log("coucou");
    isRequestSuccess &&
      setSession("todolist-access-token", token.token, new Date("2042"));
    isRequestSuccess && console.log(retrieveSession("todolist-access-token"));
    isRequestSuccess && removeSession("todolist-access-token");
    isRequestSuccess && console.log(retrieveSession("todolist-access-token"));
  }, [isRequestSuccess]);

  const loginCta = () => {
    login(email, password);
  };
  return (
    <div className={styles.login}>
      <p>login</p>
      <Input
        placeholder="Email"
        type={"email"}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Input
        placeholder="Password"
        type={"password"}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button content={"Submit"} onClick={() => loginCta()} />
      {isRequestSuccess && <p>success</p>}
      {isRequestFailure && <p>failure</p>}
      {isRequestPending && <p>pending</p>}
      {token.token}
      {token.expiration}
    </div>
  );
}

export { Login };
