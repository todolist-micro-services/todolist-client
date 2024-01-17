import { Settings } from "./settings";
import { Title } from "./title";
import { Projects } from "./projects";
import { Divider } from "@mui/material";
import styles from "./styles.module.scss";

function SideBar() {
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

export { SideBar };
