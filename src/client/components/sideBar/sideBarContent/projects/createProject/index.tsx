import { useTranslation } from "react-i18next";
import AddIcon from "@mui/icons-material/Add";
import { Button } from "@mui/material";

import { useWrapperContext } from "@app/wrapper/wrapper.tsx";
import { UseCases } from "@core/reducer/main.ts";
import styles from "./styles.module.scss";

function CreateProject() {
  const { t } = useTranslation();
  const { pushView } = useWrapperContext();

  return (
    <div className={styles.createProject}>
      <Button
        variant="contained"
        startIcon={<AddIcon />}
        onClick={() => {
          pushView({ useCase: UseCases.CreateProject, data: {} });
        }}
      >
        {t("component.sideBar.createProject")}
      </Button>
    </div>
    // <div
    //   className={styles.createProject}
    //   onClick={() => {
    //     pushView({ useCase: UseCases.CreateProject, data: {} });
    //   }}
    // >
    //   <p>+{t("component.sideBar.createProject")}</p>
    // </div>
  );
}

export { CreateProject };
