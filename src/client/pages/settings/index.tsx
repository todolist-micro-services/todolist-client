import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "semantic-ui-react";

import { SideBar } from "@components/sideBar";
import { removeSession, retrieveSession } from "@utils/sessions.ts";
import { sessionName } from "@utils/constant.ts";
import {
  useUserRemoval,
  useUserRetrieval,
  useUserUpdate,
} from "@core/viewModels";
import styles from "./styles.module.scss";

function Settings() {
  const navigate = useNavigate();
  const { retrieveUser, isRequestSuccess, user } = useUserRetrieval();
  const [firstname, setFirstname] = useState(user.firstname);
  const [lastname, setLastname] = useState(user.lastname);
  const { updateUser } = useUserUpdate();
  const {
    deleteUser,
    isRequestSuccess: removalSuccess,
    isRequestFailure,
    isRequestPending,
  } = useUserRemoval();

  const disconnect = () => {
    removeSession(sessionName);
    navigate("/");
    window.location.reload();
  };

  const deleteAccount = () => {
    deleteUser(retrieveSession(sessionName));
    removeSession(sessionName);
    navigate("/");
    window.location.reload();
  };

  const updateUserCta = () => {
    updateUser(retrieveSession(sessionName), { ...user, firstname, lastname });
  };

  useEffect(() => {
    !isRequestSuccess && retrieveUser(retrieveSession(sessionName));
  }, []);

  useEffect(() => {
    isRequestSuccess && setFirstname(user.firstname);
    isRequestSuccess && setLastname(user.lastname);
  }, [isRequestSuccess]);

  return (
    <div className={styles.settings}>
      <SideBar
        children={
          <div>
            <p>Settings page</p>
            <input
              placeholder={"firstname"}
              value={firstname}
              type={"firstname"}
              onChange={(e) => setFirstname(e.target.value)}
            />
            <input
              placeholder={"lastname"}
              value={lastname}
              type={"lastname"}
              onChange={(e) => setLastname(e.target.value)}
            />
            <Button onClick={updateUserCta}>
              <p>Update user</p>
            </Button>
            <Link to={`/home`}>home page</Link>
            <Button onClick={disconnect}>
              <p>Disconnection</p>
            </Button>
            {isRequestPending && <p>pending</p>}
            {isRequestFailure && <p>pending</p>}
            {removalSuccess && <p>pending</p>}
            <Button onClick={deleteAccount}>
              <p>Delete account</p>
            </Button>
          </div>
        }
      />
    </div>
  );
}

export { Settings };
