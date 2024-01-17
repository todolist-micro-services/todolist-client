import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Button, TextField } from "@mui/material";

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
      <div className={styles.inputs}>
        <TextField
          id="outlined-basic"
          label={t("pages.login.placeholder.email")}
          variant="outlined"
          type={"email"}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          id="outlined-basic"
          label={t("pages.login.placeholder.password")}
          variant="outlined"
          type={"password"}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <Button variant={"contained"} onClick={() => loginCta()}>
        {t("pages.login.confirm")}
      </Button>
    </div>
  );
}

export { Login };
