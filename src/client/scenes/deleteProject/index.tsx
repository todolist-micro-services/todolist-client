import { useEffect } from "react";
import { Button } from "@mui/material";

import { useProjectRemoval } from "@core/viewModels";
import { retrieveSession } from "@utils/sessions.ts";
import { sessionName } from "@utils/constant.ts";
import { Props } from "./types.ts";

function DeleteProject({ close, project }: Props) {
  const { deleteProject, isRequestSuccess } = useProjectRemoval();

  useEffect(() => {
    isRequestSuccess && close();
  }, [isRequestSuccess]);

  return (
    <div>
      <p>Delete project</p>
      <div>
        <div>
          <div>{project.name}</div>
          <p>Are you sure you want to delete the project ?</p>
        </div>
      </div>
      <div>
        <Button onClick={close}>No</Button>
        <Button
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
