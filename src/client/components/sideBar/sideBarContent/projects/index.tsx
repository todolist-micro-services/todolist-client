import React from "react";

import { useAllProjectsRetrieval } from "@core/viewModels";
import { retrieveSession } from "@utils/sessions.ts";
import { sessionName } from "@utils/constant.ts";
import { ProjectSkeleton } from "./projectSkeleton";
import { Project } from "./project";
import { CreateProject } from "./createProject";
import styles from "./styles.module.scss";

function Projects() {
  const { isRequestPending, isRequestSuccess, projects, retrieveAllProjects } =
    useAllProjectsRetrieval();

  React.useEffect(() => {
    !isRequestSuccess &&
      !isRequestPending &&
      retrieveAllProjects(retrieveSession(sessionName));
  }, []);

  return (
    <div className={styles.projects}>
      <CreateProject />
      {isRequestPending && <ProjectSkeleton />}
      {projects.map((project, key) => (
        <div key={key}>
          <Project project={project} />
        </div>
      ))}
    </div>
  );
}

export { Projects };
