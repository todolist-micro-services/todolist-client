import { useEffect, useState } from "react";
import { Button, TextField, Typography } from "@mui/material";

import { useProjectUpdate } from "@core/viewModels";
import { retrieveSession } from "@utils/sessions.ts";
import { sessionName } from "@utils/constant.ts";
import { Props } from "./types.ts";
import styles from "./styles.module.scss";
import LoadingButton from "@mui/lab/LoadingButton";
import { useTranslation } from "react-i18next";

function UpdateProject({ close, project }: Props) {
  const { t } = useTranslation();
  const [newProject, setNewProject] = useState(project);
  const { updateProject, isRequestSuccess, isRequestPending } =
    useProjectUpdate();

  useEffect(() => {
    isRequestSuccess && close();
  }, [isRequestSuccess]);

  return (
    <div>
      <Typography id="modal-modal-title" variant="h6" component="h2">
        {t("updateProject.title")} {project.name}
      </Typography>
      <div className={styles.content}>
        <TextField
          label="title"
          defaultValue={newProject.name}
          onChange={(e) =>
            setNewProject({ ...newProject, name: e.target.value })
          }
        />
        <TextField
          label="description"
          defaultValue={newProject.description}
          onChange={(e) =>
            setNewProject({ ...newProject, description: e.target.value })
          }
        />
      </div>
      <div className={styles.buttons}>
        <Button size={"small"} variant={"outlined"} onClick={close}>
          <p>{t("updateProject.cancel")}</p>
        </Button>
        <LoadingButton
          loading={isRequestPending}
          size={"small"}
          variant={"contained"}
          onClick={() =>
            updateProject(
              project,
              { ...newProject },
              retrieveSession(sessionName)
            )
          }
        >
          <p>{t("updateProject.update")}</p>
        </LoadingButton>
      </div>
    </div>
  );
}

export { UpdateProject };
