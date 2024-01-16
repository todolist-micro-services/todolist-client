import { useEffect, useState } from "react";
import i18n from "i18next";
import { useTranslation } from "react-i18next";
import { Link, useNavigate } from "react-router-dom";
import { Button, Dropdown } from "semantic-ui-react";

import { SideBar } from "@components/sideBar";
import { removeSession, retrieveSession } from "@utils/sessions.ts";
import { sessionName } from "@utils/constant.ts";
import {
  useUserRemoval,
  useUserRetrieval,
  useUserUpdate,
} from "@core/viewModels";
import styles from "./styles.module.scss";

function Settings() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { isRequestSuccess, user } = useUserRetrieval();
  const [firstname, setFirstname] = useState(user.firstname);
  const [lastname, setLastname] = useState(user.lastname);
  const { updateUser } = useUserUpdate();
  const { deleteUser } = useUserRemoval();
  const countryOptions = [
    { key: "fr", value: "fr", flag: "fr", text: "Français" },
    { key: "en", value: "en", flag: "uk", text: "English" },
  ];

  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language).then();
  };

  const disconnect = () => {
    removeSession(sessionName);
    navigate("/");
    window.location.reload();
  };

  const deleteAccount = () => {
    deleteUser(retrieveSession(sessionName));
    removeSession(sessionName);
    navigate("/");
    window.location.reload();
  };

  const updateUserCta = () => {
    updateUser(retrieveSession(sessionName), { ...user, firstname, lastname });
  };

  useEffect(() => {
    isRequestSuccess && setFirstname(user.firstname);
    isRequestSuccess && setLastname(user.lastname);
  }, [
    isRequestSuccess,
    setLastname,
    setFirstname,
    user.firstname,
    user.lastname,
  ]);

  return (
    <div className={styles.settings}>
      <SideBar
        children={
          <div>
            <p>{t("pages.settings.title")}</p>
            <input
              placeholder={t("pages.settings.placeholder.firstname")}
              value={firstname}
              type={"firstname"}
              onChange={(e) => setFirstname(e.target.value)}
            />
            <input
              placeholder={t("pages.settings.placeholder.lastname")}
              value={lastname}
              type={"lastname"}
              onChange={(e) => setLastname(e.target.value)}
            />
            <Button onClick={updateUserCta}>
              <p>{t("pages.settings.update")}</p>
            </Button>
            <Link to={`/home`}>{t("pages.settings.redirect")}</Link>
            <Button onClick={disconnect}>
              <p>{t("pages.settings.disconnect")}</p>
            </Button>
            <Button onClick={deleteAccount}>
              <p>{t("pages.settings.delete")}</p>
            </Button>
            <Dropdown
              placeholder={t("pages.settings.placeholder.language")}
              fluid
              search
              selection
              onChange={(_, { value }) => {
                changeLanguage(typeof value === "string" ? value : "");
              }}
              options={countryOptions}
            />
          </div>
        }
      />
    </div>
  );
}

export { Settings };
