import {
  Header,
  Modal,
  ModalActions,
  ModalContent,
  ModalDescription,
  ModalHeader,
} from "semantic-ui-react";
import { Props } from "./types.ts";

function UpdateProject({ close, project }: Props) {
  return (
    <Modal onClose={() => close()} open={true}>
      <ModalHeader>Update project</ModalHeader>
      <ModalContent image>
        <ModalDescription>
          <Header>Update project {project.name}</Header>
          <p>{project.description}</p>
          <p>{project.creator}</p>
        </ModalDescription>
      </ModalContent>
      <ModalActions></ModalActions>
    </Modal>
  );
}

export { UpdateProject };
