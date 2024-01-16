import { Modal } from "@mui/material";
import { useEffect, useState } from "react";

import { useProjectUpdate } from "@core/viewModels";
import { retrieveSession } from "@utils/sessions.ts";
import { sessionName } from "@utils/constant.ts";
import { Props } from "./types.ts";

function UpdateProject({ close, project }: Props) {
  const [newProject, setNewProject] = useState(project);
  const { updateProject, isRequestSuccess } = useProjectUpdate();

  useEffect(() => {
    isRequestSuccess && close();
  }, [isRequestSuccess]);

  return (
    <Modal onClose={() => close()} open={true}>
      <div>
        <p>Update project</p>
        <div>
          <div>
            <p>Update project {project.name}</p>
            <input
              defaultValue={newProject.name}
              onChange={(e) =>
                setNewProject({ ...newProject, name: e.target.value })
              }
            />
            <input
              defaultValue={newProject.description}
              onChange={(e) =>
                setNewProject({ ...newProject, description: e.target.value })
              }
            />
            <button
              onClick={() =>
                updateProject(
                  project,
                  { ...newProject },
                  retrieveSession(sessionName)
                )
              }
            >
              <p>update project</p>
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );
}

export { UpdateProject };
