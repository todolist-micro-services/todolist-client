import { useEffect, useState } from "react";
import { Button, ButtonGroup, ButtonOr } from "semantic-ui-react";

import { SideBar } from "@components/sideBar";
import { retrieveSession } from "@utils/sessions.ts";
import { sessionName } from "@utils/constant.ts";
import { useUserRetrieval } from "@core/viewModels";
import styles from "./styles.module.scss";

function Home() {
  const [displayTask, setDisplayTask] = useState(true);
  const [displayTimeline, setDisplayTimeline] = useState(false);
  const [displayGlobalTimeline, setDisplayGlobalTimeline] = useState(false);
  const { retrieveUser, isRequestSuccess } = useUserRetrieval();

  useEffect(() => {
    !isRequestSuccess && retrieveUser(retrieveSession(sessionName));
  }, []);

  return (
    <div className={styles.home}>
      <SideBar
        children={
          <div>
            <ButtonGroup>
              <Button
                onClick={() => {
                  setDisplayTask(true);
                  setDisplayTimeline(false);
                  setDisplayGlobalTimeline(false);
                }}
                positive={displayTask}
              >
                List/tasks
              </Button>
              <ButtonOr />
              <Button
                onClick={() => {
                  setDisplayTask(false);
                  setDisplayTimeline(true);
                  setDisplayGlobalTimeline(false);
                }}
                positive={displayTimeline}
              >
                Timelines (task+event)
              </Button>
              <ButtonOr />
              <Button
                onClick={() => {
                  setDisplayTask(false);
                  setDisplayTimeline(false);
                  setDisplayGlobalTimeline(true);
                }}
                positive={displayGlobalTimeline}
              >
                Global timeline
              </Button>
            </ButtonGroup>
            {displayTask && (
              <div>
                <p>Display all list/task of the selected project</p>
              </div>
            )}
            {displayTimeline && (
              <div>
                <p>Display timeline of the selected project</p>
              </div>
            )}
            {displayGlobalTimeline && (
              <div>
                <p>Display timeline of all projects</p>
              </div>
            )}
          </div>
        }
      />
    </div>
  );
}

export { Home };
