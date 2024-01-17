import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Button, Input } from "@mui/material";

import { useRegister } from "@core/viewModels";
import styles from "./styles.module.scss";

function Register() {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const { isRequestSuccess, register } = useRegister();

  const registerCta = () => {
    if (password !== passwordConfirmation) {
      alert(t("pages.login.differentPassword"));
    } else {
      register(firstname, lastname, email, password);
    }
  };

  React.useEffect(() => {
    isRequestSuccess && navigate("/home");
    isRequestSuccess && window.location.reload();
  }, [isRequestSuccess, navigate]);

  return (
    <div className={styles.register}>
      <p>{t("pages.login.register")}</p>
      <Input
        placeholder={t("pages.login.placeholder.firstname")}
        type={"firstname"}
        onChange={(e) => setFirstname(e.target.value)}
      />
      <Input
        placeholder={t("pages.login.placeholder.lastname")}
        type={"lastname"}
        onChange={(e) => setLastname(e.target.value)}
      />
      <Input
        placeholder={t("pages.login.placeholder.email")}
        type={"Email"}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Input
        placeholder={t("pages.login.placeholder.password")}
        type={"password"}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Input
        placeholder={t("pages.login.placeholder.passwordConfirm")}
        type={"password"}
        onChange={(e) => setPasswordConfirmation(e.target.value)}
      />
      <Button
        content={t("pages.login.confirm")}
        onClick={() => registerCta()}
      />
    </div>
  );
}

export { Register };
