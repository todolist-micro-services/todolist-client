import { useState } from "react";
import { useTranslation } from "react-i18next";

import { useTaskUpdate } from "@core/viewModels";
import { retrieveSession } from "@utils/sessions.ts";
import { sessionName } from "@utils/constant.ts";
import { Props } from "./types.ts";

function UpdateTask({ close, task, lists }: Props) {
  const { t } = useTranslation();
  const [updatedTask, setUpdatedTask] = useState(task);
  const { updateTask } = useTaskUpdate();

  return (
    <div>
      <p>{t("updateTask.title")}</p>
      <div>
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
      </div>
      <div>
        <button onClick={close}>Cancel</button>
        <button
          onClick={() => {
            updateTask(task, { ...updatedTask }, retrieveSession(sessionName));
            close();
          }}
        >
          Update
        </button>
      </div>
    </div>
  );
}

export { UpdateTask };
