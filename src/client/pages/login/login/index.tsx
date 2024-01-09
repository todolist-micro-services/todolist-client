import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Input } from "semantic-ui-react";

import { useLogin } from "@core/viewModels";
import styles from "./styles.module.scss";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { isRequestSuccess, login } = useLogin();
  const navigate = useNavigate();

  React.useEffect(() => {
    isRequestSuccess && console.log("coucou");
    isRequestSuccess && navigate("/home");
    isRequestSuccess && window.location.reload();
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
    </div>
  );
}

export { Login };
