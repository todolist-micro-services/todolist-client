import { Settings } from "./settings";
import { Title } from "./title";
import { Projects } from "./projects";
import styles from "./styles.module.scss";

function SideBarContent() {
  const isHomePage = window.location.pathname === "/home";

  return (
    <div className={styles.sideBar}>
      <Title />
      {isHomePage && <Projects />}
      <Settings />
    </div>
  );
}

export { SideBarContent };
