import { SideBarContent } from "./sideBarContent";
import { Props } from "./types.ts";
import styles from "./styles.module.scss";

function SideBar({ children }: Props) {
  return (
    <div className={styles.sideBar}>
      <SideBarContent />
      <div className={styles.content}>{children}</div>
    </div>
  );
}

export { SideBar };
