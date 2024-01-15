import { useTranslation } from "react-i18next";
import {
  Modal,
  ModalActions,
  ModalContent,
  ModalHeader,
} from "semantic-ui-react";

import { Props } from "./types.ts";
import { useTaskRemoval } from "@core/viewModels";
import { retrieveSession } from "@utils/sessions.ts";
import { sessionName } from "@utils/constant.ts";

function DeleteTask({ close, task }: Props) {
  const { t } = useTranslation();
  const { deleteTask } = useTaskRemoval();

  return (
    <Modal onClose={() => close()} open={true}>
      <ModalHeader>{t("deleteTask.title")}</ModalHeader>
      <ModalContent>
        <p>Are you sur ? No going back</p>
      </ModalContent>
      <ModalActions>
        <button onClick={close}>Cancel</button>
        <button
          onClick={() => {
            deleteTask(task, retrieveSession(sessionName));
            close();
          }}
        >
          Supprimer
        </button>
      </ModalActions>
    </Modal>
  );
}

export { DeleteTask };
