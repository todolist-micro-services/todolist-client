import { Modal, ModalHeader } from "semantic-ui-react";
import { Props } from "./types.ts";

function CreateProject({ close }: Props) {
  return (
    <Modal onClose={() => close()} open={true}>
      <ModalHeader>Create project</ModalHeader>
    </Modal>
  );
}

export { CreateProject };
