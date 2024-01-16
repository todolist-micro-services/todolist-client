import * as classNames from "classnames";

import { useWrapperContext } from "@app/wrapper/wrapper.tsx";
import { UseCases } from "@core/reducer/main.ts";
import { useProjectContext } from "@app/context/project.tsx";
import { Props } from "./type.ts";
import styles from "./styles.module.scss";

function Project({ project }: Props) {
  const { pushView } = useWrapperContext();
  const { setContextProject, project: selectedProject } = useProjectContext();

  return (
    <div
      className={classNames(styles.project, {
        [styles.isSelected]: project.id === selectedProject?.id,
      })}
      onClick={() => setContextProject(project)}
    >
      <div className={styles.nameBox}>
        <p className={styles.name}>{project.name}</p>
      </div>
      <div className={styles.iconBox}>
        <div
          className={styles.iconInfo}
          onClick={(e) => {
            e.stopPropagation();
            pushView({
              useCase: UseCases.UpdateProject,
              data: { project: project },
            });
          }}
        >
          I
        </div>
        <div
          className={styles.iconTrash}
          onClick={(e) => {
            e.stopPropagation();
            pushView({
              useCase: UseCases.DeleteProject,
              data: { project },
            });
          }}
        >
          T
        </div>
      </div>
    </div>
  );
}

export { Project };
