import * as classNames from "classnames";
import InfoIcon from "@mui/icons-material/Info";
import DeleteIcon from "@mui/icons-material/Delete";

import { useWrapperContext } from "@app/wrapper/wrapper.tsx";
import { UseCases } from "@core/reducer/main.ts";
import { useProjectContext } from "@app/context/project.tsx";
import { Props } from "./type.ts";
import styles from "./styles.module.scss";
import { IconButton } from "@mui/material";
import { generateColorFromName } from "@utils/colorFromName.ts";

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
        <div
          style={{
            width: "1rem",
            height: "1rem",
            borderRadius: "100px",
            backgroundColor: generateColorFromName(project.name),
          }}
        />
        <p className={styles.name}>{project.name}</p>
      </div>
      <div className={styles.iconBox}>
        <IconButton
          className={styles.iconInfo}
          onClick={(e) => {
            e.stopPropagation();
            pushView({
              useCase: UseCases.UpdateProject,
              data: { project: project },
            });
          }}
        >
          <InfoIcon />
        </IconButton>
        <IconButton
          className={styles.iconTrash}
          onClick={(e) => {
            e.stopPropagation();
            pushView({
              useCase: UseCases.DeleteProject,
              data: { project },
            });
          }}
        >
          <DeleteIcon />
        </IconButton>
      </div>
    </div>
  );
}

export { Project };
