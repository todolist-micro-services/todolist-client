import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Button, Input } from "@mui/material";

import { useLogin } from "@core/viewModels";
import styles from "./styles.module.scss";

function Login() {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { isRequestSuccess, login } = useLogin();

  React.useEffect(() => {
    isRequestSuccess && navigate("/home");
    isRequestSuccess && window.location.reload();
  }, [isRequestSuccess, navigate]);

  const loginCta = () => {
    login(email, password);
  };
  return (
    <div className={styles.login}>
      <p>{t("pages.login.login")}</p>
      <Input
        placeholder={t("pages.login.placeholder.email")}
        type={"email"}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Input
        placeholder={t("pages.login.placeholder.password")}
        type={"password"}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button content={t("pages.login.confirm")} onClick={() => loginCta()} />
    </div>
  );
}

export { Login };
