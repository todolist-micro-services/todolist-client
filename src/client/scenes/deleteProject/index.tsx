import {
  Header,
  Modal,
  ModalActions,
  ModalContent,
  ModalDescription,
  ModalHeader,
} from "semantic-ui-react";
import { Props } from "./types.ts";

function DeleteProject({ close }: Props) {
  return (
    <Modal onClose={() => close()} open={true}>
      <ModalHeader>Delete project</ModalHeader>
      <ModalContent image>
        <ModalDescription>
          <Header>Delete project</Header>
          <p>Ask for confirmation</p>
        </ModalDescription>
      </ModalContent>
      <ModalActions></ModalActions>
    </Modal>
  );
}

export { DeleteProject };
