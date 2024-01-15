import { Identifiable, List, User } from "@core/dto";

interface Props {
  user: User;
  list: Identifiable<List>;
  close(): void;
}

export type { Props };
