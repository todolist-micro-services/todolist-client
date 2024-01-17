import { useTranslation } from "react-i18next";
import { Button, Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

import { useListRemoval } from "@core/viewModels";
import { retrieveSession } from "@utils/sessions.ts";
import { sessionName } from "@utils/constant.ts";
import { Props } from "./types.ts";
import styles from "./styles.module.scss";

function DeleteList({ close, list }: Props) {
  const { t } = useTranslation();
  const { deleteList } = useListRemoval();

  return (
    <div>
      <Typography id="modal-modal-title" variant="h6" component="h2">
        {t("deleteList.title")} {list.name}
      </Typography>
      <div>
        <p>{t("deleteList.confirmation")}</p>
      </div>
      <div className={styles.buttons}>
        <Button onClick={close}>{t("deleteList.cancel")}</Button>
        <Button
          color={"error"}
          startIcon={<DeleteIcon />}
          onClick={() => {
            deleteList(list, retrieveSession(sessionName));
            close();
          }}
        >
          {t("deleteList.cta")}
        </Button>
      </div>
    </div>
  );
}

export { DeleteList };
