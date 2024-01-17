import { Identifiable, List, Task } from "@core/dto";

interface Props {
  list: Identifiable<List>;
  tasks: Identifiable<Task>[];
}

export type { Props };
