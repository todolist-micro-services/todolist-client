import styles from "./styles.module.scss";
import { Link } from "react-router-dom";
import { SideBar } from "@components/sideBar";

function Settings() {
  return (
    <div className={styles.settings}>
      <SideBar
        children={
          <div>
            <p>Settings page</p>
            <Link to={`/home`}>home page</Link>
            <Link to={`/`}>landing page</Link>
          </div>
        }
      />
    </div>
  );
}

export { Settings };
