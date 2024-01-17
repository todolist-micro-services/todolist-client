import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Button, TextField } from "@mui/material";

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
      <div className={styles.inputs}>
        <TextField
          id="outlined-basic"
          label={t("pages.login.placeholder.firstname")}
          variant="outlined"
          type={"name"}
          onChange={(e) => setFirstname(e.target.value)}
        />
        <TextField
          id="outlined-basic"
          label={t("pages.login.placeholder.lastname")}
          variant="outlined"
          type={"name"}
          onChange={(e) => setLastname(e.target.value)}
        />
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
        <TextField
          id="outlined-basic"
          label={t("pages.login.placeholder.passwordConfirm")}
          variant="outlined"
          type={"password"}
          onChange={(e) => setPasswordConfirmation(e.target.value)}
        />
      </div>
      <Button variant={"contained"} onClick={() => registerCta()}>
        {t("pages.login.confirm")}
      </Button>
    </div>
  );
}

export { Register };
