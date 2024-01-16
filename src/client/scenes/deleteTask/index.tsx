import { useTranslation } from "react-i18next";
import { Modal } from "@mui/material";

import { Props } from "./types.ts";
import { useTaskRemoval } from "@core/viewModels";
import { retrieveSession } from "@utils/sessions.ts";
import { sessionName } from "@utils/constant.ts";

function DeleteTask({ close, task }: Props) {
  const { t } = useTranslation();
  const { deleteTask } = useTaskRemoval();

  return (
    <Modal onClose={() => close()} open={true}>
      <div>
        <p>{t("deleteTask.title")}</p>
        <div>
          <p>Are you sur ? No going back</p>
        </div>
        <div>
          <button onClick={close}>Cancel</button>
          <button
            onClick={() => {
              deleteTask(task, retrieveSession(sessionName));
              close();
            }}
          >
            Supprimer
          </button>
        </div>
      </div>
    </Modal>
  );
}

export { DeleteTask };
