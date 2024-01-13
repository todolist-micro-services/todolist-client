import { useEffect } from "react";

import { SideBar } from "@components/sideBar";
import { retrieveSession } from "@utils/sessions.ts";
import { sessionName, storedProject } from "@utils/constant.ts";
import { useAllProjectsRetrieval, useUserRetrieval } from "@core/viewModels";
import styles from "./styles.module.scss";
import { useProjectContext } from "@app/context/project.tsx";
import { retrieveData } from "@utils/storeData.ts";

function Home() {
  const { retrieveUser, isRequestSuccess } = useUserRetrieval();
  const { project, setContextProject } = useProjectContext();
  const { projects, isRequestSuccess: retrieveAllProjects } =
    useAllProjectsRetrieval();
  const selectedProject = retrieveData(storedProject);

  useEffect(() => {
    !isRequestSuccess && retrieveUser(retrieveSession(sessionName));
  }, []);

  useEffect(() => {
    retrieveAllProjects &&
      selectedProject &&
      setContextProject(
        projects.filter((data) => data.id === +selectedProject)[0]
      );
  }, [retrieveAllProjects]);

  return (
    <div className={styles.home}>
      <SideBar
        children={
          <div>
            <p>Display all list/task of project: {project.name}</p>
          </div>
        }
      />
    </div>
  );
}

export { Home };
