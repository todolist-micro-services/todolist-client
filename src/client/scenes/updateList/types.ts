import { Identifiable, List } from "@core/dto";

interface Props {
  list: Identifiable<List>;
  close(): void;
}

export type { Props };
