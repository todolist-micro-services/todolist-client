import { useTranslation } from "react-i18next";
import { Button, Modal } from "@mui/material";

import { useListRemoval } from "@core/viewModels";
import { retrieveSession } from "@utils/sessions.ts";
import { sessionName } from "@utils/constant.ts";
import { Props } from "./types.ts";

function DeleteList({ close, list }: Props) {
  const { t } = useTranslation();
  const { deleteList } = useListRemoval();

  return (
    <Modal onClose={() => close()} open={true}>
      <div>
        <p>
          {t("deleteList.title")} {list.name}
        </p>
        <div>
          <p>{t("deleteList.confirmation")}</p>
          <Button onClick={close}>
            <p>{t("deleteList.cancel")}</p>
          </Button>
          <Button
            onClick={() => {
              deleteList(list, retrieveSession(sessionName));
              close();
            }}
          >
            <p>{t("deleteList.cta")}</p>
          </Button>
        </div>
      </div>
    </Modal>
  );
}

export { DeleteList };
