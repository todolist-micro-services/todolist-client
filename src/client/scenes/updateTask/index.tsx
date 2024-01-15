import { useTranslation } from "react-i18next";
import {
  Modal,
  ModalActions,
  ModalContent,
  ModalHeader,
} from "semantic-ui-react";

import { Props } from "./types.ts";
import { useState } from "react";
import { useTaskUpdate } from "@core/viewModels";
import { retrieveSession } from "@utils/sessions.ts";
import { sessionName } from "@utils/constant.ts";

function UpdateTask({ close, task, lists }: Props) {
  const { t } = useTranslation();
  const [updatedTask, setUpdatedTask] = useState(task);
  const { updateTask } = useTaskUpdate();

  return (
    <Modal onClose={() => close()} open={true}>
      <ModalHeader>{t("updateTask.title")}</ModalHeader>
      <ModalContent>
        <input
          defaultValue={updatedTask.name}
          placeholder={"name"}
          onChange={(e) =>
            setUpdatedTask({ ...updatedTask, name: e.target.value })
          }
        />
        <input
          defaultValue={updatedTask.description}
          placeholder={"description"}
          onChange={(e) =>
            setUpdatedTask({ ...updatedTask, description: e.target.value })
          }
        />
        {lists.map((list, key) => (
          <div
            key={key}
            onClick={() => setUpdatedTask({ ...updatedTask, list })}
          >
            <p>{list.name}</p>
          </div>
        ))}
      </ModalContent>
      <ModalActions>
        <button onClick={close}>Cancel</button>
        <button
          onClick={() => {
            updateTask(task, { ...updatedTask }, retrieveSession(sessionName));
            close();
          }}
        >
          Update
        </button>
      </ModalActions>
    </Modal>
  );
}

export { UpdateTask };
