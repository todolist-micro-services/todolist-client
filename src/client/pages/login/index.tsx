import { useTranslation } from "react-i18next";

import { Register } from "@pages/login/register";
import { Login as LoginComponent } from "./login";
import styles from "./styles.module.scss";

function Login() {
  const { t } = useTranslation();

  return (
    <div className={styles.login}>
      <h1>{t("pages.login.title")}</h1>
      <div className={styles.forms}>
        <LoginComponent />
        <Register />
      </div>
      <div />
    </div>
  );
}

export { Login };
