import styles from "./styles.module.scss";
import { Link, useNavigate } from "react-router-dom";
import { SideBar } from "@components/sideBar";
import { removeSession } from "@utils/sessions.ts";

function Settings() {
  const navigate = useNavigate();
  const disconnect = () => {
    removeSession("todolist-access-token");
    navigate("/");
    window.location.reload();
  };
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
