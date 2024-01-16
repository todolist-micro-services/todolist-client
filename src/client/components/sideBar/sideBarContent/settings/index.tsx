import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import SettingsIcon from "@mui/icons-material/Settings";

import { Button } from "@mui/material";

function Settings() {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <Button
      size={"large"}
      startIcon={<SettingsIcon />}
      onClick={() => navigate("/settings")}
    >
      {t("component.sideBar.settingsRedirection")}
    </Button>
  );
}

export { Settings };
