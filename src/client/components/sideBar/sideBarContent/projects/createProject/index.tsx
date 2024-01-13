import styles from "./styles.module.scss";
import { Icon } from "semantic-ui-react";
import { useWrapperContext } from "@app/wrapper/wrapper.tsx";
import { UseCases } from "@core/reducer/main.ts";

function CreateProject() {
  const { pushView } = useWrapperContext();

  return (
    <div
      className={styles.createProject}
      onClick={() => {
        pushView({ useCase: UseCases.CreateProject, data: {} });
      }}
    >
      <Icon name={"plus"} />
      <p>Create project</p>
    </div>
  );
}

export { CreateProject };
