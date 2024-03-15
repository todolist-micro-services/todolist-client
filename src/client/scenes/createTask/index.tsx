import { useTranslation } from "react-i18next";
import { Button, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import LoadingButton from "@mui/lab/LoadingButton";
import SaveIcon from "@mui/icons-material/Save";

import { initialTask } from "@core/dto";
import { useTaskCreation, useUserToTaskLinkCreation } from "@core/viewModels";
import { retrieveSession } from "@utils/sessions.ts";
import { sessionName } from "@utils/constant.ts";
import styles from "./styles.module.scss";
import { Props } from "./types.ts";

function CreateTask({ close, list, user }: Props) {
  const { t } = useTranslation();
  const [task, setTask] = useState({
    ...initialTask,
    creator: user,
    list,
    creationDate: new Date(),
  });
  const { createTask, isRequestSuccess, isRequestPending, taskId } =
    useTaskCreation();
  const { linkUserToTask } = useUserToTaskLinkCreation();

  React.useEffect(() => {
    isRequestSuccess &&
      linkUserToTask(
        user,
        { ...task, id: taskId },
        retrieveSession(sessionName)
      );
    isRequestSuccess && close();
  }, [isRequestSuccess]);

  return (
    <div>
      <Typography
        id="modal-modal-title"
        variant="h6"
        component="h2"
        color={"#000000"}
      >
        {t("createTask.title")}
      </Typography>
      <div className={styles.content}>
        <TextField
          id="outlined-basic"
          label="name"
          variant="outlined"
          size={"small"}
          onChange={(e) => setTask({ ...task, name: e.target.value })}
        />
        <TextField
          id="outlined-basic"
          label="description"
          variant="outlined"
          size={"small"}
          onChange={(e) => setTask({ ...task, description: e.target.value })}
        />
      </div>
      <div className={styles.buttons}>
        <Button size={"small"} onClick={close}>
          <p>{t("createTask.cancel")}</p>
        </Button>
        <LoadingButton
          loading={isRequestPending}
          startIcon={<SaveIcon />}
          loadingPosition="start"
          variant="contained"
          onClick={() => createTask(task, retrieveSession(sessionName))}
        >
          {t("createTask.create")}
        </LoadingButton>
      </div>
    </div>
  );
}

export { CreateTask };
