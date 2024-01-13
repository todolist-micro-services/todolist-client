import { useEffect } from "react";

import { SideBar } from "@components/sideBar";
import { retrieveSession } from "@utils/sessions.ts";
import { sessionName, storedProject } from "@utils/constant.ts";
import { useAllProjectsRetrieval, useUserRetrieval } from "@core/viewModels";
import styles from "./styles.module.scss";
import { useProjectContext } from "@app/context/project.tsx";
import { retrieveData } from "@utils/storeData.ts";
import { useWrapperContext } from "@app/wrapper/wrapper.tsx";
import { UseCases } from "@core/reducer/types.ts";

function Home() {
  const { retrieveUser, isRequestSuccess } = useUserRetrieval();
  const { project, setContextProject } = useProjectContext();
  const { pushView } = useWrapperContext();
  const { projects, isRequestSuccess: retrieveAllProjects } =
    useAllProjectsRetrieval();
  const selectedProject = retrieveData(storedProject);

  if (!selectedProject?.length && projects.length) {
    setContextProject(projects[0]);
  }

  useEffect(() => {
    !isRequestSuccess && retrieveUser(retrieveSession(sessionName));
  }, []);

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
              <p>Display all list/task of project: {project?.name}</p>
            )}
          </div>
        }
      />
    </div>
  );
}

export { Home };
