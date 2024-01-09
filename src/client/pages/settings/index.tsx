import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import { SideBar } from "@components/sideBar";
import { removeSession, retrieveSession } from "@utils/sessions.ts";
import { sessionName } from "@utils/constant.ts";
import { useUserRetrieval } from "@core/viewModels";
import styles from "./styles.module.scss";

function Settings() {
  const navigate = useNavigate();
  const { retrieveUser, isRequestSuccess } = useUserRetrieval();

  const disconnect = () => {
    removeSession(sessionName);
    navigate("/");
    window.location.reload();
  };

  useEffect(() => {
    !isRequestSuccess && retrieveUser(retrieveSession(sessionName));
  }, []);

  return (
    <div className={styles.settings}>
      <SideBar
        children={
          <div>
            <p>Settings page</p>
            <Link to={`/home`}>home page</Link>
            <div onClick={disconnect}>
              <p>Disconnection</p>
            </div>
          </div>
        }
      />
    </div>
  );
}

export { Settings };
