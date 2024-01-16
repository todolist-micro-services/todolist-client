import { useTranslation } from "react-i18next";
import { useState } from "react";
import { Button } from "@mui/material";

import { useWrapperContext } from "@app/wrapper/wrapper.tsx";
import { UseCases } from "@core/reducer/types.ts";
import { useListUpdate } from "@core/viewModels";
import { retrieveSession } from "@utils/sessions.ts";
import { sessionName } from "@utils/constant.ts";
import { Props } from "./types.ts";

function UpdateList({ close, list }: Props) {
  const { pushView } = useWrapperContext();
  const { t } = useTranslation();
  const [newList, setNewList] = useState(list);
  const { updateList } = useListUpdate();

  return (
    <div>
      <p>{t("updateList.title")}</p>
      <div>
        <input
          defaultValue={newList.name}
          placeholder={"name"}
          onChange={(e) => setNewList({ ...newList, name: e.target.value })}
        />
        <input
          defaultValue={newList.description}
          placeholder={"description"}
          onChange={(e) =>
            setNewList({ ...newList, description: e.target.value })
          }
        />
      </div>
      <div>
        <Button
          onClick={() =>
            pushView({ useCase: UseCases.DeleteList, data: { list } })
          }
        >
          <p>{t("updateList.cancel")}</p>
        </Button>
        <Button
          onClick={() =>
            pushView({ useCase: UseCases.DeleteList, data: { list } })
          }
        >
          <p>{t("updateList.deleteCta")}</p>
        </Button>
        <Button
          onClick={() => {
            updateList(list, { ...newList }, retrieveSession(sessionName));
            close();
          }}
        >
          <p>{t("updateList.updateCta")}</p>
        </Button>
      </div>
    </div>
  );
}

export { UpdateList };
