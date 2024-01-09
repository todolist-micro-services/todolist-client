import styles from "./styles.module.scss";
import { useNavigate } from "react-router-dom";

function SideBarContent() {
  const navigate = useNavigate();
  const isHomePage = window.location.pathname === "/home";

  return (
    <div className={styles.sideBar}>
      <div>
        <p>this is my sidebar</p>
      </div>
      {isHomePage && (
        <div>
          <p>All projects will be display here</p>
        </div>
      )}
      <div onClick={() => navigate("/settings")}>
        <p>Settings</p>
      </div>
    </div>
  );
}

export { SideBarContent };
