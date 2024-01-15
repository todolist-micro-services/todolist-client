import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

import styles from "./index.module.scss";
import { useUserRetrieval } from "@core/viewModels";
import React, { useState } from "react";

function Landing() {
  const navigate = useNavigate();
  const { isRequestSuccess } = useUserRetrieval();
  const [isRedirect, setIsRedirect] = useState(false);

  React.useEffect(() => {
    if (isRequestSuccess && !isRedirect) {
      navigate("/home");
      setIsRedirect(true);
    }
  }, [isRequestSuccess]);

  function redirect() {
    navigate("/login");
  }
  const { t } = useTranslation();

  return (
    <div className={styles.landing}>
      <p>{t("title")}</p>
      <p>{t("description")}</p>
      <button className={"ui button"} onClick={() => redirect()}>
        <p>Login</p>
      </button>
    </div>
  );
}

export { Landing };
