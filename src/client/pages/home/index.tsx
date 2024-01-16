import { useEffect } from "react";
import { useTranslation } from "react-i18next";

import { storedProject } from "@utils/constant.ts";
import { useAllProjectsRetrieval, useUserRetrieval } from "@core/viewModels";
import { useProjectContext } from "@app/context/project.tsx";
import { retrieveData } from "@utils/storeData.ts";
import { useWrapperContext } from "@app/wrapper/wrapper.tsx";
import { UseCases } from "@core/reducer/types.ts";
import { initialProject } from "@core/dto";
import { Lists } from "./lists";
import styles from "./styles.module.scss";
import { TopBar } from "@components/topBar";

function Home() {
  const { t } = useTranslation();
  const { user } = useUserRetrieval();
  const { project, setContextProject } = useProjectContext();
  const { pushView } = useWrapperContext();
  const { projects, isRequestSuccess: retrieveAllProjects } =
    useAllProjectsRetrieval();
  const selectedProject = retrieveData(storedProject);

  if (!selectedProject?.length && projects.length) {
    setContextProject(projects[0]);
  }

  useEffect(() => {
    retrieveAllProjects &&
      selectedProject &&
      projects.length &&
      setContextProject(
        projects.filter((data) => data.id === +selectedProject)[0]
      );
  }, [retrieveAllProjects, projects, selectedProject, setContextProject]);

  return (
    <div className={styles.home}>
      <TopBar title={project?.name ?? "No Project selected"} />
      {!projects.length ? (
        <div>
          <p>{t("pages.home.noProjects")}</p>
          <button
            onClick={() =>
              pushView({ useCase: UseCases.CreateProject, data: {} })
            }
          >
            <p>{t("pages.home.createProject")}</p>
          </button>
        </div>
      ) : (
        <div className={styles.content}>
          {!retrieveAllProjects ? (
            <div>
              <p>{t("pages.home.requestPending")}</p>
            </div>
          ) : (
            <Lists
              project={project ?? { ...initialProject, id: 0 }}
              user={user}
            />
          )}
        </div>
      )}
    </div>
  );
}

export { Home };
