import { useTranslation } from "react-i18next";
import { Button, Typography } from "@mui/material";

import { useTaskRemoval } from "@core/viewModels";
import { retrieveSession } from "@utils/sessions.ts";
import { sessionName } from "@utils/constant.ts";
import { Props } from "./types.ts";
import styles from "./styles.module.scss";
import DeleteIcon from "@mui/icons-material/Delete";

function DeleteTask({ close, task }: Props) {
  const { t } = useTranslation();
  const { deleteTask } = useTaskRemoval();

  return (
    <div>
      <Typography
        id="modal-modal-title"
        variant="h6"
        component="h2"
        color={"#000000"}
      >
        {t("deleteTask.title")}
        {task.name}
      </Typography>
      <div>
        <p className={styles.confirmation}>{t("deleteTask.confirmation")}</p>
      </div>
      <div className={styles.buttons}>
        <Button onClick={close}>{t("deleteTask.cancel")}</Button>
        <Button
          color={"error"}
          startIcon={<DeleteIcon />}
          onClick={() => {
            deleteTask(task, retrieveSession(sessionName));
            close();
          }}
        >
          {t("deleteTask.delete")}
        </Button>
      </div>
    </div>
  );
}

export { DeleteTask };
