import { SideBar } from "@components/sideBar";
import styles from "./styles.module.scss";

function Home() {
  return (
    <div className={styles.home}>
      <SideBar
        children={
          <div>
            <p>content</p>
          </div>
        }
      />
    </div>
  );
}

export { Home };
