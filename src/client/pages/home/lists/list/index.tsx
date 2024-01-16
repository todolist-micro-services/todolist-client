import { useTranslation } from "react-i18next";

import { useWrapperContext } from "@app/wrapper/wrapper.tsx";
import { UseCases } from "@core/reducer/types.ts";
import {
  useAllProjectListsRetrieval,
  useUserRetrieval,
} from "@core/viewModels";
import { Props } from "./types.ts";
import styles from "./styles.module.scss";

function List({ list, tasks }: Props) {
  const { t } = useTranslation();
  const { pushView } = useWrapperContext();
  const { user } = useUserRetrieval();
  const { lists } = useAllProjectListsRetrieval();

  return (
    <div className={styles.list}>
      <div
        className={styles.title}
        onClick={() =>
          pushView({ useCase: UseCases.UpdateList, data: { list } })
        }
      >
        <p>{list.name}</p>
      </div>
      <div
        className={styles.addTask}
        onClick={() =>
          pushView({ useCase: UseCases.CreateTask, data: { list, user } })
        }
      >
        <p>+{t("pages.home.list.addTask")}</p>
      </div>
      <div className={styles.tasks}>
        {tasks.map((task, key) => (
          <div
            key={key}
            className={styles.task}
            onClick={() =>
              pushView({ useCase: UseCases.UpdateTask, data: { task, lists } })
            }
          >
            <p className={styles.name}>{task.name}</p>
            <div
              className={styles.iconTrash}
              onClick={(e) => {
                e.stopPropagation();
                pushView({
                  useCase: UseCases.DeleteTask,
                  data: { task },
                });
              }}
            >
              T
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export { List };
