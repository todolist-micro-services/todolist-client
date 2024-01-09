import { SideBar } from "@components/sideBar";
import styles from "./styles.module.scss";
import { Button, ButtonGroup, ButtonOr } from "semantic-ui-react";
import { useState } from "react";

function Home() {
  const [displayTask, setDisplayTask] = useState(true);
  const [displayTimeline, setDisplayTimeline] = useState(false);
  const [displayGlobalTimeline, setDisplayGlobalTimeline] = useState(false);
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
