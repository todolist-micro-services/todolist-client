import styles from "./styles.module.scss";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className={styles.login}>
      <p>Login page</p>
      <Link to={`/`}>landing page</Link>
    </div>
  );
}

export { Login };
