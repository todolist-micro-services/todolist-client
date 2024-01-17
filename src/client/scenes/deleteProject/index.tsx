import { useEffect } from "react";
import { Button, Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

import { useProjectRemoval } from "@core/viewModels";
import { retrieveSession } from "@utils/sessions.ts";
import { sessionName } from "@utils/constant.ts";
import { Props } from "./types.ts";
import styles from "./styles.module.scss";

function DeleteProject({ close, project }: Props) {
  const { deleteProject, isRequestSuccess } = useProjectRemoval();

  useEffect(() => {
    isRequestSuccess && close();
  }, [isRequestSuccess]);

  return (
    <div>
      <Typography id="modal-modal-title" variant="h6" component="h2">
        Delete project: {project.name}
      </Typography>
      <div>
        <p>Are you sure you want to delete this project ?</p>
      </div>
      <div className={styles.buttons}>
        <Button onClick={close}>No</Button>
        <Button
          color={"error"}
          startIcon={<DeleteIcon />}
          onClick={() =>
            deleteProject(project.id, retrieveSession(sessionName))
          }
        >
          Yes
        </Button>
      </div>
    </div>
  );
}

export { DeleteProject };
