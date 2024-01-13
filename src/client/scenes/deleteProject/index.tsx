import {
  Button,
  Header,
  Icon,
  Modal,
  ModalActions,
  ModalContent,
  ModalDescription,
  ModalHeader,
} from "semantic-ui-react";
import { Props } from "./types.ts";
import { useProjectRemoval } from "@core/viewModels";
import { retrieveSession } from "@utils/sessions.ts";
import { sessionName } from "@utils/constant.ts";
import { useEffect } from "react";

function DeleteProject({ close, project }: Props) {
  const { deleteProject, isRequestSuccess } = useProjectRemoval();

  useEffect(() => {
    isRequestSuccess && close();
  }, [isRequestSuccess]);

  return (
    <Modal onClose={() => close()} open={true}>
      <ModalHeader>Delete project</ModalHeader>
      <ModalContent image>
        <ModalDescription>
          <Header>{project.name}</Header>
          <p>Are you sure you want to delete the project ?</p>
        </ModalDescription>
      </ModalContent>
      <ModalActions>
        <Button color="grey" onClick={close}>
          <Icon name="remove" /> No
        </Button>
        <Button
          color="red"
          onClick={() =>
            deleteProject(project.id, retrieveSession(sessionName))
          }
        >
          <Icon name="checkmark" /> Yes
        </Button>
      </ModalActions>
    </Modal>
  );
}

export { DeleteProject };
