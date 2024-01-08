import styles from "./styles.module.scss";
import { useNavigate } from "react-router-dom";

function SideBarContent() {
  const navigate = useNavigate();

  return (
    <div className={styles.sideBar}>
      <div>
        <p>this is my sidebar</p>
      </div>
      <div onClick={() => navigate("/settings")}>
        <p>Settings</p>
      </div>
    </div>
  );
}

export { SideBarContent };
