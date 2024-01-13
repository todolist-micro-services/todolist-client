import { createContext, useContext, useState } from "react";
import { Identifiable, initialProject, Project } from "@core/dto";
import { storeData } from "@utils/storeData.ts";
import { storedProject } from "@utils/constant.ts";

type ProjectContextType = {
  setContextProject: (project: Identifiable<Project>) => void;
  project: Identifiable<Project> | undefined;
};

const ProjectContext = createContext<ProjectContextType>({
  setContextProject: () => {},
  project: { ...initialProject, id: 0 },
});

function ProjectContextProvider({ children }: { children: React.ReactNode }) {
  const [project, setProject] = useState<Identifiable<Project> | undefined>(
    undefined
  );

  function setContextProject(project: Identifiable<Project> | undefined) {
    setProject(project);
    storeData(storedProject, project?.id.toString() ?? "");
  }

  const contextValue: ProjectContextType = {
    setContextProject,
    project,
  };

  return (
    <ProjectContext.Provider value={contextValue}>
      {children}
    </ProjectContext.Provider>
  );
}

function useProjectContext() {
  const context = useContext(ProjectContext);

  if (!context) {
    throw new Error(
      "useWrapperContext must be used within a WrapperContextProvider"
    );
  }

  return context;
}

export { ProjectContextProvider, useProjectContext };
