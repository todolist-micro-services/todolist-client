import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Button, Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

import { useProjectRemoval } from "@core/viewModels";
import { retrieveSession } from "@utils/sessions.ts";
import { sessionName } from "@utils/constant.ts";
import { Props } from "./types.ts";
import styles from "./styles.module.scss";

function DeleteProject({ close, project }: Props) {
  const { t } = useTranslation();
  const { deleteProject, isRequestSuccess } = useProjectRemoval();

  useEffect(() => {
    isRequestSuccess && close();
  }, [isRequestSuccess]);

  return (
    <div>
      <Typography id="modal-modal-title" variant="h6" component="h2">
        {t("deleteProject.title")} {project.name}
      </Typography>
      <div>
        <p>{t("deleteProject.confirmation")}</p>
      </div>
      <div className={styles.buttons}>
        <Button onClick={close}>{t("deleteProject.cancel")}</Button>
        <Button
          color={"error"}
          startIcon={<DeleteIcon />}
          onClick={() =>
            deleteProject(project.id, retrieveSession(sessionName))
          }
        >
          {t("deleteProject.delete")}
        </Button>
      </div>
    </div>
  );
}

export { DeleteProject };
