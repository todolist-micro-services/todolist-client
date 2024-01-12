import { Skeleton } from "@common/skeleton";

import styles from "./styles.module.scss";

function ProjectSkeleton() {
  return (
    <div className={styles.projectSkeleton}>
      <Skeleton />
    </div>
  );
}

export { ProjectSkeleton };
