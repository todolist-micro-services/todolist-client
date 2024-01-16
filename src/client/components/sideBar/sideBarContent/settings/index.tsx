import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

import styles from "./styles.module.scss";

function Settings() {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <div className={styles.settings} onClick={() => navigate("/settings")}>
      <p className={styles.redirectionTitle}>
        {t("component.sideBar.settingsRedirection")}
      </p>
    </div>
  );
}

export { Settings };
