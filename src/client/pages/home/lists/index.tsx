import { useAllProjectListsRetrieval } from "@core/viewModels";
import { Props } from "./types.ts";
import styles from "./styles.module.scss";
import { useEffect } from "react";
import { retrieveSession } from "@utils/sessions.ts";
import { sessionName } from "@utils/constant.ts";
import { useTranslation } from "react-i18next";
import { useWrapperContext } from "@app/wrapper/wrapper.tsx";
import { UseCases } from "@core/reducer/types.ts";

function Lists({ project, user }: Props) {
  const { t } = useTranslation();
  const { pushView } = useWrapperContext();
  const { retrieveAllProjectLists, lists } = useAllProjectListsRetrieval();

  useEffect(() => {
    project.id > 0 &&
      retrieveAllProjectLists(project, retrieveSession(sessionName));
  }, [project]);

  return (
    <div className={styles.lists}>
      <p>lists {project.name}</p>
      <button
        onClick={() =>
          pushView({ useCase: UseCases.CreateList, data: { user, project } })
        }
      >
        {t("pages.home.createList")}
      </button>
      {!lists.length ? (
        <div>
          <p>{t("pages.home.noList")}</p>
        </div>
      ) : (
        <div className={styles.groupList}>
          {lists.map((list, key) => (
            <div
              className={styles.list}
              key={key}
              onClick={() =>
                pushView({ useCase: UseCases.UpdateList, data: { list } })
              }
            >
              <p>{list.name}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export { Lists };
