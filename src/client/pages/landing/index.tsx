import React, { useState } from "react";

import { useCountUpdate } from "@core/viewModels";
import { useAppSelector } from "@core/utils";
import styles from "./index.module.scss";
import {
  Button,
  Header,
  Modal,
  ModalActions,
  ModalContent,
  ModalDescription,
  ModalHeader,
} from "semantic-ui-react";
import { toast, Toaster } from "react-hot-toast";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

function Landing() {
  const [incrementAmount, setIncrementAmount] = useState("2");
  const [open, setOpen] = useState(false);
  const { t } = useTranslation();

  const incrementValue = Number(incrementAmount) || 0;
  const {
    updateCount,
    count,
    isRequestFailure,
    isRequestPending,
    isRequestSuccess,
  } = useCountUpdate();
  const errorMessage = useAppSelector((state) => state.error);

  React.useEffect(() => {
    isRequestFailure && toast.error(errorMessage["errorMessage"]);
  }, [isRequestFailure]);

  return (
    <div>
      <div>
        <Toaster position="top-right" reverseOrder={true} />
      </div>
      <h2>{t("title")}</h2>
      <h2>{t("description")}</h2>
      <div>
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
        <button className="ui button">Click Here</button>
        <Link to={`login`}>login page</Link>
        <button
          className={styles.asyncButton}
          onClick={() => {
            updateCount(incrementValue);
          }}
        >
          Add Async 1
        </button>
      </div>
      <Modal
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        open={open}
        trigger={<Button>Show Modal</Button>}
      >
        <ModalHeader>Select a Photo</ModalHeader>
        <ModalContent image>
          <ModalDescription>
            <Header>Default Profile Image</Header>
            <p>
              We've found the following gravatar image associated with your
              e-mail address.
            </p>
            <p>Is it okay to use this photo?</p>
          </ModalDescription>
        </ModalContent>
        <ModalActions>
          <Button color="black" onClick={() => setOpen(false)}>
            Nope
          </Button>
          <Button
            content="Yep, that's me"
            labelPosition="right"
            icon="checkmark"
            onClick={() => setOpen(false)}
            positive
          />
        </ModalActions>
      </Modal>
    </div>
  );
}

export { Landing };
