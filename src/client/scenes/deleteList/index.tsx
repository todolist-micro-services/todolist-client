import {
  Button,
  Modal,
  ModalActions,
  ModalContent,
  ModalHeader,
} from "semantic-ui-react";
import { Props } from "./types.ts";
import { useTranslation } from "react-i18next";
import { useListRemoval } from "@core/viewModels";
import { retrieveSession } from "@utils/sessions.ts";
import { sessionName } from "@utils/constant.ts";

function DeleteList({ close, list }: Props) {
  const { t } = useTranslation();
  const { deleteList } = useListRemoval();

  return (
    <Modal onClose={() => close()} open={true}>
      <ModalHeader>
        {t("deleteList.title")} {list.name}
      </ModalHeader>
      <ModalContent>
        <p>{t("deleteList.confirmation")}</p>
      </ModalContent>
      <ModalActions>
        <Button onClick={close}>
          <p>{t("deleteList.cancel")}</p>
        </Button>
        <Button
          color={"red"}
          onClick={() => {
            deleteList(list, retrieveSession(sessionName));
            close();
          }}
        >
          <p>{t("deleteList.cta")}</p>
        </Button>
      </ModalActions>
    </Modal>
  );
}

export { DeleteList };
