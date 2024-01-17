import { useTranslation } from "react-i18next";

import styles from "./styles.module.scss";

function Title() {
  const { t } = useTranslation();

  return (
    <div className={styles.title}>
      <p className={styles.content}>{t("title")}</p>
    </div>
  );
}

export { Title };
