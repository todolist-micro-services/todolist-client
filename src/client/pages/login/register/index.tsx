import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Input } from "semantic-ui-react";

import { useRegister } from "@core/viewModels";
import styles from "./styles.module.scss";

function Register() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const { isRequestSuccess, register } = useRegister();
  const navigate = useNavigate();

  const registerCta = () => {
    if (password !== passwordConfirmation) {
      alert("Password are different");
    } else {
      register(firstname, lastname, email, password);
    }
  };

  React.useEffect(() => {
    isRequestSuccess && navigate("/home");
    isRequestSuccess && window.location.reload();
  }, [isRequestSuccess]);

  return (
    <div className={styles.register}>
      <p>register</p>
      <Input
        placeholder="Firstname"
        type={"firstname"}
        onChange={(e) => setFirstname(e.target.value)}
      />
      <Input
        placeholder="Lastname"
        type={"lastname"}
        onChange={(e) => setLastname(e.target.value)}
      />
      <Input
        placeholder="Email"
        type={"Email"}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Input
        placeholder="Password"
        type={"password"}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Input
        placeholder="Confirm password"
        type={"password"}
        onChange={(e) => setPasswordConfirmation(e.target.value)}
      />
      <Button content={"Submit"} onClick={() => registerCta()} />
    </div>
  );
}

export { Register };
