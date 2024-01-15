import { useTranslation } from "react-i18next";
import { Modal, ModalContent, ModalHeader } from "semantic-ui-react";

import { Props } from "./types.ts";
import React, { useState } from "react";
import { initialTask } from "@core/dto";
import { useTaskCreation, useUserToTaskLinkCreation } from "@core/viewModels";
import { retrieveSession } from "@utils/sessions.ts";
import { sessionName } from "@utils/constant.ts";

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
    <Modal onClose={() => close()} open={true}>
      <ModalHeader>{t("createTask.title")}</ModalHeader>
      {isRequestPending ? (
        <ModalContent>pending...</ModalContent>
      ) : (
        <ModalContent>
          <input
            defaultValue={task.name}
            placeholder={"name"}
            onChange={(e) => setTask({ ...task, name: e.target.value })}
          />
          <input
            defaultValue={task.description}
            placeholder={"description"}
            onChange={(e) => setTask({ ...task, description: e.target.value })}
          />
          <button
            onClick={() => createTask(task, retrieveSession(sessionName))}
          >
            Create task
          </button>
        </ModalContent>
      )}
    </Modal>
  );
}

export { CreateTask };
