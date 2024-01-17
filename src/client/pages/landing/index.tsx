import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

import { useUserRetrieval } from "@core/viewModels";
import styles from "./index.module.scss";
import { Button } from "@mui/material";

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
      <div className={styles.title}>
        <h1>{t("title")}</h1>
        <h2>{t("description")}</h2>
        <h2>delgadopierrealexandre@gmail.com</h2>
      </div>
      <Button variant={"contained"} onClick={() => redirect()}>
        <p>{t("pages.landing.login")}</p>
      </Button>
    </div>
  );
}

export { Landing };
