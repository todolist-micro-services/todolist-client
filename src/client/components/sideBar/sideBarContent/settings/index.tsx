import { useNavigate } from "react-router-dom";
import { Icon } from "semantic-ui-react";
import { useTranslation } from "react-i18next";

import styles from "./styles.module.scss";

function Settings() {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <div className={styles.settings} onClick={() => navigate("/settings")}>
      <div className={styles.iconBox}>
        <Icon name="setting" size="big" color="black" />
      </div>
      <p className={styles.redirectionTitle}>
        {t("component.sideBar.settingsRedirection")}
      </p>
    </div>
  );
}

export { Settings };
