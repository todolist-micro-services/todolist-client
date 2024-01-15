import { Identifiable, Task } from "@core/dto";

interface Props {
  task: Identifiable<Task>;
  close(): void;
}

export type { Props };
