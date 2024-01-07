import { useState } from "react";

import { useCountUpdate } from "@core/viewModels";
import { useAppSelector } from "@core/utils";
import styles from "./index.module.scss";

function App() {
  const [incrementAmount, setIncrementAmount] = useState("2");

  const incrementValue = Number(incrementAmount) || 0;
  const {
    updateCount,
    count,
    isRequestFailure,
    isRequestPending,
    isRequestSuccess,
  } = useCountUpdate();
  const errorMessage = useAppSelector((state) => state.error);

  return (
    <div>
      <div>
        {errorMessage["errorMessage"] && <p>{errorMessage["errorMessage"]}</p>}
        {isRequestPending && <p>pending</p>}
        {isRequestFailure && <p>failure</p>}
        {isRequestSuccess && <p>success</p>}
      </div>
      <div className={styles.row}>
        <span className={styles.value}>{count}</span>
      </div>
      <div className={styles.row}>
        <input
          className={styles.textbox}
          aria-label="Set increment amount"
          value={incrementAmount}
          onChange={(e) => setIncrementAmount(e.target.value)}
        />
        <button
          className={styles.asyncButton}
          onClick={() => updateCount(incrementValue)}
        >
          Add Async 1
        </button>
      </div>
    </div>
  );
}

export default App;
