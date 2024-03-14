import { useEffect, useState } from "react";
import i18n from "i18next";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import {
  Button,
  Divider,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";

import { removeSession, retrieveSession } from "@utils/sessions.ts";
import { appLanguage, sessionName } from "@utils/constant.ts";
import {
  useUserRemoval,
  useUserRetrieval,
  useUserUpdate,
} from "@core/viewModels";
import { TopBar } from "@components/topBar";
import styles from "./styles.module.scss";
import { storeData } from "@utils/storeData.ts";

function Settings() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { isRequestSuccess, user } = useUserRetrieval();
  const [firstname, setFirstname] = useState(user.firstname);
  const [lastname, setLastname] = useState(user.lastname);
  const { updateUser } = useUserUpdate();
  const { deleteUser } = useUserRemoval();
  const [selectedLanguage, setSelectedLanguage] = useState(i18n.language);

  const changeLanguage = (language: string) => {
    storeData(appLanguage, language);
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
      <TopBar title={t("pages.settings.title")} />
      <FormControl fullWidth className={styles.languageSelector}>
        <InputLabel id="demo-simple-select-label">
          {t("pages.settings.selectLanguage")}
        </InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={selectedLanguage}
          onChange={(event) => {
            changeLanguage(event.target.value);
            setSelectedLanguage(event.target.value);
          }}
        >
          <MenuItem value={"fr"}>Français</MenuItem>
          <MenuItem value={"en"}>English</MenuItem>
        </Select>
      </FormControl>
      <Divider />
      <div className={styles.updateAccountForm}>
        <TextField
          id="outlined-basic"
          value={firstname}
          placeholder={t("pages.settings.placeholder.firstname")}
          onChange={(e) => setFirstname(e.target.value)}
          variant="outlined"
        />
        <TextField
          id="outlined-basic"
          value={lastname}
          placeholder={t("pages.settings.placeholder.lastname")}
          onChange={(e) => setLastname(e.target.value)}
          variant="outlined"
        />
        <Button size="small" variant={"contained"} onClick={updateUserCta}>
          <p>{t("pages.settings.update")}</p>
        </Button>
      </div>
      <Divider />
      <div className={styles.buttons}>
        <Button onClick={() => navigate("/home")}>
          {t("pages.settings.redirect")}
        </Button>
        <Button onClick={disconnect}>
          <p>{t("pages.settings.disconnect")}</p>
        </Button>
        <Button
          size="small"
          variant="outlined"
          color="error"
          onClick={deleteAccount}
        >
          <p>{t("pages.settings.delete")}</p>
        </Button>
      </div>
    </div>
  );
}

export { Settings };
