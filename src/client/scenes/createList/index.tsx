import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Button, TextField, Typography } from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";

import { List } from "@core/dto";
import { useListCreation, useUserToListLinkCreation } from "@core/viewModels";
import { retrieveSession } from "@utils/sessions.ts";
import { sessionName } from "@utils/constant.ts";
import { Props } from "./types.ts";
import styles from "./styles.module.scss";

function CreateList({ user, project, close }: Props) {
  const { t } = useTranslation();
  const [list, setList] = useState<List>({
    creator: user,
    description: "",
    name: "",
    project: project,
  });
  const { createList, isRequestSuccess, listId, isRequestPending } =
    useListCreation();
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
    <div>
      <Typography id="modal-modal-title" variant="h6" component="h2">
        {t("createList.title")}
      </Typography>
      <div className={styles.content}>
        <TextField
          id="outlined-basic"
          label="name"
          variant="outlined"
          size={"small"}
          onChange={(e) => setList({ ...list, name: e.target.value })}
        />
        <TextField
          id="outlined-basic"
          label="description"
          variant="outlined"
          size={"small"}
          onChange={(e) => setList({ ...list, description: e.target.value })}
        />
      </div>
      <div className={styles.buttons}>
        <Button size={"small"} onClick={close}>
          <p>{t("createList.cancel")}</p>
        </Button>
        <LoadingButton
          loading={isRequestPending}
          loadingPosition="start"
          variant="contained"
          onClick={() => createList(list, retrieveSession(sessionName))}
        >
          {t("createList.cta")}
        </LoadingButton>
      </div>
    </div>
  );
}

export { CreateList };
