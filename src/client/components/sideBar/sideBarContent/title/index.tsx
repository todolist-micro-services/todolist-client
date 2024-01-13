import styles from "./styles.module.scss";
import { useTranslation } from "react-i18next";

function Title() {
  const { t } = useTranslation();

  return (
    <div className={styles.title}>
      <p className={styles.content}>{t("title")}</p>
    </div>
  );
}

export { Title };
