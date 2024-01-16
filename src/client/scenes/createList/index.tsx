import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Button, Modal } from "@mui/material";

import { List } from "@core/dto";
import { useListCreation, useUserToListLinkCreation } from "@core/viewModels";
import { retrieveSession } from "@utils/sessions.ts";
import { sessionName } from "@utils/constant.ts";
import { Props } from "./types.ts";

function CreateList({ user, project, close }: Props) {
  const { t } = useTranslation();
  const [list, setList] = useState<List>({
    creator: user,
    description: "",
    name: "",
    project: project,
  });
  const { createList, isRequestSuccess, listId } = useListCreation();
  const { linkUserToList } = useUserToListLinkCreation();

  useEffect(() => {
    if (isRequestSuccess) {
      linkUserToList(
        user,
        { ...list, id: listId },
        retrieveSession(sessionName)
      );
      close();
    }
  }, [isRequestSuccess]);

  return (
    <Modal onClose={() => close()} open={true}>
      <div>
        <p>{t("createList.title")}</p>
        <div>
          <input
            defaultValue={list.name}
            placeholder={"name"}
            onChange={(e) => setList({ ...list, name: e.target.value })}
          />
          <input
            defaultValue={list.description}
            placeholder={"description"}
            onChange={(e) => setList({ ...list, description: e.target.value })}
          />
          <Button
            onClick={() => createList(list, retrieveSession(sessionName))}
          >
            <p>{t("createList.cta")}</p>
          </Button>
        </div>
      </div>
    </Modal>
  );
}

export { CreateList };
