import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Button, Checkbox, TextField, Typography } from "@mui/material";

import { useTaskUpdate } from "@core/viewModels";
import { retrieveSession } from "@utils/sessions.ts";
import { sessionName } from "@utils/constant.ts";
import { Props } from "./types.ts";
import styles from "./styles.module.scss";
import LoadingButton from "@mui/lab/LoadingButton";

function UpdateTask({ close, task, lists }: Props) {
  const { t } = useTranslation();
  const [updatedTask, setUpdatedTask] = useState(task);
  const { updateTask, isRequestPending } = useTaskUpdate();

  return (
    <div>
      <Typography
        id="modal-modal-title"
        variant="h6"
        component="h2"
        color={"#000000"}
      >
        {t("updateTask.title")}
        {task.name}
      </Typography>
      <div className={styles.content}>
        <div className={styles.textInputs}>
          <TextField
            label="name"
            defaultValue={updatedTask.name}
            onChange={(e) =>
              setUpdatedTask({ ...updatedTask, name: e.target.value })
            }
          />
          <TextField
            label="description"
            defaultValue={updatedTask.description}
            onChange={(e) =>
              setUpdatedTask({ ...updatedTask, description: e.target.value })
            }
          />
        </div>
        <Typography
          id="modal-modal-title"
          variant="h6"
          component="p"
          color={"#000000"}
        >
          {t("updateTask.changeList")}
        </Typography>
        <div className={styles.selectList}>
          {lists.map((list, key) => (
            <div className={styles.list} key={key}>
              <Checkbox
                checked={updatedTask.list.id === list.id}
                onClick={() => {
                  setUpdatedTask({ ...updatedTask, list });
                }}
              />
              <p className={styles.listName}>{list.name}</p>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.buttons}>
        <Button size={"small"} variant={"outlined"} onClick={close}>
          <p>{t("updateTask.cancel")}</p>
        </Button>
        <LoadingButton
          loading={isRequestPending}
          size={"small"}
          variant={"contained"}
          onClick={() => {
            updateTask(task, { ...updatedTask }, retrieveSession(sessionName));
            close();
          }}
        >
          <p>{t("updateTask.update")}</p>
        </LoadingButton>
      </div>
    </div>
  );
}

export { UpdateTask };
