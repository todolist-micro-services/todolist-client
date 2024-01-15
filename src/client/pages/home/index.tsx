import { useEffect } from "react";

import { SideBar } from "@components/sideBar";
import { storedProject } from "@utils/constant.ts";
import { useAllProjectsRetrieval, useUserRetrieval } from "@core/viewModels";
import { useProjectContext } from "@app/context/project.tsx";
import { retrieveData } from "@utils/storeData.ts";
import { useWrapperContext } from "@app/wrapper/wrapper.tsx";
import { UseCases } from "@core/reducer/types.ts";
import { Lists } from "./lists";
import styles from "./styles.module.scss";
import { useTranslation } from "react-i18next";
import { initialProject } from "@core/dto";

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
  }, [retrieveAllProjects]);

  return (
    <div className={styles.home}>
      <SideBar
        children={
          <div>
            {!projects.length ? (
              <div>
                <p>You have no projects</p>
                <button
                  onClick={() =>
                    pushView({ useCase: UseCases.CreateProject, data: {} })
                  }
                >
                  <p>create new project</p>
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
        }
      />
    </div>
  );
}

export { Home };
