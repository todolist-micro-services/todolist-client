import { useEffect } from "react";

import { SideBar } from "@components/sideBar";
import { retrieveSession } from "@utils/sessions.ts";
import { sessionName } from "@utils/constant.ts";
import { useUserRetrieval } from "@core/viewModels";
import styles from "./styles.module.scss";

function Home() {
  const { retrieveUser, isRequestSuccess } = useUserRetrieval();

  useEffect(() => {
    !isRequestSuccess && retrieveUser(retrieveSession(sessionName));
  }, []);

  return (
    <div className={styles.home}>
      <SideBar
        children={
          <div>
            <p>Display all list/task of the selected project</p>
          </div>
        }
      />
    </div>
  );
}

export { Home };
