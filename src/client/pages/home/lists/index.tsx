import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import AddIcon from "@mui/icons-material/Add";

import {
  useAllProjectListsRetrieval,
  useProjectTasksRetrieval,
} from "@core/viewModels";
import { UseCases } from "@core/reducer/types.ts";
import { retrieveSession } from "@utils/sessions.ts";
import { sessionName } from "@utils/constant.ts";
import { useWrapperContext } from "@app/wrapper/wrapper.tsx";
import { List } from "./list";
import { Props } from "./types.ts";
import styles from "./styles.module.scss";
import { Button } from "@mui/material";

function Lists({ project, user }: Props) {
  const { t } = useTranslation();
  const { pushView } = useWrapperContext();
  const {
    retrieveAllProjectLists,
    lists,
    isRequestPending: allListsPending,
    isRequestSuccess: allListSuccess,
  } = useAllProjectListsRetrieval();
  const {
    retrieveProjectTasks,
    tasks,
    isRequestPending: taskPending,
    isRequestSuccess: tasksSuccess,
  } = useProjectTasksRetrieval();

  useEffect(() => {
    project.id > 0 &&
      !allListsPending &&
      !allListSuccess &&
      retrieveAllProjectLists(project, retrieveSession(sessionName));
    project.id > 0 &&
      !taskPending &&
      !tasksSuccess &&
      retrieveProjectTasks(project, retrieveSession(sessionName));
  }, [
    project,
    retrieveAllProjectLists,
    retrieveProjectTasks,
    allListsPending,
    allListSuccess,
    taskPending,
    tasksSuccess,
  ]);

  useEffect(() => {
    project.id &&
      !allListsPending &&
      retrieveAllProjectLists(project, retrieveSession(sessionName));
    project.id &&
      !taskPending &&
      retrieveProjectTasks(project, retrieveSession(sessionName));
  }, [project]);

  return (
    <div className={styles.lists}>
      <div className={styles.createList}>
        <Button
          startIcon={<AddIcon />}
          variant={"contained"}
          onClick={() =>
            pushView({ useCase: UseCases.CreateList, data: { user, project } })
          }
        >
          {t("pages.home.createList")}
        </Button>
      </div>
      {!lists.length ? (
        <div>
          <p>{t("pages.home.noList")}</p>
        </div>
      ) : (
        <div className={styles.groupList}>
          {lists.map((list, key) => (
            <List
              key={key}
              list={list}
              tasks={tasks.filter((t) => t.list.id === list.id)}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export { Lists };
