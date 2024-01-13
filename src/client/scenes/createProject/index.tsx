import { Button, Modal, ModalContent, ModalHeader } from "semantic-ui-react";
import { Props } from "./types.ts";
import React, { useState } from "react";
import {
  useProjectCreation,
  useUserRetrieval,
  useUserToProjectLinkCreation,
} from "@core/viewModels";
import { retrieveSession } from "@utils/sessions.ts";
import { sessionName } from "@utils/constant.ts";
import { Identifiable, Project } from "@core/dto";

function CreateProject({ close }: Props) {
  const { user } = useUserRetrieval();
  const [project, setProject] = useState<Identifiable<Project>>({
    creationDate: new Date(),
    creator: user.id,
    description: "",
    name: "",
    id: 0,
  });
  const { isRequestSuccess, projectId, createProject } = useProjectCreation();
  const { linkUserToProject } = useUserToProjectLinkCreation();

  React.useEffect(() => {
    isRequestSuccess &&
      linkUserToProject(
        user,
        { ...project, id: projectId },
        retrieveSession(sessionName)
      );
    isRequestSuccess && close();
  }, [isRequestSuccess]);
  return (
    <Modal onClose={() => close()} open={true}>
      <ModalHeader>Create project</ModalHeader>
      <ModalContent>
        <input
          placeholder={"name"}
          onChange={(e) => setProject({ ...project, name: e.target.value })}
        />
        <input
          placeholder={"description"}
          onChange={(e) =>
            setProject({ ...project, description: e.target.value })
          }
        />
        <Button
          onClick={() => createProject(project, retrieveSession(sessionName))}
        >
          <p>create project</p>
        </Button>
      </ModalContent>
    </Modal>
  );
}

export { CreateProject };
