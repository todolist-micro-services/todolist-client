import {
  Header,
  Modal,
  ModalActions,
  ModalContent,
  ModalDescription,
  ModalHeader,
} from "semantic-ui-react";
import { Props } from "./types.ts";

function Register({ close }: Props) {
  return (
    <Modal onClose={() => close()} open={true}>
      <ModalHeader>Select a Photo</ModalHeader>
      <ModalContent image>
        <ModalDescription>
          <Header>Default Profile Image</Header>
          <p>
            We've found the following gravatar image associated with your e-mail
            address.
          </p>
          <p>Is it okay to use this photo?</p>
        </ModalDescription>
      </ModalContent>
      <ModalActions></ModalActions>
    </Modal>
  );
}

export { Register };
