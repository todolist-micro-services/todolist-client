import { Props } from "./type.ts";
import styles from "./styles.module.scss";
import { Icon } from "semantic-ui-react";
import { useWrapperContext } from "@app/wrapper/wrapper.tsx";
import { UseCases } from "@core/reducer/main.ts";

function Project({ project }: Props) {
  const { pushView } = useWrapperContext();

  return (
    <div
      className={styles.project}
      onClick={() =>
        pushView({ useCase: UseCases.UpdateProject, data: { project } })
      }
    >
      <div className={styles.nameBox}>
        <p className={styles.name}>{project.name}</p>
      </div>
      <div
        className={styles.iconBox}
        onClick={(e) => {
          e.stopPropagation();
          pushView({
            useCase: UseCases.DeleteProject,
            data: { projectId: project.uuid },
          });
        }}
      >
        <Icon name={"trash"} />
      </div>
    </div>
  );
}

export { Project };
