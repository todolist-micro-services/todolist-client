import { useTranslation } from "react-i18next";

import { useWrapperContext } from "@app/wrapper/wrapper.tsx";
import { UseCases } from "@core/reducer/main.ts";
import styles from "./styles.module.scss";

function CreateProject() {
  const { t } = useTranslation();
  const { pushView } = useWrapperContext();

  return (
    <div
      className={styles.createProject}
      onClick={() => {
        pushView({ useCase: UseCases.CreateProject, data: {} });
      }}
    >
      <p>+{t("component.sideBar.createProject")}</p>
    </div>
  );
}

export { CreateProject };
