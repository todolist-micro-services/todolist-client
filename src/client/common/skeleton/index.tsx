import { Skeleton as S } from "@mui/material";
import styles from "./styles.module.scss";

function Skeleton() {
  return (
    <div className={styles.skeleton}>
      <S variant="rounded" width={300} height={30} />
      <S variant="rounded" width={300} height={30} />
      <S variant="rounded" width={300} height={30} />
      <S variant="rounded" width={300} height={30} />
    </div>
  );
}

export { Skeleton };
