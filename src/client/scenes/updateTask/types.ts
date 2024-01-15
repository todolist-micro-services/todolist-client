import { Identifiable, List, Task } from "@core/dto";

interface Props {
  task: Identifiable<Task>;
  lists: Identifiable<List>[];
  close(): void;
}

export type { Props };
