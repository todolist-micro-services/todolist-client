import { Settings } from "./settings";
import { Title } from "./title";
import { Projects } from "./projects";
import styles from "./styles.module.scss";
import { Divider } from "@mui/material";

function SideBarContent() {
  return (
    <div className={styles.sideBar}>
      <Title />
      <Divider />
      <Projects />
      <Divider />
      <Settings />
    </div>
  );
}

export { SideBarContent };
