import { useTranslation } from "react-i18next";
import { useState } from "react";
import { Button, TextField, Typography } from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
import DeleteIcon from "@mui/icons-material/Delete";

import { useWrapperContext } from "@app/wrapper/wrapper.tsx";
import { UseCases } from "@core/reducer/types.ts";
import { useListUpdate } from "@core/viewModels";
import { retrieveSession } from "@utils/sessions.ts";
import { sessionName } from "@utils/constant.ts";
import { Props } from "./types.ts";
import styles from "./styles.module.scss";

function UpdateList({ close, list }: Props) {
  const { pushView } = useWrapperContext();
  const { t } = useTranslation();
  const [newList, setNewList] = useState(list);
  const { updateList, isRequestPending } = useListUpdate();

  return (
    <div>
      <Typography id="modal-modal-title" variant="h6" component="h2">
        {t("updateList.title")}
        {list.name}
      </Typography>
      <div className={styles.content}>
        <TextField
          label="name"
          defaultValue={newList.name}
          onChange={(e) => setNewList({ ...newList, name: e.target.value })}
        />
        <TextField
          label="description"
          defaultValue={newList.description}
          onChange={(e) =>
            setNewList({ ...newList, description: e.target.value })
          }
        />
      </div>
      <div className={styles.buttons}>
        <Button size={"small"} variant={"outlined"} onClick={close}>
          {t("updateList.cancel")}
        </Button>
        <Button
          color={"error"}
          startIcon={<DeleteIcon />}
          onClick={() =>
            pushView({ useCase: UseCases.DeleteList, data: { list } })
          }
        >
          <p>{t("updateList.deleteCta")}</p>
        </Button>
        <LoadingButton
          loading={isRequestPending}
          size={"small"}
          variant={"contained"}
          onClick={() => {
            updateList(list, { ...newList }, retrieveSession(sessionName));
            close();
          }}
        >
          {t("updateList.updateCta")}
        </LoadingButton>
      </div>
    </div>
  );
}

export { UpdateList };
