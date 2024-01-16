import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

import { useUserRetrieval } from "@core/viewModels";
import styles from "./index.module.scss";

function Landing() {
  const navigate = useNavigate();
  const { isRequestSuccess } = useUserRetrieval();
  const [isRedirect, setIsRedirect] = useState(false);

  React.useEffect(() => {
    if (isRequestSuccess && !isRedirect) {
      navigate("/home");
      setIsRedirect(true);
    }
  }, [isRequestSuccess, navigate, isRedirect]);

  function redirect() {
    navigate("/login");
  }
  const { t } = useTranslation();

  return (
    <div className={styles.landing}>
      <p>{t("title")}</p>
      <p>{t("description")}</p>
      <button className={"ui button"} onClick={() => redirect()}>
        <p>{t("pages.landing.login")}</p>
      </button>
    </div>
  );
}

export { Landing };
