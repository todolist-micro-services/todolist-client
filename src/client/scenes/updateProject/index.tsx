import {
  Header,
  Modal,
  ModalActions,
  ModalContent,
  ModalDescription,
  ModalHeader,
} from "semantic-ui-react";
import { Props } from "./types.ts";
import { useEffect, useState } from "react";
import { useProjectUpdate } from "@core/viewModels";
import { retrieveSession } from "@utils/sessions.ts";
import { sessionName } from "@utils/constant.ts";

function UpdateProject({ close, project }: Props) {
  const [newProject, setNewProject] = useState(project);
  const { updateProject, project: pad } = useProjectUpdate();

  useEffect(() => {
    console.log(pad);
  }, [pad]);

  return (
    <Modal onClose={() => close()} open={true}>
      <ModalHeader>Update project</ModalHeader>
      <ModalContent image>
        <ModalDescription>
          <Header>Update project {project.name}</Header>
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
        </ModalDescription>
      </ModalContent>
      <ModalActions></ModalActions>
    </Modal>
  );
}

export { UpdateProject };
