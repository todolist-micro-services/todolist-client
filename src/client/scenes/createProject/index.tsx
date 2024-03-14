import React, { useState } from "react";
import { Button, TextField, Typography } from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
import { useTranslation } from "react-i18next";

import {
  useProjectCreation,
  useUserRetrieval,
  useUserToProjectLinkCreation,
} from "@core/viewModels";
import { retrieveSession } from "@utils/sessions.ts";
import { sessionName } from "@utils/constant.ts";
import { Identifiable, Project } from "@core/dto";
import { Props } from "./types.ts";
import styles from "./styles.module.scss";

function CreateProject({ close }: Props) {
  const { t } = useTranslation();
  const { user } = useUserRetrieval();
  const [project, setProject] = useState<Identifiable<Project>>({
    creationDate: new Date(),
    creator: user.id,
    description: "",
    name: "",
    id: 0,
  });
  const { isRequestSuccess, projectId, createProject, isRequestPending } =
    useProjectCreation();
  const { linkUserToProject } = useUserToProjectLinkCreation();

  React.useEffect(() => {
    isRequestSuccess &&
      linkUserToProject(
        user,
        { ...project, id: projectId },
        retrieveSession(sessionName)
      );
    isRequestSuccess && close();
  }, [isRequestSuccess]);
  return (
    <div>
      <Typography id="modal-modal-title" variant="h6" component="h2">
        {t("createProject.title")}
      </Typography>
      <div className={styles.content}>
        <TextField
          id="outlined-basic"
          label={t("createProject.placeholder.title")}
          variant="outlined"
          size={"small"}
          onChange={(e) => setProject({ ...project, name: e.target.value })}
        />
        <TextField
          id="outlined-basic"
          label={t("createProject.placeholder.description")}
          variant="outlined"
          size={"small"}
          onChange={(e) =>
            setProject({ ...project, description: e.target.value })
          }
        />
      </div>
      <div className={styles.buttons}>
        <Button size={"small"} onClick={close}>
          <p>{t("createProject.cancel")}</p>
        </Button>
        <LoadingButton
          loading={isRequestPending}
          loadingPosition="start"
          variant="contained"
          onClick={() => createProject(project, retrieveSession(sessionName))}
        >
          {t("createProject.cta")}
        </LoadingButton>
      </div>
    </div>
  );
}

export { CreateProject };
