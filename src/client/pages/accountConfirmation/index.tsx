import styles from "./styles.module.scss";
import { useTranslation } from "react-i18next";

function AccountConfirmation() {
  const { t } = useTranslation();
  return (
    <div className={styles.accountConfirmation}>
      <p>{t("pages.accountConfirmation.redirection")}</p>
      <a href={"/login"}>{t("pages.accountConfirmation.login")}</a>
    </div>
  );
}

export { AccountConfirmation };
