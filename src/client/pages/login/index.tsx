import { Register } from "@pages/login/register";
import { Login as LoginComponent } from "./login";
import styles from "./styles.module.scss";

function Login() {
  return (
    <div className={styles.login}>
      <h1>Login page</h1>
      <div className={styles.forms}>
        <LoginComponent />
        <Register />
      </div>
      <div />
      {/*<Link to={`/`}>landing page</Link>*/}
      {/*<Link to={`/home`}>home page</Link>*/}
    </div>
  );
}

export { Login };
